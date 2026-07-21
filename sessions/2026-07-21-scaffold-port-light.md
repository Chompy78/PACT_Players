# 2026-07-21 — light-ported PACT's memory-layer scaffold

## What happened

Third/fourth repo in a broader effort to replicate `chompy78/PACT`'s AI-agent workflow conventions
elsewhere — `chompy78/family-hub` and `chompy78/wildlife-explorer` got full ports (task board,
`AGENTS.md`, all 8 skills) earlier the same day. This repo was different enough to need a genuinely
different treatment, not just a smaller version of the same thing.

## Why this port is shaped differently

`PACT_Players` isn't a software project — it's a Quartz-based static site publishing TTRPG campaign
content (session recaps, NPC handouts, maps) for players. It already had a short, working `CLAUDE.md`
covering content-folder conventions and a merge policy. There's no code test gate (the only
`npm run check`-equivalent is Quartz's own typecheck+prettier, which says nothing about content), and
content work ("write the Chapter 3 NPC bio") doesn't decompose into Effort/Risk-tagged, sweep-eligible
units the way software tasks do. Porting PACT's task-board/skill-automation layer here would have been
process overhead with no real job to do — recognized and flagged before building anything, and confirmed
with the user rather than assumed.

## Mid-session correction: TASKS.md

The first pass of this port ruled out *any* open-work tracker, not just PACT's Effort/Risk-tagged
version of one — the user caught the gap directly ("there should have been a file called tasks.md").
The original reasoning (content work doesn't decompose into Effort/Risk-tagged, sweep-eligible units)
was sound and still stands; it just doesn't imply "no tracker at all," only "not *that* kind of
tracker." Added `TASKS.md` as a plain checklist — no tags, no priority bands — and updated `CLAUDE.md`
and `/close-session` to reference it. Full reasoning in `DECISIONS.md`'s `D-2026-07-21-tasks-md-
correction`, which annotates rather than silently rewrites the original decision entry.

## What got built

- **`CLAUDE.md`** — kept as the *only* "how to work here" doc (no competing `AGENTS.md`). Gained two new
  sections: "Log as you go" (pointing at `TASKS.md`/`CHANGELOG.md`/`DECISIONS.md`/`sessions/`, naming
  the three ported skills). Every existing section (content structure, publishing, merge policy) is
  untouched.
- **`TASKS.md`** — new (see correction above). Currently empty (a template, not seeded with invented
  content-work items — this session didn't have enough campaign-content context to guess real open items
  responsibly).
- **`CHANGELOG.md`, `DECISIONS.md`** — new. Not backfilled past today — this repo's substantial existing
  git history (session recaps, banner iterations, content restructuring) reads better via `git log` than
  a reconstructed changelog would. `DECISIONS.md` was seeded with this port's own reasoning plus a
  formalized version of a rule that already existed informally in `CLAUDE.md` (category folders must
  sort alphabetically after "Chapter" or they jump ahead of chapters in Quartz's sidebar) — genuinely
  worth a proper record, not a new decision.
- **`sessions/`** (this file's directory) — **deliberately not `docs/sessions/`**. This repo's `docs/` is
  entirely Quartz's own vendored upstream documentation (`docs/plugins/`, `docs/cli/`, `docs/features/`,
  etc.) — mixing project session notes into that tree would read as part of the vendored tool's own
  docs. Used a root-level `sessions/` directory instead.
- **4 of PACT's 8 skills**, not all 8: `close-session` (adapted — graduates finished `TASKS.md` items to
  `## Done / not needed` instead of removing them outright; checks `CLAUDE.md`'s existing content-vs-
  build/config merge-policy distinction instead of a code test gate), `cold-plan-review` (useful for the
  build/config-touching category `CLAUDE.md` already flags as needing confirmation), `log-lesson`
  (generic, shared `ai-lessons-learned` repo, no adaptation needed), and — added in a follow-up round
  after the real `TASKS.md` was discovered — `add-task` (format-and-append only, no Effort/Risk tags).
  **Still not added:** `pick-task`/`run-task`/`sweep-tasks` — the real `TASKS.md` content confirmed
  rather than undermined the original reasoning: its items are one-off human-judgment calls ("decide
  when this recap goes player-facing"), not a queue of independently-safe work to automate. Working a
  task here is just asking directly — `CLAUDE.md` documents that explicitly so it isn't something to
  rediscover each time.
- **Commit style respected, not overridden:** this repo uses plain descriptive commit messages ("Match
  Arc01 banner width to homepage (750px)"), not PACT's Conventional-Commits format — the ported skills
  say so explicitly rather than silently imposing PACT's style.

## Why this is worth a note

This is the first port in this series where the right answer was "skip most of it," not "adapt all of
it." Worth carrying forward for a future port: the real question isn't "blank slate vs. mature repo,"
or even the "three independent axes" (governance/docs/verification-gate) the family-hub and
wildlife-explorer ports established — it's a prior question, "is this even a software project the
task-board/skill-automation layer was built for?" A content-publishing site, a docs-only repo, or any
project without a meaningful unit-of-work/verification-gate concept should get this same light
treatment rather than a scaled-down version of the full scaffold.

## Status

Live in this repo's working tree, reviewed by the user before landing (per `CLAUDE.md`'s own merge
policy — this touches `.claude/` and root docs, not `content/`, so it's in the "confirm before merging"
category by that policy's own letter, even though none of it touches Quartz's build/deploy machinery
directly). Nothing in PACT itself changed as a result of this session yet — a matching session note
there is pending the same way it was for the two prior ports.
