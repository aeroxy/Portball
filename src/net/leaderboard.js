// Leaderboard backed by AeroDB (window.AeroDB, loaded from /aero-db.js).
//
// The client authenticates with `credentials: 'same-origin'`, so this only
// works when the game is served from aero.oops.wtf itself, at /p/portball.
// Everywhere else — including `bun run dev` — window.AeroDB is undefined and
// isAvailable() returns false; the caller renders an offline board.
//
// One table, `scores`: read `public`, write `authed-own`. The document id IS
// the player's handle, which is what makes handles unique — the id is the
// primary key, and `authed-own` stops anyone rewriting a row they don't own.
//
// `authed-own` is enforced by the API, not by this file: the sign-in checks
// below are UX so the player sees a login link instead of a 401.

const PAGE = 'portball';
const TABLE = 'scores';
const LOGIN_URL = `/login?next=${encodeURIComponent('/p/' + PAGE)}`;

const HANDLE_RE = /^[a-z0-9]{3,16}$/;
const BEST_KEY = 'portball.best';
const HANDLE_KEY = 'portball.handle';

export const loginUrl = LOGIN_URL;

export function isAvailable() {
  return typeof window !== 'undefined' && !!window.AeroDB;
}

function table() {
  return window.AeroDB.page(PAGE).table(TABLE);
}

export function validateHandle(handle) {
  if (HANDLE_RE.test(handle)) return null;
  return 'handle must be 3-16 characters, lowercase letters and numbers only';
}

// ---- local state, works signed out -----------------------------------------

export function localBest() {
  return Number(localStorage.getItem(BEST_KEY) ?? 0);
}

export function recordLocalBest(score) {
  if (score > localBest()) localStorage.setItem(BEST_KEY, String(score));
  return localBest();
}

export function savedHandle() {
  return localStorage.getItem(HANDLE_KEY) ?? '';
}

// ---- server ----------------------------------------------------------------

/** { kind: 'user' | 'guest', id } — 'guest' means not signed in. */
export async function whoami() {
  if (!isAvailable()) return null;
  try {
    return await window.AeroDB.page(PAGE).whoami();
  } catch {
    return null;
  }
}

/**
 * Collapse rows to one per player, best score first.
 *
 * claimAndSave already keeps a player to a single row, so this is a backstop:
 * `authed-own` lets one account create any number of rows, and nothing but
 * this client stops it. Deduping on read means a stale or hand-written extra
 * row can never take a second slot on the board.
 */
function bestPerOwner(rows) {
  const best = new Map();
  for (const r of rows) {
    const owner = r.data?._owner ?? r.id;
    const score = Number(r.data?.score ?? 0);
    const seen = best.get(owner);
    if (!seen || score > seen.score) best.set(owner, { handle: r.id, score });
  }
  return [...best.values()].sort((a, b) => b.score - a.score).slice(0, 10);
}

/** Top 10, highest first, one entry per player. Returns [] rather than throwing. */
export async function top10() {
  if (!isAvailable()) return [];
  try {
    // Over-fetch: the top 10 rows could all belong to one player.
    return bestPerOwner(await table().list({ orderBy: '-score', limit: 100 }));
  } catch (err) {
    // A Firestore index error on the ordered query is the one failure worth
    // recovering from: fetch a page of rows and sort them here instead.
    console.warn('ordered leaderboard query failed, sorting client-side', err);
    try {
      return bestPerOwner(await table().list({ limit: 200 }));
    } catch {
      return [];
    }
  }
}

/**
 * Store `score` under `handle`, keeping the player to exactly one entry.
 *
 * Picking a different handle RENAMES: the best score carries over and the old
 * row is deleted, rather than leaving the player holding two slots.
 *
 * Returns { ok: true, score, renamedFrom, improved } or
 * { ok: false, reason, needsLogin? }.
 */
export async function claimAndSave(handle, score) {
  if (!isAvailable()) return { ok: false, reason: 'leaderboard unavailable here' };

  const invalid = validateHandle(handle);
  if (invalid) return { ok: false, reason: invalid };

  const me = await whoami();
  if (!me || me.kind !== 'user') {
    return { ok: false, reason: 'sign in to save your score', needsLogin: true };
  }

  const scores = table();

  // Everything this player already owns. Normally one row; more only if an
  // earlier build (or a hand-written call) left extras behind.
  let mine = [];
  try {
    mine = await scores.list({ mine: true, limit: 50 });
  } catch {
    // Not decisive — fall through and let the write be the authority.
  }
  const previousBest = mine.reduce((m, r) => Math.max(m, Number(r.data?.score ?? 0)), 0);
  const best = Math.max(score, previousBest);

  // Reject someone else's handle before touching anything. The write would
  // 403 regardless; this just gives a clearer message.
  try {
    const existing = await scores.get(handle);
    const owner = existing?.data?._owner;
    if (owner && owner !== me.id) {
      return { ok: false, reason: 'that handle is taken, pick another' };
    }
  } catch {
    // See above.
  }

  try {
    await scores.set(handle, { score: best });
  } catch (err) {
    if (err.status === 401) {
      return { ok: false, reason: 'sign in to save your score', needsLogin: true };
    }
    if (err.status === 403) {
      return { ok: false, reason: 'that handle is taken, pick another' };
    }
    return { ok: false, reason: err.message || 'could not save score' };
  }

  // Drop the old rows only after the new one is safely written — if the write
  // above had failed, the player still has their previous entry.
  const stale = mine.filter((r) => r.id !== handle);
  await Promise.all(stale.map((r) => scores.delete(r.id).catch(() => {})));

  localStorage.setItem(HANDLE_KEY, handle);
  return {
    ok: true,
    score: best,
    improved: score > previousBest,
    renamedFrom: stale.map((r) => r.id),
  };
}
