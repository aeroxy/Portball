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

/** Top 10, highest first. Returns [] rather than throwing. */
export async function top10() {
  if (!isAvailable()) return [];
  try {
    const rows = await table().list({ orderBy: '-score', limit: 10 });
    return rows.map((r) => ({ handle: r.id, score: Number(r.data?.score ?? 0) }));
  } catch (err) {
    // A Firestore index error on the ordered query is the one failure worth
    // recovering from: fetch a page of rows and sort them here instead.
    console.warn('ordered leaderboard query failed, sorting client-side', err);
    try {
      const rows = await table().list({ limit: 200 });
      return rows
        .map((r) => ({ handle: r.id, score: Number(r.data?.score ?? 0) }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);
    } catch {
      return [];
    }
  }
}

/**
 * Claim `handle` if needed and store `score` under it.
 * Returns { ok: true } or { ok: false, reason, needsLogin? }.
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

  // Don't overwrite a better run, and don't claim a handle that already
  // belongs to someone else (the write would 403 anyway — this just gives a
  // clearer message before spending the request).
  let existing = null;
  try {
    existing = await scores.get(handle);
  } catch {
    // Unreadable is not decisive; let the write below be the authority.
  }
  if (existing) {
    const owner = existing.data?._owner;
    if (owner && owner !== me.id) {
      return { ok: false, reason: 'that handle is taken, pick another' };
    }
    if (Number(existing.data?.score ?? 0) >= score) {
      localStorage.setItem(HANDLE_KEY, handle);
      return { ok: true, unchanged: true };
    }
  }

  try {
    await scores.set(handle, { score });
    localStorage.setItem(HANDLE_KEY, handle);
    return { ok: true };
  } catch (err) {
    if (err.status === 401) {
      return { ok: false, reason: 'sign in to save your score', needsLogin: true };
    }
    if (err.status === 403) {
      return { ok: false, reason: 'that handle is taken, pick another' };
    }
    return { ok: false, reason: err.message || 'could not save score' };
  }
}
