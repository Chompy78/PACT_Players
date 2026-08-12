# PACT_Players — Changelog

> One line per change/session, **newest first**. *Why* lives in `DECISIONS.md`. Not backfilled past
> 2026-07-21 — this repo's prior history is better read via `git log` than reconstructed here.

- **2026-08-12 · Published `Amble_Campaign/Amble.md`** — flipped `draft: true` → `false` after John's
  read-through confirmed the content is good.
- **2026-08-12 · First player-facing Amble/world-lore pages: `Amble.md`, `Wider_World_Kids.md`,
  `Peoples_and_Magic.md` (live), `Kingdom_of_Halden_Adults.md` (draft, deliberate reveal gate), rebuilt
  `House_Rules.md`** — kid-vs-adult world knowledge split into separate, independently `draft`-gated
  files, the split visible in the filename itself. Stoneharbour explicitly held off pending Arc02. See
  `D-2026-08-12-kid-adult-knowledge-gating` and `sessions/2026-08-12-amble-world-lore-build.md`.
- **2026-08-11 · Decided the player agent's data-source boundary: `contentIndex.json`, not raw repo
  access** — see `D-2026-08-11-player-agent-contentindex-boundary`. No repo-side changes; infra build
  tracked on `home-ai-server`.
- **2026-08-09 · Published Chapter 3: "Autumn: Who to Believe"** — flipped `draft: true` → `false` on
  `chapter-03-draft-Autumn-Who-to-Believe.md` per the player's explicit request.
- **2026-08-09 · `z-cold`/`z-uploads` drop-zone folders, auto-synced to a dedicated `zcold` branch** —
  external background script watches both folders and auto-pushes anything dropped in them within
  seconds, via a git worktree + junction (not tracked on `main`). See
  `D-2026-08-09-zcold-autosync-setup`.
- **2026-08-09 · Added Chapter 3 draft: "Autumn: Who to Believe"** — pulled the chapter-3 prose and its
  three illustrations (bell-loft discovery, fey creature at the lime pits, apprenticeship ceremony) in
  from the `zcold` branch's `z-uploads/` drop zone, stripped the GM-only review/metadata footer,
  renamed the images with the `-ignoremd` marker, and linked it from both `The_Story_So_Far/index.md`
  and `Arc01_prelude/index.md`. Left `draft: true` pending your read, same as Chapters 1–2 were. See
  `D-2026-08-09-chapter-03-from-zuploads`.
- **2026-08-08 · Trimmed the Arc01: Prelude teaser** — dropped "Two chapters told so far, more on the
  way" from `The_Story_So_Far/index.md`'s Arc01 blurb.
- **2026-08-08 · Swapped "The Story So Far" banner, trimmed intro** — banner is now
  `arc01_prelude_banner.jpg` (was `H08-Wrens-Sketchbook.jpeg`, reused per the player's preference despite
  already being Arc01_prelude's own banner); dropped the "not a rules reference or handout gallery"
  aside from the intro blurb.
- **2026-08-08 · Gave "The Story So Far" a banner and real copy** — added `H08-Wrens-Sketchbook.jpeg` as
  the section banner (reused from Chapter 3's handout gallery; a sketchbook-of-memories fits the "story
  so far" theme without claiming a page-banner slot another page already owns), rewrote the top intro as
  an actual jacket-copy blurb about Amble and the story itself (was describing the page's own format
  instead of the story), and added a short blurb under "Arc01: Prelude" teasing what the two chapters
  cover.
- **2026-08-08 · Revealed Ch. 3's title** — `Arc01_prelude/Chapter_3/index.md` and the matching entry in
  `Arc01_prelude/index.md` changed from `[REDACTED]` to "Who to Believe." Chapter 4 stays `[REDACTED]`
  (not asked for).
- **2026-08-08 · Flattened "The Story So Far" chapter links one level** — `content/The_Story_So_Far/
  index.md`'s "Arc01: Prelude" section now links directly to both chapters instead of a single
  "Sessions" link into `Arc01_prelude/index.md`; removes an unnecessary extra click before reaching the
  actual story text. `Arc01_prelude/index.md` itself is unchanged (still needed per this repo's
  every-folder-needs-an-index.md convention).
- **2026-08-08 · Published both "The Story So Far" chapters** — flipped `draft: true` → `false` on
  `chapter-01-draft-Spring-The-Broken-Charm.md` and `chapter-02-draft-Summer-Market-Day.md`; the 404s the
  player hit clicking into them from the sessions index were the draft gate doing its job, not a broken
  build. Published anyway per explicit request — the still-open Moral Ledger sequencing question is a
  labeling detail in an external document, nothing visible in the prose itself. See `DECISIONS.md`
  D-2026-08-08-publish-story-so-far-chapters.
- **2026-08-08 · Embedded 4 new chapter illustrations, finished removing chapter 1's GM notes** — renamed
  the player's new artwork with the `ignoremd` marker and placed each inline at its matching scene in
  chapter 1/2's prose (avoids the auto-handout pipeline creating stray stub pages for them on merge);
  completed removing chapter 1's editorial footer notes (a merge had silently kept them after the
  player's own delete), copying the still-open Moral Ledger sequencing question into `TASKS.md` first.
  See `DECISIONS.md` D-2026-08-08-chapter-art-ignoremd.
- **2026-08-08 · Renamed 00_Campaign to Amble_Campaign, promoted The Story So Far to content root, added
  the first two prose chapters** — player pushed the restructure directly; fixed the resulting broken
  `00_Campaign/...` links across `content/index.md`, `Arc01_prelude/index.md`, `Amble_Campaign/index.md`,
  and `The_Story_So_Far/index.md`, wired in `chapter-01-draft-Spring-The-Broken-Charm.md` and
  `chapter-02-draft-Summer-Market-Day.md` (both set `draft: true` — unresolved GM verification notes),
  and updated `CLAUDE.md`'s stale `00_` prefix rule. See `DECISIONS.md`
  D-2026-08-08-restructure-story-so-far-top-level.
- **2026-08-08 · Added "The Story So Far" — a campaign-level section for prose session recaps** —
  `content/00_Campaign/The_Story_So_Far/` with per-arc subfolders (`Arc01_prelude/` first), separate from
  the `Chapter_N` handout galleries. Linked from `00_Campaign/index.md` and `Arc01_prelude/index.md`.
  Scaffolding only — no session prose written up yet. See `DECISIONS.md` D-2026-08-08-story-so-far-section.
- **2026-07-28 · Added a "Technical Access ≠ Scope" section to CLAUDE.md** — states that an AI session
  without enforced technical permission-scoping shouldn't read/edit a different project's files unless
  explicitly asked, after direct testing on Home AI Server showed that assumption doesn't hold on its
  own. Retrofitted here after it was missed in the initial cross-project rollout. See `DECISIONS.md`
  D-2026-07-28-technical-access-not-scope.
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
