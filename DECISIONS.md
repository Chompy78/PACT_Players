# Decisions

Lightweight ADR-style log of repo/tooling decisions. Newest entries on top.
See `AGENTS.md` for what belongs here vs `CHANGELOG.md`/`WORKLOG.md`. Never
log campaign secrets here — this repo is public.

## 2026-07-11 — Agent instructions and project logging scaffold

**Context:** The repo had no file telling AI coding agents (of any kind)
how to work here, and no persistent record of decisions/changes/session
context, so each new AI session had to rederive everything from scratch.
The repo was also confirmed fully public, including history, which raises
the stakes for accidentally leaking GM-only campaign content.

**Decision:**

- Use `AGENTS.md` as the single source of truth, with thin redirect files
  (`CLAUDE.md`, `.cursorrules`, `.github/copilot-instructions.md`,
  `GEMINI.md`) for tools that only check their own filename.
- Keep three separate root-level log files (`CHANGELOG.md`, `DECISIONS.md`,
  `WORKLOG.md`) rather than one combined file, each with a explicit litmus
  test in `AGENTS.md` for what belongs where.
- Entries are newest-on-top with no pruning/archiving for now, since the
  project is solo-authored today (low merge-conflict risk) and small
  enough that "no pruning" won't matter until it visibly does.
- Added an automated CI backstop (not a replacement for the documented
  rule) that fails the build if `content/` contains a `SECRET:` or
  `GM-ONLY:` marker, wired as a blocking job ahead of the actual deploy
  step in `deploy-pages.yml`, plus a parallel PR-triggered workflow for
  visibility on pull requests.
- Rejected using `content/private/` (a Quartz `ignorePatterns` folder) as
  a place for secrets: it's excluded from the _build_, not from the public
  _repository_, so anything placed there is still plaintext-visible to
  anyone browsing GitHub. Real secrecy requires the `encrypted-pages`
  plugin instead.

**Alternatives considered:**

- `CLAUDE.md` only — rejected, only discoverable by one tool.
- One combined log file instead of three — rejected, `AGENTS.md` review
  flagged that a combined file blurs "what changed" vs "why" vs "what did
  an agent do this session," which is exactly what makes a log fast to
  scan.
- Pruning/archiving logs by arc or entry count — deferred; revisit if a
  log file actually grows large enough to make "read the top few entries"
  meaningfully expensive.
