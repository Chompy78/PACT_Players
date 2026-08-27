# PACT_Players — Decisions (why it's built this way)

> Authoritative record of decisions **still in force**. One entry per decision:
> **Context → Options → Decision → Why → Status.** Newest at the TOP.
> `CHANGELOG.md` records *what* changed; this records *why*.

## Index

- **D-2026-08-27-hub-rename-and-restructure** — Site renamed *PACT Player Archive* → **Amble Player Hub**;
  home page restructured (welcome first, new Player tools section, arcs regrouped Current/Past/Later); a
  generated **Reference** section added at campaign level; Arc 2 opened as *Among Strangers* with a
  Stoneharbour page. See full entry.
- **D-2026-08-27-house-rules-rest-and-hd-rework** — Short Rest cut to 30 minutes, Long Rest extended to 10
  hours (7 sleep + 3 light activity), and 2024 RAW's interrupted-rest and 16-hour-cooldown mechanics
  restored in place of this page's prior flat "2-day Long Rest"/"once per 24h" wording. The standalone
  Breather rule was dropped entirely rather than made unlimited, and a new Stable Characters rule lets a
  character at 0 HP join either rest type and wake at 1 HP. See full entry.
- **D-2026-08-27-armor-strength-requirements** — New Strength-10 "no benefit at all" floor added to both
  Medium and Heavy armor (medium has no RAW Strength gate at all; heavy's floor sits under RAW's own
  13/15 thresholds and −10 ft. penalty, not replacing them). See full entry.
- **D-2026-08-27-group-and-expert-checks** — New house rule splitting multi-character ability checks into
  Group Checks (RAW's existing mechanic, restated with examples) and Expert Checks (this table's own,
  closest RAW equivalent is the Help action), plus which physical skills split between the two by task
  rather than by skill name. See full entry.
- **D-2026-08-27-house-rules-raw-annotations-and-collapse** — Every section of `House_Rules.md` annotated
  with its actual 2024 RAW baseline (verified via search, not recalled from memory), catching and fixing
  two inaccuracies already live on the page. Restructured into collapsed-by-default Obsidian callouts per
  section with a "Jump to a rule" quick-link list at the top, verified against the live built site
  (headings, collapse state, and every anchor checked directly in the deployed HTML). See full entry.
- **D-2026-08-24-chapter-04-handouts-from-zuploads** — 5 handouts (H01–H05) synced via the player's
  `zcold`/`z-uploads` drop-zone landed in `Arc01_prelude/Chapter_4/`, confirmed by the player as
  Arc01 (not Arc02) material despite one file's own internal build note pointing at
  `Arc02_among_strangers`, and confirmed as already-played so no `draft: true` gate was added despite
  depicting the previously-unrevealed debt-trap reveal. The one non-image handout (a styled 3-page
  HTML indenture contract) was rendered via headless Chromium to a PNG + PDF pair, following
  `D-2026-07-23-shared-history-handout-format`. See full entry.
- **D-2026-08-24-nine-tier-dc-scale** — The GM-side campaign's DC scale expanded from four tiers to nine
  (Trivial 5 through Godly 37), mirrored here for players as a new "How Hard Is Hard?" section in
  `House_Rules.md` with five worked examples per tier. See full entry.
- **D-2026-08-12-kid-adult-knowledge-gating** — First player-facing Amble/world-lore pages built.
  Kid-level vs adult-level world knowledge split into separate files with the split visible in the
  filename itself (`Wider_World_Kids.md` / `Kingdom_of_Halden_Adults.md`), gated with Quartz's own
  `draft: true`/`false` rather than any custom conditional-render plugin. Stoneharbour explicitly held
  off — too tied to Arc02's still-unrevealed material. See full entry.
- **D-2026-08-11-player-agent-contentindex-boundary** — The planned player-facing AI agent (queryable
  campaign info, scoped to this repo/certain directories only) reads Quartz's own built
  `static/contentIndex.json` rather than a raw clone or filesystem/MCP access to `content/`. That file is
  already filtered by Quartz itself (`private` ignored, `draft: true` stripped, encrypted pages shipped as
  ciphertext only) and already public, so it reuses an existing, tested boundary instead of re-implementing
  one. No repo-side code changes — `draft`/`private`/`password` remain the actual hiding mechanism. See
  full entry.
- **D-2026-08-09-zcold-autosync-setup** — `z-cold`/`z-uploads` are drop-zone folders: anything placed in
  them locally gets auto-committed and pushed within seconds by an external background script (not part
  of this repo). They live on a dedicated `zcold` branch via a git worktree + Windows junction, not on
  `main` — a plain tracked folder was tried first but broke the moment this repo's working copy switched
  to a feature branch, since git can't check the same branch out twice. See full entry.
- **D-2026-08-09-chapter-03-from-zuploads** — Pulled Chapter 3's prose and art in from the `zcold`
  branch's `z-uploads/` drop zone rather than the player pasting/pushing it directly. Stripped the
  GM-only review/metadata footer before it touched player-facing content, named the images with the
  `-ignoremd` marker per the existing convention, and left `draft: true` since the source file itself was
  still marked "awaiting John's own read." See full entry.
- **D-2026-08-08-publish-story-so-far-chapters** — Flipped `draft: true` → `false` on both "The Story So
  Far" chapters at the player's request, publishing them despite the still-open Moral Ledger sequencing
  question. Deliberate: that issue is a labeling detail in an external document, not anything visible in
  the published prose, so there's no real cost to publishing before it's resolved. See full entry.
- **D-2026-08-08-chapter-art-ignoremd** — Four new illustrations landed directly on the branch inside
  `The_Story_So_Far/Arc01_prelude/`, meant to be embedded by hand inside their specific chapter's prose,
  not auto-handled by the `auto-handout` pipeline (which only runs on `main` anyway, but would create
  unwanted stub pages/index embeds for them on merge). Renamed all four with the `ignoremd` marker and
  embedded each manually at its matching scene. Also finished removing chapter 1's GM-only editorial
  footer notes (the player's own edit to do this had been silently dropped by an intervening merge) and
  copied its still-relevant content into `TASKS.md` before deleting. See full entry.
- **D-2026-08-08-restructure-story-so-far-top-level** — Pushed directly by the player: renamed
  `00_Campaign/` to `Amble_Campaign/` (drops the numeric-prefix sort hack — the name itself already
  sorts before the arcs) and promoted `The_Story_So_Far/` from nested inside the campaign folder to a
  content-root sibling of the arcs. Added the first two prose chapters (`chapter-01-draft-...`,
  `chapter-02-draft-...`), set `draft: true` on both since they carry unresolved GM-only verification
  notes, and fixed every now-broken `00_Campaign/...` wikilink left behind by the rename. See full entry.
- **D-2026-08-08-story-so-far-section** — Added a campaign-level prose section for hand-written,
  short-story-format session recaps, kept separate from the per-session `Chapter_N` handout galleries.
  Named "The Story So Far" (over "Chronicle"/"Tales"/"Campaign Journal"); lives at
  `content/00_Campaign/The_Story_So_Far/`, grouped into per-arc subfolders reusing the existing
  `ArcNN_name` convention, with individual entries labeled "Session N: [Title]". Plain Quartz pages, not
  a custom tabbed HTML page. See full entry.
- **D-2026-07-28-sniff-image-bytes-not-extension** — `H09-fey-creature.png` (Chapter 3) turned out to be
  JPEG bytes saved with a `.png` extension, silently defeating the pipeline's extension-based dimension
  reader (no width, no crash — just missing). Fixed by sniffing actual magic bytes (try PNG, fall back to
  JPEG) regardless of extension; also consolidated Chapter 3 into the `noStubPages` pattern like Chapter
  2 before it. See full entry.
- **D-2026-07-28-technical-access-not-scope** — Added a "Technical Access ≠ Scope" section to
  `CLAUDE.md`, after direct testing on Home AI Server confirmed a session with broad, non-enforced
  access would cross into a different project's files if asked. See full entry.
- **D-2026-07-23-nostubpages-frontmatter-flag** — Redundant standalone `.md` stub pages (created
  alongside the inline `index.md` embed for every new image) were surfacing as an unwanted "N items
  under this folder" listing via Quartz's `folder-page` plugin, confirmed live in both Chapter 1 and
  NPCs. Added a `noStubPages: true` frontmatter flag folders can set to get the inline embed only, no
  standalone page — applied to Chapter_1/NPCs/Maps/Misc (already-consolidated folders); Chapter_2 kept
  as-is since its standalone pages (funeral-notice, market (1)) were made deliberately. See full entry.
- **D-2026-07-23-shared-history-handout-format** — A richly-styled standalone HTML handout (custom
  fonts, parchment theme, print stylesheet) needed adding to the site. Raw `.html` turned out to be
  non-viable — confirmed Quartz strips the `.html` extension when copying it as a static asset, which
  would break correct rendering on GitHub Pages. Rendered it via headless Chromium instead: a screenshot
  (image, matching every other handout on the site) plus a PDF (matching the design's own "print this"
  instruction; confirmed `.pdf` keeps its extension and resolves correctly via Quartz wikilinks, unlike
  `.html`). See full entry.
- **D-2026-07-23-auto-rename-underscore-filenames** — The pipeline now auto-renames underscores to
  hyphens for any newly added image before creating its stub page, instead of relying on
  `check-filenames.yml` to catch it after the fact and a human to fix it manually — confirmed necessary
  the same day when 3 new NPC portraits landed with underscore names and needed exactly that manual fix.
  See full entry.
- **D-2026-07-22-github-source-link-plugin** — Added a local (in-repo) Quartz component plugin that
  links each page's date stamp area to that page's Markdown file on GitHub, after discovering the
  existing date stamp is rendered by plugins fetched fresh from GitHub into a gitignored cache on every
  build — there's no local file to edit to add a link directly. Links to the file on `main`, not the
  exact last commit, per explicit user choice once the real cost of the commit-level version was shown.
  See full entry.
- **D-2026-07-21-encrypted-pages-and-giscus-prep** — Documented the already-installed-but-unused
  `encrypted-pages` plugin (password-protect a page via frontmatter) in `CLAUDE.md`, and pre-filled the
  `comments` (giscus) plugin's config structure without enabling it — enabling with empty
  `repoId`/`categoryId` errors at build time; those only exist once the giscus GitHub App is installed.
  See full entry.
- **D-2026-07-21-filename-lint-check** — Added a GitHub Action that checks newly added/renamed
  `content/` filenames against three documented Quartz footguns (underscores in image names, `@` in any
  filename, non-ASCII characters) and fails loudly instead of letting a broken embed land silently. See
  full entry.
- **D-2026-07-21-git-auto-commit-action** — Replaced `auto-handout.yml`'s hand-rolled
  `git add`/`commit`/`push` steps with `stefanzweifel/git-auto-commit-action`, a maintained Marketplace
  action that handles edge cases (e.g. an out-of-date local checkout before pushing) the raw shell
  version didn't. See full entry.
- **D-2026-07-21-auto-optimize-images** — `auto-handout.yml` now re-encodes newly added PNG/JPEG images
  with `sharp` (already a project dependency) before creating their handout page — cut real repo images
  by ~55-60% in testing (3.0MB → 1.26MB) with no visible quality loss, only overwriting when the result
  is actually smaller. See full entry.
- **D-2026-07-21-image-alt-text** — Every handout image embed now carries alt text (the page's title) —
  `![[file.png|Alt Text|500]]`, verified directly against Quartz's actual wikilink-embed regex before
  relying on it. Folded into `auto-handout-stub.mjs` so future auto-generated handouts get alt text too.
  See full entry.
- **D-2026-07-21-fix-draft-frontmatter-field** — `status: draft` (this repo's own convention) doesn't
  hide a page from the built site — verified directly by rebuilding locally (`Filtered out 0 files`,
  the draft recap fully present in `public/`). Quartz's enabled `RemoveDrafts` plugin checks a literal
  `draft: true` field instead. Added `draft: true` to the Session 1 recap alongside the existing
  `status`/`needs_review` fields. See full entry.
- **D-2026-07-21-handout-image-orientation-width** — Handout images now get an explicit embed width
  sized by orientation (750 for landscape/square, 500 for portrait) instead of no width at all — a flat
  750px for every image would render portrait ones (0.67 ratio) ~1119px tall, noticeably oversized
  next to landscape images (500px tall) at the same width. See full entry.
- **D-2026-07-21-auto-handout-deploy-trigger-fix** — The auto-handout Action's own commit (pushed with
  the default `GITHUB_TOKEN`) never triggered a site deploy, because GitHub deliberately excludes
  `GITHUB_TOKEN` pushes from cascading into other `on: push` workflows. Fixed by adding a `workflow_run`
  trigger to `deploy-pages.yml`. See full entry.
- **D-2026-07-21-auto-handout-action** — Added a GitHub Action that scans each push to `main` for newly
  added images under `content/`, creates a stub handout page for any that don't have one (skipping
  filenames containing `ignoremd`), embeds the image inline in the folder's `index.md`, and pushes the
  result straight back to `main`. See full entry.
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

## D-2026-08-27-hub-rename-and-restructure · rename the site, restructure the home page, add a generated Reference section, and open Arc 2

**Context.** Two problems arrived together. The PACT Player Agent was answering badly — it called Bram "a
player-controlled halfling" when he is an NPC and human — and the cause turned out to be this repo, not the
agent: **nothing published here states who anyone is.** The NPC page is images only. Separately the site's
own shape had drifted: "PACT Player Archive" led with system jargon, the home page buried its welcome under
loose bullets, arcs were split into "Prelude" and "Future Arcs" with Arc 2 unnamed, and Chapter 4's title
was still `[REDACTED]` months after publication.

**Options.** For the agent's problem: leave it (it would keep inventing), prompt-tune it (its system prompt
already says in capitals not to guess, and it guessed anyway), or publish the missing facts. For the site
name: keep it, or drop the system jargon for the village.

