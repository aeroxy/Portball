// Player entity: physics circle + sprite with a velocity-driven hop cycle
// (crouched when falling toward ground contact, stretched when rising).

import { Sprite } from 'pixi.js';
import { integrate, resolveWorldBounds, resolveShelf } from './physics.js';

const RADIUS = 12;

// A bunny that has stopped bouncing is a dead run. Speed is checked over a
// window rather than instantaneously because a healthy bounce passes through
// ~0 at the top of every arc — one frame of stillness is an apex, a second and
// a half of it means the bunny has settled.
const STALL_SPEED = 40; // px/s
const STALL_TIMEOUT = 1.5; // s below STALL_SPEED before the run ends

export class Bunny {
  constructor(textures) {
    this.textures = textures;
    this.body = { x: 0, y: 0, vx: 0, vy: 0, r: RADIUS };
    this.sprite = new Sprite(textures.bunny);
    this.sprite.anchor.set(0.5);
    this.idleTime = 0;
  }

  /** True once the bunny has been essentially motionless for STALL_TIMEOUT. */
  get stalled() {
    return this.idleTime >= STALL_TIMEOUT;
  }

  reset(x, y) {
    this.body.x = x;
    this.body.y = y;
    this.body.vx = 0;
    this.body.vy = 0;
    // A fresh bunny is dropped from rest; don't count that against it.
    this.idleTime = 0;
  }

  /**
   * Move through a portal. Velocity carries over untouched — a gate relocates
   * the bunny, it doesn't stop it. Zeroing here made every warp dump the bunny
   * into a dead fall, throwing away whatever bounce got it to the gate.
   */
  teleport(x, y) {
    this.body.x = x;
    this.body.y = y;
  }

  update(dt, worldWidth, worldHeight, shelves) {
    integrate(this.body, dt);
    resolveWorldBounds(this.body, worldWidth, worldHeight);
    for (const shelf of shelves) resolveShelf(this.body, shelf);

    const speed = Math.hypot(this.body.vx, this.body.vy);
    this.idleTime = speed > STALL_SPEED ? 0 : this.idleTime + dt;

    // Hop frame from vertical velocity: rising → stretched, falling fast →
    // crouched (about to land), else idle.
    if (this.body.vy < -60) this.sprite.texture = this.textures.bunny_hop2;
    else if (this.body.vy > 220) this.sprite.texture = this.textures.bunny_hop1;
    else this.sprite.texture = this.textures.bunny;

    this.sprite.position.set(this.body.x, this.body.y);
  }
}
