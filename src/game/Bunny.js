// Player entity: physics circle + sprite with a velocity-driven hop cycle
// (crouched when falling toward ground contact, stretched when rising).

import { Sprite } from 'pixi.js';
import { integrate, resolveWorldBounds, resolveShelf } from './physics.js';

const RADIUS = 12;

export class Bunny {
  constructor(textures) {
    this.textures = textures;
    this.body = { x: 0, y: 0, vx: 0, vy: 0, r: RADIUS };
    this.sprite = new Sprite(textures.bunny);
    this.sprite.anchor.set(0.5);
  }

  reset(x, y) {
    this.body.x = x;
    this.body.y = y;
    this.body.vx = 0;
    this.body.vy = 0;
  }

  teleport(x, y) {
    this.body.x = x;
    this.body.y = y;
    this.body.vx = 0;
    this.body.vy = 0;
  }

  update(dt, worldWidth, worldHeight, shelves) {
    integrate(this.body, dt);
    resolveWorldBounds(this.body, worldWidth, worldHeight);
    for (const shelf of shelves) resolveShelf(this.body, shelf);

    // Hop frame from vertical velocity: rising → stretched, falling fast →
    // crouched (about to land), else idle.
    if (this.body.vy < -60) this.sprite.texture = this.textures.bunny_hop2;
    else if (this.body.vy > 220) this.sprite.texture = this.textures.bunny_hop1;
    else this.sprite.texture = this.textures.bunny;

    this.sprite.position.set(this.body.x, this.body.y);
  }
}
