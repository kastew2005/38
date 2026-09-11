# Voxel Survival Universe 45

## Deployment
Upload the contents of this folder to the root of GitHub Pages. The runtime uses `js45/` only.

## Startup fix
Three.js is loaded before `js45/main.js` using fixed CDN URLs with timeout and revision validation. Only `js45/` is used by the game.

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