**Decision.**
- **Renamed to Amble Player Hub** (`quartz.config.yaml` `pageTitle`, plus the home page). Dropped the
  `" - Amble"` title suffix, which would have made every tab read "Amble Player Hub - Amble".
- **Home page restructured:** welcome paragraph first, a new **Player tools** section gathering the
  assistant / Reference / advancement note, a real description under Campaign, The Story So Far surfaced,
  and arcs regrouped into **Current / Past / Later** at two levels.
- **Added a Reference section** — one page per character, per chapter, plus roster pages. Now 49 pages.
  These are **generated** from a structured source owned by the Amble Story project
  (`ai/agent-cards/`) — re-render rather than editing them here.
- **Placed at campaign level** (`Amble_Campaign/Reference/`), not under Arc 1, because it covers the party
  across every arc and the recurring cast who leave Amble behind.
- **Opened Arc 2 as "Among Strangers"** with the campaign repo's existing banner, an intro, Ch. 1
  *Indentured*, and a **Stoneharbour** page under Campaign Reference with the arrival map.
- **Un-redacted Chapter 4's title.**
- Normalised arc titles to `Arc 1: / Arc 2: / Arc 3` — a space sorts before a digit, so `"Arc 2: Among
  Strangers"` had been sorting *ahead* of `"Arc01 Prelude"` in the explorer.

**Why.** The agent can only see what this site publishes — deliberately, per
`D-2026-08-11-player-agent-contentindex-boundary`. So the fix had to be published content, not a private
feed into the knowledge base; that boundary is what stops it ever seeing GM material. Card format was
settled by measurement rather than taste: on the home server's own embedding model and reranker, "is Bram a
player character or an NPC?" scored JSON 3.2, a natural-language card 10.4, prose −3.1. **Raw JSON is the
worst of the three** — retrieval matches language, not syntax.

**Everything published was audited against what was already public.** Removed rather than published: the
PC parents' names, the "Haldeni" people-name, a forward-looking GM line about Bram's later arc, and — for
Arc 2, which is unplayed — every `Function`/`Arc` line from its `Cast.md`, the organised-crime figure who
takes a cut of Stoneharbour, the gambling den behind a shop counter, and the cookshop dog (the arc
reference says to let the players name it). Corvin Thale's species was withheld because canon marks it
"tentative". Chapter 1's other handouts stay unpublished until played.

**Status.** Live. Agent verified answering "Bram Cotter is a non-player character (NPC). He is human" with
a citation, and answering "what happens to Dela Brant?" with "I'm not aware of any event involving Dela
Brant" — that second answer is the audit working, not a gap.

## D-2026-08-27-house-rules-rest-and-hd-rework · shorten Short Rest, extend Long Rest, restore RAW's interruption/cooldown mechanics, drop Breather for a Stable Characters rule instead

- **Context:** `House_Rules.md`'s existing rest rules (Short Rest unstated/RAW 1 hour, Long Rest a flat
  2 days, a standalone 5-minute "Breather" substitutable for a Short Rest) were revisited end to end at
  the player's request, working through several iterations: whether unlimited Breathers were safe given
  Hit Dice are already a capped resource (they're not — short-rest class features like Warlock spell
  slots or Fighter Action Surge aren't Hit-Dice-gated at all, so unlimited Breathers would let those reset
  every 5 minutes), what Long Rest duration actually supports a party sharing one continuous night watch
  (10 hours: at 4 people splitting evenly, each watches 2.5h and sleeps 7.5h — comfortably above a 7-hour
  floor with room for smaller/larger parties), and what a stable character at 0 HP needs to do to rejoin
  the party's rest instead of just waiting for outside healing.
