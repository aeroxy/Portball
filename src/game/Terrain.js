// Rocks on the floor and ceiling: occasional bounce-breakers, drawn as
// procedural stone rather than sprites so every rock can take its own radius.
//
// This exists to spoil a launcher exploit. resolveWorldBounds reflects vy and
// leaves vx alone, so a bunny warped to the left edge with vx = 0 oscillates
// dead vertically forever — never drifting, and a full screen-width of warning
// away from anything that could threaten it. A curved contact surface turns
// that fall into a diagonal, and because terrain is not an object it can't be
// teleported out of the way.
//
// Rocks arrive as *events*, not as a surface: a couple on screen at most, with
// long clean stretches between them. Paving both surfaces end to end also works
// and kills the exploit outright, but it deflects nearly every bounce, and a
// bunny that is always being turned crosses far more of the screen than one
// that mostly falls straight — which roughly halves how long a run lasts. The
// flat stretches are the playable part; the rocks only have to be frequent
// enough that camping one spot can't be relied on.

import { Container, Graphics } from 'pixi.js';
import { SCROLL_SPEED } from './Obstacles.js';

const ROCK_R = [14, 26];
const ROCK_RISE = [9, 16]; // px of rock standing proud of the world bound

// How far into the play area terrain can reach. Obstacles.spawn() keeps carrots
// and thorn balls clear of this, so nothing ever spawns embedded in a rock — a
// carrot inside a boulder is uncollectable and a thorn ball buried in the floor
// is an unfair death, which is the worst way to make a game feel hard.
export const MAX_RISE = ROCK_RISE[1];

// At most this many rocks anywhere on either surface at once.
const MAX_ON_SCREEN = 2;

// Seconds between arrivals. A rock takes about seven seconds to cross at
// SCROLL_SPEED, so this spacing leaves the screen usually holding one and
// briefly two, with real gaps of clean floor in between.
const SPAWN_GAP = [4, 9];

// Dark body, bright rim, and the rim is deliberately only a couple of pixels.
// The backdrop scrolls between near-black and mid-teal, so a rock coloured to
// sit against one half disappears into the other — a dark rock vanishes on the
// dark stretches, and a uniformly light one reads as pale foam laid over the
// art. A thin bright edge is high local contrast against anything, and stays an
// edge rather than becoming a lit sphere. Rocks are rare enough now that the
// player has to be able to spot one coming, so this is legibility, not polish.
const STONE = 0x1a1330;
const STONE_RIM = 0x8892b8;
const RIM_PX = 2;

const rand = ([lo, hi]) => lo + Math.random() * (hi - lo);

/** Half-width of the cap a rock of radius r shows when it stands `rise` proud. */
const halfFoot = (r, rise) => Math.sqrt(Math.max(2 * r * rise - rise * rise, 1));

export class Terrain {
  constructor(worldWidth, worldHeight) {
    this.worldWidth = worldWidth;
    this.worldHeight = worldHeight;
    this.container = new Container();
    this.rocks = [];
    this.timer = rand(SPAWN_GAP);
  }

  reset() {
    for (const rock of this.rocks) rock.gfx.destroy();
    this.rocks = [];
    this.container.removeChildren();
    // Open on clean ground rather than dropping the bunny straight onto a rock.
    this.timer = rand(SPAWN_GAP);
  }

  /** One rock, on a random surface, entering from off-screen right. */
  spawn() {
    const side = Math.random() < 0.5 ? -1 : 1;
    const r = rand(ROCK_R);
    const rise = rand(ROCK_RISE);
    // Bury it: the centre sits (r - rise) outside the world bound, so only the
    // cap is in play. side is the outward direction of that cap along y.
    const bound = side < 0 ? this.worldHeight : 0;
    const y = bound - side * (r - rise);

    const gfx = new Graphics();
    // A rim disc with the dark body punched back over it, shifted *away* from
    // the exposed cap so the rim survives thickest along the edge the bunny
    // actually lands on and thins to nothing on the buried side.
    gfx.circle(0, 0, r).fill(STONE_RIM);
    gfx.circle(0, -side * RIM_PX, r - RIM_PX).fill(STONE);
    gfx.y = y;
    this.container.addChild(gfx);

    const foot = halfFoot(r, rise);
    const x = this.worldWidth + foot;
    gfx.x = x;
    this.rocks.push({ x, y, r, side, foot, gfx });
  }

  /**
   * Scroll at the obstacles' SCROLL_SPEED, not the background's: terrain is the
   * play plane, the same one the gates ride.
   *
   * The timer runs whether or not the screen is full, but a spawn is skipped
   * when it is — so a backlog can't build up and dump two rocks out together
   * the moment one leaves.
   */
  update(dt) {
    const step = SCROLL_SPEED * dt;
    for (const rock of this.rocks) {
      rock.x -= step;
      rock.gfx.x = rock.x;
    }
    this.rocks = this.rocks.filter((rock) => {
      if (rock.x + rock.foot > -8) return true;
      rock.gfx.destroy();
      return false;
    });

    this.timer -= dt;
    if (this.timer <= 0) {
      this.timer = rand(SPAWN_GAP);
      if (this.rocks.length < MAX_ON_SCREEN) this.spawn();
    }
  }

  /** Live rocks, for the bunny's collision pass. */
  bumps() {
    return this.rocks;
  }
}
