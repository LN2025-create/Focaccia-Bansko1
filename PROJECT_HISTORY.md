# Focaccia Bansko — Project History

> **Read this file before changing the website.**
>
> This document exists to preserve project continuity between devices, sessions and contributors. It must be updated together with `CHANGELOG.md` and `PROJECT_STATE.json` after every meaningful update.

## 1. Single source of truth

- The active application is the **Next.js project in the repository root**.
- Future work must start only from the latest ZIP downloaded directly from the active GitHub repository.
- Do not combine files from older ZIP archives or previous working folders.
- An obsolete nested project copy named `focaccia-next-clean-2/` was removed on 2026-07-13. If it appears again in a future archive, treat it as legacy and do not use it.
- Completed tasks must not be returned to the active task list unless the owner explicitly requests a new change.

## 2. Stable business information

- Business: **Focaccia Bansko**
- Address: **ул. „Пирин“ 93, 2770 Банско**
- Phone: **+359 897 822 441**
- Email: **focacciaexpert@abv.bg**
- Instagram: **@focaccia_bansko_panini**
- Opening hours: **daily 10:00–22:00**
- Website: **focaccia.bg**
- Languages: **Bulgarian and English**

## 3. Stable visual and content decisions

- Main visual direction: warm Italian palette — cream, olive green, terracotta, graphite and muted gold.
- Logo version 1 is used as the main visual on the home page.
- Logo version 2 is used in the header and footer.
- The home-page hero text is:
  - BG: “Прясна фокача всеки ден — за най-вкусния сандвич в Банско”
  - EN: the corresponding English translation in the site content.
- The public menu is a web page in Bulgarian and English.
- Negroni is listed as **100 ml — €6.00**.
- The PDF menu must not be reintroduced as a visible menu feature unless explicitly requested.
- The site must remain responsive and usable on desktop, tablet and mobile.

## 4. Known project history

### Version 1.0 — completed foundation

The following work is already complete and must not appear again as “new work”:

- Home page and core site structure.
- Web menu in Bulgarian and English.
- Sandwich images and menu presentation.
- Location and contacts pages.
- Updated address, telephone, email, Instagram and opening hours.
- Updated logos and removal of unwanted blue visual elements.
- Italian-inspired colour palette.
- Negroni added to the menu at 100 ml / €6.00.
- Previous drink-list corrections.
- Google rating component with safe fallback and optional Google Places environment variables.
- Navigation entry for “Пътят на вкуса” / “The Journey of Taste”.

### Version 1.1 — product-led refinement prepared on 2026-07-13

The section **“Пътят на вкуса”** is already implemented. It is not a new section to be built from zero.

Current repository implementation includes:

- Landing page for “Пътят на вкуса”.
- Main article “Как се ражда една истинска италианска фокача”.
- Three videos:
  - breathing dough;
  - olive oil;
  - finished focaccia crumb.
- Shared article template.
- Bulgarian and English content.
- Italy journey map assets.
- Product / producer articles for:
  1. Caputo
  2. Mazza
  3. Sabelli Burrata
  4. Ignalat Stracciatella
  5. Fior di Latte
  6. IGOR Gorgonzola
  7. TreValli Tartufo
  8. Parmigiano Reggiano
  9. Agriform Provolone
  10. Casa Modena
  11. Coati Salame Napoli
  12. Mangiafuoco
  13. Peroni
  14. Caffè Corsini

## 5. Stable Version 1.1 decisions

Version 1.1 refines the existing implementation; it does not rebuild “Пътят на вкуса” from zero.

### A. Landing-page order

- The main article “Как се ражда една истинска италианска фокача” is always first.
- It is followed by all product stories in one vertical sequence.
- Each product card leads with the product name and image and states where the product appears in the Focaccia Bansko menu.

### B. Product-led article template

- The product is the main subject. The producer and the region provide context.
- Use a product-appropriate subtitle in the agreed style, for example “Произведена в Марке от Sabelli”.
- The section order is: product and production method; producer; verified facts; market position only when supported; region; other uses; wine or menu pairing; Focaccia Bansko menu connection.
- Do not mention that market-share information is unavailable. If a reliable exact claim is not supported, omit the market section entirely.
- The main focaccia article is excluded from this template and remains unchanged.

### C. Italy map

- The Italy map is placed at the bottom of the “Пътят на вкуса” landing page.
- It uses an accurate country silhouette rather than the old schematic drawing.
- Only regions connected to products used by Focaccia Bansko are marked.
- Selecting a region reveals only the product stories connected to that region.
- The mobile layout includes a clear region-button selector.

### D. Home-page refinements

- The feature-card title “Вкусът на Италия” is replaced by “Салумерия”.
- The four feature cards use restrained decorative motifs, clearer icons and premium spacing.
- The 01 / 02 / 03 strip uses icons and short explanations.
- Item 03 is “Кафе, вино и кроасан”, not the street address.
- The Mazza olive-oil image uses a closer product crop.

### E. Remaining optional content pass

- Official logos, factory images and production photography may be upgraded later when reliable source files and clear usage rights are available.
- Do not claim this optional imagery audit is complete unless the actual repository contains the replacement assets.

## 6. Work protocol

Before starting any update:

1. Read `PROJECT_HISTORY.md`.
2. Read `PROJECT_STATE.json`.
3. Read `CHANGELOG.md`.
4. Inspect the actual current code before describing the state of the project.
5. Work only in the repository root.
6. If a nested duplicate project appears in a future archive, do not use or merge it.

Before delivering any update:

1. Update `PROJECT_STATE.json`.
2. Move completed tasks from active to completed in `CHANGELOG.md`.
3. Add a dated entry to `CHANGELOG.md`.
4. Update this history only when a stable decision or project milestone changes.
5. Build and test the project.
6. Produce one clean ZIP without `__MACOSX`, `.DS_Store`, `node_modules` or `.next`.

## 7. Accuracy rule

Never claim that a task is complete unless it exists in the current files and has been checked. When the repository, the changelog and a conversation conflict, the actual current repository plus the owner’s latest explicit instruction take priority.
