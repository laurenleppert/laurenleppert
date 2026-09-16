# laurenleppert.com

Lauren Leppert’s personal site: software quality experience, independent apps, and contact information. Built with Eleventy and Nunjucks; hosted on GitHub Pages at [laurenleppert.com](https://laurenleppert.com/).

## Development

```sh
npm ci
npm start
npm run build
```

The development server uses port 8080 by default. To use another port, run `npm start -- --port=8088`. Build output goes to `_site/` and is ignored by Git. The GitHub Actions workflow builds and publishes that directory when changes reach `main`. `CNAME` and `.nojekyll` are included in the artifact.

## Pages and shared source

| Location | Purpose |
| --- | --- |
| `src/index.njk` | Homepage: introduction, capabilities, apps, experience, personal paragraph, contact |
| `src/apps/rooklet/index.njk` | Rooklet overview and matching iOS / Android beta instructions |
| `src/apps/rooklet/support/index.md` | Rooklet support and feedback contact |
| `src/apps/rooklet/rooklet.json` | App identity and URLs inherited by its pages |
| `src/_includes/layouts/base.njk` | Shared HTML, navigation, footer, fonts, canonical and sharing metadata |
| `src/_includes/layouts/app-information.njk` | Readable app-information layout, used by support and ready for approved policies |
| `src/_data/site.json` | Site identity, email, LinkedIn, default sharing image |
| `src/_data/coastory.json` | Coastory website and verified beta destinations |
| `src/_data/rooklet.js` | Exposes Rooklet directory data globally without duplicating app URLs |
| `css/base.css`, `css/site.css` | Palette, layout, responsive styling, and focus states |
| `js/theme-init.js`, `js/theme.js` | Early theme initialization and optional persisted preference |
| `src/404.njk`, `src/robots.njk`, `src/sitemap.njk` | Error page and search-engine files |

App pages use ordinary paths under the personal domain, so future apps do not need separate domains. Coastory continues to link to its existing site.

## Content decisions

- The site presents Lauren’s QA experience and her own products. It does not imply she has had paid app or website development clients.
- Keep contact welcoming without advertising availability. IGS Energy is shown as `(contract)`; omit the recruiting firm. Both IGS and QA consulting run from 2025 to present.
- Keep detailed achievements and metrics on LinkedIn. Do not add invented case studies, testimonials, or availability banners.
- Leppert Labs LLC branding is deferred pending the owner’s decisions about its address and role as app operator.

## Assets and launch follow-ups

- `images/apps/coastory-profile-2026-09.jpg` is Lauren’s profile captured on 12 September 2026, used in both homepage placements.
- `images/apps/rooklet-today-2026-09-15.jpg` is the fresh Rooklet 0.3.0 simulator capture with fictional data, used in all three website placements. See `images/apps/README.md` for provenance.
- `images/social-preview-v2.png` is the 1200 × 630 sharing image with the approved “I make better software…” headline; its new URL lets sharing services pick up the revision. `images/favicon.svg` is the small purple L icon. The original `logo.png` remains as a PNG fallback.
- Rooklet product copy reflects Claude’s source review, including rough planning, meals, and movement, while keeping every module optional. Android beta links were approved for publication on 13 September 2026 and are stored in `androidBeta` in `src/apps/rooklet/rooklet.json`. The joining section explains Google Group membership, beta enrollment, and installation in that order. The iOS TestFlight link was approved for publication and verified on 15 September 2026. The overview has matching iOS and Android buttons leading to side-by-side platform instructions. The iOS invitation uses `iosBeta.joinUrl` from the app data; `src/_data/rooklet.js` also exposes that data globally. No pricing or release date is asserted.
- **Rooklet privacy policy approved for publication on 12 September 2026.** The policy is at `src/apps/rooklet/privacy/index.md`, linked in the Rooklet footer, and uses the existing `lauren@velocicoder.dev` contact. It describes local planning records, optional step access, platform backups and support feedback. Terms and LLC operator details remain deferred; do not add them without approved content.

The homepage uses the same “In beta” badge and “Explore” link for both apps. Keep beta buttons and joining instructions on each app’s page. Coastory’s beta access lives on `https://coastory.app/`. Rooklet retains `#android-beta` and adds `#ios-beta`. The stylesheet URL includes a content hash so returning visitors receive current styles.

## Verification and publishing

Before publishing, run the production build and inspect home, Rooklet, support, and 404 at desktop and mobile widths in both themes. Check the theme across navigation, local links, image loading, and sharing metadata. There are no forms or backend services; contact uses email links.

Do not commit or push without Lauren’s explicit request. A push to `main` publishes the site through the existing workflow. `archive/` contains historical site files and is not built.
