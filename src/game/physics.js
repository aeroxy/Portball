// Minimal physics for one bouncing circle: gravity integration, elastic
// bounce off the world edges, shelf platforms and terrain rocks, plus
// circle-overlap sensors.

export const GRAVITY = 900; // px/s^2, downward (+y is down in screen space)

/**
 * body: { x, y, vx, vy, r }
 *
 * Position steps on the *average* velocity over the frame, not the end-of-frame
 * velocity — exact for constant acceleration, and the difference matters more
 * than it looks. Stepping on the new velocity (plain semi-implicit Euler) sheds
 * 0.5 * g^2 * dt^2 of energy every frame, about 112 units at 60fps, and the
 * bunny is supposed to bounce forever. The flat floor used to hide this: the
 * deeper the bunny sank below the floor line before being snapped back up, the
 * more energy the snap handed back, which happened to roughly balance the leak.
 * Rocks catch the bunny earlier and higher, that repayment shrinks, and the
 * bounce visibly winds down into a stall death. Conserving properly here means
 * no surface has to subsidise the integrator.
 */
export function integrate(body, dt) {
  body.vy += GRAVITY * dt;
  body.x += body.vx * dt;
  body.y += (body.vy - 0.5 * GRAVITY * dt) * dt;
}

/** Elastic bounce off the screen edge loop (restitution 1, like the original). */
export function resolveWorldBounds(body, width, height) {
  if (body.y + body.r > height) {
    body.y = height - body.r;
    body.vy = -Math.abs(body.vy);
  }
  if (body.y - body.r < 0) {
    body.y = body.r;
    body.vy = Math.abs(body.vy);
  }
  if (body.x - body.r < 0) {
    body.x = body.r;
    body.vx = Math.abs(body.vx);
  }
  if (body.x + body.r > width) {
    body.x = width - body.r;
    body.vx = -Math.abs(body.vx);
  }
}

/**
 * Elastic bounce off an axis-aligned rectangle (shelf platform).
 * rect: { x, y, w, h } with x,y = center.
 */
export function resolveShelf(body, rect) {
  const hw = rect.w / 2, hh = rect.h / 2;
  const nearestX = Math.max(rect.x - hw, Math.min(body.x, rect.x + hw));
  const nearestY = Math.max(rect.y - hh, Math.min(body.y, rect.y + hh));
  const dx = body.x - nearestX;
  const dy = body.y - nearestY;
  const distSq = dx * dx + dy * dy;
  if (distSq >= body.r * body.r) return false;

  const dist = Math.sqrt(distSq) || 0.0001;
  const push = body.r - dist;
  const nx = dx / dist, ny = dy / dist;
  body.x += nx * push;
  body.y += ny * push;

  // Reflect velocity about the contact normal (perfectly elastic).
  const dot = body.vx * nx + body.vy * ny;
  if (dot < 0) {
    body.vx -= 2 * dot * nx;
    body.vy -= 2 * dot * ny;
  }
  return true;
}

/**
 * Mechanical energy per unit mass. +y is down, so potential is -GRAVITY * y.
 */
export function energy(body) {
  return 0.5 * (body.vx * body.vx + body.vy * body.vy) - GRAVITY * body.y;
}

/**
 * Rescale speed so the body leaves the collision pass with the energy it
 * entered it carrying. Collisions redirect the bunny; they must never feed or
 * starve it.
 *
 * Every resolver here pushes the body out of whatever it penetrated, and that
 * push is free potential energy — lift with no velocity cost. On a flat floor
 * it roughly cancelled the integrator's own leak and nobody noticed. With both
 * sides fixed the injection is unopposed, and an hour of bouncing turns into a
 * bunny ricocheting at absurd speed. One rescale after the whole pass covers
 * every surface at once, and leaves teleports alone — a warp happens outside
 * this window, so a gate still hands back the momentum it took.
 */
export function restoreEnergy(body, target) {
  const ke = target + GRAVITY * body.y;
  const speedSq = body.vx * body.vx + body.vy * body.vy;
  if (ke <= 0 || speedSq <= 0) return;
  const scale = Math.sqrt(2 * ke / speedSq);
  body.vx *= scale;
  body.vy *= scale;
}

/** Overlap test between two center-origin axis-aligned rects: { x, y, w, h }. */
export function rectOverlap(a, b) {
  return (
    Math.abs(a.x - b.x) < (a.w + b.w) / 2 && Math.abs(a.y - b.y) < (a.h + b.h) / 2
  );
}

/** Sensor test between two circles: { x, y, r }. */
export function circleOverlap(a, b) {
  const dx = a.x - b.x, dy = a.y - b.y;
  const rr = a.r + b.r;
  return dx * dx + dy * dy < rr * rr;
}

/**
 * Elastic bounce off a terrain rock.
 * bump: { x, y, r, side } where side is the outward direction of the exposed
 * cap along y — -1 for a floor rock (solid only from above), +1 for a ceiling
 * rock. Returns the penetration depth, or 0 for no contact — the caller
 * resolves only the deepest overlap, so it needs a number to compare rather
 * than the boolean resolveShelf returns.
 *
 * The side guard is what keeps a fast fall honest. At GRAVITY 900 and a clamped
 * dt the bunny moves ~45px in a frame, so it can integrate clean past the floor
 * line and end up *below* a floor rock's centre — where the raw normal points
 * down and the reflection would fire it into the ground instead of off the rock.
 * A rock's underside is buried; it isn't solid there.
 */
function resolveBump(body, bump) {
  const dx = body.x - bump.x;
  const dy = body.y - bump.y;
  if (dy * bump.side < 0) return 0;
  const rr = body.r + bump.r;
  const distSq = dx * dx + dy * dy;
  if (distSq >= rr * rr) return 0;

  const dist = Math.sqrt(distSq) || 0.0001;
  const push = rr - dist;
  const nx = dx / dist, ny = dy / dist;
  body.x += nx * push;
  body.y += ny * push;

  // Reflect about the contact normal (perfectly elastic), only when converging.
  const dot = body.vx * nx + body.vy * ny;
  if (dot < 0) {
    body.vx -= 2 * dot * nx;
    body.vy -= 2 * dot * ny;
  }
  return push;
}

/**
 * Resolve the bunny against a rocky surface — one contact per frame, the
 * deepest.
 *
 * Resolving every overlap the way the shelf loop does would pin the bunny in
 * the crevice where two rocks meet: each rock pushes it toward the other, the
 * two cancel, speed drops to nothing and STALL_TIMEOUT kills a bunny that is
 * visibly stuck rather than stopped. Taking only the deepest contact makes the
 * surface behave as one shape instead of a pile of circles, and lets the rocks
 * overlap freely — which they must, or there would be flat gaps between them.
 */
export function resolveTerrain(body, bumps) {
  let deepest = null;
  let best = 0;
  for (const bump of bumps) {
    // Cheap reject first: the vast majority of rocks are nowhere near the body.
    const dx = body.x - bump.x;
    const rr = body.r + bump.r;
    if (dx * dx >= rr * rr) continue;
    const dy = body.y - bump.y;
    if (dy * bump.side < 0) continue;
    const depth = rr - Math.hypot(dx, dy);
    if (depth > best) {
      best = depth;
      deepest = bump;
    }
  }
  if (deepest) resolveBump(body, deepest);
}
