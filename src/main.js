// Portball web remake — PixiJS v8 on WebGPU (WebGL fallback).
// Native 480x270 pixel canvas, scaled up uniformly with nearest-neighbor.

import { Application, Container } from 'pixi.js';
import { loadTextures } from './art/loadTextures.js';
import { makeStageFilters, makePortalGlow, EffectDriver } from './art/effects.js';
import { Background } from './game/Background.js';
import { Bunny } from './game/Bunny.js';
import { Obstacles } from './game/Obstacles.js';
import { Portals } from './game/Portals.js';
import { Hud } from './game/Hud.js';
import { GameOverPanel } from './game/GameOverPanel.js';
import { initFullscreen } from './fullscreen.js';

const WIDTH = 480;
const HEIGHT = 270;

const app = new Application();
await app.init({
  preference: 'webgpu',
  width: WIDTH,
  height: HEIGHT,
  background: '#0b0716',
  antialias: false,
  autoDensity: false,
  resolution: 1,
});
document.body.appendChild(app.canvas);
console.log(`renderer: ${app.renderer.name}`);

// Scale up to fill the window (uniform, so no distortion — on a 16:9 screen
// it's edge-to-edge), crisp via CSS image-rendering: pixelated.
function fitCanvas() {
  const scale = Math.min(innerWidth / WIDTH, innerHeight / HEIGHT);
  app.canvas.style.width = `${WIDTH * scale}px`;
  app.canvas.style.height = `${HEIGHT * scale}px`;
}
fitCanvas();
addEventListener('resize', fitCanvas);
addEventListener('orientationchange', fitCanvas);
initFullscreen(fitCanvas);

const textures = await loadTextures();

const world = new Container();
app.stage.addChild(world);

const background = new Background(textures.background, WIDTH, HEIGHT);
const obstacles = new Obstacles(textures, WIDTH, HEIGHT);
const portals = new Portals(textures, WIDTH);
const bunny = new Bunny(textures);
world.addChild(background.container, obstacles.container, portals.container, bunny.sprite);

const stageFilters = makeStageFilters();
world.filters = stageFilters.list;
portals.container.filters = [makePortalGlow()];
const effects = new EffectDriver(stageFilters);

let score = 0;
let alive = true;

const hud = new Hud();
app.stage.addChild(hud.container);
const gameOver = new GameOverPanel(restart);

function restart() {
  score = 0;
  alive = true;
  hud.setScore(0);
  obstacles.reset();
  portals.reset();
  bunny.reset(60, 120);
}

bunny.reset(60, 120);

app.stage.eventMode = 'static';
app.stage.hitArea = app.screen;
app.stage.on('pointerdown', (e) => {
  if (!alive) return;
  const p = e.getLocalPosition(app.stage);
  portals.tap(p.x, p.y);
});

app.ticker.add((ticker) => {
  const dt = Math.min(ticker.deltaMS / 1000, 1 / 20);
  effects.update(dt);
  if (!alive) return;

  background.update(dt);
  // Gates drift with the backdrop, so they update alongside it — and freeze
  // with the rest of the scene on game over.
  portals.update(dt);
  obstacles.update(dt);
  bunny.update(dt, WIDTH, HEIGHT, obstacles.shelfRects());

  // A gate takes whatever reaches it first and closes behind it. The bunny is
  // offered first so the player wins a tie against a drifting obstacle.
  const dest = portals.checkWarp(bunny.body);
  if (dest) {
    bunny.teleport(dest.x, dest.y);
    effects.triggerWarp();
  } else if (obstacles.checkWarp((body) => portals.checkWarp(body))) {
    effects.triggerWarp();
  }

  const { collected, hitEnemy } = obstacles.checkContacts(bunny.body);
  if (collected > 0) {
    score += collected;
    hud.setScore(score);
  }
  if (hitEnemy) {
    alive = false;
    gameOver.show(score, 'a thorn ball got you');
  } else if (bunny.stalled) {
    alive = false;
    gameOver.show(score, 'the bunny stopped bouncing');
  }
});
