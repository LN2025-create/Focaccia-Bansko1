# Changelog

## [1.1.3] — 2026-07-16

### Home page

- Removed the rejected four-sandwich cut-out collage and its unused assets.
- Replaced it with a single real Focaccia Bansko food photograph, without a repeated oversized logo.
- Corrected the product message: Focaccia Bansko bakes the focaccia used to prepare its sandwiches; the site no longer suggests that bread or plain focaccia is sold separately.
- Replaced the oven/burger-like icon with a focaccia tray icon and removed the oversized duplicate decorative SVG from feature cards.

### Product stories

- Standardised the product-led visual direction around close product photography.
- Added unified close-up visuals for flour/dough, burrata, stracciatella, Gorgonzola, truffle caciotta, Provolone, prosciutto, Salame Napoli and Mangiafuoco.
- Kept the premium mozzarella and close Mazza olive-oil images.
- Added close product visuals for Parmigiano Reggiano, Peroni and Caffè Corsini so every product story now opens with a product-led image.
- Changed individual product article heroes to a light split layout: close product image on the left and product/region/producer copy on the right.
- Kept the main focaccia article outside this product template.

### Italy map

- Removed numbered controls and the vintage textured interactive map.
- Added a clean Italy outline with softly highlighted active regions.
- Region names appear directly on hover, keyboard focus and active selection.
- Region buttons remain as a second, immediately understandable filtering method.

### Social and Google controls

- Coloured Facebook green, Instagram white and TikTok red.
- Kept the social group on the left side of every page.
- Added a separate, larger multicolour Google review button on the right.
- The Google button opens the direct review form: `https://g.page/r/CW54B7v5AtugEAE/review`.

### Menu

- Changed “МЕНЮ 2026 / Menu 2026” to “МЕНЮ / MENU”.
- Replaced the language-availability sentence with product and sourcing copy in Bulgarian and English.
- Split wine into “На чаша / By the glass” and “Бутилки / Bottles”.
- Added 1932 Fiano Salento IGT, 1932 Primitivo Salento IGT and Cuvée Brut “Bollé”, with bottle images and the confirmed prices.
- Described Bollé accurately as a 100% Glera sparkling wine in a style close to Prosecco, not as certified Prosecco.

### Validation

- `npm ci`, `npm run lint` and `npm run build` are required immediately before packaging.
- Final browser visual review remains required after deployment.

## [1.1.2] — 2026-07-15

### Typography and layout

- Reduced oversized headings across the home page, Journey of Taste and product articles.
- Kept the two home hero lines at the same font size while making the overall hero more compact.
- Prevented Bulgarian and English headings from breaking in the middle of words or leaving isolated letters and syllables.
- Simplified producer section headings so the small label says “Производителят” and the large title contains only the producer name.
- Reduced the header logo size and improved the visual hierarchy between headings and body text.

### Home hero

- Removed the oversized repeated logo from the hero artwork.
- Added a clean, product-led sandwich collage without promotional overlay text.

### Product imagery

- Replaced the supermarket-style mozzarella package image with a close-up mozzarella photograph.
- Kept the close product crop for Mazza olive oil.

### Social links

- Added persistent small Facebook, Instagram and TikTok buttons on the left side of every page.
- Added accessible labels, new-tab behaviour and reduced-motion support.

### Italy map

- Adopted the user-designed vintage Italy artwork as the visual base of the map.
- Preserved clickable numbered markers and region buttons for filtering product stories.
- Kept the map at the bottom of the Journey of Taste page and marked only regions connected to products used by Focaccia Bansko.

### Validation

- Visually checked the home hero at desktop width and the complete home page at mobile width.
- Visually checked the Caputo producer block, the new mozzarella hero and the vintage Italy map.
- `npm ci` completed successfully with no reported vulnerabilities.
- `npm run lint` completed successfully.
- `npm run build` completed successfully and generated all 22 routes.
- Local image and video references were checked before packaging.

