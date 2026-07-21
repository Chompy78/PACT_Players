# PACT_Players — Decisions (why it's built this way)

> Authoritative record of decisions **still in force**. One entry per decision:
> **Context → Options → Decision → Why → Status.** Newest at the TOP.
> `CHANGELOG.md` records *what* changed; this records *why*.

## Index

- **D-2026-07-21-tasks-md-correction** — The initial light-port decision below wrongly ruled out any
  open-work tracker at all, not just PACT's heavyweight Effort/Risk one — caught before landing, and
  before authoring a replacement it turned out a real one had already been created and merged by a
  concurrent session. See full entry.
- **D-2026-07-21-scaffold-port-light** — Light-ported PACT's `CHANGELOG.md`/`DECISIONS.md`/session-notes
  pattern and 3 of its 8 skills, deliberately skipping the `AGENTS.md`/Effort-Risk layer. Decision: this
  is a content-publishing site, not a software project — the skipped layer has no real job to do here.
  **Correction (same day):** this entry originally also skipped any task tracker at all; see
  `D-2026-07-21-tasks-md-correction` — a plain-checklist `TASKS.md` was added, since "no Effort/Risk
  system" and "no open-work list whatsoever" are different claims and only the first one actually
  followed from this decision's own reasoning. See full entry.
- **D-2026-07-19-category-folder-sort-order** — Category subfolders (`NPCs/`, `Maps/`, etc.) must sort
  alphabetically after "Chapter" in folder names, or Quartz's Explorer sidebar lists them before the
  chapters. Formalized from the existing rule in `CLAUDE.md`'s Content structure section — not a new
  decision, just given a proper record here.

