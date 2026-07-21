# PACT_Players — Open Tasks

This file tracks small maintenance/publishing tasks for this repo. It is not part of the published
site (nothing under `content/` links to it). Home-server/Open WebUI work for the PACT Player Agent is
tracked separately on the `AI_home_server` project's own `TASK_BOARD.md` (see
`D-2026-07-21-pact-player-agent-fast-path-v1` there) — not duplicated here.

Source: John's "PACT Player Agent Fast-Path Plan".

## Open

- **Decide when Session 1's recap goes player-facing.** `content/Arc01_prelude/Session_recaps/session-01-recap.md`
  currently has `draft: true` (the actual field Quartz's `RemoveDrafts` plugin checks — see
  `D-2026-07-21-fix-draft-frontmatter-field` in `DECISIONS.md`; the pre-existing `status: draft` /
  `needs_review: true` fields don't actually hide the page from the built site by themselves), plus
  `status: draft` / `needs_review: true` for your own tracking. Once you're happy for players to see it,
  flip **all three**: `draft: false`, `status: approved`, `needs_review: false` (the file also has an "AI
  notes for John before publishing" callout at the top worth deciding to keep or strip at the same time).
- **Optional: add `content/player-agent.md`.** A short player-facing page explaining what the PACT Player
  Agent knows and good example questions to ask, once that agent exists and works (see the home-server
  task board). Not needed until then.
- **Finish giscus comments setup.** `quartz.config.yaml`'s `comments` plugin is prepped (`repo` filled in,
  `category` set to `Announcements`) but left `enabled: false` — turning it on with empty `repoId`/
  `categoryId` errors at build time, and those only exist once you install the giscus GitHub App. Visit
  <https://giscus.app>, follow its setup against `Chompy78/PACT_Players` (enables GitHub Discussions on
  the repo if not already on), paste the generated `repoId`/`categoryId` into that plugin's
  `options.options` block, and flip `enabled` to `true`.

## Done / not needed

- **Fix images embedded without an explicit width rendering invisible (0×0) site-wide.**
  Root cause confirmed live: `quartz/styles/base.scss`'s `img { content-visibility: auto; }`
  collapsed any image embedded as `![[file.png]]` (no explicit width) to a 0×0 layout box —
  the invalid `width="auto"` HTML attribute this produced broke intrinsic-size detection under
  that containment mode. Fixed via `img { content-visibility: visible; }` in
  `quartz/styles/custom.scss`, plus explicit `|750`/`|500` widths (by orientation) added to every
  handout embed site-wide — see `DECISIONS.md`.

- **Recap file path confirmed.** Already lives at `content/Arc01_prelude/Session_recaps/session-01-recap.md`
  — a sensible arc-scoped location consistent with this repo's existing `NPCs/`, `Maps/`, `Misc/`
  category-folder pattern (see root `CLAUDE.md`). No `index.md` exists yet for `Session_recaps/`, and
  `Arc01_prelude/index.md` doesn't link to it yet — worth doing together with the status-flip above so the
  folder isn't linked before it's meant to be seen.
- **Keep raw transcripts out of Quartz.** Policy only — `session 1.txt`/`.tsv` were never uploaded here and
  shouldn't be. Nothing to do unless someone tries to add them.
