# 2026-08-09 — z-cold/z-uploads auto-sync, and the branch-checkout trap it surfaced

Companion session to the same work done on `PACT` (see that repo's own session note for the full design
history and the `git-auto-sync` tool evaluation). This note covers what was specific to this repo.

## This is the repo that broke attempt 1

The first design — `z-cold`/`z-uploads` as plain folders tracked on `main`, auto-committed by a scoped
polling script — worked fine until this repo's working copy was switched to
`claude/quartz-update-tasks-qyvxuh` for unrelated context mid-session. Both folders vanished from disk:
`git checkout` swaps the working tree to match whatever branch is current, and they'd only ever been
committed on `main`. That's what triggered the redesign (see `D-2026-08-09-zcold-autosync-setup` and
`PACT`'s parallel record) — a dedicated orphan branch (`zcold`, renamed from `zcold-data` mid-session) in
its own git worktree, linked in via a Windows junction, fully decoupled from whatever branch this repo has
checked out.

## Handling the feature branch carefully

Because the owner was mid-work on `claude/quartz-update-tasks-qyvxuh`, every step that needed `main`
checked out (creating the orphan branch, the initial folder commit, later stripping the real
tracked-folder version back out) was done by switching to `main` temporarily and switching back
afterward, confirming a clean `git status` both before and after each round-trip so nothing on the feature
branch was disturbed. The `DECISIONS.md`/`CHANGELOG.md` entries for this session were written once, landed
on `main` (matching where the functional change lives), then cherry-picked onto the feature branch so
local docs stay consistent there too — not pushed on the feature branch, left for the owner's own workflow.

## Net result

`z-cold`/`z-uploads` here are junctions into `~/dev/zcold-sync/worktrees/PACT_Players`, permanently on
branch `zcold`, auto-synced every ~5s by the same shared watcher script covering both repos. Verified with
a real drop-and-remove round trip while temporarily on `main`. The owner is back on
`claude/quartz-update-tasks-qyvxuh` exactly as found, with the drop folders now visible there too (no
longer tied to whichever branch is checked out).
