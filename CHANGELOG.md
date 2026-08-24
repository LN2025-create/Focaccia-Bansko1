# Changelog

## Version 1.2.5 — live Google photo gallery (2026-08-22)

### Google Business Profile media

- Added a server-side `business-media` endpoint that reads the current photos from the connected Focaccia Google Business Profile with the existing OAuth credentials.
- Filters the feed to photos, sorts them newest-first and refreshes the browser data on visits, every 30 minutes and when the tab becomes active.
- Keeps a short five-minute server cache to limit Google API traffic without storing permanent Google image URLs in the site source.

### Homepage slideshow and gallery

- Added one clean slideshow card in the open space of the homepage hero instead of a mosaic.
- The card advances automatically every 4.5 seconds and loops continuously from the last image back to the first.
- Clicking the card opens an on-site lightbox gallery with previous/next controls, keyboard arrows, Escape-to-close and mobile swipe gestures.
- Gallery navigation is circular in both directions: last → first and first → last.
- Automatic slideshow playback pauses while the lightbox is open and resumes after it closes.
- Added adjacent-image preloading and a reduced-motion fallback.

### Runtime

- Production was verified by the owner on Vercel with Node.js 24.x before this release was prepared.

### Validation note

- The new source files and responsive CSS were reviewed directly.
- A local clean `npm ci` could not complete in this execution environment, so Vercel remains the final production build check after upload.

## Version 1.2.4 — business email, live Google profile data and navigation refinements (2026-08-03)

### Business email

- Replaced the public contact address with `info@focaccia.bg` across contacts, footer and structured data.
- Kept the existing ABV mailbox only as the private forwarding destination.

### Google Business Profile integration

- Replaced the paid Places API implementation with the approved Google Business Profile APIs and server-side OAuth 2.0.
- Added a combined server endpoint for the exact average rating, exact review count, regular hours and special/holiday hours.
- Added refreshes on every page visit, every 30 minutes and whenever the browser tab becomes active.
- Removed the fixed `4.9 / 240+` fallback. When Google data is unavailable, the site links to Google without showing an approximate count.
- Removed the locally calculated open/closed fallback. The live status is computed only from Google `regularHours` and `specialHours`; otherwise visitors are directed to Google.
- Added safe Vercel environment-variable documentation and a `.env.example` without secrets.

### Homepage and navigation

- Replaced the burger-like icon for Italian products and Salumeria with a dedicated cheese-and-cured-meat symbol.
- Added live Google-sourced hours to the homepage visit card, location page and contacts page.
- Added LocalBusiness/Restaurant structured data with the new domain email and official social links.
- Refined the mobile social controls into a clearer dock and reserved page space so they do not cover content.

### Menu usability

- Added a sticky, horizontally scrollable menu-section navigation for sandwiches, croissant, Salumeria and drinks.
- Added correct anchor offsets below the fixed header.
- Added a bilingual allergen-information notice without inventing product-specific allergen claims.

### Validation note

- All JavaScript and JSX files passed a syntax parse.
- Business-hours calculations were checked against normal daily hours and a special closed day.
- `npm ci`, ESLint and the production build could not run because the execution environment's npm registry returned missing-package 404 errors. A successful Vercel build is therefore required before production deployment.
- Live Google data remains inactive until Google approves the API request and the OAuth environment variables are added in Vercel.

## Version 1.2.3 — Salumeria, croissant variants, beer photography and rating refresh (2026-07-28)

### Google rating

- Reduced the public API cache from 24 hours to 30 minutes.
- The home rating widget checks again every 30 minutes while the page remains open.
- Live Google Places data shows the exact review count; the plus sign is retained only for the static fallback.

### Croissant

- Updated the dessert description to pair the freshly baked croissant with Corsini espresso or cappuccino.
- Added four clear options: plain, chocolate, pistachio cream and apricot.

### Salumeria

- Added a full bilingual Salumeria section before drinks.
- Added cheese and cured-meat lists with EUR pricing and units.
- Prices are per 100 g except fresh Burrata, which is listed as 125 g.
- Updated the home Salumeria card to link directly to `/menu#salumeria`.

### Beer photography