- **Options:** (A) Keep the existing 2-day Long Rest/unlimited-Breather shape and only patch the specific
  complaint raised. (B) Rework rest timing and mechanics as a coherent set: Short Rest to 30 minutes,
  Long Rest to 10 hours (7 sleep + 3 light activity), restore 2024 RAW's actual interrupted-rest behavior
  (no benefit before 1 hour in; a Short Rest's benefit plus a resumable rest needing +1 hour per
  interruption after that) and its real once-per-16-hours-after-finishing cooldown (this page previously
  stated a flat "once per 24-hour period," which is the superseded 2014 rule, not 2024's), and replace
  Breather entirely with a Stable Characters rule.
- **Decision:** B, in full. `House_Rules.md`'s "Short Rests and Long Rests" section now states: Short Rest
  30 minutes; Long Rest 10 hours (≥7h sleep, ≤3h light activity — explicitly including camp setup/
  breakdown and buying a meal in town); RAW's interruption behavior and 16-hour cooldown restored
  verbatim; Hit Dice still spent manually to heal (unchanged from before). The Breather section was
  removed outright. A new "Stable Characters Can Join a Rest" section lets a character stable at 0 HP
  join a Short *or* Long Rest and wake at 1 HP at the end — enough on its own to satisfy the Long Rest's
  1-HP minimum without needing healing magic first, and still counts as a revival under the existing
  Revival Exhaustion rule.
- **Why:** Breather's actual exploit surface wasn't Hit Dice pacing (already capped by the existing "half
  total per Long Rest" rule) but short-rest class-feature resets, which have no Hit-Dice cost at all —
  unlimited Breathers would have let Warlocks/Fighters nova every 5 minutes regardless of healing scarcity.
  Removing it outright (rather than capping its frequency) avoids reintroducing that surface while still
  giving a faster HP-recovery option via the shortened 30-minute Short Rest. The 10-hour Long Rest and its
  7/3 split were sized directly against a 4-person watch rotation rather than picked arbitrarily. Stable
  Characters closes an actual gap: without it, a character stabilized (not dying, just at 0 HP) had no
  way back into consciousness except outside healing, even though a full night's rest was happening right
  next to them.
- **Status:** Active. Restated and re-verified against current 2024 RAW mid-session (see
  `D-2026-08-27-house-rules-raw-annotations-and-collapse`) — the interruption and cooldown mechanics
  above are the actual published rule, not the 2014 version this page previously stated.

---

## D-2026-08-27-armor-strength-requirements · add a Strength-10 "no benefit" floor to both Medium and Heavy armor, layered under Heavy's existing RAW thresholds

- **Context:** 2024 RAW gates only Heavy armor on Strength (Chain Mail 13, Splint/Plate 15 — below the
  threshold, the AC bonus still applies but speed drops 10 ft.); Medium armor has no Strength requirement
  in RAW at all. The player asked for a Medium armor floor first, then asked for the same treatment on
  Heavy armor once the Medium version was in place.
- **Options:** (A) Medium-only floor, leaving Heavy armor exactly as RAW. (B) Add the same Strength-10
  floor to Heavy armor too, but decide whether it *replaces* RAW's 13/15 thresholds or *layers under*
  them. (C) Skip Heavy armor entirely.
- **Decision:** B, layered under. Both Medium and Heavy armor now require Strength 10 to get any benefit
  at all — below that, no AC bonus, nothing. For Heavy armor specifically, RAW's own 13/15 thresholds and
  −10 ft. speed penalty still apply *above* the new floor: Str 10 up to the armor's own RAW requirement
  gets the AC bonus with RAW's speed penalty; at or above the armor's own requirement, no penalty at all.
- **Why:** A flat replacement would have deleted RAW's existing speed-penalty tier for characters between
  Str 10 and 13/15, silently making moderately-weak-but-not-frail characters better off than intended.
  Layering the new floor underneath keeps RAW's existing curve intact for anyone who already clears it,
  and only changes behavior for characters below Str 10, which RAW never addressed for armor use at all.
- **Status:** Active.

---

## D-2026-08-27-group-and-expert-checks · new house rule splitting multi-character checks into Group Checks (RAW) and Expert Checks (this table's own)

- **Context:** `House_Rules.md` had no explicit rule for how to handle a check multiple characters could
  plausibly attempt — RAW's own Group Check mechanic (found in the DMG, not the PHB) already exists but
  wasn't documented here, and there was no house-rule equivalent for tasks better handled by deferring to
  the party's single most-qualified member instead of everyone rolling.
- **Options:** (A) Document only RAW's existing Group Check mechanic. (B) Add a second, new category
  (Expert Checks) for tasks where the party can reasonably rely on one qualified member, formalizing what
  the Help action only partly covers (Help grants Advantage to one roller but doesn't excuse everyone else
  from also rolling). (C) Leave this to ad-hoc GM judgment, undocumented.
- **Decision:** B. Added a new "Group Checks and Expert Checks" section: Group Checks restate RAW's
  existing mechanic (everyone rolls, succeeds if at least half do) with worked examples; Expert Checks are
  new — one qualified character rolls as primary, a second qualified character can grant Advantage instead
  of also rolling, and characters without relevant expertise sit it out entirely. A follow-up pass added
  which physical skills (Sleight of Hand, Athletics, Acrobatics, Stealth) split between the two categories
  by what's actually happening in the scene, not by the skill's name alone.
- **Why:** Some tasks (sneaking as a group, climbing together) genuinely test collective capability and a
  weak roll should matter; others (one Rogue picking a lock, one scholar recalling history) test the
  party's best capability and forcing everyone to roll either wastes time or lets a lucky low-skill roll
  undermine a specialist's presence. Naming both cases explicitly, rather than leaving it to per-instance
  GM judgment, gives players a predictable rule for which applies.
- **Status:** Active.

---

## D-2026-08-27-house-rules-raw-annotations-and-collapse · annotate every section against actual 2024 RAW, fix 2 inaccuracies found doing it, restructure into collapsed callouts with a top quick-link list

- **Context:** `House_Rules.md` had grown to 15 sections without ever stating, section by section, what
  the actual 2024 RAW baseline was for comparison — several of my own in-chat claims about "RAW" earlier
  this same session turned out to be wrong when checked against current sources (Long Rest's frequency
  cap was stated as 2014's flat "once per 24 hours" rather than 2024's actual "16 hours after finishing
  one"; Heroic Inspiration's one-at-a-time cap and pass-along-a-duplicate behavior was mislabeled as this
  table's house rule when it's already standard 2024 RAW). Separately, the page had grown long enough that
  the player asked for each rule collapsed by default with a quick-link list at the top.
- **Options for the RAW pass:** (A) Leave the page as-is, trusting earlier claims. (B) Verify every
  RAW-comparison claim against current sources before publishing it, fixing anything found wrong along
  the way rather than only forward from that point.
- **Options for the layout change:** (A) Convert each section's `##` heading into a collapsible element
  directly (e.g. raw `<details>`), losing the automatic right-sidebar table of contents this site already
  builds from real headings. (B) Keep real `##` headings (preserving the sidebar TOC and stable anchors)
  and wrap only each section's body in an Obsidian-style foldable callout (`> [!note]-`, already supported
  by this site's enabled `ObsidianFlavoredMarkdown` plugin), collapsed by default, plus add a manual
  top-of-page quick-link list linking to each heading's anchor.
- **Decision:** B on both. Every section now carries an italicized RAW-comparison note, and the two
  inaccuracies above were corrected in place rather than left standing. The page was restructured per
  layout-option B: headings stayed real headings, bodies moved into collapsed callouts, and a "Jump to a
  rule" list was added under the intro paragraph.
- **Why:** For the RAW pass — stating something as "matches/differs from RAW" is a factual claim a player
  might rely on at the table; publishing an unverified or already-known-wrong claim under this page's own
  banner ("where they differ from standard D&D 2024") defeats its purpose. For the layout — keeping real
  headings costs nothing and preserves two things a rewrite to raw `<details>` would have broken (the
  sidebar TOC and predictable anchors for a quick-link list); the callout approach uses a plugin already
  enabled in `quartz.config.yaml`, not a new dependency.
- **Status:** Active. Verified directly against the live built site, not just the source Markdown: curled
  the deployed HTML and confirmed all 15 callouts render `is-collapsed` by default, all 14 quick-link
  anchors match a real heading `id` (one mismatch was found and fixed — an em dash in a heading produces a
  double-hyphen slug, not the single-hyphen one first guessed), and all 30 site pages plus the
  cross-links between `House_Rules.md` and `Character_Advancement.md` return live/resolved, not broken.

---

## D-2026-08-12-kid-adult-knowledge-gating · split kid-vs-adult world knowledge into separate, draft-gated files; held Stoneharbour off entirely

- **Context:** Building the first player-facing Amble/world-lore pages (village lore, what's beyond
  Amble, "Haden" — confirmed to mean the GM repo's `Kingdom_of_Halden_Reference.md`, extensively
  documented there but never published here). Partway through, John asked that kid-level vs adult-level
  world knowledge be visibly distinguishable, and specifically wanted to use Quartz's own `draft`
  frontmatter field as the reveal mechanism rather than build a new one.
- **Options considered:** (1) One file with inline age-labeled sections. (2) One file with frontmatter
  tags per section (filterable, more setup). (3) Two files, each independently gated via `draft`. (4) A
  true single-URL "shows only one section based on a marker" mechanism — would need a custom Quartz
  transformer plugin, real engineering on `quartz/`, which this repo's own merge policy already flags as
  needing sign-off separately from content changes.
- **Decision:** Two files, gated independently via the existing `draft: true`/`false` field — no new
  mechanism, reusing what Quartz already ships and what this repo already does for `Ch. 4: [REDACTED]`.
  `Wider_World_Kids.md` (kid-level: roads, traders, the Guild's public presence) ships `draft: false`,
  live immediately. `Kingdom_of_Halden_Adults.md` (adult/older-teen: kingdom name, King Aldric Vane, the
  South March, Stoneharbour, rumor of Kaldrun/Aeloria) ships `draft: true` as a deliberate reveal gate,
  with an in-file HTML comment explaining it's gated on purpose, not unfinished, and what to do when
  flipping it (add the reciprocal links back in). Later renamed both files — `Wider_World.md` →
  `Wider_World_Kids.md`, `Kingdom_of_Halden.md` → `Kingdom_of_Halden_Adults.md` — so the split is visible
  in the filename/URL itself, not just the content; every cross-reference across `Amble.md`,
  `Peoples_and_Magic.md`, `index.md`, and the two renamed files was updated to match.
  Separately: **Stoneharbour was deliberately not given a page at all** this session, despite being
  "the nearest town" and a natural fit for the adult-knowledge tier. The GM repo's Arc02 material (8
  drafted chapter files, `Stoneharbour_Location_Reference.md`, `PAY_AND_DEBT_MODEL.md`,
  `IRON_COIN_GUILD_CONTRACT_FULL_TEXT.md`) is all tied to the still-unrevealed Ch4 debt-trap reveal, and
  this site's own `Arc02_arc2/` folder is still completely empty — no player-safe content exists yet
  beyond the one sentence already in `Kingdom_of_Halden_Adults.md`. Tracked as an open `TASKS.md` item to
  revisit once Arc02 actually starts.
- **Why:** `draft` is a real, already-tested per-file marker Quartz ships for free — reusing it costs
  nothing and matches an existing site pattern, versus building bespoke plugin machinery for a single
  content-reveal need. Filename-level tagging (option 3, refined) makes the tier legible from the file
  tree/URL alone, without needing to open a page to know which knowledge level it holds.
- **Status:** Active. `Wider_World_Kids.md`, `Peoples_and_Magic.md` (ungated — baseline
  character-creation-relevant lore, not part of the kid/adult split), and `House_Rules.md` are live.
  `Amble.md` and `Kingdom_of_Halden_Adults.md` remain `draft: true` pending review/reveal-timing
  respectively.

---

## D-2026-08-24-chapter-04-handouts-from-zuploads · source Chapter 4's handouts from the zcold drop zone, confirm Arc placement and reveal status with the player

- **Context:** 5 files (`H01_The_Branding.jpeg`, `H02_Ride_Out_At_Dawn.jpeg`,
  `H03_Iron_Coin_Guild_Contract_Printable.html`, `H04_Silverdrop.jpeg`, `H05_Indenture_Contract.jpeg`)
  landed in `z-uploads/` on the `zcold` drop-zone branch (see `D-2026-08-09-zcold-autosync-setup`) and
  the player asked for them to go under `Arc01_prelude/Chapter_4/`. Two things needed checking before
  doing that, rather than just moving the files:
  1. **Arc placement.** `H03`'s own internal build comment says it was built "as a companion to... the
     atmospheric prop-shot image (IMG-004 in the Chapter 4 art pack)... Source text:
     `Arc02_among_strangers/IRON_COIN_GUILD_CONTRACT_FULL_TEXT.md`... Deliberately NOT added to
     `04_Chapter_4_Winter.html`'s HANDOUTS manifest" — naming a different arc than the one requested.
     This also matches this repo's own prior record: `D-2026-08-12-kid-adult-knowledge-gating` documents
     Iron Coin Guild/indenture material as GM-repo **Arc02** content, tied to "the still-unrevealed Ch4
     debt-trap reveal" of **Arc01**, with `Arc02_arc2/` deliberately left empty on this site.
  2. **Reveal/spoiler status.** `Arc01_prelude/Chapter_4/index.md` has no `draft: true` — it's live on
     the built site right now, title still `[REDACTED]`. Once actually viewed, the images are
     unambiguous: `H01` shows a girl mid-branding-ceremony at a ledger, `H05` is a full indenture
     contract, both bearing the same guild seal as `H03`'s document — i.e. exactly the debt-trap reveal
     `D-2026-08-12-kid-adult-knowledge-gating` flagged as still-unrevealed as of that date.
- **Decision:** Asked the player directly on both points rather than guessing from the conflicting
  metadata. Confirmed: (1) Arc01 is correct — the `Arc02_among_strangers` reference in `H03`'s comment
  is stale/irrelevant to this site's own arc, and (2) the session has since been played, so no
  `draft: true` gate was added — the page stays live as-is.
- **Why:** The two sources of truth (the player's own instruction vs. a GM-side file's internal
  provenance note plus this repo's own 12-day-old decision record) genuinely disagreed, and getting
  either wrong has a real cost — either a spoiler landing on a public live site, or legitimate
  already-played content getting hidden. Not something to silently pick either way.
- **Consequence — H03's format:** The HTML file is a styled 3-page indenture-contract prop with its own
  `@media print` stylesheet (page-break-per-`.page`-div). Same non-viable-as-raw-`.html` problem as
  `D-2026-07-23-shared-history-handout-format` (Quartz strips `.html`'s extension on output, breaking
  content-type serving), so the same pattern was reused: rendered via headless Chromium
  (`/opt/pw-browsers/chromium` through `playwright`, globally installed in this environment, not a repo
  dependency) to `H03-Iron-Coin-Guild-Contract.png` (full-page screenshot, all 3 stacked pages, for
  in-page display) and `H03-Iron-Coin-Guild-Contract.pdf` (print-media render, for the explicit
  download/print use case), both linked from `Chapter_4/index.md`.
- **Consequence — everything else:** All 4 images renamed underscore→hyphen per
  `D-2026-07-23-auto-rename-underscore-filenames`'s convention (not auto-applied here since these landed
  via manual placement, not a push to `main` matching `auto-handout.yml`'s trigger paths). Embed widths
  (750 landscape / 500 portrait) set by reusing `auto-handout-stub.mjs`'s own JPEG-dimension-sniffing
  logic directly, rather than eyeballing. `Chapter_4/index.md` given `noStubPages: true`, matching
  `Chapter_1`/`Chapter_3`'s consolidated-inline pattern (`D-2026-07-21-noStubPages-flag`) rather than
  Chapter_2's separate-stub-pages pattern. Image bytes were **not** run through `optimize-images.mjs`
  (sharp isn't installed outside CI) — if these are ever pushed through to `main`, `auto-handout.yml`
  will re-optimize them automatically on that push since it detects newly-added images under
  `content/**` regardless of branch of origin; the folder's `noStubPages: true` plus pre-existing index
  embeds means that same Action run will not create redundant stub pages.
- **Status:** Active. A full local Quartz build was attempted for verification (matching this repo's own
  practice, e.g. `D-2026-08-09-chapter-03-from-zuploads`) but `npm run install-plugins` hung/timed out in
  this environment — likely an `ssh://`-based git dependency the sandboxed network proxy can't reach (a
  degraded-network issue, not a content problem). Verified manually instead: filename-safety rules,
  dimension/width logic, and the `noStubPages` embed pattern were all checked against the site's own
  scripts directly rather than re-implemented from memory, and the rendered PNG/PDF were visually
  inspected. Original files left untouched on `zcold`'s `z-uploads/` per the same reasoning as
  `D-2026-08-09-chapter-03-from-zuploads` — that branch is a live local drop-zone, not something a
  session edits without being asked.

---

## D-2026-08-24-nine-tier-dc-scale · mirror the GM-side campaign's expanded nine-tier DC scale into the player-facing House Rules page

- **Context:** The GM-side campaign repo (`cm-pact-campaign`) expanded its DC scale from four tiers (Easy
  10/Standard 15/Hard 20/Exceptional 25) to nine (Trivial 5, Easy 8, Modest 12, Standard 15, Hard 22,
  Demanding 24, Extreme 28, Heroic 33, Godly 37) — see that repo's own
  `decisions/2026/D-2026-08-24-nine-tier-dc-scale.md` for the full design reasoning, including the D&D
  2024 math behind Heroic and Godly being genuinely level-gated (impossible on a natural 20 below roughly
  Level 9 and Level 17 respectively, not just rare). John asked for this written here too, with examples.
- **Options:** (A) Keep this page's existing soft, numberless framing ("advantage is earned, failure
  isn't a hard stop") and leave DCs as GM-only information. (B) Publish the full nine-tier scale here,
  with worked examples, same as the GM guide. (C) Publish a trimmed/simplified version.
- **Decision:** B. Added a new "How Hard Is Hard?" section to `content/Amble_Campaign/House_Rules.md`,
  directly under the existing "How Checks Actually Play Out" section — the full nine-tier ladder, five
  examples per tier, written in player-facing language (no GM-only design notes like the "use sparingly"
  guidance the source guide carries for Heroic/Godly).
- **Why:** This page already publishes other genuinely mechanical house rules (initiative uses Wisdom,
  Long Rests don't auto-heal, Breathers) rather than staying purely narrative, so a DC ladder is
  consistent with what the page already does. Knowing roughly how hard something is helps players make
  informed choices about when to push a risky action versus look for another way, without needing to ask
  the GM to break character and state a number.
- **Status:** Active. This repo's copy is a **mirror**, not the source of truth — if the GM-side scale
  changes again, this page needs updating to match; it isn't automatically synced.
- **Consequence:** No numeric changes needed to any already-published player-facing content — none of
  this project's pages previously stated a DC number.

## D-2026-08-11-player-agent-contentindex-boundary · use Quartz's built contentIndex.json as the player agent's data source, not raw repo access

- **Context:** Planning a player-facing AI agent (Open WebUI, on the home server) that answers questions
  about the campaign from this repo, and this repo only — ideally scoped to certain directories, ideally
  symlink-safe. The existing v1 (`D-2026-07-21-pact-player-agent-fast-path-v1`, tracked on
  `home-ai-server`) is manual copy-paste of one recap file into an Open WebUI knowledge base — doesn't
  scale past a single file and needed a real content-scoping story before automating further.
- **Options:**
  - A) Give the agent raw filesystem or git access to this repo (a clone, or an MCP filesystem server
    scoped to `content/`) — needs its own logic to re-derive which pages are draft/private/encrypted and
    its own symlink-following, duplicating what Quartz's build already does.
  - B) Sync the agent's knowledge base from the **deployed site's own `static/contentIndex.json`** —
    Quartz's built-in search/Explorer index, regenerated on every push to `main` via
    `deploy-pages.yml`.
  - C) Keep the current manual copy-paste approach, just for more files.
- **Decision:** B.
- **Why:** `contentIndex.json` is already filtered by Quartz itself before the agent ever sees it:
  `content/private/` is excluded via `quartz.config.yaml`'s `ignorePatterns`, `draft: true` pages are
  stripped by the `remove-draft` plugin, and password-protected GM pages ship as ciphertext in a
  *separate* file (`static/encryptedContentIndex.json`) the sync never touches. It's already public —
  served to every visitor's browser for the site's own search — so pulling from it adds no new exposure.
  Whatever symlinks resolve to under `content/` is already resolved by Quartz's own build, so the sync
  needs no symlink-handling of its own. This reuses one already-tested boundary instead of
  re-implementing it a second time inside a sync script, where getting it wrong risks leaking GM/private
  content. Rejected A for that re-implementation risk; rejected C since it doesn't scale past one file and
  this repo has grown well past a single recap.
- **Status:** Active. The actual sync script, Open WebUI wiring, and remote-access mechanism (Tailscale
  Funnel — a public HTTPS URL requiring no install on the player's end, gated by Open WebUI's own login)
  are infra work tracked on `home-ai-server`'s own `TASK_BOARD.md`/`DECISIONS.md`, not duplicated here.
- **Consequence:** No repo-side code changes for the boundary itself — `draft: true`, `content/private/`,
  and `password` frontmatter remain the actual (and only) mechanisms that keep something invisible to the
  agent, same as they're already the only mechanisms that keep it out of the built site. Folder location
  or "just don't link it from an index.md" is not a boundary the agent respects. Reinforces the still-open
  `TASKS.md` item "Decide deliberately whether any GM-only content should ever touch this public repo at
  all."

## D-2026-08-09-zcold-autosync-setup · drop-zone folders synced via a dedicated branch + worktree, not `main`

- **Context:** The owner wanted a folder they could drop files into locally and have auto-pushed to
  GitHub, without touching any in-progress work elsewhere in the repo. First tried as a plain tracked
  folder (`z-cold`/`z-uploads`) on `main`, auto-committed by a small script scoped to just those paths.
  That broke the first time this repo's working copy was switched to a feature branch
  (`claude/quartz-update-tasks-qyvxuh`) for unrelated work — the folders vanished from disk, because git
  checkout swaps the working tree to match whatever branch is current, and they were only tracked on
  `main`.
- **Options considered:** (1) `git-auto-sync` (a downloaded tool) pointed at the whole repo — rejected,
  it has no subfolder scoping and would auto-push unrelated edits too. (2) Keep the plain-tracked-folder
  approach and just re-sync it onto every branch by hand as needed — rejected, same root cause would keep
  recurring on any future branch. (3) **Chosen:** a dedicated orphan branch (`zcold`) holding only
  `z-cold`/`z-uploads`, checked out permanently into its own git worktree
  (`~/dev/zcold-sync/worktrees/PACT_Players`, outside the repo), linked into the real repo folder via a
  Windows junction (`New-Item -ItemType Junction`).
- **Decision:** Implemented option 3. `main` (and every branch) no longer tracks these folders — they're
  `.gitignore`'d — so no branch switch can make them disappear again. A small external PowerShell script
  (`~/dev/zcold-sync/zcold-watch.ps1`, not part of this repo, shared across projects) polls the worktree
  every ~5s and stages/commits/pushes only `z-cold`/`z-uploads` changes to the `zcold` branch. Runs as
  Windows Scheduled Task `ZColdSync`.
- **Why:** A worktree is the only way to have a path "always checked out" independent of whatever branch
  is open in the normal working copy — git refuses to check the same branch out twice, ruling out keeping
  the content directly on `main`. Trade-off: browsing dropped files on github.com means switching to the
  `zcold` branch rather than seeing them under `main`. Locally this is invisible — the junction makes
  both folders look and behave like ordinary folders regardless of branch.
- **Status:** Active. Same pattern also applied to the `PACT` repo (see its own `DECISIONS.md`) using the
  same shared watcher script.

## D-2026-08-09-chapter-03-from-zuploads · source Chapter 3's prose and art from the zcold drop zone

- **Context:** The player said "chapter 3 art and story are now under z-uploads" — a folder on the
  separate `zcold` branch (not `main`, see `D-2026-08-09-zcold-autosync-setup` above for how it gets
  there), synced there by a background script on the player's own
  machine (per that branch's own `z-uploads/README.md`). It contained a full-session draft
  (`chapter-03-draft-full-session.md`) and three illustrations. The draft file itself carried a GM-only
  header (external cold-review scores, canon-correction notes, source-transcript path) and a full
  "Session Metadata (AI Reference)" footer (Moral Ledger entries, milestone tracking, narrator-voice
  notes) — none of it meant to ship player-facing, matching the pattern already handled once for
  Chapters 1–2 (`D-2026-08-08-chapter-art-ignoremd`).
- **Decision:** Copied only the prose body (the "Chapter 3 — Fourteen" section) into
  `chapter-03-draft-Autumn-Who-to-Believe.md`, dropping the GM header/footer entirely. Renamed the three
  images with the `-ignoremd` marker and embedded each at its matching scene (bell-loft discovery, the
  fey creature's reappearance at the lime pits, the apprenticeship ceremony). Titled it "Autumn: Who to
  Believe" — reusing the title already chosen for `Arc01_prelude/Chapter_3`'s handout gallery, since the
  two describe the same in-story chapter and titles should agree. Left `draft: true`, matching the
  source file's own "awaiting John's own read" status, and linked it from both
  `The_Story_So_Far/index.md` and `Arc01_prelude/index.md` the same way Chapters 1–2 are (unpublished
  chapters still get linked; the draft flag is what keeps them off the built site, not omitting the
  link — see `D-2026-08-08-publish-story-so-far-chapters` for that same reasoning applied to Ch. 1–2).
- **Why:** The GM-side metadata (review scores, Moral Ledger bookkeeping, transcript paths) documents how
  the chapter was produced, not what happened in the story — it has no place in player-facing prose,
  same reasoning as the footer notes stripped from Chapter 1. Reusing the Chapter_3 handout title instead
  of inventing a new one keeps the two pages from drifting into inconsistent names for the same chapter.
- **Status:** Active. `chapter-03-draft-Autumn-Who-to-Believe.md` stays `draft: true` until the player
  confirms it's ready, the same as Chapters 1–2 were before `D-2026-08-08-publish-story-so-far-chapters`.
  Verified with a local build (temporarily un-drafted, then reverted): all three images render with the
  correct alt text, both index pages link to it, and reverting to `draft: true` correctly filters it back
  out of the built site. The source file and images still exist on `zcold`'s `z-uploads/` — left
  untouched since that branch is tied to a live background sync script on the player's own machine, not
  something this session should modify without being asked.

## D-2026-08-08-publish-story-so-far-chapters · publish both chapters despite the open Moral Ledger note

- **Context:** Both chapters were `draft: true`, which meant their links from
  `The_Story_So_Far/Arc01_prelude/index.md` 404'd on the live site — reported by the player as a bug.
  Root cause was the deliberate draft gate itself, not an actual build/link error (confirmed with a local
  build: 0 files filtered once un-drafted, both pages emit, and both links resolve).
- **Decision:** Flip `draft: false` on both `chapter-01-draft-Spring-The-Broken-Charm.md` and
  `chapter-02-draft-Summer-Market-Day.md` per the player's explicit "publish it," rather than waiting on
  the Moral Ledger sequencing fix first.
- **Why:** The Moral Ledger issue is a "First Heroic Act" mislabel in some external GM-side tracking
  document — nothing about it is visible in the published chapter prose itself, so publishing now costs
  nothing and doesn't need to wait on a document whose location isn't even confirmed yet.
- **Status:** Active. `TASKS.md` still carries the open item to locate and fix the Moral Ledger mislabel.
- **Consequence:** The "N items under this folder" listing on `The_Story_So_Far/Arc01_prelude/index.md`
  now shows 2 items (both chapters), duplicating the curated bullet list above it — expected and already
  accepted in `D-2026-08-08-story-so-far-section`'s reasoning (that folder deliberately has no
  `noStubPages: true`, since these are real pages meant to be found via the folder listing too, not just
  the curated links).

## D-2026-08-08-chapter-art-ignoremd · manually embed chapter artwork, opt out of the auto-handout pipeline

- **Context:** The player pushed four new illustrations directly into
  `content/The_Story_So_Far/Arc01_prelude/` (one for chapter 1, three for chapter 2), unmarked. That
  folder has an `index.md` without `noStubPages: true`, so on merge to `main` the `auto-handout` pipeline
  would have created a standalone stub page for each image and appended an inline embed to the sessions
  index — exactly the "N items under this folder" clutter already fixed once for the handout galleries
  (see `D-2026-07-23-nostubpages-frontmatter-flag`), except here the images are meant to illustrate
  specific chapters, not sit in a gallery at all.
  - Separately, the player had tried to delete chapter 1's GM-only footer notes (NPC-naming note,
    Moral Ledger sequencing note, source-transcript path) in the same push, but that push branched off an
    older commit; the subsequent merge kept my in-progress edit to that same footer (resolving the NPC
    name) instead of applying their deletion, so the notes were still present after the merge completed
    cleanly with no conflict markers.
- **Decision:** Renamed all four images with the `ignoremd` marker (`chapter-01-the-cubby-tree-ignoremd.jpeg`, etc.)
  and manually embedded each one inline at its matching scene in the relevant chapter's prose. Finished
  removing chapter 1's footer notes as the player intended — the NPC-naming note was already resolved and
  redundant, and the source-transcript path shouldn't ship in player-facing prose. The still-open Moral
  Ledger sequencing problem was copied into `TASKS.md` before the footer was deleted, so the substance
  isn't lost, only the internal editorial note.
- **Why:** `ignoremd` is the repo's existing mechanism for "art meant to be placed by hand inside prose,
  not auto-handled" (documented in `auto-handout-stub.mjs`'s own header comment) — this is exactly that
  case. Stripping the footer notes matters because these files will eventually go player-facing (once
  `draft: true` is lifted) and GM notes/transcript paths shouldn't be part of what ships.
- **Status:** Active. Verified with a local build: draft filtering still holds (both chapters excluded),
  the sessions index still shows "0 items under this folder" (no stray stub pages), and all four images
  render inline at their embed points.
- **Consequence:** If more chapter art gets added to this folder before `noStubPages: true` is ever added
  to its `index.md`, it needs the same `ignoremd` treatment — the folder currently relies on every future
  image following that convention.

## D-2026-08-08-restructure-story-so-far-top-level · rename campaign folder, promote Story So Far to content root

- **Context:** The player pushed a restructure directly to this branch (`00_Campaign` → `Amble_Campaign`,
  `The_Story_So_Far` moved up from nested-in-campaign to a content-root sibling of the arcs) along with
  the first two prose chapters. Because it landed as a direct push rather than through this session, the
  rename broke every existing `[[00_Campaign/...]]` wikilink written before the move — `content/index.md`,
  `Arc01_prelude/index.md`, `Amble_Campaign/index.md`, and `The_Story_So_Far/index.md` all pointed at
  paths that no longer existed.
- **Decision:** Fixed every broken link to the new paths, wired the two new chapter files into
  `The_Story_So_Far/Arc01_prelude/index.md` (which still said "No sessions written up yet"), and added
  `title`/`draft: true` frontmatter to both chapter files — neither had any frontmatter at all, so without
  this they'd have built with an ugly filename-derived title and gone player-facing with their GM-only
  editorial notes still attached (one has an explicit **[VERIFY]** on an NPC name, plus a cross-file
  sequencing note saying the other chapter's "First Heroic Act" annotation is currently wrong). Also
  updated `CLAUDE.md`'s content-structure section to stop describing a `00_` numeric-prefix rule that no
  longer reflects what's actually on disk.
- **Why:** `Amble_Campaign` sorts before `ArcNN_name` folders on the name alone (`Am` < `Ar`), so the
  numeric-prefix trick documented in `D-2026-07-19-category-folder-sort-order`'s sibling reasoning wasn't
  actually load-bearing here — dropping it for a more meaningful name cost nothing. `draft: true` on the
  new chapters follows the same reasoning as the (now-superseded) Session 1 recap draft gate in
  `TASKS.md`: unresolved GM notes shouldn't go live by accident just because a file landed in `content/`.
- **Status:** Active. Verified with a local build: both draft chapters are correctly filtered out (0 in
  `public/`), the Story So Far → Arc01 → chapter links all resolve, and `Amble_Campaign` still sorts above
  the arcs in the Explorer sidebar.
- **Consequence:** The two chapter files stay invisible on the built site until `draft: true` is flipped —
  do that once the `[VERIFY]` NPC-name note and the Moral Ledger "First Heroic Act" sequencing note (see
  the note block at the bottom of `chapter-01-draft-Spring-The-Broken-Charm.md`) are resolved.

## D-2026-08-08-story-so-far-section · a campaign-level section for prose session recaps

- **Context:** The player has been writing up each session as a short story — prose narrating the actual
  adventure, not a rules/handout reference. It needed a home in the site. Initially floated as a single
  HTML page with tabs per session plus generated artwork. Investigated that option directly: Quartz
  copies `.html` files as static assets but **strips the `.html` extension on output** (confirmed by
  building a real test file — same footgun already documented in
  `D-2026-07-23-shared-history-handout-format`), so a hand-authored tabbed page would need to be treated
  as an opaque non-Quartz asset, losing search indexing, backlinks, the mobile-responsive shell, and
  `draft: true` gating that every other page on the site gets for free. Recommended plain Quartz pages
  instead, one per session.
- **Naming:** "Chapter" was already taken (the per-session handout-gallery folders, `Chapter_1`–
  `Chapter_4`) and reusing it for prose would collide in meaning. Considered "Chronicle" (rejected —
  too formal a tone for the site) and "Tales" (rejected — reads as a disconnected anthology, when these
  are meant to read as one continuous story). Landed on **"The Story So Far"** for the section, with
  individual entries labeled **"Session N: [Title]"** rather than "Chapter" or "recap".
- **Decision:** New section at `content/00_Campaign/The_Story_So_Far/` (campaign level, not nested under
  one arc, since the story spans arcs) with one subfolder per arc reusing the existing `ArcNN_name`
  convention (e.g. `Arc01_prelude/`), each holding that arc's `Session_NN.md` entries plus an `index.md`.
  Linked from both `00_Campaign/index.md` (campaign hub) and `Arc01_prelude/index.md` (arc page), same
  cross-linking pattern used for the Shared History Handout. Deliberately **no** `noStubPages: true` on
  the arc-level index — unlike the handout-gallery pattern, these session pages are meant to be found and
  linked to directly, not just embedded inline, so the folder listing is genuinely wanted here rather
  than clutter.
- **Why:** Plain Quartz pages get search, backlinks, `draft: true` gating, and the existing mobile-
  responsive layout for free — a hand-rolled tabbed HTML page would have to reimplement or forgo all of
  that, for a cosmetic tab UI Quartz doesn't need in order to read well as connected short chapters.
- **Status:** Active. Scaffolding only — index pages exist for the section and Arc01 Prelude; no
  `Session_NN.md` files yet, pending the player's actual prose text.
- **Consequence:** When session artwork gets added, use the existing `ignoremd` filename marker so the
  auto-handout pipeline doesn't create an unwanted stub page or inline embed for art meant to be placed
  by hand inside a session's own prose file.

## D-2026-07-28-sniff-image-bytes-not-extension · detect image format from magic bytes, not the file extension
- **Context:** Chapter 3's new images landed and the pipeline auto-processed them, but
  `H09-fey-creature.png` came out with no explicit width — everything else got one. Investigated with
  `file`, not assumption: the file's actual content is JPEG (`JFIF standard 1.01 ... 1536x1024`), despite
  its `.png` extension. `auto-handout-stub.mjs`'s `imageWidthFor()` picked its parser
  (`pngSize`/`jpegSize`) based on the file's extension, so a `.png`-named file only ever got the PNG
  reader tried — which correctly returned nothing for JPEG bytes, silently producing no width rather than
  an error.
- **Decision:** Try `pngSize()` first, then fall back to `jpegSize()`, regardless of what the extension
  says. Verified against the actual mislabeled file before merging: PNG parse returns `null`, JPEG
  fallback correctly reads `1536x1024` → landscape → `750`.
- **Why:** A mislabeled file is a real, if uncommon, occurrence (image tools/exports get this wrong
  sometimes) and the fix costs nothing — trying both parsers is cheap, and content bytes are the actual
  source of truth, not a filename convention.
- **Status:** Active.
- **Consequence:** Manually fixed `H09-fey-creature.png`'s embed to `|750` in both `index.md` and (before
  it was deleted, see below) its own stub page. Also consolidated Chapter 3 into the `noStubPages`
  pattern (like Chapter 2 was manually consolidated just before it) — deleted its 7 standalone stub
  pages, added `noStubPages: true` to `Chapter_3/index.md`, verified 0 items under that folder afterward.

## D-2026-07-28-technical-access-not-scope · add a "technical access ≠ scope" rule to CLAUDE.md
- **Context:** Direct testing on Home AI Server (a different project sharing the AI_templates standard
  this repo is a light port of) confirmed a real gap: a session with broad, non-enforced filesystem/
  connector access reasoned it *would* edit a different project's files if asked, since it saw no rule
  stopping it.
- **Options:** Leave it as an unstated assumption; or state it explicitly in `CLAUDE.md`, matching the
  standard-level rule added to AI_templates' `AGENTS_TEMPLATE.md`/`AI_RULES.md` and retrofitted into
  every other active project's own instructions file.
- **Decision:** State it explicitly.
- **Why:** The Home AI Server test showed the assumption doesn't hold — a session without an enforced
  technical boundary needs to actually be told, not just expected to infer it. This repo has no
  `AGENTS.md` (see the "no AGENTS.md" note under Log as you go), so the rule goes in `CLAUDE.md` instead,
  the sole "how to work here" file.
- **Status:** Active. See AI_templates' `D-2026-07-28-technical-access-not-scope` for the full reasoning.

## D-2026-07-23-nostubpages-frontmatter-flag · opt a folder out of standalone per-image stub pages
- **Context:** `auto-handout-stub.mjs` always creates a standalone `.md` page for a new image *and*
  embeds it inline in the folder's `index.md`. That's redundant the moment a folder already shows
  everything inline (Chapter 1, NPCs) — worse, Quartz's `folder-page` plugin auto-lists every `.md` file
  physically sitting in a folder as a "N items under this folder" block, so the redundant stub pages
  started showing up as an unwanted listing of oddly-named orphan pages at the bottom of `Chapter_1` and
  `NPCs` the moment new images landed there (flagged directly: "why is it there and how to get rid of it
  and stop it coming back").
- **Verification:** confirmed via a real local build that the listing comes specifically from
  `folder-page`, and that it's not unique to Chapter 1 — `NPCs/index.html` showed the identical "3 items
  under this folder" for its 3 new portrait stub pages, confirming this would recur anywhere the
  pipeline touches a similarly-consolidated folder, not just this one instance.
- **Options:**
  - A) Disable Quartz's `folder-page` plugin (or its listing) site-wide — removes the symptom everywhere
    but also removes a real feature for any folder that might actually want folder browsing.
  - B) Stop creating standalone stub pages entirely, always — simpler, but breaks Chapter 2's existing,
    deliberately-created standalone pages (`funeral-notice.md`, `market (1).md` — real pages, not the
    pipeline's own redundant duplicates).
  - C) A per-folder opt-out: a `noStubPages: true` frontmatter flag on a folder's `index.md`, checked by
    the script before creating a standalone page — inline embed still happens either way.
