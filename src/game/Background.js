// Endless horizontally-scrolling tiled background (two copies leapfrogging,
// same as the original moveBG).

import { Container, Sprite } from 'pixi.js';

const BG_SPEED = 30; // px/s at native resolution

export class Background {
  constructor(texture, width, height) {
    this.container = new Container();
    this.width = width;
    this.tiles = [];
    for (let i = 0; i < 2; i++) {
      const tile = new Sprite(texture);
      tile.width = width;
      tile.height = height;
      // Knock the nebula back so the sprites stay readable against it.
      tile.tint = 0x6e6e8f;
      // Mirror every other tile so adjoining edges always match, even when
      // the art's own left/right edges don't tile perfectly.
      tile.anchor.x = i % 2;
      tile.scale.x *= i % 2 ? -1 : 1;
      tile.x = i * width;
      this.container.addChild(tile);
      this.tiles.push(tile);
    }
  }

  update(dt) {
    for (const tile of this.tiles) {
      tile.x -= BG_SPEED * dt;
      if (tile.x <= -this.width) tile.x += this.width * 2;
    }
  }
}
