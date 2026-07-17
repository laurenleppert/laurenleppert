# laurenleppert.com

**Repo:** https://github.com/laurenleppert/laurenleppert
**Type:** Eleventy static site → GitHub Pages (custom domain via `CNAME`)

## Summary
A single-page personal landing site: name, a two-line role tagline, a short bio,
and two links (LinkedIn + Contact). Deliberately minimal — a clean professional
front door, not a portfolio. The heavier product story now lives at **coastory.app**
(built separately); this site stays lean and low-maintenance.

Coastory is mentioned by name in the bio but **not linked** until the app is on the
app stores.

## Tech Stack
- **Generator:** Eleventy (11ty)
- **Templates:** Nunjucks
- **Styling:** `css/base.css` (tokens + reset) + `css/landing.css` (the page)
- **Deploy:** GitHub Actions builds with Eleventy and publishes `_site/` to Pages

## Key Commands
```bash
npm install                 # first time
npx @11ty/eleventy --serve  # dev server (http://localhost:8080)
npx @11ty/eleventy          # build to _site/
```

## Workflow Rules
- Do NOT commit or push changes unless explicitly asked.
- Commit messages should be descriptive and list key changes.
- Test changes locally (build + eyeball in a browser) before committing when possible.

## Architecture
- `src/`
  - `index.njk` — the entire page (name, tagline, bio, links, footer, theme toggle)
  - `_includes/layouts/base.njk` — HTML shell (head, fonts, styles, theme script)
  - `_data/site.json` — title, description, email, LinkedIn URL
- `css/base.css` — CSS variables (purple palette, fonts), reset, base element styles
- `css/landing.css` — all landing-page layout and styling
- `js/theme.js` — dark/light toggle (persisted, respects `prefers-color-scheme`)
- `images/` — `logo.png` is the favicon
- `archive/` — legacy files from the old multi-section site; **not part of the build**
- `_site/` — build output (gitignored)

## Editing the Page
Nearly everything lives in `src/index.njk`:
- **Name / tagline / bio** — plain text in the `.landing-*` markup
- **Links** — the `.landing-links` block (LinkedIn URL + Contact `mailto:` come from `site.json`)
- **Email / LinkedIn / meta description** — `src/_data/site.json`

Keep the role wording consistent across the tagline, bio, and `site.json` description
(currently "Software QA Engineer").

## Design Notes
- Fonts: Fredoka (headings) + Nunito (body), loaded from Google Fonts in `base.njk`
- Accent: purple (`--purple-primary`), lightened in light mode
- Single centered column, soft purple radial glow, pill link buttons
- Dark/light toggle floats top-right and works site-wide

---

When you require my approval or input, end your message with exactly:
WAITING_FOR_APPROVAL
Do not continue until I respond.
