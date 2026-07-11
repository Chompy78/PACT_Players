# Worklog

Per-AI-work-session summaries. Newest entries on top. Not to be confused
with TTRPG game sessions (`content/.../session N/`) — see `AGENTS.md` for
the naming rationale and what belongs here vs `CHANGELOG.md`/`DECISIONS.md`.

## 2026-07-11 — Rename arc folders to a consistent scheme (arc01_prelude, arc02_arc2, arc03_arc3)

**Asked:** Rename `content/A01_prelude` to `arc01_prelude` without breaking
links or other parts of the site; asked for a plan and clarifying
questions first.

**Did:**

- Audited every reference to `A01_prelude`/`A02_arc2`/`A03_arc3` across the
  repo (excluding vendored `quartz/`/`docs/`) before touching anything —
  found only two hardcoded spots (`content/index.md`, `AGENTS.md`); all
  wikilinks inside the arc folders resolve by filename via Quartz's
  `markdownLinkResolution: shortest`, so they were unaffected by the
  folder rename by construction.
- Per user's answers: renamed all three arc folders for consistency
  (`A01_prelude`→`arc01_prelude`, `A02_arc2`→`arc02_arc2`,
  `A03_arc3`→`arc03_arc3`, keeping the placeholder `_arc2`/`_arc3` suffixes
  until those arcs get real thematic names), used `git mv` to preserve
  file history, updated the visible headings to match
  ("A01 Prelude" → "Arc 01: Prelude", etc.), and skipped
  `alias-redirects` frontmatter since the site is brand new.
- Updated `content/index.md` links and `AGENTS.md`'s two references to the
  old folder names.
- Verified via `grep` that no stale `A01`/`A02_arc2`/`A03_arc3` references
  remain anywhere outside the vendored `quartz/`/`docs/` directories, and
  confirmed all touched files pass `prettier --check`.
- Attempted a full local `npx quartz build` to verify end-to-end, but this
  sandbox's plugin-install toolchain hit an unrelated pre-existing issue
  (`tsx`/Node ESM loader can't import `.scss` during
  `install-plugins.ts`, and a stray executable-bit change on
  `quartz/bootstrap-cli.mjs` from `npm ci`) — reverted the incidental mode
  change and removed the `node_modules`/`.quartz` build artifacts before
  committing, since neither is gitignored in this repo. Relied on static
  verification instead; the GitHub Actions `deploy-pages` workflow will
  run the real build on push as the authoritative check.

**Open/next:** Watch the `deploy-pages` Actions run after this push to
confirm the site builds and the renamed pages resolve correctly. Also
noted (not acted on, out of scope for this task): the repo has no
`.gitignore`, so `node_modules`/`.quartz` can be accidentally staged by
anyone who runs local install/build commands.

## 2026-07-11 — Set up AGENTS.md, logging system, and content-safety CI guardrail

**Asked:** Explain the project, then design and build an `AGENTS.md` (for
any AI, not just Claude) plus a way to keep persistent context across
sessions (decisions, changes, worklog) efficiently, after reviewing the
plan for issues.

**Did:**

- Explored the repo (Quartz v5 site, `content/` holds the actual campaign
  material, README/config identify it as "PACT Player Archive").
- Confirmed via GitHub API that the repo is public (`private: false`),
  which changed the plan: root-level log files needed the same
  spoiler-safety treatment as `content/`, not looser rules.
- Scanned full git history (including deleted files and all diffs) for
  leaked secrets/spoilers before adding tooling — found nothing sensitive;
  the one deleted file (`_README_EXTRACT_INSTRUCTIONS.md`) was harmless
  local setup instructions.
- Reviewed the plan for long-term issues (pointer-file drift, log-file
  boundary ambiguity, unbounded log growth undermining the stated
  efficiency goal, merge-conflict risk if collaborators join later,
  documentation-only spoiler rules with no technical backstop, repo-root
  files also being public) and resolved each with the user before building.
- Wrote `AGENTS.md`, redirect stubs (`CLAUDE.md`, `.cursorrules`,
  `.github/copilot-instructions.md`, `GEMINI.md`), and the three log files
  seeded with this entry.
- Added a `content-secret-check` job to `.github/workflows/deploy-pages.yml`
  (blocking, runs before `build`) and a matching
  `.github/workflows/content-guard.yml` for pull requests, both failing on
  a literal `SECRET:`/`GM-ONLY:` marker anywhere under `content/`.

**Open/next:** Branch protection on `main` is not configured, so the PR
guardrail workflow currently reports status but doesn't hard-block a
merge, and the push-triggered guardrail only blocks that push's own
deploy — see the recommendations sent back to the user for what to
consider next.
