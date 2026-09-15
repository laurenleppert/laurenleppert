# laurenleppert.com

**Repository:** https://github.com/laurenleppert/laurenleppert

**Stack:** Eleventy 2 + Nunjucks → GitHub Pages; custom domain via `CNAME`.

## Purpose and approved positioning

Personal site combining established QA experience, independent apps, and approachable contact information. The homepage and Rooklet overview follow the approved September 2026 design. Coastory links to **coastory.app**; Rooklet and future apps can have public pages under `/apps/` on this domain.

- Lauren has built her own apps and websites, but has not been hired to design them for clients. Do not imply client development work.
- Do not advertise availability or add hiring banners, testimonials, invented case studies, or achievement statistics. LinkedIn holds the detailed résumé.
- Use **IGS Energy (contract)** and **QA consulting**, both **2025–present**. Omit the recruiting firm’s name.
- Preserve approved personal wording (starts “Most of what I build starts with something I care about…”) and AI workflow wording (starts “I use AI across the QA process…”).
- The approved homepage headline is “I make better software, whether I’m testing it or building it.” Use rounded Fredoka lettering, with a small handwritten “made by me” note beside the app previews and no arrow on that note.
- Do not use em dashes in public site copy, page titles, sharing metadata, or image text. Use ordinary sentences, commas, colons, or a vertical bar for title separators.
- Rooklet’s **Android beta** links were approved for publication on 13 September 2026. Their Android buttons lead to `/apps/rooklet/#android-beta`: join the Google Group, opt into the test, then install from Google Play using the same account. The verified links live in `androidBeta` in its directory data. The **iOS beta** TestFlight link was approved for publication and verified on 15 September 2026. Both the homepage and overview link directly to it. The URL lives in `iosBeta.joinUrl` in the same directory data; `src/_data/rooklet.js` makes that data available to the homepage. Keep both platforms described as beta. Source-grounded product copy and privacy facts were obtained from Claude on 11 September 2026. Current public scope includes rough week/month planning and optional habits, meals, and movement. Do not equate a visible habit card with mandatory participation, or promise lossless changes or device-exclusive storage when platform backup can apply. Do not invent release, platform, or pricing claims. All modules, including habits, remain optional to use.
- Leppert Labs LLC branding and app operator details are deferred.
- Personal-site contact links use **me@laurenleppert.com**. Rooklet contact, support, and policy pages use **lauren@velocicoder.dev**, supplied by `appEmail` in its directory data. Do not replace the global site email for an app-specific change.
- Rooklet privacy policy and publication were explicitly approved on 12 September 2026 for `/apps/rooklet/privacy/`, using the existing app contact. The page and Rooklet footer link are present. Terms and LLC operator details still need approved content; do not invent them.

## Workflow

- **Do not commit or push unless explicitly asked.** A push to `main` publishes via GitHub Actions.
- Preserve existing dependencies and hosting. `_site/` is generated and ignored.
- Build and inspect in a browser before handing off changes. Check desktop/mobile, both themes, local navigation, image loading, and keyboard focus.
- `npm ci` installs, `npm start` serves, `npm run build` builds. An alternate preview port uses `npm start -- --port=8088`.

## Source map

- `src/index.njk`: homepage.
- `src/apps/rooklet/`: overview, inherited app data, and support.
- `src/_includes/layouts/base.njk`: metadata and shared shell.
- `src/_includes/layouts/app-information.njk`: support and future approved policy documents.
- `src/_includes/partials/`: navigation and footer.
- `src/_data/site.json`: contact, identity, default sharing metadata.
- `css/base.css`: shared color tokens and reset. `css/site.css`: all layout and component styling.
- `js/theme-init.js`: pre-paint theme. `js/theme.js`: accessible toggle, safe persistence, system preference changes.
- `images/apps/`: local app icons and screenshots. `images/social-preview-v2.png`: current sharing graphic. `images/favicon.svg`: small icon.
- `archive/`: historical assets, excluded from the build.

## Design and assets

Purple light/dark palettes, Manrope for professional text, Fredoka for the name, homepage headline, and selected personal/product headings. Patrick Hand is used only for the “made by me” note. Preserve compact phone imagery on mobile, readable longform pages, and the quiet contact wording.

Both Coastory previews use **Lauren’s profile**, freshly captured from Coastory 0.9.3 (18) on 12 September 2026. Keep Lauren’s profile for profile screenshots; use the sample data and verified CC0/public-domain photos for other Coastory website and store screenshots. Rooklet’s Today image is a current simulator capture with fictional example tasks. Asset provenance lives in `images/apps/README.md`.

The site works as static HTML without JavaScript; only the theme preference is enhanced. Fonts come from Google Fonts as in the previous site. See README for policy-page integration and launch follow-ups.

---

When you require my approval or input, end your message with exactly:
WAITING_FOR_APPROVAL
Do not continue until I respond.
