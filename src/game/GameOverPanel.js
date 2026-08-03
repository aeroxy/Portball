// Game-over panel, rendered as DOM over the canvas rather than in Pixi —
// it needs a text input for the handle and a link to the login page, neither
// of which Pixi provides.

import {
  isAvailable, loginUrl, whoami, top10,
  claimAndSave, validateHandle, localBest, recordLocalBest, savedHandle,
} from '../net/leaderboard.js';

export class GameOverPanel {
  constructor(onRestart) {
    this.root = document.getElementById('gameover');
    this.scoreEl = document.getElementById('go-score');
    this.bestEl = document.getElementById('go-best');
    this.boardEl = document.getElementById('go-board');
    this.actionEl = document.getElementById('go-action');
    this.onRestart = onRestart;
    this.score = 0;
  }

  async show(score) {
    this.score = score;
    this.scoreEl.textContent = String(score);
    this.bestEl.textContent = String(recordLocalBest(score));
    this.root.dataset.open = '1';

    if (!isAvailable()) {
      this.boardEl.innerHTML =
        '<p class="empty">leaderboard offline — play at aero.oops.wtf/p/portball</p>';
      this.renderAction([this.restartButton()]);
      return;
    }

    this.boardEl.innerHTML = '<p class="empty">loading…</p>';
    this.renderAction([this.restartButton()]);

    const [rows, me] = await Promise.all([top10(), whoami()]);
    this.renderBoard(rows);
    this.renderSaveFlow(me);
  }

  hide() {
    this.root.dataset.open = '0';
  }

  renderBoard(rows) {
    if (rows.length === 0) {
      this.boardEl.innerHTML = '<p class="empty">no scores yet — be the first</p>';
      return;
    }
    const mine = savedHandle();
    const list = document.createElement('ol');
    rows.forEach((row, i) => {
      const li = document.createElement('li');
      if (row.handle === mine) li.className = 'me';
      const rank = document.createElement('span');
      rank.className = 'rank';
      rank.textContent = `${i + 1}.`;
      const name = document.createElement('span');
      name.className = 'name';
      name.textContent = row.handle;
      const score = document.createElement('span');
      score.textContent = String(row.score);
      li.append(rank, name, score);
      list.appendChild(li);
    });
    this.boardEl.replaceChildren(list);
  }

  renderSaveFlow(me, message) {
    if (this.score <= 0) {
      this.renderAction([this.note('score 0 — nothing to save'), this.restartButton()]);
      return;
    }
    if (!me || me.kind !== 'user') {
      const link = document.createElement('a');
      link.className = 'btn';
      link.href = loginUrl;
      link.textContent = 'SIGN IN TO SAVE';
      this.renderAction([link, this.restartButton()]);
      return;
    }

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'handle (a-z, 0-9)';
    input.maxLength = 16;
    input.value = savedHandle();
    input.autocapitalize = 'off';
    input.autocomplete = 'off';
    input.spellcheck = false;

    const save = document.createElement('button');
    save.textContent = 'SAVE SCORE';

    const run = async () => {
      const handle = input.value.trim().toLowerCase();
      const invalid = validateHandle(handle);
      if (invalid) {
        this.renderSaveFlow(me, invalid);
        input.value = handle;
        return;
      }
      save.disabled = true;
      save.textContent = 'SAVING…';
      const res = await claimAndSave(handle, this.score);
      if (res.ok) {
        this.renderBoard(await top10());
        this.renderAction([
          this.note(res.unchanged ? 'your best still stands' : 'saved'),
          this.restartButton(),
        ]);
        return;
      }
      save.disabled = false;
      save.textContent = 'SAVE SCORE';
      this.renderSaveFlow(res.needsLogin ? null : me, res.reason);
    };

    save.addEventListener('click', run);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') run();
    });

    const parts = [input, save];
    if (message) parts.push(this.note(message, true));
    parts.push(this.restartButton());
    this.renderAction(parts);
  }

  renderAction(nodes) {
    this.actionEl.replaceChildren(...nodes);
  }

  note(text, isError) {
    const p = document.createElement('p');
    p.className = isError ? 'note error' : 'note';
    p.textContent = text;
    return p;
  }

  restartButton() {
    const btn = document.createElement('button');
    btn.className = 'restart';
    btn.textContent = 'PLAY AGAIN';
    btn.addEventListener('click', () => {
      this.hide();
      this.onRestart();
    });
    return btn;
  }
}

export { localBest };
