# PACT_Players — Open Tasks

This file tracks small maintenance/publishing tasks for this repo. It is not part of the published
site (nothing under `content/` links to it). Home-server/Open WebUI work for the PACT Player Agent is
tracked separately on the `AI_home_server` project's own `TASK_BOARD.md` (see
`D-2026-07-21-pact-player-agent-fast-path-v1` there) — not duplicated here.

Source: John's "PACT Player Agent Fast-Path Plan".

## Open

- **Link the page date stamp to the exact last-touching commit, not just the file.** Currently
  `local-plugins/github-source-link/` links each page's "View source on GitHub" line to the file on
  `main` (see `D-2026-07-22-github-source-link-plugin`) — one click from full history via GitHub's own
  "History" button, but not the exact commit diff. Doing that properly needs a build-time
  git-log-per-file lookup (a new transformer plugin) plus a replacement date component; deferred pending
  a session that can install dependencies and test the full build end-to-end before it touches the live
  site.
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
- **Add `loading="lazy"` to image embeds.** Was on the original approved list but got missed — turns out
  it's not a one-line config change: Quartz's wikilink embed syntax has no `loading` option, so this
  needs a small custom script/component (e.g. a Quartz `afterDOMLoaded` script that sets
  `loading="lazy"` on rendered `<img>` elements) rather than a markdown or CSS tweak. Free perf win on
  image-heavy pages once done; deferred pending a decision on how much new custom-component surface is
  worth adding for it.
- **Consider `ExplicitPublish` instead of/alongside `RemoveDrafts`.** Currently `explicit-publish` is
  `enabled: false` in `quartz.config.yaml`. Opt-out (current: publish everything except `draft: true`)
  means one missed `draft: true` = an accidental spoiler goes live (see
  `D-2026-07-21-fix-draft-frontmatter-field`). Opt-in (`publish: true` required per page) fails closed
  instead of open — safer default for a spoiler-sensitive campaign wiki, at the cost of having to
  remember to flip `publish: true` on every page meant to go live. A real workflow-shape decision, not
  just a config flip — worth thinking through before switching.
- **Check what frontmatter field the `unlisted-pages` plugin actually uses** (already `enabled: true` in
  `quartz.config.yaml`, currently unused). Same "verify the real field name before relying on it" caution
  that `draft` needed (see `D-2026-07-21-fix-draft-frontmatter-field`) — could be a lighter-weight
  "reduce visibility without fully unpublishing" option (e.g. hide from the Explorer sidebar/search
  without hiding from direct links), worth investigating as a middle ground.
- **Cross-link NPC names in session recap prose to their NPC pages** — e.g. `[[Nell Weaver]]` inline in
  `session-01-recap.md`'s body text, not just in the tag list. Quartz's graph view and backlinks are
  already on by default but currently have almost nothing to connect; this is a manual per-recap pass,
  not something to automate.
- **Look at existing TTRPG session-recap AI tools before building the Player Agent pipeline further** —
  Scrybe Quill, Archivist AI, Dungeon Scribe (local whisper.cpp, privacy-friendly), and the open-source
  `rpg-session-processor`/`ttrpg-campaign-summariser` scripts. Several already solve "transcript →
  structured recap," overlapping with the planned Part 3 (WhisperX+pyannote) work on `AI_home_server` —
  research only, no repo changes.
- **Format NPC/encounter tables using Obsidian's `Randomness`/`Dice Roller` table syntax**, even without
  interactivity in the static Quartz build yet. Costs nothing now and means these tables are ready to
  "go interactive" later if a Quartz transformer for it appears — exploratory, low priority.
- **Decide deliberately whether any GM-only content should ever touch this public repo at all**, versus
  living only in the separate `PACT-Campaign` Dropbox/GM workspace — a real access-control decision
  (this repo is fully public; `draft: true` and `encrypted-pages` are technical mitigations, not a
  substitute for that decision), not a code task.

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
