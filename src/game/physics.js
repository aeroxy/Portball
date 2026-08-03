// Minimal physics for one bouncing circle: gravity integration, elastic
// bounce off the world edges and shelf platforms, circle-overlap sensors.

export const GRAVITY = 900; // px/s^2, downward (+y is down in screen space)

/** body: { x, y, vx, vy, r } */
export function integrate(body, dt) {
  body.vy += GRAVITY * dt;
  body.x += body.vx * dt;
  body.y += body.vy * dt;
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

/** Sensor test between two circles: { x, y, r }. */
export function circleOverlap(a, b) {
  const dx = a.x - b.x, dy = a.y - b.y;
  const rr = a.r + b.r;
  return dx * dx + dy * dy < rr * rr;
}
