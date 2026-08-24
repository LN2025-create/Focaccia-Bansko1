# AI / Contributor Context — Read First

This repository contains its own continuity record so work does not depend only on chat history.

## Mandatory reading order

1. `PROJECT_STATE.json`
2. `PROJECT_HISTORY.md`
3. `CHANGELOG.md`
4. Current source files

## Non-negotiable rules

- The active site is the Next.js application in the repository root.
- The obsolete nested copy `focaccia-next-clean-2/` was removed. If it reappears in a future archive, do not edit or merge from it.
- Do not bring completed tasks back into a new prompt or release plan.
- “Пътят на вкуса” and its articles already exist; the active work is refinement and correction.
- Confirm the real code state before stating that something exists, is fixed or has been tested.
- Work from the latest GitHub archive only.
- Update the continuity files before creating the next delivery ZIP.

## Version 1.1 locked decisions

- Do not change the main focaccia article unless explicitly requested.
- Product stories lead with the product, not the producer.
- The landing page lists the main story first, then every product story vertically.
- The Italy map stays at the bottom and filters stories by region.
- Do not render “no market-share data” messages. Omit the market section when no reliable exact claim is supported.
- Home quick fact 03 is “Кафе, вино и кроасан”.

## Version 1.1.2 locked decisions

- Home hero lines have equal font size, are smaller than before and must not leave “Банско” alone.
- Internal article headings are intentionally smaller than page titles and may not split words.
- Product article producer blocks show the role as a small eyebrow and only the producer name as the large heading.
- The home hero uses one cohesive photographic sandwich scene without a repeated giant logo or visible development commentary.
- Mozzarella uses the close-up product photo, not the supermarket package screenshot.
- Facebook, Instagram and TikTok links remain available through the small left social rail on every page.
- The Version 1.1.2 vintage numbered map decision was superseded by Version 1.1.3; do not restore it.

## Version 1.1.3 locked decisions

- Do not restore any cut-out, multi-tile or flattened collage. The approved home hero is one cohesive photographic scene with clear separation between text and image.
- Home copy must say that the focaccia is baked for the sandwiches; do not imply bread or plain focaccia is sold.
- Product stories use close product photography and a split image/copy hero.
- The interactive Italy map uses a clean outline and highlighted regions, without numbered markers.
- Social buttons are coloured and remain on the left; the separate larger Google review button stays on the right.
- Google review URL: `https://g.page/r/CW54B7v5AtugEAE/review`.
- Wine menu includes Fiano, Primitivo and Bollé bottle entries and photos at the confirmed prices.


### Version 1.1.4 visual rule
Product-story cover cards must show the ingredient itself. Never substitute a sandwich cut-out for an ingredient photograph. Sandwich photographs belong only in the final “where to taste it” section.

### Version 1.1.6 locked decisions

- The menu hero has no background product image. Wine bottle photography belongs only in the wine list.
- The home hero must remain a responsive single photographic scene; the image must never overlap or obscure the headline.
- “Веган френдли / Vegan friendly” is visible on the home page, and Vegano carries a vegan leaf badge in the menu.
- Existing product stories use the owner-supplied ingredient photographs where provided. Never replace an ingredient with a sandwich photograph.
- The map uses the owner-supplied simple Italy silhouette and labelled region buttons; no numbered or blob markers.

## Version 1.1.7 recovery baseline

- Version 1.1.7 is a technical recovery baseline, not a visual redesign.
- The nested duplicate project is absent.
- Keep the container CSS for the single home hero image, menu bottles, vegan badges and secondary product media.
- The Journey of Taste map currently uses `/images/taste/italy-silhouette.svg` only to restore a valid asset reference. Final map design belongs to Stage 4.
- Continue with Stage 2 only after the owner confirms the deployed 1.1.7 baseline is stable.

## Version 1.1.8 locked decisions

- The approved home hero is one cohesive photographic scene. Do not restore a five-tile layout, flattened composite or cut-out collage.
- Both home hero lines use the same font size; the italic line is only a style change, not a size change.
- The home hero copy remains concise. Detailed fermentation information belongs in the main focaccia article.
- Keep one home Vegan Friendly badge linked to Vegano and one compact Vegano badge in the menu.
- The menu hero remains image-free. Bottle images are restricted to the wine bottle cards.
- The wine section uses separate visual groups for wine by the glass and bottles.


## Version 1.1.9 locked decisions

- All fourteen product stories use the same product-first card and split-hero structure.
- Keep the owner-supplied close-product photographs assigned in `lib/tasteProductMeta.js`; do not replace them with sandwich cut-outs or unrelated stock images.
- Burrata, Stracciatella, Gorgonzola, truffle Caciotta, Parmigiano Reggiano, Provolone, Prosciutto Crudo, Prosciutto Cotto, Salame Napoli and Carolina Reaper use the Version 1.1.9 controlled crops in `public/images/taste/products-v119/`.
- Casa Modena must continue to show Prosciutto Crudo and Prosciutto Cotto as two separately labelled products.
- The main focaccia story remains unchanged.
- Stage 4 is limited to the final Italy-map treatment and full-site visual QA unless the owner explicitly adds new scope.

## Version 1.2.0 locked decisions

- The final Journey of Taste map uses only `/images/taste/italy-silhouette.svg` plus labelled region buttons.
- Do not restore `italy-journey-map`, `italy-vintage-map`, numbered markers, blobs, guessed hotspots or approximate region shapes.
- The map copy must describe the selector accurately; do not claim that individual regions are drawn on the silhouette.
- Region buttons keep `aria-pressed` and `aria-controls`; the selected region remains visible in text.
- The canonical release/archive naming is `Focaccia-BG-V<semantic-version>.zip`, identical in chat, project records and delivered filename.
- Version 1.2.0 completes Stage 4. Do not list Stages 1–4 again as active work.


## Version 1.2.4 locked decisions

- The Google rating endpoint caches live Google Places data for 30 minutes; the client widget refreshes every 30 minutes. Display an exact count for live data and a plus sign only for the fallback.
- The menu includes a bilingual Salumeria section before drinks, with EUR-only prices. All entries are per 100 g except fresh Burrata at 125 g.
- The home Salumeria feature card links directly to `/menu#salumeria`.
- The freshly baked croissant is served with Corsini espresso or cappuccino and can be plain or filled with chocolate, pistachio cream or apricot.
- Beer cards use the owner-supplied Birra Moretti, Peroni and Peroni Nastro Azzurro bottle images. Do not replace them with unrelated stock photography.
## Version 1.2.5 continuity

The Google Business Profile connection is live in production. V1.2.5 adds `/api/business-media`, `useBusinessMedia` and `HeroGoogleGallery`. The homepage hero slideshow shows live profile photos, advances every 4.5 seconds and opens a circular swipe/keyboard lightbox. Reuse the existing five GBP Vercel environment variables; do not add public/client-side secrets.

