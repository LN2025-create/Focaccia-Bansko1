# Version 1.1.7 — Stage 1 Validation

Technical recovery scope only.

## Completed checks

- Active application exists only in the repository root.
- Obsolete nested project copy is absent.
- Stale PDF menu is absent.
- Every CSS-module class referenced by files in `pages/` and `components/` exists in its imported stylesheet.
- Home collage, vegan badges, wine bottles and secondary product imagery have bounded positioned containers.
- The Journey of Taste map references the existing `italy-silhouette.svg` asset.
- Main routes return HTTP 200 in the production server.
- All 50 local image paths referenced by the application return HTTP 200.
- `npm ci`: passed, 0 reported vulnerabilities.
- `npm run lint`: passed.
- `npm run build`: passed, 22 routes generated.

## Deliberately postponed

- New home collage design.
- Final product-story visual pass.
- Final interactive Italy map design.
- Full deployed-browser visual approval.