- Added dedicated product cards for Birra Moretti, Peroni and Peroni Nastro Azzurro.
- Prepared the owner-supplied bottle images with transparent backgrounds and responsive menu presentation.
- Consolidated multiple bottle sizes under each beer product card.

### Validation note

- Source and assets were reviewed directly.
- A fresh dependency install, lint and production build were not completed in this container session; Vercel deployment remains the final automated check.

## Version 1.2.2 — linked home cards and hero layout correction (2026-07-26)

### Home hero

- Removed the visible development-facing caption below the hero photograph.
- Increased the available desktop width and rebalanced the text/image columns.
- Reduced and constrained the headline size so both approved equal-size lines remain fully visible without entering the image area.
- Moved the stacked responsive breakpoint earlier so intermediate desktop/tablet widths cannot create overlap.

### Functional home cards

- Converted all three dark quick-fact cards into full keyboard-accessible links.
- Converted all four light feature cards into full keyboard-accessible links.
- Added hover, focus-visible and arrow affordances so the cards clearly behave as navigation.
- Connected the cards to the relevant pages and sections: the focaccia story, Taste Journey, drinks and the croissant/coffee section.
- Updated the language-link helper so anchors work correctly in both Bulgarian and English.

### Validation note

- Source files and link targets were reviewed directly.
- Automated dependency installation, lint and production build were not run in this container session; Vercel must complete a successful build after upload, followed by desktop/mobile visual review.

## Version 1.2.1 — post-audit corrections (2026-07-25)

### Home page

- Removed the multi-tile collage structure from the home hero.
- Added one cohesive hero photograph with proper negative space and a warmer, more premium product-first feel.
- Reworked the hero layout into a cleaner two-column composition so the message, buttons and rating remain part of the first impression.
- Added an explicit `aria-label` for the two-line hero heading so the text is not read as a glued string.

### Menu and contacts

- Added visible dessert presence to the menu with the agreed single dessert: a freshly baked croissant served with Italian espresso or cappuccino.
- Replaced the placeholder `F` in contacts with the real Focaccia logo and added a direct Google Maps action.
- Updated the footer description so it reflects sandwiches made with focaccia baked on site rather than suggesting standalone focaccia as the main product.

### Journey of Taste and accessibility

- Reduced repeated wording in the Taste Journey region prompt.
- Replaced repeated eyebrow headings inside product stories with cleaner generic labels.
- Localised the Google Review control and the Google rating `aria-label`.
- Localised header accessibility labels.

### Validation note

- The source corrections were reviewed directly.
- A fresh `npm ci`, `lint` and production `build` pass were **not re-run for 1.2.1 in this container session**, so they still need to be executed in a full local/deployment environment before publishing.

## Version 1.2.0 — Stage 4 final map and full-site QA (2026-07-18)

### Final Italy map

- Kept the owner-supplied simple Italy silhouette and the explicit labelled region selector.
- Removed all unused CSS for numbered/blob markers and deleted the obsolete vintage and journey-map assets.
- Corrected the explanatory copy so it describes the region selector accurately rather than implying that approximate regions are drawn on the silhouette.
- Added accessible `aria-pressed` states, result controls, a live results area and a visible selected-region label.

### Full-site QA

- Rendered and reviewed desktop and mobile layouts for home, menu, location, contacts, Journey of Taste, the main focaccia story and a representative Casa Modena article.
- Checked the final map section separately at 1440 px and 390 px.
- Confirmed the persistent Facebook, Instagram and TikTok rail plus the separate Google Review control.
- Updated all application version markers and repository continuity files to 1.2.0.

### Validation

- `npm ci` completed with 0 reported vulnerabilities.
- `npm run lint` completed successfully.
- `npm run build` completed successfully and generated all 22 routes.
- Checked 40 Bulgarian/English page responses plus the custom 404 response.
- Checked 58 local media references, CSS-module exports, social URLs and obsolete map references; no missing local assets or stale map references remain.
- Created the clean canonical archive `Focaccia-BG-V1.2.0.zip`.

## Version 1.1.9 — Stage 3 product-story refinement (2026-07-18)

### Product-led imagery

