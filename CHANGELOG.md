# PACT_Players — Changelog

> One line per change/session, **newest first**. *Why* lives in `DECISIONS.md`. Not backfilled past
> 2026-07-21 — this repo's prior history is better read via `git log` than reconstructed here.

- **2026-07-21 · docs(tooling): light-ported PACT's log-as-you-go pattern** — added `CHANGELOG.md`
  (this file), `DECISIONS.md`, and 4 adapted `.claude/commands/*.md` skills (`add-task`, `close-session`,
  `cold-plan-review`, `log-lesson`), ported from `chompy78/PACT` and light-touch compared to the full
  ports done for `chompy78/family-hub` and `chompy78/wildlife-explorer` — no Effort/Risk system, no
  `AGENTS.md`, `CLAUDE.md` stays the only "how to work" doc; `pick-task`/`run-task`/`sweep-tasks`
  deliberately not added, no queue of independently-safe work for them to automate. `TASKS.md` isn't new
  here — a concurrent session had already added a real one (`e1e8886`, tracking the PACT Player Agent
  fast-path plan) while this port was in progress; `CLAUDE.md`/`/close-session` were updated to describe
  its actual structure rather than a competing placeholder. See `DECISIONS.md`'s
  `D-2026-07-21-scaffold-port-light` and `D-2026-07-21-tasks-md-correction`.
