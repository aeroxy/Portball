// GPU effect layer: subtle CRT scanlines over the whole stage, glow on the
// portal gates, and a short chromatic flash burst on warp.

import { CRTFilter, GlowFilter, RGBSplitFilter } from 'pixi-filters';

export function makeStageFilters() {
  const crt = new CRTFilter({
    lineWidth: 0.6,
    lineContrast: 0.12,
    noise: 0.04,
    vignetting: 0.22,
    vignettingAlpha: 0.6,
  });
  const rgbSplit = new RGBSplitFilter({ red: { x: 0, y: 0 }, green: { x: 0, y: 0 }, blue: { x: 0, y: 0 } });
  return { crt, rgbSplit, list: [crt, rgbSplit] };
}

export function makePortalGlow() {
  return new GlowFilter({ distance: 8, outerStrength: 1.6, color: 0x7dfcc6, quality: 0.3 });
}

/**
 * Drives the per-frame effect state. Call update(dt) every tick and
 * triggerWarp() when the bunny teleports.
 */
export class EffectDriver {
  constructor(stageFilters) {
    this.filters = stageFilters;
    this.time = 0;
    this.warpFlash = 0;
  }

  triggerWarp() {
    this.warpFlash = 1;
  }

  update(dt) {
    this.time += dt;
    this.filters.crt.time = this.time * 4;
    this.filters.crt.seed = Math.random();

    // Chromatic split burst that decays right after a warp.
    this.warpFlash = Math.max(0, this.warpFlash - dt * 3);
    const k = this.warpFlash ** 2 * 6;
    this.filters.rgbSplit.red = { x: -k, y: 0 };
    this.filters.rgbSplit.blue = { x: k, y: 0 };
  }
}