- Standardised all fourteen product-story cards and article heroes around the approved mozzarella pattern: the ingredient leads, followed by producer, region and the Focaccia Bansko menu connection.
- Replaced the Burrata, Stracciatella, Gorgonzola, truffle Caciotta, Parmigiano Reggiano, Provolone, Prosciutto Crudo, Prosciutto Cotto, Salame Napoli and Carolina Reaper hero assets with controlled close-product crops.
- Kept the approved flour, Mazza olive oil, Fior di Latte, Peroni and Caffè Corsini imagery.
- Confirmed that no product article hero uses a sandwich photograph. Sandwich imagery remains only in the final “where to taste it” section.

### Casa Modena

- Added a dedicated two-product presentation for Prosciutto Crudo and Prosciutto Cotto.
- Kept Crudo as the article hero and displayed both products together after the producer section with individual labels.

### Layout and typography

- Preserved the shared split image/copy article hero on desktop and the stacked product-first layout on mobile.
- Verified long titles such as “Нашият Parmigiano Reggiano” and “Нашето сирене с трюфел” without broken words, overlap or isolated letters.
- Kept the first main focaccia story unchanged.

### Validation

- `npm ci` completed with 0 reported vulnerabilities.
- `npm run lint` completed successfully.
- `npm run build` completed successfully and generated all 22 routes.
- Checked 40 Bulgarian/English route responses and 57 local media references; all returned valid results and no local assets were missing.
- Rendered the top of all fourteen product articles and captured each landing-page product card individually.
- Rendered representative full desktop and mobile pages for Stracciatella, Gorgonzola, Casa Modena and Parmigiano Reggiano.

## Version 1.1.8 — Stage 2 home and menu refinement (2026-07-18)

### Home page

- Replaced the flattened generated hero artwork with a responsive editorial collage built from the five owner-supplied sandwich photographs: Carolina Reaper, Vegano, Gran Magro, Birra & Crudo and Mortadella.
- The collage remains real web content rather than one generated composite; each product has its own controlled crop, label and responsive position.
- Kept the two hero-title lines at exactly the same responsive font size and reduced their overall scale.
- Added one restrained “Веган френдли / Vegan friendly” badge linked to the Vegano menu item.
- Shortened the hero explanation to the essential product message: the focaccia is prepared and baked on site for the sandwiches.

### Menu

- Kept the menu hero completely free of background product images.
- Updated the Bulgarian and English intro copy to describe focaccia baked on site, Italian products and the curated drink selection.
- Strengthened the Vegano identification with a compact green leaf badge and a direct `#vegano` anchor.
- Rebuilt the wine presentation into clear “На чаша / By the glass” cards and controlled bottle cards.
- Kept all bottle photography inside the wine section and preserved the confirmed products, volumes and prices.

### Validation

- `npm run lint` completed successfully.
- `npm run build` completed successfully and generated all 22 routes.
- Verified HTTP 200 responses for the principal routes.
- Checked every local image/video reference used by source and styles; no missing assets were found.
- Rendered real built HTML in headless Chromium for desktop and mobile previews of the home and menu pages.

## Version 1.1.7 — Stage 1 technical recovery (2026-07-18)

### Scope

- Technical recovery only. No new redesign, new product photography or article-content changes were introduced in this stage.

### Corrected application structure

- Removed the obsolete nested project copy `focaccia-next-clean-2/`.
- Removed the stale PDF menu file and archive-only system metadata from the delivery tree.
- Kept the active Next.js application only in the repository root.

### Corrected missing layout rules

- Added the missing home-page container rules for `heroCollage`, `collageCaption`, `collageVeganMark` and `veganBadge`.
- Added the missing menu rules for `menuHero`, `veganTag`, `wineGroup`, `drinkSubsection`, `bottleGrid`, `bottleCard`, `bottleImage` and `bottleCopy`.
- Added explicit map, article and header utility classes used by the React files.
- Constrained wine bottle images to their cards, the vegan icon to its badge and the home image to its own hero container.

### Map recovery

- Replaced the missing `/images/taste/italy-simple.webp` reference with the existing `/images/taste/italy-silhouette.svg` asset.
- The region filter remains button-driven; no new map design was introduced in this technical stage.

### Validation

