# Personal site refresh implementation plan

> Execute the approved design in this isolated checkout, with a focused source review and browser verification. User authorization already covers implementation; do not ask again for the design or workflow. Do not commit, push, or publish without the user's explicit request.

**Goal:** Implement the approved Lauren Leppert site, Rooklet overview, and reusable app-information layout with working navigation and sharing metadata.

**Architecture:** Retain Eleventy 2, Nunjucks, npm, and GitHub Pages. Convert the approved local concept into shared page templates, external CSS/JavaScript, and image assets. Use a real support page to exercise the information layout; future legal pages will consume the same layout when their actual text is supplied.

**Design source:** `/Users/velocicoder/.codex/visualizations/2026/09/11/01a09179-b43e-7270-87ec-2d21ea677b93/lauren-site-revision-two.html` and adjacent `site-content-brief-revision-two.md`.

## Constraints

- Preserve the approved text, including personal Option A and AI workflow Option B.
- Use `IGS Energy (contract)` and `QA consulting`, both `2025–present`; omit the recruiting firm's name.
- No availability advertising, client-development claims, achievement statistics, separate case studies, or prominent LLC branding.
- Coastory uses Lauren's existing Play Store profile screenshot; record its future refresh alongside store and coastory.app imagery.
- Retain the dark/light design, compact mobile imagery, and separate Rooklet destination.
- Do not fabricate privacy/terms text, platform availability, prices, or download links. Rooklet remains coming soon while its launch copy is finalized through Claude.
- Preserve production hosting and dependencies. Original checkout and original mockups remain available.

## Task 1: Approved homepage and shared site shell

- [x] Extract approved markup/assets from the concept into `src/index.njk`, `css/site.css`, and `images/apps/`.
- [x] Update `src/_includes/layouts/base.njk`, shared navigation/footer, `src/_data/site.json`, and `js/theme.js` for actual documents, working links, persisted theme, early theme initialization, and a skip link.
- [x] Build and show the first meaningful local preview using the approved homepage.

## Task 2: Rooklet and reusable information pages

- [x] Add `/apps/rooklet/` and `/apps/rooklet/support/` using page-specific titles, descriptions, canonical URLs, and accessible navigation.
- [x] Add `layouts/app-information.njk` with a breadcrumb, document heading, readable content width, and related links. Use it for factual Rooklet contact/support content; policy documents remain absent until actual text is provided.
- [x] Add a styled 404 page and robots/sitemap output. Ensure the Pages artifact includes `CNAME` and `.nojekyll`.

## Task 3: Sharing, documentation, and asset finish

- [x] Integrate the requested social-preview image and page-specific Open Graph/X metadata. Reuse the existing favicon if it is suitable.
- [x] Update README and CLAUDE.md to reflect the implemented structure and approved product/positioning decisions. Record unfinished launch copy and screenshot refresh work clearly.

## Task 4: Verification and review

- [x] Run the production build, JavaScript syntax checks, and a static check for broken local page/asset references and canonical metadata.
- [x] Exercise homepage, Rooklet, support, and 404 in desktop/mobile views. Check light/dark theme, theme persistence across routes, keyboard focus, 200% text, and no horizontal overflow.
- [x] Request an independent source review against this plan while completing visual QA; resolve material findings.
- [x] Hand off the working local preview and implementation status, noting that publication and final Rooklet legal text remain separate steps.

## Verification record — 2026-09-11

- Production build generates home, Rooklet, support, 404, robots, and sitemap. JavaScript syntax checks pass.
- All 66 local page/asset references and fragment destinations resolve across the four HTML pages. Canonicals, descriptions, social metadata, sitemap, CNAME, and .nojekyll are present.
- Independent source review found no Critical or Important issue. The one minor finding, browser toolbar color after a manual theme change, was fixed and checked in the browser.
- Browser checks covered desktop (1140 px), phone (390 px), and narrow phone (320 px) layouts; light/dark switching and persistence across pages; homepage anchors; Rooklet/support navigation; 404 return navigation; loaded images; and the keyboard skip link.
- A temporary stylesheet doubled all text sizes in four isolated build-output pages. This reproduced fixed-height app-caption clipping and narrow layout collisions; flexible panel heights, wrapping, and grid minimums resolved them. All four layouts then fit a 320 px viewport. This was a CSS text-size simulation, not native browser zoom. All temporary test pages/styles were removed.
- Saved normal-size desktop and mobile screenshots beside the approved concept under `site-implementation/` in the task output directory.
- No commit, push, or deployment was made. The local preview is retained for review. Final Rooklet product/policy text and refreshed product screenshots remain the documented launch follow-ups.
