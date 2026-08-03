// Procedural palette-grid fallback sprites, used for any asset whose
// generated PNG is missing from /art. Each sprite is a small grid of
// palette indices rasterized to a canvas texture at native size.

import { Texture } from 'pixi.js';

const PALETTES = {
  bunny: [null, '#f2ecff', '#c9b8f0', '#2b1d4f', '#ff9db0'],
  gate_a: [null, '#7dfcc6', '#2ee6a8', '#0d3b2e', '#eafff5'],
  gate_b: [null, '#ffb27d', '#ff7a4d', '#4d1c0d', '#fff2ea'],
  friend: [null, '#ffd75e', '#ffaa2b', '#7a4a00'],
  enemy: [null, '#5a2d7a', '#3a1552', '#ff3b3b'],
  shelf: [null, '#5e6b7a', '#7d8fa3', '#3fbf9f', '#2b3440'],
};

const GRIDS = {
  bunny: [
    '0001100110000000',
    '0011211210000000',
    '0012211220000000',
    '0012211220000000',
    '0011111110000000',
    '0111111111000000',
    '1111311311100000',
    '1111111111110000',
    '1114111111111000',
    '0111111111111100',
    '0011111111111110',
    '0001111111111110',
    '0000111111111100',
    '0000011221122000',
    '0000001100110000',
    '0000000000000000',
  ],
  gate_a: [
    '0000111111110000',
    '0011222222221100',
    '0122333333332210',
    '1223344444433221',
    '1233444444443321',
    '1234444334444321',
    '1234443003444321',
    '1234430000344321',
    '1234430000344321',
    '1234443003444321',
    '1234444334444321',
    '1233444444443321',
    '1223344444433221',
    '0122333333332210',
    '0011222222221100',
    '0000111111110000',
  ],
  friend: [
    '0000110000',
    '0001221000',
    '0012332100',
    '0123333210',
    '1233333321',
    '1233333321',
    '0123333210',
    '0012332100',
    '0001221000',
    '0000110000',
  ],
  enemy: [
    '0010000100',
    '0121001210',
    '0112111210',
    '1122222211',
    '1231221321',
    '1231221321',
    '1122222211',
    '0112111210',
    '0121001210',
    '0010000100',
  ],
  shelf: [
    '333333333333333333333333',
    '111111111111111111111111',
    '122222222222222222222221',
    '124444444444444444444421',
    '112222222222222222222211',
    '011111111111111111111110',
  ],
};
GRIDS.gate_b = GRIDS.gate_a;
GRIDS.bunny_hop1 = GRIDS.bunny;
GRIDS.bunny_hop2 = GRIDS.bunny;
PALETTES.bunny_hop1 = PALETTES.bunny;
PALETTES.bunny_hop2 = PALETTES.bunny;

export function fallbackTexture(name) {
  const grid = GRIDS[name];
  const palette = PALETTES[name];
  if (!grid || !palette) return makeBackgroundTexture();

  const h = grid.length, w = grid[0].length;
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const color = palette[Number(grid[y][x])];
      if (!color) continue;
      ctx.fillStyle = color;
      ctx.fillRect(x, y, 1, 1);
    }
  }
  const tex = Texture.from(canvas);
  tex.source.scaleMode = 'nearest';
  return tex;
}

function makeBackgroundTexture() {
  const w = 480, h = 270;
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, '#0b0716');
  grad.addColorStop(0.7, '#1a1033');
  grad.addColorStop(1, '#241c47');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);
  // deterministic star field (no seams: keep stars off the tile edges)
  let seed = 42;
  const rand = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (let i = 0; i < 120; i++) {
    const x = 2 + Math.floor(rand() * (w - 4));
    const y = Math.floor(rand() * (h - 30));
    ctx.fillStyle = rand() > 0.8 ? '#9fe8dd' : '#e8e2ff';
    ctx.globalAlpha = 0.3 + rand() * 0.7;
    ctx.fillRect(x, y, 1, 1);
  }
  ctx.globalAlpha = 1;
  const tex = Texture.from(canvas);
  tex.source.scaleMode = 'nearest';
  return tex;
}
