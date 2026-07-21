---
description: Writes the session's CHANGELOG/DECISIONS/session-note, then stages/commits/pushes once you approve
allowed-tools: Read, Grep, Glob, Edit, Write, Bash(git status *), Bash(git log *), Bash(git diff *), Bash(git add *), Bash(git commit *), Bash(git push *), Bash(git pull *)
---

# PACT_Players — close off this session

You wrap up this session in three parts: **(1) log** the session's work, **(2) verify** the merge-policy
category for what got touched (report only), and **(3) propose a commit, then stage/commit/push it
yourself once you name that letter**. `TASKS.md` is a plain checklist, not PACT's Effort/Risk task board
(see `CLAUDE.md`'s "Log as you go" section) — graduation still applies, just without any tagging.

**Before writing anything**, run `git status` / `git diff` and classify every touched path.

## Part 1 — Log the session's work

**1. `CHANGELOG.md`** — add the one-line entry (or entries), newest on top. Always required, even for a
single content edit.

**2. `DECISIONS.md`** — only if a change involved a non-obvious *why* (a content-structure rule, a
merge-policy carve-out, anything a future session would otherwise re-derive from scratch). Write both
the Index bullet and the full `Context → Options → Decision → Why → Status` entry, `D-<YYYY-MM-DD>-<slug>`
ID. If not warranted, say why.

**3. `sessions/<date>-<topic>.md`** — **not `docs/sessions/`** — this repo's `docs/` is Quartz's own
vendored documentation, not project notes. Write one only if the session involved a real judgment call,
a pivot, or something worth preserving — most sessions (a banner resize, a typo fix, a new handout)
don't need one. Once evaluated, act immediately — write it (or skip it) in the same turn, don't pause to
ask.

**4. `TASKS.md` graduation** — if a task finished this session, move its line from `## Open` to
`## Done / not needed` (this file's own convention — items can stay visible there as a record, unlike
PACT's board where a finished item is removed outright) and confirm the matching `CHANGELOG.md` line
exists. Don't add work here that belongs on the separate `AI_home_server` project's own `TASK_BOARD.md`
(home-server/Open WebUI/PACT-Player-Agent-backend work) — this file is scoped to this repo only.

## Part 2 — Verify (report only)

**5. Merge-policy category.** Classify every touched path per `CLAUDE.md`'s existing merge policy:
content-only (`content/**`, images, renames) vs. build/config (`quartz.config.yaml`,
`.github/workflows/**`, `package.json`, `quartz/**`). Content-only changes need no further gate.
Build/config changes need explicit user confirmation before merging to `main` — say so plainly, don't
silently merge them the way content changes are allowed to.

**6. Working tree state.** `git status` — confirm nothing from this session is uncommitted, and that
nothing untracked and unrelated to this session (someone's in-progress content draft) gets swept in.

**7. Cross-project hints.** A lesson general to AI-assisted coding, not specific to this repo? Draft a
candidate (one-line trigger + rule) for the shared `chompy78/ai-lessons-learned` repo — clone/pull if
not present locally, read `INDEX.md` first. **Draft only — never write without approval.**

## Part 3 — Propose the commit, then run it once approved

- List the exact files that belong to this session's work. **Never `git add -A`/`.`** — name each file.
- Draft the commit message **matching this repo's own plain, descriptive style** ("Match Arc01 banner
  width to homepage (750px)") — not PACT's `type(scope): summary` Conventional-Commits format.
- Ask which follow-up letters to run. Once approved: re-check `git status` on the named files, `git add
  <named files>`, `git commit`, `git pull --rebase` then `git push`. If push is rejected, pull/rebase and
  retry — don't force-push. **If Part 2 flagged a build/config change, confirm with the user explicitly
  before this step runs**, even if they already approved the commit letter — that's what `CLAUDE.md`'s
  merge policy requires for that category, independent of this skill's normal approval flow.

## Output format

Punch list grouped by the numbers above. Tiered lettering for decisions, Recommended/Not-recommended
tags on follow-ups, defaulting to Recommended.

End with a one-line verdict.

---

$ARGUMENTS
