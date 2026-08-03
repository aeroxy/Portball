// Fullscreen toggle. Mostly a mobile affordance: at 480x270 the canvas is
// letterboxed into a sliver of a portrait phone viewport, and browser chrome
// takes another bite.
//
// The button stays hidden unless the Fullscreen API is really usable. iPhone
// Safari implements it for <video> only, so `requestFullscreen` is missing on
// regular elements there and the button would be dead on exactly the devices
// that need it most — those users get the "turn your device sideways" hint and
// Add to Home Screen instead.

const target = document.documentElement;

function supported() {
  return !!(target.requestFullscreen || target.webkitRequestFullscreen);
}

function isFullscreen() {
  return !!(document.fullscreenElement || document.webkitFullscreenElement);
}

async function enter() {
  const req = target.requestFullscreen ?? target.webkitRequestFullscreen;
  await req.call(target, { navigationUI: 'hide' });
  // Landscape is the playable orientation. Android honours this; everywhere
  // else it rejects and the rotate hint covers us.
  try {
    await screen.orientation?.lock?.('landscape');
  } catch {
    /* not supported or refused — not worth surfacing */
  }
}

async function exit() {
  try {
    screen.orientation?.unlock?.();
  } catch {
    /* see above */
  }
  const req = document.exitFullscreen ?? document.webkitExitFullscreen;
  await req.call(document);
}

/** Wires up the button. `onResize` re-fits the canvas after the viewport changes. */
export function initFullscreen(onResize) {
  const btn = document.getElementById('fullscreen');
  if (!btn || !supported()) return;

  btn.dataset.show = '1';
  const sync = () => {
    const on = isFullscreen();
    btn.textContent = on ? '✕' : '⛶';
    btn.setAttribute('aria-pressed', String(on));
    btn.setAttribute('aria-label', on ? 'Exit fullscreen' : 'Enter fullscreen');
  };

  btn.addEventListener('click', async (e) => {
    // The canvas below listens for taps to place portals; without this the
    // same press would also drop a gate behind the button.
    e.stopPropagation();
    try {
      await (isFullscreen() ? exit() : enter());
    } catch {
      /* user dismissed the prompt, or the gesture expired */
    }
    sync();
  });

  for (const ev of ['fullscreenchange', 'webkitfullscreenchange']) {
    document.addEventListener(ev, () => {
      sync();
      // Safari fires this before the viewport settles, so re-fit on the next
      // frame rather than trusting the resize event to arrive.
      requestAnimationFrame(onResize);
    });
  }

  sync();
}
