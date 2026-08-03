import { defineConfig } from 'vite';

// Built assets are served from jsDelivr, which reads the repo's default branch.
// No `@ref`: a missing file should 404 rather than resolve to a stale commit.
// Vite content-hashes everything under this base, so the filenames are the
// version — see README "Architecture".
const CDN = 'https://cdn.jsdelivr.net/gh/aeroxy/Portball/dist/';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? CDN : '/',
  build: {
    // Emit every sprite as a real file. Vite would otherwise inline the ones
    // under 4 KB as data URIs, which the dev server never does — so the built
    // game would load its textures through a path local testing never covers.
    assetsInlineLimit: 0,
  },
}));
