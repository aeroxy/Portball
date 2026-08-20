// Player entity: physics circle + sprite with a velocity-driven hop cycle
// (crouched when falling toward ground contact, stretched when rising).

import { Sprite } from 'pixi.js';
import {
  GRAVITY, integrate, resolveWorldBounds, resolveShelf, resolveTerrain, energy, restoreEnergy,
} from './physics.js';

const RADIUS = 12;

// The run's whole energy budget, written as the height the bunny would reach if
// it spent all of it climbing: the ceiling. Collisions only ever redistribute
// this between vertical and horizontal, so this one number is what decides how
// much of the screen the bunny can roam. Dropping it from rest instead — which
// is what the original did — bounds it to its release height forever and puts
// the top third of the screen permanently out of reach.
const APEX_Y = RADIUS;

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

  /** Drop the bunny at (x, y) carrying exactly one run's worth of energy. */
  reset(x, y) {
    this.body.x = x;
    this.body.y = y;
    this.body.vx = 0;
    this.body.vy = Math.sqrt(2 * GRAVITY * Math.max(y - APEX_Y, 0));
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

  update(dt, worldWidth, worldHeight, shelves, bumps) {
    integrate(this.body, dt);

    // The collision pass. It only ever changes direction: every resolver shoves
    // the bunny out of whatever it penetrated, and that shove is free lift, so
    // the energy it entered with is handed back at the end. Left uncorrected it
    // compounds into a bunny moving too fast to play against.
    //
    // Rocks go first, and that order is load-bearing. resolveWorldBounds snaps
    // y and forces vy away from the surface; if it ran first the bunny would
    // already be leaving by the time a rock was tested, the converging guard
    // inside resolveBump would reject the contact, and the terrain would do
    // nothing at all. This way the rock deflects and bounds is the backstop for
    // whatever the rocks missed — safe to run second, because it sign-forces vy
    // rather than negating it, so it's a no-op on a bunny already heading away.
    const e = energy(this.body);
    resolveTerrain(this.body, bumps);
    resolveWorldBounds(this.body, worldWidth, worldHeight);
    for (const shelf of shelves) resolveShelf(this.body, shelf);
    restoreEnergy(this.body, e);

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