- **Decision:** C.
- **Why:** Targets the actual redundancy (a folder that already shows everything inline gets no benefit
  from a second, listed-but-unlinked copy of the same content) without touching Quartz's `folder-page`
  feature globally (Option A) or breaking Chapter 2's legitimate standalone pages (Option B). Verified
  both branches locally with synthetic test images before merging: a flagged folder gets the inline
  embed only (no `.md` created); an unflagged folder keeps the original create-both behavior unchanged.
- **Status:** Active.
- **Consequence:** Applied `noStubPages: true` to `Chapter_1`, `NPCs`, `Maps`, and `Misc` (all
  effectively "everything inline" already); deleted the 5 redundant stub pages this bug had already
  created (`Children-fighting.md`, `Map-B-The-Woodline-and-Beyond-Session-1.md`, and the 3
  `Portrait-*.md` files) — their content was already duplicated in each folder's `index.md`. Any new
  folder adopting the "consolidate into index.md" pattern should get this flag too; `Chapter_2` correctly
  does not have it.

## D-2026-07-23-shared-history-handout-format · render a standalone HTML handout as image + PDF, not raw HTML
- **Context:** John supplied a "Shared History" player handout as a self-contained `.html` file with
  custom Google Fonts, a parchment theme, and its own `@media print` stylesheet ("Print this and keep it
  beside your character sheet"). Needed to decide how to actually host this on a Quartz/GitHub Pages
  site where every other handout is a plain image.
- **Verification, not assumption:** copied the file into `content/` and ran a real local build before
  deciding anything. Confirmed via byte-for-byte diff that Quartz copies `.html` files verbatim as a
  static asset (content unchanged) — but it emits the file with **no extension**
  (`shared-history-test.html` → served at `.../shared-history-test`), because Quartz's own path handling
  treats `.html`-suffixed paths as page slugs (matching its own emitted output), not as opaque static
  assets. An extension-less file won't reliably get a `text/html` content-type from GitHub Pages' static
  file server, so a reader's browser would likely download or mis-render it rather than display it.
  Separately confirmed `.pdf` does NOT have this problem: a real wikilink (`[[file.pdf|Download]]`) to a
  test PDF resolved to `.../file.pdf` with the extension intact, verified in the built HTML's `<a href>`.
- **Options:**
  - A) Host the raw `.html` file directly — ruled out by the verification above.
  - B) Manually rebuild the handout as a plain Quartz Markdown page, using the site's own typography —
    loses the bespoke parchment/font design entirely.
  - C) Render the HTML with headless Chromium (already available in this environment) to a screenshot
    image for on-site display, matching how every other handout works.
  - D) Also render a PDF via the same headless browser, using the design's own print stylesheet, and
    link to it as a downloadable/printable file.
