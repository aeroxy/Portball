#!/usr/bin/env bash
# Deploy Portball.
#
# Order matters: dist/index.html references hashed asset URLs on jsDelivr, and
# jsDelivr reads them from this repo's default branch. Push the assets to
# GitHub first, publish the page second — the other way round leaves the live
# page pointing at files that do not exist yet.
#
set -euo pipefail

cd "$(dirname "$0")/.."

# AERO_TOKEN comes from .env (gitignored — this repo is public), or from the
# environment if you'd rather pass it in.
if [ -f .env ]; then
  set -a
  . ./.env
  set +a
fi

PAGE="${AERO_PAGE:-portball}"
MCP_URL="${AERO_MCP_URL:-https://aero.oops.wtf/mcp}"
TOKEN="${AERO_TOKEN:-}"

if [ -z "$TOKEN" ]; then
  echo "no aero token — put AERO_TOKEN=aero_... in .env (see .env.example)" >&2
  echo "mint one at https://aero.oops.wtf/connect" >&2
  exit 1
fi

echo "==> building"
bun run build

echo "==> publishing assets to GitHub (jsDelivr origin)"
# Everything, not just dist/: committing the build without the source that
# produced it leaves the repo in a state nobody can reproduce.
git add -A
if git diff --cached --quiet; then
  echo "    no asset changes"
else
  git commit -qm "deploy: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
fi
git push -q origin HEAD
echo "    pushed $(git rev-parse --short HEAD)"

echo "==> publishing page /p/$PAGE"
python3 - "$MCP_URL" "$TOKEN" "$PAGE" <<'PY'
import json, pathlib, ssl, sys, urllib.request

mcp_url, token, page = sys.argv[1], sys.argv[2], sys.argv[3]
html = pathlib.Path("dist/index.html").read_text()

body = json.dumps({
    "jsonrpc": "2.0", "id": 1, "method": "tools/call",
    "params": {"name": "update_page", "arguments": {"page": page, "html": html}},
}).encode()

req = urllib.request.Request(mcp_url, data=body, method="POST", headers={
    "Authorization": f"Bearer {token}",
    "Content-Type": "application/json",
    "Accept": "application/json, text/event-stream",
})
# The local network does TLS interception; verification would fail here the
# same way `curl` needs -k.
ctx = ssl._create_unverified_context()
with urllib.request.urlopen(req, context=ctx) as res:
    payload = json.loads(res.read().decode())

result = payload.get("result", {})
text = "".join(c.get("text", "") for c in result.get("content", []))
if result.get("isError") or "error" in payload:
    print(f"    page publish FAILED: {text or payload.get('error')}", file=sys.stderr)
    sys.exit(1)
print(f"    {text.strip()[:200]}")
PY

echo "==> done — https://aero.oops.wtf/p/$PAGE"
