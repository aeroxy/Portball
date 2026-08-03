# Portball

A bunny hops through portals it can't stop making. Tap to drop a pair of
checkpoint gates anywhere on screen, and the bunny warps from one to the other
mid-bounce — collect golden carrots, dodge the thorn balls, and use the mossy
ledges to keep yourself airborne. Originally a 2014 Objective-C/SpriteKit
prototype by Aero + Quincy that never got past "the ball moves"; rebuilt for the
web with an actual game loop and entirely new art.

**Play it: <https://aero.oops.wtf/p/portball>**

## Controls

One input, three states. Tap or click to place the mint gate **A**; tap again to
place the coral gate **B**, which arms the pair; a third tap clears both. While a
pair is armed, the bunny touching **A** warps it to **B**.

Carrots score a point. Thorn balls end the run. Ledges are solid and bouncy.

## Stack

- **[Vite](https://vite.dev)** — dev server and build. No framework.
- **[PixiJS v8](https://pixijs.com)** on **WebGPU**, falling back to WebGL where
  WebGPU is unavailable. Rendered at a native 480×270 and integer-scaled up with
  nearest-neighbour sampling, so the pixels stay square.
- **`pixi-filters`** for the CRT scanlines, gate glow, and the chromatic split
  that fires on a warp.
- **No physics engine.** [src/game/physics.js](src/game/physics.js) is about a
  hundred lines: gravity integration, elastic reflection off the world bounds and
  ledge rectangles, and circle overlap tests for the sensors. One bouncing circle
  does not justify pulling in Matter.js or Rapier.

## Local development

```bash
bun install
bun run dev
```

The leaderboard is inert locally, and that is expected — see *Architecture*
below. Everything else (physics, portals, scoring, restart) works exactly as it
does in production; the game-over panel just shows "leaderboard offline".

## Art

Sprites live in [src/art/sprites/](src/art/sprites/) as small PNGs — 32×32 for
the bunny, 48×48 for the gates — and are imported as modules so Vite can hash
them (see *Architecture*). Anything that fails to load falls back to a
procedural palette-grid sprite from
[src/art/pixelSprites.js](src/art/pixelSprites.js), so a missing file degrades
into placeholder art instead of an empty screen.

The background is not a seamless tile.
[src/game/Background.js](src/game/Background.js) mirrors alternate copies, so
adjoining edges match by construction and the art never has to loop cleanly on
its own. It is also tinted down at runtime, which is what keeps the bunny and
the ledges readable against a busy nebula.

## Architecture

Three pieces, and the first one explains the other two.

**The game is hosted as an Aero page** at `/p/portball`. That is not incidental:
the AeroDB browser client sends every request with `credentials: 'same-origin'`.
There is no API key and no CORS path, so the leaderboard only works when the game
is served from `aero.oops.wtf` itself. Moving the game to a different host — even
one that could reach the same API — silently breaks it.

**Assets come from jsDelivr.** Because the Aero page is a single HTML document,
the payload lives on the CDN instead:

```
https://cdn.jsdelivr.net/gh/aeroxy/Portball/dist/
```

[vite.config.js](vite.config.js) sets that as `base` for builds and `/` for dev,
so the same source works in both. Sprites are `import`ed rather than parked in a
`public/` folder, which is what lets Vite content-hash them and rewrite their
URLs against that base — the hash in a filename is its version, so nothing ever
needs cache-busting. Note the URL carries no `@ref`: a file that hasn't been
pushed yet should 404 loudly rather than resolve to some older commit.

**The leaderboard is AeroDB.** One table, `scores`, on the `portball` page:

| flag | value | effect |
|---|---|---|
| `read_access` | `public` | anyone sees the top 10, signed in or not |
| `write_access` | `authed-own` | only signed-in Aero users, and only their own row |

The document id *is* the player's handle (`^[a-z0-9]{3,16}$`). That one choice
gets handle uniqueness for free — the id is a primary key, so a taken handle is a
403 rather than something the client has to police — and it keeps emails off the
public board entirely. Personal best is mirrored into `localStorage` so it still
renders when signed out. [src/net/leaderboard.js](src/net/leaderboard.js) is the
only file that talks to the API.

## Deploy

```bash
./scripts/deploy.sh
```

Builds, pushes `dist/` to GitHub, then publishes `dist/index.html` as the Aero
page — **in that order**, because the page HTML references hashed asset URLs that
jsDelivr reads out of this repo. Publishing the page first points it at files
that don't exist yet.

Publishing needs an Aero personal access token — mint one at
<https://aero.oops.wtf/connect>, then:

```bash
cp .env.example .env    # then fill in AERO_TOKEN
```

`.env` is gitignored. The script also accepts `AERO_TOKEN` straight from the
environment if you'd rather not keep a file.

## Layout

| Path | What's in it |
|---|---|
| [src/main.js](src/main.js) | Boot, ticker, input, and the wiring between everything below |
| [src/game/](src/game/) | Bunny, portals, obstacles, background, physics, HUD, game-over panel |
| [src/art/](src/art/) | Texture loading, GPU effects, procedural fallback sprites, and `sprites/` |
| [src/net/](src/net/) | AeroDB leaderboard client |
| [scripts/](scripts/) | `deploy.sh` |