- **Decision:** C and D together — an image for in-page viewing plus a linked PDF for the explicit
  print-and-keep use case, on one new handout page.
- **Why:** Option A is simply broken. Option B throws away real design work (fonts, parchment texture,
  layout) the handout was deliberately given, for no benefit. C alone would satisfy "look right on the
  site" but lose the crisp/selectable/printable text the design explicitly asks for; D alone would
  satisfy the print use case but not match the image-based convention every other handout on this site
  follows. Doing both costs nothing extra (both render from the same source in one headless-browser
  pass) and serves both use cases properly instead of picking one at the expense of the other.
- **Status:** Active.
- **Consequence:** This is the first `.pdf` asset and the first "image + downloadable" pattern on this
  site — worth following the same approach (render via headless Chromium, image for display + PDF for
  print) for any future handout that arrives as a standalone styled HTML file rather than a plain image.
  Placed as an arc-wide loose file under `content/Arc01_prelude/` (pre-Session-1 shared backstory, not
  tied to a specific chapter) rather than inside a `Chapter_N/` folder, per this repo's existing
  arc-wide-vs-chapter-specific content rule in `CLAUDE.md`.

## D-2026-07-23-auto-rename-underscore-filenames · auto-fix underscore image filenames instead of catching them after the fact
- **Context:** `D-2026-07-21-filename-lint-check` added `check-filenames.yml` to catch (not fix) three
  documented Quartz filename footguns. The same day this repo saw real use: 3 new NPC portraits
  (`Portrait_1_Wren_Age_7_Session_1.png`, etc.) landed via the auto-handout pipeline with underscore
  names, `check-filenames.yml` correctly failed on that push, and fixing it required a manual follow-up
  commit (renaming the images, the generated stub pages, and the `NPCs/index.md` links by hand).
