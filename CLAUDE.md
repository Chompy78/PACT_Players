# PACT_Players

This is a [Quartz](https://quartz.jzhao.xyz/) digital-garden site. Player-facing
content (handouts, images, lore) lives under `content/`, written as
Obsidian-flavored Markdown (`[[wikilinks]]`, `![[embeds]]`).

## Content structure

- `content/00_Campaign/` — campaign-wide reference material (world map, house
  rules, roster). The `00_` prefix pins it above the arcs in Quartz's
  alphabetically-sorted explorer sidebar.
- `content/ArcNN_name/` — one folder per arc, e.g. `Arc01_prelude`,
  `Arc02_among_strangers`. Rename the folder's `name` suffix once an arc gets
  its real title (keep the `ArcNN_` numeric prefix for sort order).
- `content/ArcNN_name/Chapter_N/` — chapter-specific handouts and images.
- Arc-wide handouts (apply to the whole arc, not one chapter) go directly
  under `content/ArcNN_name/` as loose files, or grouped into category
  subfolders once there are enough of them (e.g. `NPCs/`, `Maps/`, `Misc/`).
  No wrapper folder — category folders sit as siblings to the `Chapter_N/`
  folders. Deliberate choice: Quartz's Explorer sidebar sorts folders
  alphabetically, and `Chapter_N` sorts before `M`/`N`-ish names, keeping
  chapters listed first. **Category folder names must sort alphabetically
  after "Chapter"** (i.e. avoid names starting with A or B, like "Artifacts"
  or "Bestiary") or they'll jump ahead of the chapters in the sidebar.
- Folder/file naming: no spaces — use underscores (e.g. `Chapter_1`, not
  `session 1`). Spaces cause messy URL-encoding in the built site.
- Every folder should have an `index.md` that links to what's inside it —
  this doubles as the page players see and mirrors the Explorer sidebar.

## Publishing

Pushing to `main` triggers `.github/workflows/deploy-pages.yml`, which runs
`quartz build` and deploys to GitHub Pages automatically. There's no
separate manual deploy step — a push to `main` **is** the deploy.

## Merge policy

- Changes confined to `content/` (new/edited `.md` files, images, renames,
  folder restructuring) — merge straight to `main` without asking for
  confirmation first. These are low-risk, easily reverted, and don't affect
  how the site builds.
- Changes touching `quartz.config.yaml`, `.github/workflows/`,
  `package.json`, or anything under `quartz/` (the generator itself) —
  confirm with the user before merging to `main`. These affect the build/
  deploy process for everyone, not just page content.
