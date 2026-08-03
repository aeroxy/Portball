// In-game score readout, drawn in native pixels. The game-over screen is DOM
// instead — see GameOverPanel.js.

import { Container, Text } from 'pixi.js';

export class Hud {
  constructor() {
    this.container = new Container();
    this.scoreText = new Text({
      text: 'SCORE 0',
      style: { fontFamily: 'monospace', fontSize: 12, fill: 0xf2ecff },
    });
    this.scoreText.position.set(6, 4);
    this.container.addChild(this.scoreText);
  }

  setScore(score) {
    this.scoreText.text = `SCORE ${score}`;
  }
}