- **Options:**
  - A) Leave it as a catch-and-report check — a human always fixes it manually afterward, as just
    happened.
  - B) Auto-rename underscores to hyphens for newly added images, before the stub-creation step ever
    runs, so the stub page and index link are correct from the very first commit.
  - C) Also try to auto-fix `@` and non-ASCII filename problems the same way.
- **Decision:** B. Kept `@`/non-ASCII as human-fix-only (Option C rejected).
- **Why:** Underscore -> hyphen has one obviously-correct, safe replacement — nothing is lost or
  ambiguous. `@` and non-ASCII don't have an equally obvious safe rewrite (what should
  `café.png` become? `cafe.png`? `caf.png`? — a human's call), so auto-fixing those risks silently
  mangling a filename someone cared about, which is worse than a loud, catchable failure.
- **Status:** Active.
- **Consequence:** `.github/scripts/rename-unsafe-filenames.mjs` runs in `auto-handout.yml` right after
  the newly-added-images manifest is computed, rewriting both the files on disk and the manifest itself
  so every later step (`optimize-images.mjs`, `auto-handout-stub.mjs`) operates on the corrected
  filename. `check-filenames.mjs`'s underscore check was removed — it would now just be permanent noise
  on a problem that's already fixed within the same pipeline run (verified: re-tested the check against
  the same synthetic cases used in `D-2026-07-21-filename-lint-check` and confirmed it no longer flags
  `bad_name.png` while still correctly flagging `photo@2x.png` and `café.png`). Verified the full chain
  end-to-end locally (rename -> optimize -> stub creation) with a synthetic underscore-named file before
  merging.

