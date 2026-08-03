// Checkpoint-gate portal pair, same state machine as the original portals::
// 1st tap places gate A, 2nd tap places gate B (arms the warp), 3rd tap
// clears both. Bunny touching gate A while armed teleports to gate B.

import { Container, Sprite } from 'pixi.js';
import { circleOverlap } from './physics.js';

const GATE_RADIUS = 18;

export class Portals {
  constructor(textures) {
    this.textures = textures;
    this.container = new Container();
    this.gateA = null;
    this.gateB = null;
    this.pulse = 0;
  }

  reset() {
    this.container.removeChildren();
    this.gateA = null;
    this.gateB = null;
  }

  tap(x, y) {
    if (!this.gateA) {
      this.gateA = this.makeGate('gate_a', x, y);
    } else if (!this.gateB) {
      this.gateB = this.makeGate('gate_b', x, y);
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
    // Armed gates pulse gently so they read as "live" checkpoints.
    this.pulse += dt * 4;
    const s = this.gateB ? 1 + Math.sin(this.pulse) * 0.08 : 1;
    if (this.gateA) this.gateA.scale.set(s);
    if (this.gateB) this.gateB.scale.set(s);
  }
}
