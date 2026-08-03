// Checkpoint-gate portal pair. 1st tap places gate A, 2nd tap places gate B
// (arms the warp), 3rd tap clears both. Whatever reaches an armed gate A first
// — bunny, carrot, thorn ball, ledge — comes out at gate B and closes the pair.
//
// An unpaired gate A expires on its own after SOLO_TIMEOUT so a stray tap
// doesn't leave a gate sitting on the field indefinitely.

import { Container, Sprite } from 'pixi.js';
import { circleOverlap } from './physics.js';

const GATE_RADIUS = 18;
const SOLO_TIMEOUT = 3; // seconds gate A survives without a gate B
const SOLO_MIN_ALPHA = 0.15; // how faint it gets just before it goes
const SOLO_MIN_SCALE = 0.4; // how small it collapses to

export class Portals {
  constructor(textures) {
    this.textures = textures;
    this.container = new Container();
    this.gateA = null;
    this.gateB = null;
    this.pulse = 0;
    this.soloAge = 0;
  }

  reset() {
    this.container.removeChildren();
    this.gateA = null;
    this.gateB = null;
    this.soloAge = 0;
  }

  tap(x, y) {
    if (!this.gateA) {
      this.gateA = this.makeGate('gate_a', x, y);
      this.soloAge = 0;
    } else if (!this.gateB) {
      this.gateB = this.makeGate('gate_b', x, y);
      // A may have been mid-fade; pairing it makes it solid again.
      this.gateA.alpha = 1;
      this.soloAge = 0;
    } else {
      this.reset();
    }
  }

  makeGate(name, x, y) {
    const sprite = new Sprite(this.textures[name]);
    sprite.anchor.set(0.5);
    sprite.position.set(x, y);
    this.container.addChild(sprite);
    return sprite;
  }

  /** Warp check; returns the destination point or null. */
  checkWarp(body) {
    if (!this.gateA || !this.gateB) return null;
    const gate = { x: this.gateA.x, y: this.gateA.y, r: GATE_RADIUS };
    if (!circleOverlap(body, gate)) return null;
    const dest = { x: this.gateB.x, y: this.gateB.y };
    this.reset();
    return dest;
  }

  update(dt) {
    // A gate with no partner is on a clock — fade it out over the last second
    // so it reads as expiring rather than vanishing.
    // It fades AND shrinks across the whole unpaired window, so "this is about
    // to close" is readable at a glance rather than only in the last moment.
    let soloScale = 1;
    if (this.gateA && !this.gateB) {
      this.soloAge += dt;
      if (this.soloAge >= SOLO_TIMEOUT) {
        this.reset();
        return;
      }
      const spent = this.soloAge / SOLO_TIMEOUT; // 0 → 1
      this.gateA.alpha = 1 - (1 - SOLO_MIN_ALPHA) * spent;
      soloScale = 1 - (1 - SOLO_MIN_SCALE) * spent;
    }

    // Armed gates pulse gently so they read as "live" checkpoints.
    this.pulse += dt * 4;
    const s = this.gateB ? 1 + Math.sin(this.pulse) * 0.08 : 1;
    if (this.gateA) this.gateA.scale.set(s * soloScale);
    if (this.gateB) this.gateB.scale.set(s);
  }
}
