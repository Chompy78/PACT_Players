# PACT_Players — Decisions (why it's built this way)

> Authoritative record of decisions **still in force**. One entry per decision:
> **Context → Options → Decision → Why → Status.** Newest at the TOP.
> `CHANGELOG.md` records *what* changed; this records *why*.

## Index

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
