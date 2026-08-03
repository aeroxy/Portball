// Sprite textures. The PNGs are imported rather than served from public/ so
// Vite content-hashes them and rewrites the URLs against `base` — the jsDelivr
// CDN in a production build. Anything that fails to load falls back to a
// procedural palette-grid sprite so the game still runs.

import { Assets } from 'pixi.js';
import { fallbackTexture } from './pixelSprites.js';

import backgroundUrl from './sprites/background.png';
import bunnyUrl from './sprites/bunny.png';
import bunnyHop1Url from './sprites/bunny_hop1.png';
import bunnyHop2Url from './sprites/bunny_hop2.png';
import enemyUrl from './sprites/enemy.png';
import friendUrl from './sprites/friend.png';
import gateAUrl from './sprites/gate_a.png';
import gateBUrl from './sprites/gate_b.png';
import shelfUrl from './sprites/shelf.png';

const SOURCES = {
  background: backgroundUrl,
  bunny: bunnyUrl,
  bunny_hop1: bunnyHop1Url,
  bunny_hop2: bunnyHop2Url,
  enemy: enemyUrl,
  friend: friendUrl,
  gate_a: gateAUrl,
  gate_b: gateBUrl,
  shelf: shelfUrl,
};

export async function loadTextures() {
  const textures = {};
  await Promise.all(Object.entries(SOURCES).map(async ([name, url]) => {
    try {
      const tex = await Assets.load(url);
      tex.source.scaleMode = 'nearest';
      textures[name] = tex;
    } catch {
      console.warn(`${name} failed to load from ${url} — using procedural fallback`);
      textures[name] = fallbackTexture(name);
    }
  }));
  return textures;
}
