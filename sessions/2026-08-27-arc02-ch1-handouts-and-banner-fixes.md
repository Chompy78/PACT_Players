# 2026-08-27 — Arc 2 Ch. 1 handouts published, and two arc banners that had never rendered

*(Work done 2026-08-27; wrap-up and live verification finished 2026-08-29.)*

## What happened

A straightforward request — publish Arc 2 Chapter 1's handouts, including the Misc and NPC ones, minus
H03 and H04 — that turned up a rendering fault nobody had noticed on two separate arc pages.

**The handout publish itself was mechanical.** Source material came from the GM repo's
`Arc02_among_strangers/`: `Chapter_1/` (H01 arrival map, H02 first monthly statement, H05 indenture
summary sheet), `NPCs/` (ten portraits, IMG-001 Berrin Slate through IMG-010 Cass Tiller) and `Misc/`
(the Schedule of Requisition). H03 (Courier Manifest) and H04 (Letter From Amble) were held back at the
player's request — no judgment call involved, it was an explicit instruction.

Two placement questions were settled by reading the GM repo rather than guessing. The Schedule of
Requisition is **arc-level, not chapter-scoped** — `HANDOUT_PLAN.md` has a whole section on why (it is
handed over in Ch. 1 Scene 4 but stays in the party's hands for all eight chapters), so it went to
`Misc/`. And all ten portraits turned out to be Chapter 1 NPCs, every one marked Player Safe in the
chapter's own handout inventory, despite the source art pack being named `Arc02-Ch1-Ch2-Portraits` —
so nothing there was a Chapter 2 spoiler.

Index pages were written by hand rather than left to `auto-handout-stub.mjs`. Its title-casing would have
produced "IMG 001 Factor Berrin Slate" as a heading; hand-writing them gets "Factor Berrin Slate". Added
`noStubPages: true` to `NPCs/` and `Misc/` (Chapter_1 already had it) so the folders show inline embeds
only. Filenames converted underscore→hyphen on copy per `D-2026-07-23-auto-rename-underscore-filenames`,
widths 750 landscape / 500 portrait as usual.

**The interesting part was the banners.** After pushing, Arc 2's `index.md` turned out to embed
`arc02_among_strangers_banner.webp` while the file on disk was `arc02-among-strangers-banner.webp`. That
embed had never rendered — but the page looked fine, because `auto-handout-stub.mjs` had appended a
second, working `## Arc02 Among Strangers Banner` section at the bottom when the image first landed, plus
a standalone stub page for it. The duplicate looked like harmless clutter to tidy up. It was actually the
only reason the page had a banner at all.

That is worth stating as the lesson of the session: **a generated duplicate had been silently covering
for a broken hand-written original.** If the duplicate had been deleted without checking the thing it
duplicated, the page would have gone from "looks fine, quietly wrong" to "visibly missing its banner" at
exactly the moment nobody was looking. Recorded as `D-2026-08-27-arc-banners-need-the-ignoremd-marker`
— the `ignoremd` convention already existed (`D-2026-08-08-chapter-art-ignoremd`); what was new is that
skipping it fails invisibly rather than noisily. Also filed as a cross-project candidate in
`chompy78/ai-lessons-learned` (`inbox/2026-08-29-generated-duplicate-masking-broken-original.md`,
commit `46a0c01`).

**Checking for the same fault elsewhere found it in Arc 1.** `arc01_prelude_banner.jpg` hit the
underscore-in-image-filename bug outright — Quartz's wikilink parser reads `_prelude_` as Markdown
emphasis — so Arc 1's banner had never rendered either, with no auto-appended duplicate to cover for it
this time. Renamed to `arc01-prelude-banner.jpg` via `git mv` and updated **both** embeds: Arc 1's own
index, and `The_Story_So_Far/index.md`, which reuses the same image as its own banner and would have
broken silently if only the obvious one had been fixed. A sweep of `content/` confirms no underscore-named
images remain anywhere in the tree.

## Verification

Checked against the live site, not just the green CI checks. All three content commits passed
`Check content filenames`, `Auto-generate handout pages` and `Deploy Quartz Site`; the final deploy ran
1m14s, consistent with the other builds rather than a suspiciously fast no-op. On the deployed site:
Arc 2 index 1 image, Chapter_1 3, NPCs 10, Misc 1, Arc 1 index 1, The Story So Far 1 — every `<img src>`
returning 200, alt text and widths correct. Confirmed 404 on what should be gone: the old banner stub
page, the old `arc01_prelude_banner.jpg` filename, and both held-back handouts.

Two things looked like faults during that check and weren't, both worth knowing for the next verification
pass:

- **`/Arc02_arc2/` served a near-empty page.** Quartz emits a **meta-refresh** redirect to the lowercase
  canonical URL (`/arc02_arc2/`), which `curl -L` does not follow — only browsers do. Probe the lowercase
  path directly, or a live check will look like a broken build when it isn't.
- **"0 items under this folder"** at the foot of each handout page is the `folder-page` plugin's
  empty-state, and is the *desired* result of `noStubPages: true`. Arc 1's `chapter_4`, `npcs` and
  `chapter_3` print the identical line.

The auto-handout Action's own follow-up commit (`ec0afaf`) optimized all 14 new images — 3.2 MB → 1.3 MB
on the largest — and correctly added no stub pages and no duplicate embeds, since the hand-written index
pages already referenced every file.

## Decisions made

- `D-2026-08-27-arc-banners-need-the-ignoremd-marker` — a new arc's banner image must carry `ignoremd` in
  its filename before it is pushed to `main`. Applies to Arc 3's banner and every arc after it. The two
  existing banners need no rename: `auto-handout.yml` only ever processes images newly added in the
  triggering push.

## New tasks discovered

None. Nothing in `TASKS.md` graduated either — the closest open item, "Build a real `Stoneharbour` player
page once Arc02 actually starts", is a distinct arc-wide location page, not the Ch. 1 handout gallery,
and stays open.

## Blockers

None.

## Next session should start with

Nothing outstanding here. When Arc 2 Chapter 2 lands, the same pipeline applies — and when Arc 3's banner
is added, give it an `ignoremd` filename.
