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
- **Cross-link NPC names in "The Story So Far" prose to their NPC pages** — e.g. `[[Nell Weaver]]` inline
  in a session's body text, not just in a tag list. Quartz's graph view and backlinks are already on by
  default but currently have almost nothing to connect; this is a manual per-session pass, not something
  to automate.
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
- **Review `Amble_Campaign/Amble.md` and flip `draft: false`.** Built 2026-08-12 from the GM repo's
  `Recurring_Locations.md` (village geography, landmarks, social customs) — solid source material, just
  never had John's own read-through before going live. See `sessions/2026-08-12-amble-world-lore-build.md`.
- **Flip `Amble_Campaign/Kingdom_of_Halden_Adults.md` to `draft: false` when ready.** Built 2026-08-12 as a
  deliberate reveal gate, not unfinished content — holds adult/older-teen world knowledge (kingdom name,
  King Aldric Vane, the South March, Stoneharbour, rumor of Kaldrun/Aeloria) that a young child in Amble
  wouldn't yet know. Flip when the campaign reaches the point this should become common player knowledge,
  and add the reciprocal links back in from `Amble.md` and `Wider_World_Kids.md` (noted inline in the
  file's own build comment).
- **Build a real `Stoneharbour` player page once Arc02 actually starts.** Explicitly held off 2026-08-12 —
  the GM repo's Arc02 material (8 drafted chapters, `Stoneharbour_Location_Reference.md`,
  `PAY_AND_DEBT_MODEL.md`) is all tied to the still-unrevealed Ch4 debt-trap reveal. No player-safe content
  exists yet beyond the one sentence already in `Kingdom_of_Halden_Adults.md`.

## Done / not needed

- **Fix images embedded without an explicit width rendering invisible (0×0) site-wide.**
  Root cause confirmed live: `quartz/styles/base.scss`'s `img { content-visibility: auto; }`
  collapsed any image embedded as `![[file.png]]` (no explicit width) to a 0×0 layout box —
  the invalid `width="auto"` HTML attribute this produced broke intrinsic-size detection under
  that containment mode. Fixed via `img { content-visibility: visible; }` in
  `quartz/styles/custom.scss`, plus explicit `|750`/`|500` widths (by orientation) added to every
  handout embed site-wide — see `DECISIONS.md`.

- **Recap file path superseded.** The original `content/Arc01_prelude/Session_recaps/session-01-recap.md`
  draft was deleted before being written up properly; superseded by the campaign-level "The Story So
  Far" section (`content/00_Campaign/The_Story_So_Far/`) — see `D-2026-08-08-story-so-far-section`.
- **Keep raw transcripts out of Quartz.** Policy only — `session 1.txt`/`.tsv` were never uploaded here and
  shouldn't be. Nothing to do unless someone tries to add them.
- **Moral Ledger sequencing mislabel — owner will find/fix personally.** Some external/GM-side document
  (a "Moral Ledger") apparently labels Skylar's stampede rescue in Chapter 2 as the campaign's "First
  Heroic Act," but Chapter 1's fey-creature rescue happens first chronologically — mislabeled wherever it
  actually lives. Not an AI-actionable task: the document's location is unknown and only the owner knows
  where to look. Doesn't affect the published site either way — the mislabel lives only in that external
  document, not in the chapter prose itself (see `The_Story_So_Far` folder discussion, 11 August 2026).
