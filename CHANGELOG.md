# PACT_Players — Changelog

> One line per change/session, **newest first**. *Why* lives in `DECISIONS.md`. Not backfilled past
> 2026-07-21 — this repo's prior history is better read via `git log` than reconstructed here.

- **2026-07-22 · Reshuffled Chapter 1/2 handouts** — moved the "My Summer (by Wren)" handout to Chapter 1
  and renamed it to `My Spring by Wren.png` (matching Ch. 1's now-established spring theme); cleared
  Chapter 2's two remaining handouts (`funeral-notice.png`, `market (1).png`) back to the standard "No
  player-facing handouts have been added yet." placeholder, pending new art to re-upload.
- **2026-07-22 · Set, then trimmed, the Arc01 chapter titles** — `Chapter_1`–`Chapter_4`'s `index.md`
  frontmatter titles and the matching `Arc01_prelude/index.md` section headers went from generic
  "Chapter N Handouts" to full names ("Chapter 1 Spring: The Broken Charm", etc.), then got shortened
  twice more in the same session once the sidebar showed them too cramped — "Chapter" → "Ch.", then
  dropped the season word entirely. Final form: `Ch. 1: The Broken Charm`, `Ch. 2: Market Day`,
  `Ch. 3: [REDACTED]`, `Ch. 4: [REDACTED]` (the last two intentionally spoiler-redacted).
- **2026-07-22 · Added a GitHub source-link under each page's date stamp** — new local Quartz plugin
  (`local-plugins/github-source-link/`) adds a small "View source on GitHub" line under the existing
  date/read-time stamp, linking to that page's Markdown file on `main`. Built and build-verified locally
  (`npx quartz build`, checked the rendered HTML and that the resulting GitHub URLs 200) before pushing —
  see `D-2026-07-22-github-source-link-plugin` for why this links to the file rather than its exact last
  commit.
- **2026-07-22 · Added the campaign pitch and character-advancement pages; consolidated Chapter 1
  handouts** — new `content/00_Campaign/Campaign_Pitch.md` ("No One Stays a Child") and
  `content/00_Campaign/Character_Advancement.md`, both linked from the homepage, the Arc01 Prelude index,
  and the Campaign Reference index. `Chapter_1/index.md` now inlines its handouts — including the
  previously-orphaned `The cubby.png` (flagged in `D-2026-07-21-handout-image-orientation-width`'s
  Consequence note) — instead of linking out to a separate page, matching Chapter 2's format; removed
  Chapter 2's redundant standalone stub pages (`funeral-notice.md`, `market (1).md`) in the same pass.
- **2026-07-21 · docs(tooling): light-ported PACT's log-as-you-go pattern** — added `CHANGELOG.md`
  (this file), `DECISIONS.md`, and 4 adapted `.claude/commands/*.md` skills (`add-task`, `close-session`,
  `cold-plan-review`, `log-lesson`), ported from `chompy78/PACT` and light-touch compared to the full
  ports done for `chompy78/family-hub` and `chompy78/wildlife-explorer` — no Effort/Risk system, no
  `AGENTS.md`, `CLAUDE.md` stays the only "how to work" doc; `pick-task`/`run-task`/`sweep-tasks`
  deliberately not added, no queue of independently-safe work for them to automate. `TASKS.md` isn't new
  here — a concurrent session had already added a real one (`e1e8886`, tracking the PACT Player Agent
  fast-path plan) while this port was in progress; `CLAUDE.md`/`/close-session` were updated to describe
  its actual structure rather than a competing placeholder. See `DECISIONS.md`'s
  `D-2026-07-21-scaffold-port-light` and `D-2026-07-21-tasks-md-correction`.
