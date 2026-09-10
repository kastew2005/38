# Voxel Survival Universe 40

## Deployment
Upload the contents of this folder to the root of GitHub Pages. The runtime uses `js40/` only.

## Startup fix
Three.js is loaded before `js40/main.js` using fixed CDN URLs with timeout and revision validation. Only `js40/` is used by the game.

## Audit
- JavaScript syntax checked with Node.js
- relative imports checked
- HTML duplicate IDs checked
- DOM id references checked
- stale namespaces removed
- temporary source files removed
- world generation fallback made Promise-safe

Original Minecraft assets/audio are not included.
