---
description: Turn a task/idea into a self-contained plan formatted for a cold AI/human reviewer
argument-hint: [task or idea — omit to use this session's existing plan]
allowed-tools: Read, Grep, Glob, Edit, Bash(git add *), Bash(git commit *)
disallowed-tools: Bash(git push *)
---

# PACT_Players — draft a plan for cross-AI review

Turn a task or idea into a written plan, saved as a self-contained markdown file for a *different* AI or
human reviewer with no shared context to read cold and critique.

## Step 1 — figure out what needs a plan

`$ARGUMENTS`, or this session's existing plan if empty.

**Trigger rule:** only run this when a wrong approach would cost more than one implementation cycle to
undo. In this repo, that's mainly the category `CLAUDE.md`'s merge policy already flags as needing
confirmation: changes to `quartz.config.yaml`, `.github/workflows/`, `package.json`, or `quartz/` itself
— these affect the build/deploy process for everyone, not just page content. A content restructuring
(moving/renaming a lot of `content/` at once) can also warrant it if it risks breaking a lot of internal
`[[wikilinks]]` at once. Skip it for a normal content edit, a single handout, a banner tweak.

## Step 2 — check for an existing plan

Look in `plans/` (create if needed, root-level — not under `docs/`, which is Quartz's own vendored
documentation) for overlap; if revising, add `Supersedes: plans/<old-file>.md`.

## Step 3 — do the actual planning

Research what the plan touches; check `CLAUDE.md`, `DECISIONS.md` for constraints. Work out goal,
approach (concrete files/paths), alternatives considered, out of scope, risks, files touched.

Assume the reviewer has no repo access — quote constraints inline. Never inline secrets/tokens.

## Step 4 — package it for a cold reviewer

```markdown
# Plan: <short title>

<Supersedes: plans/<old-file>.md — only if applicable>

## Goal
<what and why, assume zero prior context>

## Context
<constraints quoted/paraphrased inline, including anything from CLAUDE.md's content-structure or
merge-policy rules that's relevant>

## Assumptions vs. verified facts
- **Verified:** <confirmed facts>
- **Assumed:** <unconfirmed guesses>

## Proposed approach
1. <step>
...

## Files involved
- <path — what and why, by name not line number>

## Out of scope
- <deliberately not attempted>

## Alternatives considered
- <alternative> — rejected because <reason>

## Risks / open questions
- <genuinely uncertain — for a content restructuring, name specifically which internal wikilinks/embeds
  are at risk of breaking>

## Verification
<npm run check (Quartz's own typecheck+prettier) if quartz/config files are touched; a manual check that
internal wikilinks/embeds still resolve and the Explorer sidebar sort order is as intended, for a content
restructuring.>

## Done when
<objective, checkable condition(s)>

---

## Reviewer instructions
**State which AI model and settings you are, first line.**

Review cold, no repo access. Judge logic/clarity/scope/risk, not code correctness you can't verify.
1. Does the approach achieve the goal?
2. Which assumptions look shaky?
3. Is an alternative actually better?
4. What's missing — an edge case, a risk, a verification step?
5. Are Verification/Done-when objectively checkable?
6. Should this be split?

Plain list of findings. If a section's solid, say so briefly.

**Deliver as a Markdown file**, led by the model line, named `<plan-topic>-review-<your-model>.md`.

---

## Review outcome (fill in after review + implementation)
- Reviewers (models): <...>
- Findings: <N> → accept <A> / reject <R> / defer <C>
- Materially changed the plan? <yes/no>
- Without the review: <one line>
```

## Step 5 — show it before writing anything

Show the drafted content, ask for approval. **Four-backtick fence** for the copy-paste block.

## Step 6 — write the file

`plans/<date>-<slug>.md` once approved. Ask separately about committing, then separately about pushing —
per `CLAUDE.md`'s merge policy, if this plan itself only ever touches `plans/` (not `content/` or
build/config), it's a low-risk docs file, but still confirm rather than assume.

## Step 7 — handle returned review feedback

Loosely-formatted, possibly multiple reviewers — ask if there's more before triaging. Note agreement/
disagreement. Apply low-risk clearly-correct findings directly; stop and ask before acting on anything
touching the build/deploy pipeline or an existing `DECISIONS.md` entry. Fill in the plan's "Review
outcome" stub.

---

$ARGUMENTS
