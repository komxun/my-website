# Komsun Tamanakijprasart — Portfolio

A personal portfolio built with [Astro](https://astro.build). The site is
content-driven: to add work you just drop a Markdown file into the right
folder — no page code to touch.

## Commands

| Command           | Action                                   |
| :---------------- | :--------------------------------------- |
| `npm install`     | Install dependencies                     |
| `npm run dev`     | Start the dev server at `localhost:4321` |
| `npm run build`   | Build the production site to `./dist/`   |
| `npm run preview` | Preview the production build locally     |

## Project structure

```text
src/
├── components/        Reusable UI (cards, headers, layouts)
├── content/           ← YOUR CONTENT LIVES HERE (Markdown)
│   ├── research/
│   ├── projects/
│   ├── software/
│   ├── knowledge/     (blog / technical articles)
│   └── videos/        (YouTube)
├── content.config.ts  Collection schemas (the frontmatter fields)
├── layouts/           Base page shell (<head>, nav, footer)
├── lib/
│   ├── site.ts        ← Brand, navigation and social links
│   └── format.ts      Date / reading-time helpers
├── pages/             Routes (listing + detail pages, auto-generated)
└── styles/global.css  Design system (colours, typography, prose)
```

## Adding content

Each section is an Astro **content collection**. To add an item, create a new
`.md` file in the matching `src/content/<section>/` folder with the required
frontmatter, then write the body in Markdown. The listing and detail pages
update automatically. Set `draft: true` to hide an entry, and `featured: true`
to surface it first (and on the home page for research/projects).

### Research — `src/content/research/*.md`

Supports linking to a published paper (online) and/or a downloadable PDF, plus
a thumbnail. All publication fields are optional.

```md
---
title: "Swarm Intelligence for Cooperative UAVs"
description: "One-line summary shown on cards."
area: "Multi-Agent Systems"
date: 2025-01-15
status: "ongoing"        # ongoing | completed | exploratory
tags: ["swarm", "multi-agent"]
venue: "IEEE Transactions on Aerospace, 2025"   # optional
authors: ["K. Tamanakijprasart"]                 # optional
paperUrl: "https://arxiv.org/abs/..."            # optional — online paper / DOI link
pdf: "/papers/swarm-intelligence.pdf"            # optional — put the file in public/papers/
doi: "10.0000/example.2025.0001"                 # optional
cover:                                            # optional thumbnail
  src: "/images/research/swarm.jpg"
  alt: "Simulated UAV swarm"
featured: true
---

Markdown body...
```

- **Online paper:** set `paperUrl` → a "Read the paper" button + a "Paper" link
  on the card.
- **PDF:** drop the file in `public/papers/` and set `pdf: "/papers/<file>.pdf"`
  → a "Download PDF" button + a "PDF" link on the card.
- **Thumbnail:** set `cover.src` (file in `public/images/...`); otherwise a
  gradient placeholder is shown.

### Projects — `src/content/projects/*.md`

```md
---
title: "Autonomous Guidance & Collision Avoidance"
description: "One-line summary."
category: "UAV Autonomy"
date: 2025-03-10
status: "active"         # active | completed | archived
tags: ["guidance", "python"]
github: "https://github.com/you/repo"   # optional
demo: "https://..."                      # optional
featured: true
---
```

### Software (GitHub-linked) — `src/content/software/*.md`

```md
---
title: "flight-sim-tools"
description: "One-line summary."
language: "Python"
date: 2025-02-01
tags: ["python", "simulation"]
github: "https://github.com/you/repo"   # required
docs: "https://..."                      # optional
demo: "https://..."                      # optional
stars: 42                                # optional
featured: true
---
```

### Knowledge / blog — `src/content/knowledge/*.md`

```md
---
title: "Understanding PID Control"
description: "One-line summary."
date: 2025-02-18
category: "Control Theory"
tags: ["control", "pid"]
featured: false
---

Markdown body (supports code blocks, tables, images)...
```

### Videos (YouTube) — `src/content/videos/*.md`

```md
---
title: "UAV Simulation Walkthrough"
description: "One-line summary."
youtubeId: "dQw4w9WgXcQ"   # the ID from the video URL
date: 2025-03-01
category: "Tutorial"
tags: ["simulation"]
featured: true
---
```

> For `https://youtu.be/abc123`, the `youtubeId` is `abc123`.

## Thumbnails (home-page film strips)

The home page shows each section as a horizontal **film strip** of thumbnail
cards. Thumbnails are resolved like this:

- **Videos** use the YouTube thumbnail automatically (from `youtubeId`).
- **Research / Projects / Knowledge** use an optional `cover` image — add it to
  the frontmatter:

  ```md
  cover:
    src: "/images/my-thumbnail.jpg"   # put the file in public/images/
    alt: "Short description"
  ```

- If no `cover` is set, a coloured **gradient placeholder** (with the item's
  initials) is shown — so strips always look complete.

Put image files in `public/` (e.g. `public/images/foo.jpg`) and reference them
as `/images/foo.jpg`.

## Site settings

- **Brand, nav links, social links:** edit `src/lib/site.ts`.
- **Colours, fonts, spacing, Markdown (`.prose`) styling:** edit
  `src/styles/global.css`.
- **About page copy, focus areas, timeline:** edit `src/pages/about.astro`.

The sample entries currently in `src/content/` are placeholders — edit or
delete them and add your own.
