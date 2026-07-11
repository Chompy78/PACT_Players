# Worklog

Per-AI-work-session summaries. Newest entries on top. Not to be confused
with TTRPG game sessions (`content/.../session N/`) — see `AGENTS.md` for
the naming rationale and what belongs here vs `CHANGELOG.md`/`DECISIONS.md`.

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
