# Voxel Survival Universe 48

## Deployment
Upload the contents of this folder to the root of GitHub Pages. The runtime uses `js48/` only.

## Startup fix
Three.js is loaded before `js48/main.js` using fixed CDN URLs with timeout and revision validation. Only `js48/` is used by the game.

## Audit
- JavaScript syntax checked with Node.js
- relative imports checked
- HTML duplicate IDs checked
- DOM id references checked
- stale namespaces removed
- temporary source files removed
- world generation fallback made Promise-safe

Original Minecraft assets/audio are not included.

## Critical parser fix
- Closed the `setupInput()` class method before `useSelected()`. This fixes Safari `Unexpected token "("` at `main.js` line 136.
- Touch jump now releases on pointerup/pointercancel and has a short safety timeout.
- Touch layout storage is isolated to `vs_touch_layout_v42`.


Universe 48 fixes world selection/new-world launch: selected worlds set a one-shot session launch flag, reload, then automatically call Game.start(). This avoids returning to the main menu after creating or loading a world.
