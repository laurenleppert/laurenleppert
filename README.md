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
| `src/apps/rooklet/index.njk` | Rooklet overview, currently coming soon |
| `src/apps/rooklet/support/index.md` | Rooklet support and feedback contact |
| `src/apps/rooklet/rooklet.json` | App identity and URLs inherited by its pages |
| `src/_includes/layouts/base.njk` | Shared HTML, navigation, footer, fonts, canonical and sharing metadata |
| `src/_includes/layouts/app-information.njk` | Readable app-information layout, used by support and ready for approved policies |
| `src/_data/site.json` | Site identity, email, LinkedIn, default sharing image |
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

- `images/apps/coastory-profile.png` is Lauren’s existing Play Store profile screenshot, reused with its original pixels. Refresh it after the Coastory redesign along with the store and coastory.app imagery. Both homepage placements use this one file.
- `images/apps/rooklet-preview.png` is the approved development screenshot. Replace it with a launch capture when ready.
- `images/social-preview-v2.png` is the 1200 × 630 sharing image with the approved “I make better software…” headline; its new URL lets sharing services pick up the revision. `images/favicon.svg` is the small purple L icon. The original `logo.png` remains as a PNG fallback.
- Rooklet product copy now reflects Claude’s source review, including rough planning, meals, and movement, while keeping every module optional. The full content and policy handoff is retained with the private design-review artifacts; legal text is not yet finalized. No platform, price, release date, or download link is asserted.
- **Privacy and terms are not written or published by this change.** Once the real policies and operator details are approved, add Markdown pages under `src/apps/rooklet/privacy/` and `src/apps/rooklet/terms/` using `layouts/app-information.njk`, and then add their footer links. Optional `updated` front matter supplies a real revision date. The sitemap will pick up the pages automatically.

## Verification and publishing

Before publishing, run the production build and inspect home, Rooklet, support, and 404 at desktop and mobile widths in both themes. Check the theme across navigation, local links, image loading, and sharing metadata. There are no forms or backend services; contact uses email links.

Do not commit or push without Lauren’s explicit request. A push to `main` publishes the site through the existing workflow. `archive/` contains historical site files and is not built.
