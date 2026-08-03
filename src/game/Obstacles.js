// Spawner + scroller for friend / enemy / shelf, mirroring the original:
// every SPAWN_INTERVAL a random one of the three spawns at the right edge
// at a random height, then scrolls left until off-screen.

import { Container, Sprite } from 'pixi.js';
import { circleOverlap } from './physics.js';

const SCROLL_SPEED = 70; // px/s
const SPAWN_INTERVAL = 1.1; // seconds (original: every ~51 frames)

export class Obstacles {
  constructor(textures, worldWidth, worldHeight) {
    this.textures = textures;
    this.worldWidth = worldWidth;
    this.worldHeight = worldHeight;
    this.container = new Container();
    this.items = []; // { kind, sprite, r | w/h }
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
    this.items.push({ kind, sprite });
  }

  update(dt) {
    this.timer += dt;
    if (this.timer >= SPAWN_INTERVAL) {
      this.timer -= SPAWN_INTERVAL;
      this.spawn();
    }
    for (const item of this.items) item.sprite.x -= SCROLL_SPEED * dt;
    this.items = this.items.filter((item) => {
      if (item.sprite.x < -item.sprite.width) {
        item.sprite.destroy();
        return false;
      }
      return true;
    });
  }

  /** Rects for shelf collision resolution. */
  shelfRects() {
    return this.items
      .filter((i) => i.kind === 'shelf')
      .map((i) => ({ x: i.sprite.x, y: i.sprite.y, w: i.sprite.width, h: i.sprite.height }));
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
