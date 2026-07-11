# AGENTS.md

Instructions for any AI coding agent (Claude, Copilot, Cursor, Gemini, etc.)
working in this repository. This is the source of truth — `CLAUDE.md`,
`.cursorrules`, `.github/copilot-instructions.md`, and `GEMINI.md` are thin
redirects to this file and must stay that way (see "Pointer files" below).

## What this project is

**PACT Player Archive** — the official player-facing reference site for the
"PACT" tabletop campaign (GM: John Chow, campaign starts July 2026). It's a
[Quartz](https://quartz.jzhao.xyz) v5 static site publishing session logs,
NPCs, locations, factions, maps, handouts, and rules reference for players.
Built and deployed automatically to GitHub Pages at
`chompy78.github.io/PACT_Players` on every push to `main`.

**The GitHub repository is public.** Anyone can read the full repo,
including git history — not just the built site. Treat everything committed
here, including this file's siblings (`CHANGELOG.md`, `DECISIONS.md`,
`WORKLOG.md`), as visible to players and the public internet. See
"Spoiler and content safety" below before writing anything.

## Repo structure

- `content/` — the actual campaign content. This is almost always the only
  directory you should be editing for content requests. Organized by arc:
  `A01_prelude/`, `A02_arc2/`, `A03_arc3/` (future arcs are placeholder
  index pages until the GM confirms that arc has actually been played).
  Sessions nest under `<arc>/session N/`.
- `quartz/` — the Quartz site generator itself (upstream internals). Don't
  edit unless the task is specifically about customizing the generator.
- `docs/` — upstream Quartz documentation (how the generator works), not
  campaign documentation.
- `quartz.config.yaml` — site config: title, theme, enabled plugins.
- Root-level `AGENTS.md`, `CHANGELOG.md`, `DECISIONS.md`, `WORKLOG.md` —
  project/agent context, described below.

## Build and dev commands

- `npm run check` — typecheck (`tsc --noEmit`) + `prettier --check`
- `npm run format` — auto-format with prettier
- `npx quartz build --serve` — build and locally preview the site
- `npm run install-plugins` — runs automatically as `prebuild`; only run
  manually if plugin installation seems out of sync

## Content conventions

- Obsidian-flavored markdown. Link between pages with wikilinks:
  `[[Page Name]]` or `[[path/to/page|Display Text]]`.
- Embed images with `![[image.webp]]`.
- Frontmatter fields in use: `title`, `description`.
- Each arc folder has an `index.md` that links out to its pages; keep new
  pages linked from the relevant index so they're discoverable.
- Filenames/titles use Title Case matching existing handouts
  (`Children of Amber`, `My Village`).
- Voice: in-world, handout-style, matching the site's high-fantasy framing
  (Cinzel header font, EB Garamond body font). Write like a document a
  character would actually hand a player, not like software documentation.

## Spoiler and content safety

This is the **player-facing** archive of a live, ongoing campaign, in a
**public** repository. Get this wrong and a secret is live on the internet
the instant it's pushed — reverting doesn't remove it from git history.

- Never add GM-only secrets, twists, or answers to open mysteries to
  `content/` — or to `CHANGELOG.md`/`DECISIONS.md`/`WORKLOG.md`. If a log
  entry needs to reference that a secret-related decision was made, log the
  _fact_ of the decision, not the secret itself (e.g. "resolved how the
  Arc 2 betrayal will be foreshadowed" — not what the betrayal is).
- Don't populate `A02_arc2/` or `A03_arc3/` with real content until the GM
  confirms that arc has actually been played at the table.
- When asked to add session notes/handouts, include only what was actually
  revealed to players in-session — never GM prep notes, statblocks meant to
  stay hidden, or planned-but-unrevealed plot points.
- If something must be present but secret-until-unlocked (e.g. a puzzle
  answer), use the **encrypted-pages** plugin (already enabled in
  `quartz.config.yaml`), which password-protects the page client-side.
  Do **not** rely on a `content/private/` or similar "ignored" folder for
  this — `ignorePatterns` in `quartz.config.yaml` only skips a path during
  the Quartz _build_, it does not hide it from the public git repo. Ignored
  paths are still plaintext-visible to anyone browsing GitHub.
- **Automated backstop:** a CI check (`.github/workflows/deploy-pages.yml`,
  job `content-secret-check`, mirrored in
  `.github/workflows/content-guard.yml` for pull requests) fails the build
  if any file under `content/` contains the literal marker `SECRET:` or
  `GM-ONLY:`. This is a backstop, not the primary safeguard — don't rely on
  it instead of following the rules above.

## Keeping context efficient: the three log files

Root-level, newest-entry-on-top, dated. Read the top few entries of each
before starting non-trivial work instead of re-deriving context from git
log or prior conversation. Append one entry per file when it applies —
don't rewrite or reorder existing entries.

Which file an entry belongs in:

- **`CHANGELOG.md`** — what changed, from a reader's/player's point of
  view. "Would a player notice this?" If yes, it's a changelog entry.
  Keep it to a factual bullet, no rationale.
- **`DECISIONS.md`** — why something was chosen, ADR-style (Context /
  Decision / Alternatives considered). Use this for repo conventions,
  tooling choices, and structural calls — not for campaign lore decisions.
- **`WORKLOG.md`** — a summary of one AI-assisted work session: what was
  asked, what was done, what's still open. (Called "worklog", not
  "session", to avoid clashing with `content/.../session N/`, which means
  a TTRPG game session.)

A single event often produces entries in more than one file — that's fine
(e.g. adding a new handout might be a `CHANGELOG.md` line and a
`WORKLOG.md` entry, but not a `DECISIONS.md` one unless a real choice was
involved).

## Pointer files

`CLAUDE.md`, `.cursorrules`, `.github/copilot-instructions.md`, and
`GEMINI.md` exist only so tools that look for their own specific filename
still find their way here. They must contain nothing but a redirect to
this file. If you're an agent about to add substantive guidance, add it
here in `AGENTS.md`, not to one of the pointer files.

## Git workflow

- PRs follow `.github/pull_request_template.md`.
- Dependabot manages dependency bumps (`.github/dependabot.yml`) — don't
  hand-edit lockfile changes it generates.
