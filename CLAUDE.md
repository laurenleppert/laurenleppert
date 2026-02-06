# Project 2: Portfolio Site (laurenleppert.com)

**Path:** `C:\Repos\PortfolioSite`
**Repo:** https://github.com/laurenleppert/laurenleppert
**Type:** Eleventy static site

## Summary
Personal portfolio site with four distinct sections, each with unique design personalities. Built with Eleventy for easy content updates via markdown and JSON data files.

## Tech Stack
- **Generator:** Eleventy (11ty)
- **Templates:** Nunjucks
- **Styling:** Modular CSS per section
- **Content:** Markdown files + JSON data

## Key Commands
```bash
cd C:\Repos\PortfolioSite
npm install                      # Install dependencies (first time)
npx eleventy --serve             # Run dev server (http://localhost:8080)
npx eleventy                     # Build to _site/
```

## Workflow Rules
- Do NOT commit or push changes unless explicitly asked.
- Commit messages should be descriptive and list key changes.
- Test changes locally before committing when possible.

## Architecture
- `src/` - Source files
  - `_includes/layouts/` - Base templates (base.njk, page.njk, dispatch.njk)
  - `_includes/partials/` - Reusable components (nav.njk, footer.njk)
  - `_includes/components/` - UI components (timeline-item, project-card, dispatch-card)
  - `_data/` - JSON data files (site.json, navigation.json, timeline.json, trackrecord.json)
  - `content/` - Editable markdown content by section
  - `dispatches/` - Blog posts with frontmatter
  - `*.njk` - Page templates (index, work, projects, dispatches, track-record)
- `css/` - Modular stylesheets (base.css, nav.css, home.css, work.css, projects.css, dispatches.css, track-record.css)
- `js/` - Theme toggle and navigation scripts
- `_site/` - Build output (gitignored)

## Sections & Design Personalities

| Section | Path | Personality | Color Emphasis | Key Data |
|---------|------|-------------|----------------|----------|
| Home | `/` | Welcoming, clear | Balanced purple | - |
| Work | `/work/` | Professional, clean | Minimal purple, neutrals | timeline.json |
| Projects | `/projects/` | Bold, techy, edgy | Neon accents | content/projects/*.md |
| Dispatches | `/dispatches/` | Playful, relaxed | Soft purple, warm | dispatches/*.md |
| Track Record | `/track-record/` | Dashboard-style | Stats-focused | trackrecord.json |

**Unifying elements across all pages:**
- Same nav structure and logo
- Purple as the accent color (varying intensity per section)
- Same fonts (Fredoka + Nunito), but weight/usage varies
- Consistent footer
- Theme toggle (dark/light) works everywhere

## Content Editing

### Work Experience
Edit `src/_data/timeline.json`:
```json
{
  "title": "Job Title",
  "company": "Company Name",
  "dates": "Start – End",
  "location": "City, State",
  "bullets": ["Achievement 1", "Achievement 2"]
}
```

### Coaster Stats (Track Record)
Edit `src/_data/trackrecord.json`:
- `stats`: Total counts (credits, parks, states, countries)
- `topCoasters`: Ranked favorites
- `parksByYear`: Year-by-year park visits
- `allParks`: Lifetime park list with visit counts
- `milestones`: Credit milestones (#100, etc.)

### Intro/Body Text
Edit markdown files in `src/content/`:
- `home/intro.md` - Homepage intro blurb
- `home/guidance.md` - Orientation text
- `work/intro.md` - Work page intro
- `projects/intro.md` - Projects page intro
- `projects/queuequest.md` - QueueQuest description
- `projects/layover-launcher.md` - Layover Launcher description
- `dispatches/intro.md` - "This is not a blog" explainer

### Blog Posts (Dispatches)
Add `.md` files to `src/dispatches/` with frontmatter:
```markdown
---
title: Post Title
date: 2025-02-05
tags:
  - tag1
  - tag2
description: Short description for cards
---

Post content here...
```

## CSS Architecture

### Base Variables (`css/base.css`)
```css
:root {
  --purple-primary: #bf00ff;
  --purple-dark: #7a00cc;
  --purple-soft: #d580ff;
  --bg-dark: #121212;
  --text-light: #eeeeee;
  --font-heading: 'Fredoka', sans-serif;
  --font-body: 'Nunito', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

### Section-Specific Styles
- `work.css` - Professional, muted, clean lines
- `projects.css` - Bold, angular, neon green accents
- `dispatches.css` - Soft, rounded, warm feel
- `track-record.css` - Dashboard cards, stats grid

---
