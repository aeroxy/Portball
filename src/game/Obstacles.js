// Spawner + scroller for friend / enemy / shelf, mirroring the original:
// every SPAWN_INTERVAL a random one of the three spawns at the right edge
// at a random height, then scrolls left until off-screen.
//
// Each item draws its own speed, so the field never arrives as one rigid wall —
// items catch up to each other and bump, and the player can't learn a single
// timing that works for everything.

import { Container, Sprite } from 'pixi.js';
import { circleOverlap, rectOverlap } from './physics.js';

const SPEED_MIN = 60; // px/s
const SPEED_MAX = 70;

// The play plane's frame, which gates ride. It's the midpoint of the item
// spread rather than either end: a gate then drifts at most half the spread
// against any item, in whichever direction, instead of always losing ground to
// the whole spread.
export const SCROLL_SPEED = (SPEED_MIN + SPEED_MAX) / 2;

const SPAWN_INTERVAL = 1.1; // seconds (original: every ~51 frames)

// Item-vs-item contact uses full sprite bounds, not the inscribed circle the
// gate sensor uses: a ledge is much wider than it is tall, and a circle sized
// to its height would let a carrot pass straight through its ends.
const bounds = (sprite) => ({ x: sprite.x, y: sprite.y, w: sprite.width, h: sprite.height });

export class Obstacles {
  constructor(textures, worldWidth, worldHeight) {
    this.textures = textures;
    this.worldWidth = worldWidth;
    this.worldHeight = worldHeight;
    this.container = new Container();
    this.items = []; // { kind, sprite, speed }
    this.timer = 0;
  }

  reset() {
    for (const item of this.items) item.sprite.destroy();
    this.items = [];
    this.container.removeChildren();
    this.timer = 0;
  }

  spawn() {
    const r = Math.floor(Math.random() * 3);
    const kind = r === 0 ? 'friend' : r === 1 ? 'enemy' : 'shelf';
    const sprite = new Sprite(this.textures[kind]);
    sprite.anchor.set(0.5);
    const margin = Math.max(sprite.height, 24);
    sprite.x = this.worldWidth + sprite.width / 2;
    sprite.y = margin + Math.random() * (this.worldHeight - margin * 2);
    this.container.addChild(sprite);
    this.items.push({ kind, sprite, speed: SPEED_MIN + Math.random() * (SPEED_MAX - SPEED_MIN) });
  }

  update(dt) {
    this.timer += dt;
    if (this.timer >= SPAWN_INTERVAL) {
      this.timer -= SPAWN_INTERVAL;
      this.spawn();
    }
    for (const item of this.items) item.sprite.x -= item.speed * dt;
    this.resolveBumps();
    this.items = this.items.filter((item) => {
      if (item.sprite.x < -item.sprite.width) {
        item.sprite.destroy();
        return false;
      }
      return true;
    });
  }

  /**
   * Item-vs-item bumps. Everything here travels along -x only, so any contact
   * is a rear-end between equal masses in one dimension, and the elastic result
   * is an exact exchange of speeds. That also resolves itself: the item in
   * front leaves with the higher speed, so the pair separates instead of
   * grinding along together.
   *
   * The guard matters. Overlap alone doesn't mean two items are converging — a
   * pair can be overlapping *while separating* (they were just swapped, or they
   * spawned on top of each other). Swapping those would push them back
   * together and they'd never come apart. Only the case where the trailing
   * item — the one at greater x — is the faster one is an actual collision.
   */
  resolveBumps() {
    for (let i = 0; i < this.items.length; i++) {
      for (let j = i + 1; j < this.items.length; j++) {
        const a = this.items[i];
        const b = this.items[j];
        if (!rectOverlap(bounds(a.sprite), bounds(b.sprite))) continue;

        const trail = a.sprite.x >= b.sprite.x ? a : b;
        const lead = trail === a ? b : a;
        if (trail.speed <= lead.speed) continue;

        [trail.speed, lead.speed] = [lead.speed, trail.speed];

        // Closing speeds are tiny (both items move the same way, so at most
        // SPEED_MAX - SPEED_MIN between them), which means overlap from motion
        // is sub-pixel. Items that *spawn* on top of each other — two wide
        // ledges back to back — can start deeply merged though, so split the
        // penetration between them rather than waiting for the speed
        // difference to tease them apart over several seconds.
        const gap = (a.sprite.width + b.sprite.width) / 2 - Math.abs(a.sprite.x - b.sprite.x);
        if (gap > 0) {
          trail.sprite.x += gap / 2;
          lead.sprite.x -= gap / 2;
        }
      }
    }
  }

  /** Rects for shelf collision resolution. */
  shelfRects() {
    return this.items
      .filter((i) => i.kind === 'shelf')
      .map((i) => ({ x: i.sprite.x, y: i.sprite.y, w: i.sprite.width, h: i.sprite.height }));
  }

  /**
   * Offer each obstacle to an open gate. `tryWarp(body)` returns a destination
   * when that body is taking the portal, or null. The first one through closes
   * the gate, so later items in the loop simply get null back.
   *
   * The sensor uses the sprite's *smaller* half-dimension so a wide ledge has
   * to pass its core over the gate rather than clipping it from a body-length
   * away.
   */
  checkWarp(tryWarp) {
    for (const item of this.items) {
      const r = Math.min(item.sprite.width, item.sprite.height) / 2;
      const dest = tryWarp({ x: item.sprite.x, y: item.sprite.y, r });
      if (dest) {
        item.sprite.x = dest.x;
        item.sprite.y = dest.y;
        return true;
      }
    }
    return false;
  }

  /**
   * Sensor pass: removes touched friends. Returns { collected, hitEnemy }.
   */
  checkContacts(body) {
    let collected = 0;
    let hitEnemy = false;
    this.items = this.items.filter((item) => {
      if (item.kind === 'shelf') return true;
      const circle = { x: item.sprite.x, y: item.sprite.y, r: item.sprite.width / 2 };
      if (!circleOverlap(body, circle)) return true;
      if (item.kind === 'friend') {
        collected++;
        item.sprite.destroy();
        return false;
      }
      hitEnemy = true;
      return true;
    });
    return { collected, hitEnemy };
  }
}