- Verified that every CSS-module class referenced by `pages/` and `components/` exists in its imported stylesheet.
- `npm ci` completed with 0 reported vulnerabilities.
- `npm run lint` completed successfully.
- `npm run build` completed successfully and generated all 22 routes.
- Verified HTTP 200 responses for the main pages and all local image references used by the recovered layouts.

## Version 1.1.6 — verified application update

### Home page

- Rebuilt the live home-page hero in `pages/index.js` and `styles/Home.module.css`.
- Replaced the tiled cut-out composition with one professional full-width sandwich collage.
- Kept both hero-title lines at the same responsive size.
- Added a clear “Веган френдли / Vegan friendly” badge.
- Corrected the final focaccia description so it no longer calls the product bread.

### Product stories

- Updated the product-story image files in `public/images/taste/products/` with the owner-supplied photographs for Gorgonzola, Parmigiano Reggiano, Provolone, truffle Caciotta, Prosciutto Crudo, Prosciutto Cotto, Burrata, Napoli salami and Carolina Reaper salami.
- Preserved the product-led shared article template: the product image leads, followed by producer and region context.
- Kept Porchetta, Mortadella and Gran Magro product photographs in the project for future product stories without assigning them to an unverified producer.

### Italy map

- Replaced the decorative map with one clean olive Italy outline.
- Removed numbers, blobs, guessed hotspots and direct region marks.
- Region selection remains explicit through labelled buttons, which filter the related stories.

### Menu

- Removed all menu-hero image references; no bottle can appear behind the title.
- Kept `МЕНЮ / MENU` as the eyebrow and updated the intro copy.
- Retained the Vegan badge on Vegano and the complete wine-by-the-glass / bottle sections.

### Deployment integrity

- Modified real files in `pages/`, `components/`, `styles/`, `lib/` and `public/`.
- Added version marker `data-site-version="1.1.6"` in the shared layout.
- `npm ci`, `npm run lint` and `npm run build` completed successfully.
- All 22 routes were generated.

## [1.1.5] — 2026-07-17

### Critical corrections

- Removed every menu-hero background image, so the Bollé bottle can no longer appear behind the menu heading.
- Replaced the previous emergency archive handoff with an actual code update based on Version 1.1.4.

### Home page

- Added a real five-sandwich web collage using the owner-supplied Carolina Reaper, Vegano, Gran Magro, Birra & Crudo and Mortadella photographs.
- The collage is built as responsive web content rather than one rough flattened cut-out image.
- Added a clear “Веган френдли / Vegan friendly” badge in the hero.
- Corrected the first home paragraph so it says that the focaccia for the sandwiches is prepared and baked on site.

### Menu

- Added a visible vegan leaf badge to the Vegano card in Bulgarian and English.
- Preserved the wine-by-the-glass and bottle sections while keeping bottle photography only inside the wine section.

### Product stories

- Replaced generic or unsuitable product covers with the owner-supplied images for burrata, Gorgonzola, truffle caciotta, Parmigiano Reggiano, Provolone, Prosciutto Crudo, Prosciutto Cotto, Salame Napoli and Carolina Reaper salami.
- Casa Modena now shows Prosciutto Crudo as the lead product and Prosciutto Cotto as a second product image inside the article.
- Kept stracciatella and mozzarella as close product-led visuals.

### Italy map

- Replaced the previous drawn/marked map with the owner-supplied simple Italy silhouette.
- Region selection remains explicit through labelled buttons, with no numbers, blobs or ambiguous markers on the map.

### Validation

- `npm ci`, `npm run lint` and `npm run build` completed successfully.
- Local image references and the clean ZIP structure were checked before delivery.

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

## Version 1.1.4 — emergency visual correction

- Removed the sparkling-wine bottle from the menu hero and replaced it with a restrained Italian food still life.
- Removed every sandwich cut-out used as a substitute for a product image in “The Journey of Taste”.
- Added a dedicated close-up photograph of stracciatella.
- Added product-led imagery for burrata, gorgonzola, truffle cheese, provolone, prosciutto and salami.
- Replaced the unclear numbered/blob map interaction with a clean Italy outline and explicit labelled region controls.
- Added image licensing and attribution notes in `IMAGE_CREDITS.md`.