## D-2026-07-22-github-source-link-plugin · link the page date stamp to the file on GitHub, not the exact last commit
- **Context:** The user wanted the per-page date stamp (already shown automatically by Quartz's
  `content-meta`/`created-modified-date` plugins, git-driven, `priority: [frontmatter, git, filesystem]`)
  made clickable, so they could confirm which version of a page they were looking at.
- **Key finding:** `content-meta` and `created-modified-date` are declared in `quartz.config.yaml` with
  `source: github:quartz-community/...` — Quartz's plugin loader (`quartz/plugins/loader/gitLoader.ts`)
  fetches these fresh from GitHub into `.quartz/plugins/` (gitignored) on every `npx quartz plugin
  install`/build. There is no local file in this repo to edit to change their behavior. The loader does
  support a **local** plugin source (`source: ./relative/path`, symlinked into `.quartz/plugins/` instead
  of cloned — see `isLocalSource`/`installPlugin` in `gitLoader.ts`), which is the supported extension
  point for exactly this kind of customization.
- **Options:**
  - A) Make the date link to the exact commit that last touched the file — needs a new build-time
    git-log-per-file lookup (a transformer plugin) plus a replacement display component.
  - B) Add a separate small link, "View source on GitHub", pointing at the file's page on `main` —
    computed directly from `fileData.relativePath` (already set by Quartz's own markdown parser), no git
    shell-out needed.
  - C) Leave the date as plain text.
- **Decision:** B, per the user's explicit choice after being shown the real cost of A.
- **Why:** A requires new git-lookup code this session could not fully test before it would touch the
  live build (no `node_modules` installed in this sandbox at the point the choice was made). Getting a
  static site generator's build pipeline wrong is a real, hard-to-reverse risk to the live site. B needed
  no git lookup at all, so it could be fully built and verified locally before ever pushing: ran `npm ci`
  (worked fine through the sandbox's proxy), `npx quartz build`, and confirmed both the rendered HTML and
  that the resulting GitHub URLs actually 200 — including a path with spaces (`House Rules.md` →
  `House%20Rules.md`, correctly percent-encoded). From the linked GitHub file page, a reader is still one
  click away ("History") from every past version, just not the single most-recent commit's diff directly.
- **Status:** Active.
- **Consequence:** `local-plugins/github-source-link/` is now the pattern for any future same-repo Quartz
  customization. Notes for next time: (1) the plugin's `package.json` needs a `quartz` manifest field
  (`category: "component"`, `components: {...}`, `defaultOptions`) for the loader to recognize and
  register it; `quartz.config.yaml` then references it via `source: ./local-plugins/<name>` with a
  `layout` block exactly like any external plugin. (2) The loader's subpath-export fallback (used to find
  a plugin's `components` module) only looks for compiled `.js` candidates unless the plugin's
  `package.json` declares an explicit `exports` map — this plugin's component is plain `.js` using
  `preact`'s `h()` directly (no JSX) specifically to avoid needing that; a future local plugin wanting
  JSX/`.tsx` will need an explicit `exports["./components"]` entry pointing at the `.tsx` file. A true
  "link to the exact last commit" version remains undone — logged as an open item in `TASKS.md`.

## D-2026-07-21-fix-draft-frontmatter-field · `status: draft` doesn't hide a page — Quartz needs `draft: true`
- **Context:** The Session 1 recap's frontmatter used a custom `status: draft` / `needs_review: true`
  pair, with an explicit note to flip `status: approved` once ready for players. While researching this
  repo for improvement ideas, found that Quartz ships a `RemoveDrafts` filter plugin (already `enabled:
  true` in `quartz.config.yaml`) that checks a literal `draft: true` frontmatter field — not `status`.
- **Verification:** rebuilt the site locally (`npm ci && npx quartz plugin install && npx quartz
  build`). Output: `Filtered out 0 files` across all 21 input files, and
  `public/arc01_prelude/session_recaps/session-01-recap.html` was fully present — confirming the "draft"
  recap was being built and would deploy to the public site exactly like any approved page.
- **Options:**
  - A) Leave `status`/`needs_review` as the only fields, accept that "draft" content is not actually
    held back from the live site.
  - B) Add `draft: true` (the real field) alongside the existing custom fields, so both this repo's own
    tracking convention and Quartz's actual filter agree.
  - C) Drop `status`/`needs_review` entirely and standardize on `draft: true` alone.
- **Decision:** Option B.
- **Why:** Option A leaves a real, silent gap between intent and behavior. Option C would lose the
  distinction this repo already draws between "not yet reviewed" (`needs_review`) and "reviewed, not yet
  released" (`status`), which `draft: true` alone can't express — `draft` is binary (hidden or not),
  while this repo tracks a review pipeline. Keeping both costs nothing and closes the actual gap.
- **Status:** Active.
- **Consequence:** Publishing the Session 1 recap now requires flipping all three fields — `draft:
  false`, `status: approved`, `needs_review: false` — not just `status`. `TASKS.md` and `CLAUDE.md`
  updated accordingly. Worth checking any future "draft"-style content the same way rather than
  assuming a custom field name does anything on its own.

## D-2026-07-21-image-alt-text · add alt text to every handout image embed
- **Context:** None of this repo's image embeds had alt text — a real accessibility gap (screen readers
  get nothing on any handout image). Quartz's wikilink embed syntax supports combining alt text with an
  explicit width, but the exact syntax needed confirming before touching every embed in the repo.
- **Verification:** rather than trust a single source, extracted Quartz's actual
  `wikilinkImageEmbedRegex` and ran it directly in Node against sample inputs — confirmed
  `![[file.png|Alt Text|500]]` parses to `alt: "Alt Text", width: "500"` as expected, and that a
  numbers-only segment (`![[file.png|500]]`) is correctly treated as width-only, not alt text.
- **Decision:** Added alt text (matching each page's title) to every existing handout embed across
  `Chapter_1`, `Chapter_2`, `NPCs/`, `Maps/`, `Misc/`, and the two banners — `![[file.png|Alt Text|750]]`
  — and updated `.github/scripts/auto-handout-stub.mjs` to generate embeds the same way for future
  images, so this doesn't regress as new handouts get auto-generated.
- **Why:** Free accessibility win once the exact syntax was confirmed safe; folding it into the
  auto-handout script means it's the new default going forward, not a one-time manual pass that drifts.
- **Status:** Active.
- **Consequence:** Any image embed added by hand (bypassing the auto-handout Action) should follow the
  same `![[file|Title|width]]` pattern for consistency.

## D-2026-07-21-auto-optimize-images · re-encode newly added images with sharp before creating handout pages
- **Context:** This repo's AI-generated handout images are large — several 3MB+ PNGs at 1024×1536/
  1536×1024. `sharp` is already a project dependency (Quartz itself uses it), making in-repo image
  optimization straightforward to add without a new external dependency.
- **Verification, not just assumption:** tested against real repo images before wiring anything in.
  Naive re-encode at default settings didn't beat the originals at all (`already optimal`) — only
  `effort: 10` (libvips' slowest/best PNG compression setting) produced real savings: 3.00MB → 1.26MB
  and 2.94MB → 1.14MB on two samples (~58% smaller). Also checked pixel-level fidelity: not byte-
  identical (a source `sBIT` chunk causes ~1.6/255 average channel-value drift, max 49/255 on rare
  pixels) — negligible/imperceptible in practice, but documented as "near-lossless," not overclaimed as
  exact. Confirmed the "only overwrite if smaller" safety check actually matters: re-encoding the
  already-optimized Arc01 banner (100KB) at quality 85 would have made it *larger* (150KB) — the check
  correctly skips it.
- **Options:**
  - A) Don't optimize images at all — accept multi-MB page weight.
  - B) A third-party GitHub Action (e.g. `calibreapp/image-actions`) — built for exactly this, but
    designed around pull requests, and this repo pushes directly to `main`.
  - C) A small in-repo script using the already-present `sharp` dependency, run in the same
    `auto-handout.yml` job against the same newly-added-images manifest it already computes.
- **Decision:** Option C.
- **Why:** No new dependency, no PR-based workflow mismatch, reuses the diff-scoped manifest
  `auto-handout.yml` already builds (see `D-2026-07-21-auto-handout-action`) rather than a separate
  full-tree pass.
- **Status:** Active.
- **Consequence:** `auto-handout.yml` now needs an `npm ci` step (added) so `sharp`'s native binary is
  available in CI. Images added by hand outside the Action aren't automatically optimized.

## D-2026-07-21-git-auto-commit-action · use a maintained Action instead of hand-rolled git push steps
- **Context:** `auto-handout.yml`'s original commit/push step was three raw shell lines
  (`git config`/`git add`/`git commit`/`git push`). Research into GitHub Actions bot-commit best
  practices surfaced a specific, real gap: the hand-rolled version doesn't pull/rebase before pushing,
  so a second push landing in the narrow window while the job runs could make the push fail outright.
- **Decision:** Replaced it with `stefanzweifel/git-auto-commit-action@v7`, a widely-used Marketplace
  action built specifically for this pattern.
- **Why:** Battle-tested rather than reinventing it, and it's a straight drop-in — same
  `github-actions[bot]` identity by default, same effective behavior, one less hand-maintained edge case.
- **Status:** Active.
- **Consequence:** `auto-handout.yml`'s commit/push step is now a single `uses:` line
  (`file_pattern: content`) instead of an inline shell block.

