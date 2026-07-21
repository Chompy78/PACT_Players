---
description: Format a task and append it to TASKS.md's Open section
argument-hint: <task description>
allowed-tools: Read, Edit, Bash(git *)
---

# PACT_Players — add task

Format a task description into `TASKS.md`'s house style and append it under `## Open`. No Effort/Risk
tags, no priority bands — this repo's `TASKS.md` is a plain two-section list (see `DECISIONS.md`'s
`D-2026-07-21-scaffold-port-light` for why: content-authoring work doesn't decompose into Effort/Risk-
tagged, sweep-eligible units the way software tasks do, so this skill stays deliberately simple rather
than importing that machinery).

**Do not** write a design essay or weigh options. Format correctly and append.

## Step 1 — read `TASKS.md`

Read it first, so the new entry matches the existing style (a bold one-line title, then a sentence or
two of detail — see the existing entries for the exact shape) and doesn't duplicate something already
there (in either `## Open` or `## Done / not needed`).

## Step 2 — clarify if needed

Ask a short question only if the task is too vague to write a concrete, actionable line. If a sensible
phrasing is obvious from what was said, use it rather than asking.

## Step 3 — check scope

If the task is actually about work outside this repo (home-server, Open WebUI, the PACT Player Agent's
backend) — that belongs on the separate `AI_home_server` project's own `TASK_BOARD.md`, not here. Say so
and don't add it to this file.

## Step 4 — format and show for approval

```
- **<Short title>.** <one or two sentences of concrete, actionable detail — what, and any relevant file
  path or context needed to act on it later without re-deriving where things are.>
```

Show the formatted line and ask for approval before writing it. Wait for confirmation.

## Step 5 — execute

Once approved: append the line to the end of `## Open` in `TASKS.md`. Don't touch anything else in the
file. Commit directly (this repo's plain descriptive commit-message style, not Conventional Commits —
e.g. `Add TASKS.md item: <short title>`) and push to `main`, per `CLAUDE.md`'s merge policy (this is a
root-level docs file, not `content/`, so — unlike content changes — confirm with the user before this
step runs, same as any other non-`content/` change).

---

$ARGUMENTS
