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

## Log as you go

This is a light port of `chompy78/PACT`'s documentation pattern — **no Effort/Risk system, no
`AGENTS.md`**, and `TASKS.md` is a plain two-section list (`## Open`, `## Done / not needed`), not
PACT's tagged task-board format. This file stays the only "how to work here" doc. What's added is a
memory layer (durable record of *what* changed and *why*) plus an open-work list — content/structure
decisions (like the folder-sort-order rule above) are otherwise easy to forget the reasoning behind, and
open work otherwise lives nowhere durable.

- **`TASKS.md`** — small maintenance/publishing tasks for this repo, not part of the published site.
  Two sections, `## Open` and `## Done / not needed` — an item can sit in "Done / not needed" as a
  record rather than being deleted outright, unlike PACT's strict graduate-to-CHANGELOG rule (useful
  here since some "done" items are really "confirmed, no action needed" notes worth keeping visible).
  **Work related to the PACT Player Agent that lives outside this repo (home-server, Open WebUI, etc.)
  is tracked on the separate `AI_home_server` project's own `TASK_BOARD.md` instead — don't duplicate
  it here.**
- **`CHANGELOG.md`** — one line per session/change, newest on top. Not backfilled past 2026-07-21 (this
  repo already has substantial git history that better speaks for itself via `git log` than a
  reconstructed changelog would).
- **`DECISIONS.md`** — the *why* behind a non-obvious choice — a content-structure rule, a merge-policy
  carve-out, anything a future session would otherwise have to re-derive from scratch. `Context →
  Options → Decision → Why → Status`, newest on top, `D-<YYYY-MM-DD>-<slug>` IDs.
- **`sessions/<date>-<topic>.md`** — the discussion, when a session involved a real judgment call or
  pivot worth preserving. Most sessions won't need one — a banner resize or a typo fix doesn't. (Root-
  level `sessions/`, not `docs/sessions/` — `docs/` here is Quartz's own vendored upstream documentation,
  not a place for this project's own notes.)
- **Commit style:** this repo uses plain, descriptive commit messages (`Match Arc01 banner width to
  homepage (750px)`), not PACT's Conventional-Commits `type(scope): summary` format. Follow the existing
  style, don't import PACT's.

Four skills were ported/added, adapted for this repo (`pick-task`/`run-task`/`sweep-tasks` were
deliberately **not** added — see below):
- **`/add-task`** — format a task description and append it to `TASKS.md`'s `## Open` section. No
  Effort/Risk tags.
- **`/close-session`** — writes `CHANGELOG.md`/`DECISIONS.md`/a session note, graduates finished
  `TASKS.md` items (move to `## Done / not needed`), proposes a commit, and runs it once you approve.
  Checks this file's own merge-policy distinction (content-only vs. build/config) rather than a code
  test gate.
- **`/cold-plan-review`** — draft a plan for external cold review before a risky change. Mainly useful
  for the build/config category this file already flags as needing confirmation.
- **`/log-lesson`** — mine a session for lessons general to AI-assisted coding (not specific to this
  repo), draft candidates for the shared `chompy78/ai-lessons-learned` repo.

**How to work a task — just ask directly.** There's no `/pick-task`/`/run-task` here: `TASKS.md` is
short and its items are one-off human-judgment calls (e.g. "decide when this recap goes player-facing"),
not a queue of independently-safe work to automate. Say something like "let's do the recap status flip"
or "what's next in TASKS.md, let's do it" — read `TASKS.md`, confirm which item if it's ambiguous, do
the work, then `/close-session` logs and graduates it. If this file ever grows into a real backlog of
independently-executable items, that's the signal to reconsider porting `pick-task`/`run-task` after
all — see PACT's own versions as the worked example.