## D-2026-07-21-tasks-md-correction · "no Effort/Risk system" isn't the same claim as "no task tracker" — and a real one already existed
- **Context:** `D-2026-07-21-scaffold-port-light` (below) decided this repo shouldn't get PACT's
  task-board/Effort-Risk layer, reasoning that content work doesn't decompose into Effort/Risk-tagged,
  sweep-eligible units. That reasoning is sound, but the resulting file set had no open-work tracker of
  *any* shape — the user flagged the gap directly ("there should have been a file called tasks.md").
  A placeholder `TASKS.md` (empty template, no real items) was drafted in response. Before it was
  committed, it turned out this was moot: a **different, concurrent Claude Code session** had already
  authored a real `TASKS.md` — tracking specific open work for "John's PACT Player Agent Fast-Path
  Plan" (the session-01 recap's draft/approved publishing status, an optional `player-agent.md` page) —
  and merged it directly to `main` (`e1e8886`, "Track fast-path Quartz tasks for the PACT Player Agent
  plan") while this session was still working. The placeholder would have overwritten it.
- **Options:** (1) leave it as-is — no task tracker. (2) commit the placeholder template. (3) discover
  and defer to whatever real `TASKS.md` might already exist before authoring anything — check `git
  fetch`/`git log --all` for it rather than assuming this session's working tree reflected the repo's
  true current state.
- **Decision:** (3), which turned out to already be necessary in practice: the placeholder was deleted
  unused, `main` was pulled fresh, and the real, concurrently-authored `TASKS.md` was adopted as-is —
  including its actual structure (`## Open` / `## Done / not needed`, not a flat checklist) and its
  cross-reference to the separate `AI_home_server` project's own `TASK_BOARD.md` for out-of-repo work.
- **Why:** the original decision's reasoning about Effort/Risk/sweep-automation not fitting content work
  was and remains correct — it just overstated its own scope by ruling out any tracker, and this repo's
  own `AGENTS.md`-style discipline (files win over chat, check real state before a structural edit)
  applies just as much to a light port as a full one: a shared checkout can hold another session's
  in-flight work, and that's exactly what happened here. Authoring a competing `TASKS.md` without
  checking would have been the same class of mistake `D-2026-07-16-close-session-auto-log` (in
  `chompy78/PACT`'s own `DECISIONS.md`) exists to prevent for `git add` — writing over concurrent work
  because the local working tree looked stale-but-plausible.
- **Consequence:** the real `TASKS.md` is now the file of record — two-section structure, scoped to
  this repo only (home-server/Open-WebUI/agent-backend work stays on `AI_home_server`'s own board).
  `CLAUDE.md`'s "Log as you go" section and `/close-session`'s graduation step both describe the real
  structure, not the placeholder's. `D-2026-07-21-scaffold-port-light`'s Index bullet annotated with this
  correction rather than silently rewritten — the original reasoning about Effort/Risk/sweep-automation
  was and remains correct, only its scope was overstated.
- **Status:** Active.

## D-2026-07-21-scaffold-port-light · light-port PACT's memory layer, skip the task-board/skill layer entirely
- **Context:** the user had PACT's `AGENTS.md`/task-board/`DECISIONS.md`/`docs/sessions/`/skill scaffold
  ported to two prior repos this same broader effort — `chompy78/family-hub` (build-fresh) and
  `chompy78/wildlife-explorer` (additive) — and asked for the same expansion here. This repo turned out
  to be a fundamentally different kind of project from those two: a Quartz-based static site publishing
  TTRPG campaign content (session recaps, NPC handouts, maps), not a software codebase. It already had a
  short, specific, working `CLAUDE.md` (content-folder conventions, a merge policy) with no equivalent
  gap the way `family-hub` had (no governance layer) or `wildlife-explorer` didn't have (nothing missing
  at all, really — that repo's `AI.md` already covered its own needs well).
- **Options:** (A) full scaffold port, same treatment as the two prior repos — `AGENTS.md` as primary
  entry point, a real task board with Effort/Risk-tagged tasks, all 8 skills adapted. (B) skip entirely,
  leave `CLAUDE.md` untouched. (C) light port — add only the memory layer (`CHANGELOG.md`, this file,
  `docs/sessions/`) plus the 3 of 8 skills that don't depend on a task board (`close-session`,
  `cold-plan-review`, `log-lesson`); leave `CLAUDE.md` as the sole "how to work" doc, unreplaced.
- **Decision:** C.
- **Why:** PACT's task-board/Effort-Risk/skill-automation layer is built around software-engineering
  work — features, bugs, a test gate, unattended sweeping through independently-safe TODOs. None of that
  maps onto "write the Chapter 3 NPC bio." There's no code test gate here (the only `npm run check` is
  Quartz's own typecheck+prettier — it says nothing about content quality), and content tasks don't
  decompose into Effort/Risk-tagged units the way code changes do. Forcing that layer on would be pure
  process overhead with no real job to do. The memory layer (why a decision was made) is valuable
  regardless of project type, though — `CLAUDE.md` already contained at least one undocumented "why"
  (the category-folder sort-order rule) worth a proper record, which is exactly what `DECISIONS.md`
  formalizing it (see the sibling Index entry) demonstrates.
- **Consequence:** `CLAUDE.md` gained a "Log as you go" section pointing at `CHANGELOG.md`/`DECISIONS.md`/
  `sessions/` and naming the ported skills, but its existing content-structure/publishing/merge-policy
  sections are untouched. No `AGENTS.md` was created — there's nothing for it to be a thin stub
  importing, since there's no separate process file to import. Session notes go in root-level
  `sessions/`, not `docs/sessions/` — this repo's `docs/` is entirely Quartz's own vendored upstream
  documentation, not a place for project-specific notes.
  **Addendum (same day, after `D-2026-07-21-tasks-md-correction`):** `/add-task` was added after all —
  the "no task-board-driven skills" call was re-examined once a real `TASKS.md` existed to check it
  against, and holds for 3 of the 4 (`pick-task`/`run-task`/`sweep-tasks` still have no queue to
  automate — `TASKS.md`'s actual items are one-off human-judgment calls, not independently-safe
  sweep-eligible work), but `add-task` doesn't depend on that reasoning at all — it's just formatting-
  and-append, useful the moment there's a task to add, with no Effort/Risk tags to justify skipping.
- **See also:** `chompy78/PACT`'s `DECISIONS.md` (the source scaffold); `chompy78/family-hub`'s and
  `chompy78/wildlife-explorer`'s own `DECISIONS.md` (the two full-weight ports this one deliberately
  diverges from).
- **Status:** Active.

## D-2026-07-19-category-folder-sort-order · category folders must sort alphabetically after "Chapter"
- **Context:** Quartz's Explorer sidebar sorts folders alphabetically. Arc-wide category folders (e.g.
  `NPCs/`, `Maps/`) sit as siblings to `Chapter_N/` folders, not inside a wrapper folder.
- **Options:** (1) no naming constraint — accept that some category folders sort before chapters in the
  sidebar. (2) require category folder names to sort alphabetically after "Chapter".
- **Decision:** (2). Avoid category names starting with A or B (e.g. "Artifacts", "Bestiary") — they'd
  jump ahead of `Chapter_1`, `Chapter_2`, etc. in the sidebar.
- **Why:** chapters are the primary reading order for players; category folders (NPCs, Maps, Misc) are
  reference material that should read as secondary, appearing after the chapters they support, not
  ahead of them.
- **Status:** Active. (Formalized 2026-07-21 from the existing rule already stated in `CLAUDE.md`'s
  Content structure section — not a new decision, backfilled into this file's format for durability.)
