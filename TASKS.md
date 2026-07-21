# PACT_Players — Open Tasks

This file tracks small maintenance/publishing tasks for this repo. It is not part of the published
site (nothing under `content/` links to it). Home-server/Open WebUI work for the PACT Player Agent is
tracked separately on the `AI_home_server` project's own `TASK_BOARD.md` (see
`D-2026-07-21-pact-player-agent-fast-path-v1` there) — not duplicated here.

Source: John's "PACT Player Agent Fast-Path Plan".

## Open

- **Decide when Session 1's recap goes player-facing.** `content/Arc01_prelude/Session_recaps/session-01-recap.md`
  currently has `status: draft` / `needs_review: true` in its frontmatter. Flip to `status: approved` /
  `needs_review: false` once you're happy for players to see it (the file also has an "AI notes for John
  before publishing" callout at the top worth deciding to keep or strip at the same time).
- **Optional: add `content/player-agent.md`.** A short player-facing page explaining what the PACT Player
  Agent knows and good example questions to ask, once that agent exists and works (see the home-server
  task board). Not needed until then.

## Done / not needed

- **Recap file path confirmed.** Already lives at `content/Arc01_prelude/Session_recaps/session-01-recap.md`
  — a sensible arc-scoped location consistent with this repo's existing `NPCs/`, `Maps/`, `Misc/`
  category-folder pattern (see root `CLAUDE.md`). No `index.md` exists yet for `Session_recaps/`, and
  `Arc01_prelude/index.md` doesn't link to it yet — worth doing together with the status-flip above so the
  folder isn't linked before it's meant to be seen.
- **Keep raw transcripts out of Quartz.** Policy only — `session 1.txt`/`.tsv` were never uploaded here and
  shouldn't be. Nothing to do unless someone tries to add them.