All meaningful project changes must be recorded here. Completed work must not be repeated in future task lists.

## [1.1.0] — 2026-07-13

### Product-led “Пътят на вкуса” articles

- Kept the main article “Как се ражда една истинска италианска фокача” unchanged.
- Reworked all fourteen product stories so the product is the leading subject, not the producer.
- Added product-led titles such as “Нашата моцарела”, “Нашият зехтин” and “Нашата горгонзола”.
- Added producer / region subtitles in the agreed style, for example “Произведена в Марке от Sabelli”.
- Added a clear statement on every landing-page card showing where the product appears in the Focaccia Bansko menu.
- Added a product-first article sequence:
  1. product and production method;
  2. producer history and facts;
  3. verified market position only when a reliable figure exists;
  4. region and regional food culture;
  5. other culinary uses;
  6. wine or menu pairing;
  7. a second, differently worded Focaccia Bansko menu connection.
- Market-position sections are displayed only for Sabelli, IGOR and Birra Peroni, where the existing project sources support a specific claim. Articles without a supported market share do not mention its absence.
- Added regional context and pairing copy in Bulgarian and English.

### “Пътят на вкуса” landing page

- The first item remains the main focaccia story.
- All product stories now follow vertically, one after another, with alternating premium layouts.
- Product imagery, product name, producer, region and menu use are visible before opening an article.
- Replaced the old schematic map with an accurate Italy silhouette generated from Natural Earth geographic data.
- Moved the Italy map to the bottom of the story list.
- Marked only the regions connected to products used by Focaccia Bansko.
- Added interactive region selection. Selecting a region shows only the product stories connected to that region.
- Added a usable mobile region selector and compact filtered story list.

### Home page refinements

- Replaced “Вкусът на Италия” with “Салумерия”.
- Decorated the four feature cards with refined icons, subtle food-themed motifs, borders and restrained hover effects.
- Updated the four feature descriptions in Bulgarian and English.
- Reworked the 01 / 02 / 03 strip with icons and short supporting text.
- Replaced “ул. „Пирин“ 93” in item 03 with “Кафе, вино и кроасан”.
- Added reduced-motion support for the new interactions.

### Product imagery

- Added a tighter, product-focused crop of the Mazza olive-oil bottle for its card and article hero.

### Project continuity

- Added and maintained `PROJECT_HISTORY.md`, `PROJECT_STATE.json` and `AI_CONTEXT.md`.
- The active application remains the Next.js project in the repository root.
- Older ZIP archives and nested duplicate applications must not be mixed into future work.

### Validation

- `npm ci` completed successfully.
- `npm run lint` completed successfully.
- `npm run build` completed successfully.
- All 22 routes were generated successfully, including all fourteen product stories and the main focaccia story.
- Server-rendered HTML checks confirmed the new Bulgarian titles, subtitles, map copy and home-page labels across the affected routes.

## [1.0.0] — Completed foundation

### Completed

- Core Next.js website.
- Bulgarian / English language support.
- Home, menu, location, contacts and 404 pages.
- Web menu and sandwich imagery.
- Business details and daily 10:00–22:00 opening hours.
- Logo and colour-palette updates.
- Negroni 100 ml / €6.00.
- Google rating component with fallback and optional API integration.
- Initial “Пътят на вкуса” implementation and navigation entry.

### Do not repeat as new work

- Removing the visible PDF-menu feature.
- Adding Negroni.
- Replacing the logos.
- Changing the main colour palette.
- Updating the address, phone, email, Instagram or opening hours to the values already listed in `PROJECT_HISTORY.md`.

## Version 1.1.1 — Layout hotfix

- Fixed overlapping producer headings and text on desktop article pages.
- Removed the small Italy map from individual product articles.
- Kept region information as a clean text section inside each article.
- The interactive Italy map remains only at the bottom of the main “Пътят на вкуса” page.
