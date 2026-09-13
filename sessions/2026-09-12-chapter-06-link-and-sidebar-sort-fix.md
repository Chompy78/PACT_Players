# 2026-09-12 — Chapter 6's missing link, and why the sidebar had Prelude below Among Strangers

## What happened

The player said Chapter 6 "wasn't published." It was — commit `c1d10d1` merged it to `main` on 8 Sep,
the deploy ran and succeeded, and the page itself returned HTTP 200 with the right title and content.
First response was to check that directly against the live site rather than trust the git log alone,
which is what turned up the real problem: `content/The_Story_So_Far/index.md`, the *top-level* landing
page, only linked Chapter 5. Chapter 6 was linked from the Arc 2 sub-index
(`Arc02_among_strangers/index.md`) but the parent index was never updated to match, so the chapter was
only reachable by browsing into Arc 2 first — not from the page a player would actually land on. Fixed
in `4201de4`.

Second report, same conversation: the left-hand Explorer sidebar showed Arc 1 (Prelude) below Arc 2
(Among Strangers) under "The Story So Far" — backwards from reading order — and the two children both
repeated "The Story So Far" in their own displayed names. Traced by pulling the live site's
`static/contentIndex.json` and reading the Explorer plugin's own default `sortFn` out of the rendered
page's `data-data-fns` attribute (`quartz-community/explorer`, no local override in `quartz.ts`): folder
nodes sort by `displayName.localeCompare(...)`, and a folder's `displayName` comes from its own
`index.md` frontmatter `title` when it has one. Both Arc sub-index titles were `"The Story So Far —
<name>"` — same prefix — so the comparison fell through to "Among Strangers" vs. "Prelude", and
alphabetically A beats P regardless of arc number. Retitled both to the plain "Arc N: name" pattern the
top-level `Arc01_prelude`/`Arc02_arc2` folders already use (`a83d166`) — fixes the sort (numeric "Arc 1"
< "Arc 2") and drops the duplicated wording in the same move. See
`D-2026-09-12-explorer-sort-by-full-title`.

## Worth remembering

**A commit succeeding and deploying is not the same question as "is it linked from where a reader would
find it."** Chapter 6 was fully live for four days before anyone noticed the top-level index didn't
point at it — nothing was broken in the build, the content simply had one missing link. Worth a glance
at *every* page that should reference a new chapter, not just the one sub-index that obviously needs it.

**The Explorer sidebar's sort key is the folder's frontmatter title, not the folder name or any manual
ordering.** This wasn't previously written down anywhere in this repo — `D-2026-07-19-category-folder-
sort-order` documents the *folder-name* sort rule for arc-wide category folders (NPCs/Maps/Misc vs.
Chapter_N), but that's a different mechanism (folders with no title-bearing index vs. folders that do).
Any future nested folder needs its title checked for an unintentional shared prefix with its siblings
before assuming alphabetical order will match intended reading order.

**Verification chain used:** live page fetch (curl, not just `git log`/`git branch --contains`) → GitHub
Actions run history for the deploy workflow → the site's own `static/contentIndex.json` → the rendered
page's embedded Explorer config to find the actual default `sortFn` without needing repo access to the
external plugin's source. All read-only, no build run locally.

## While closing this session

`origin/main` had moved 9 commits ahead of this session's own pushes by the time of close-out — John (or
the Amble Story pipeline) published Chapter 6's reference card, a read-through pass on Chapters 5 and 6,
and Chapter 7 ("What the Flood Uncovered") independently. Confirmed no conflict: this session's two
commits are ancestors of the current `main`, and the external Chapter 7 addition appended cleanly after
this session's Chapter 6 link rather than colliding with it.

## Still open

- Nothing new opened by this session. `TASKS.md` had no existing open item matching either fix, so
  nothing to graduate.