## D-2026-07-21-filename-lint-check · fail loudly on known Quartz filename footguns
- **Context:** Research surfaced *three separate* documented Quartz bugs, all filename-shaped and all
  silent failures (a broken embed, or in one case a crashed build) rather than an obvious error:
  underscores in image filenames (misread as Markdown emphasis, jackyzha0/quartz#2305), `@` in any
  filename (turned into a `mailto:` link by the GFM plugin before Quartz's own parser sees it,
  jackyzha0/quartz#2172), and non-ASCII/accented characters (crashes the Quartz builder entirely,
  jackyzha0/quartz#386).
- **Decision:** Added `.github/workflows/check-filenames.yml` — checks newly added/renamed files under
  `content/` against all three patterns on every push to `main` (and on pull requests, if this repo ever
  uses them) and fails the workflow run if any are found. Verified against synthetic test cases
  (`bad_name.png`, `photo@2x.png`, `café.png`, plus a `some_notes.md` control) before merging — correctly
  flagged all three bad cases and left the underscore-containing non-image file alone.
- **Why:** These bugs are each individually easy to hit by accident (any AI-image-generator export, or a
  filename typed with an accent) and each produces a silently broken page rather than a build error —
  catching them at push time surfaces the problem immediately instead of discovering it by noticing a
  missing image later.
- **Status:** Active.
- **Consequence:** Since this repo pushes directly to `main` rather than using PRs for content, a
  failure here doesn't block the merge (it already happened) — it's a loud, visible signal after the
  fact rather than a gate. Worth revisiting if this repo ever adopts a PR-based content workflow, where
  it could gate the merge instead.

## D-2026-07-21-encrypted-pages-and-giscus-prep · document/prep two already-installed-but-unused plugins
- **Context:** `quartz.config.yaml` already lists both `encrypted-pages` (`enabled: true`) and
  `comments`/giscus (`enabled: false`) plugins, neither ever used or documented anywhere in this repo.
- **`encrypted-pages`:** password-protects a page client-side via a frontmatter field (`passwordField:
  password` in its config). Relevant because this repo is a **public** GitHub repo — `draft: true` (see
  `D-2026-07-21-fix-draft-frontmatter-field`) only controls what the built site serves, not what's
  visible in the git history to anyone browsing the repo directly. For content that must never be
  readable pre-approval even by someone checking the repo, `password: <value>` frontmatter is the actual
  mitigation. Documented in `CLAUDE.md` under a new "Keeping a page hidden or protected" section — no
  code change needed, it was already wired in, just never written down.
- **`comments`/giscus:** confirmed via research (not assumption) that giscus requires real `repo`,
  `repoId`, `category`, and `categoryId` values, and that enabling it with empty values errors at build
  time. Those IDs only exist once the giscus GitHub App is installed on this specific repo — a manual,
  consent-based step only the repo owner can do (visit https://giscus.app). Pre-filled `repo:
  Chompy78/PACT_Players` and `category: Announcements` (giscus's own recommended category), left
  `repoId`/`categoryId` as empty placeholders with comments explaining exactly what's needed, and kept
  `enabled: false` until those are filled in.
- **Decision:** Document/prep both rather than force either into a broken or half-working state.
- **Why:** `encrypted-pages` needed zero code changes, just documentation — a pure discoverability gap.
  giscus genuinely can't be finished by an AI session alone; forcing `enabled: true` to "complete" item
  12 would have broken every future build instead.
- **Status:** Active — `encrypted-pages` usable immediately; giscus tracked as an open item in
  `TASKS.md` pending the giscus.app setup step.

## D-2026-07-21-handout-image-orientation-width · size handout image embeds by orientation, not a flat width
- **Context:** While fixing the `content-visibility` 0×0 bug (see `D-2026-07-21-...` below and TASKS.md),
  the request came to make handout images bigger than their current ~630px natural container width —
  matching the Arc01 banner's explicit `|750` embed width. Checked every handout image's real pixel
  dimensions first (PNG/JPEG header parse, not just eyeballing): most are 1024×1536 (portrait, ratio 0.67)
  or 1536×1024 (landscape, ratio 1.5); a few maps are 1254×1254 (square). A flat `|750` for all of them
  would render portrait images at ~1119px tall — over a screen-height on most laptops — while landscape
  images at the same width render at only 500px tall, a visibly inconsistent, oversized result for
  anything portrait.
- **Options:**
  - A) `|750` for every image regardless of orientation — simplest, matches the banner exactly, but
    portrait images end up disproportionately tall.
  - B) Leave portrait images with no explicit width (natural ~630px container width) and only widen
    landscape/square images to `|750`.
  - C) Different explicit widths by orientation — `|750` for landscape/square, `|500` for portrait
    (750/1.5 = 500px tall; 500/0.67 ≈ 746px tall — comparable rendered height across orientations).
- **Decision:** Option C.
- **Why:** Keeps a comparable vertical footprint across every handout regardless of source-image
  orientation, rather than either accepting oversized portrait images (Option A) or leaving them
  inconsistently un-sized while everything else grows (Option B). Applied to every existing handout embed
  across `Chapter_1`, `Chapter_2`, `NPCs/`, `Maps/`, and `Misc/`, and folded into
  `.github/scripts/auto-handout-stub.mjs` (a dependency-free PNG/JPEG header parser, verified against real
  files before merging) so future auto-generated handouts get the same treatment automatically rather than
  landing without an explicit width again.
- **Status:** Active.
- **Consequence:** New handout images added by hand (bypassing the auto-handout Action, or in formats the
  script's parser doesn't cover — GIF/WEBP) won't get an automatic width and should be sized manually
  using this same 750/500 convention. `The cubby.png` (Chapter_1) is orphaned — not embedded from any
  page — so it was left untouched; it'll need a width whenever it actually gets linked somewhere.

## D-2026-07-21-auto-handout-deploy-trigger-fix · auto-handout's own commit never triggered a deploy — GITHUB_TOKEN pushes don't cascade
- **Context:** `D-2026-07-21-auto-handout-action` (below) added a GitHub Action that commits new stub
  handout pages back to `main` using the default `GITHUB_TOKEN`. Its first real run (triggered by
  "Create market (1).png") committed `d46e1a1` — but that commit never got its own `Deploy Quartz Site`
  run. Confirmed directly against the Actions run history (`actions_list` → `list_workflow_runs`): the
  auto-handout Action ran and succeeded, but `deploy-pages.yml` has no run for `d46e1a1` at all. It only
  ended up live because a later, human-authored push (`8d69c38`) happened to land on top of it and
  triggered a normal deploy — without that, the `market (1)` page would still be undeployed on `main`
  indefinitely, invisible on the live site despite being merged.
- **Root cause:** GitHub deliberately excludes pushes made with the repository's default `GITHUB_TOKEN`
  from triggering other `on: push`-based workflow runs, specifically to prevent workflow-triggers-workflow
  infinite loops. `deploy-pages.yml` only listened for `push`, so the bot's own commit was invisible to it.
- **Options:**
  - A) Give the auto-handout Action a personal access token (PAT) instead of the default `GITHUB_TOKEN`
    for its push — PAT-authored pushes aren't subject to the same restriction.
  - B) Add a `workflow_run` trigger to `deploy-pages.yml` that fires when the auto-handout Action
    completes successfully, in addition to its existing `push` trigger.
  - C) Merge the two workflows into one job, so the same run that commits the stub pages also builds and
    deploys the site.
- **Decision:** Option B.
- **Why:** `workflow_run` isn't subject to the `GITHUB_TOKEN` cascade restriction, so this closes the gap
  with no new secret to create or rotate, and no broadened token scope (Option A would need a PAT with
  write access stored as a repo secret, more to manage and a bigger blast radius if leaked). Option C
  would duplicate the whole build/deploy pipeline inside `auto-handout.yml`, meaning two places to keep in
  sync if the deploy process ever changes. The `build` job's `if` checks out `github.event.workflow_run.
  head_sha` specifically (not just `main`'s current tip) so it deploys exactly the commit the auto-handout
  run produced, even if another push lands in the interim.
- **Status:** Active.
- **Consequence:** A push that only touches images (and therefore only runs `auto-handout.yml`, with no
  separate human commit after it) now reliably triggers a real deploy once the stub pages are committed.
  Note: a human push that itself adds a new image will now trigger two deploy runs in quick succession —
  once for the raw push, once after `auto-handout.yml` completes — a minor inefficiency, not a
  correctness problem, and not worth added complexity to avoid.

## D-2026-07-21-auto-handout-action · auto-create + auto-link stub handout pages for new images, push straight to main
- **Context:** Manually wrapping every new handout image in a `.md` page (title + `![[embed]]`) and
  linking it from the folder's `index.md` — done by hand for `funeral-notice.png` — doesn't scale once
  images start arriving in batches (e.g. `market (1).png` through `market (10).png`). A fully mechanical
  script can't reliably tell which images want their own page versus which are meant to be embedded
  elsewhere (banners, NPC composites) — that's a judgment call, not something to blindly automate.
- **Options:**
  - A) An AI-in-the-loop scheduled session that scans for new images periodically and uses judgment each
    time to decide standalone page vs. embed-elsewhere.
  - B) A mechanical GitHub Action that wraps every new image in a stub page, except ones whose filename
    contains a marker string (`ignoremd`) to opt out.
  - C) No automation — keep doing this by hand per image.
- **Decision:** Option B, per the user's explicit choice over Option A.
- **Why:** Simpler and free to run (no recurring AI session cost); the `ignoremd` filename marker gives a
  deliberate, visible opt-out for banners/composites/originals without needing the script to guess intent.
  Scoped to only the images newly **added** in each push (`git diff --diff-filter=A` against the push's
  before/after SHAs) rather than a full `content/` re-scan, so pre-existing images that were deliberately
  left without a standalone page (e.g. NPC composites already linked from `NPCs/index.md`) are never
  retroactively touched — verified locally before merging by simulating added-file manifests, including a
  file with `ignoremd` in the name (correctly skipped) and one without (stub page + index link created).
  The stub's `index.md` entry embeds the image (`![[file]]`) rather than linking to the new page
  (`[[stem]]`) — matches the existing inline-embed pattern already used for images without their own page
  (e.g. "My Summer (by Wren)"), after the first two auto-generated entries (funeral-notice, market (1))
  were noticed rendering as click-through links instead and corrected.
- **Status:** Active.
- **Consequence:** Pushing a new image to `content/` (by any method — CLI, GitHub web, GitHub Desktop) that
  doesn't already have a matching `.md` and doesn't have `ignoremd` in its filename will now always get a
  stub page and an inline embed in its folder's `index.md`, committed straight to `main`. Anyone adding a
  banner, original/pre-crop image, or composite meant to stay embedded elsewhere must include `ignoremd`
  in that file's name or it will get an (unwanted but harmless) stub page too. See also
  `D-2026-07-21-auto-handout-deploy-trigger-fix` for a related bug this surfaced.

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
