# 2026-08-27 — House Rules rest/armor/checks rework, RAW verification, and live-site QA

## What happened

Opened with a check-in on whether Arc01 Chapters 1–4 were fully published (they were — no `draft: true`
anywhere, latest deploy green, all handout embeds resolving), then moved into the session's real work:
an extended, iterative rebuild of `House_Rules.md`'s rest mechanics, followed by several new house rules,
then a full-page accuracy and layout pass, closing with genuine live-site verification rather than trusting
a green build.

**The Breather debate.** Started from a simple complaint — the existing 5-minute Breather rule felt too
restrictive since it could only substitute for one Short Rest. The instinct to just "allow unlimited
Breathers, since Hit Dice are already capped" was worth taking seriously and checking rather than
dismissing: Hit Dice recovery genuinely is bounded elsewhere (half-total per Long Rest), so unlimited
Breathers wouldn't let anyone out-heal that cap. But the actual exploit surface turned out to be
something else entirely — short-rest class features (Warlock Pact Magic, Fighter Action Surge) that reset
on *any* Short Rest with zero Hit-Dice cost, which unlimited Breathers would let reset every 5 minutes
regardless of healing pacing. Landed on dropping Breather outright rather than capping its frequency,
since a shortened 30-minute Short Rest covers the "I don't want to burn a full hour" case without
reopening that surface.

**Sizing the Long Rest against real watch math.** The 10-hour Long Rest duration (7 sleep + 3 light
activity) wasn't picked arbitrarily — it came out of working through actual watch-rotation math live in
chat: a 4-person party splitting one continuous watch evenly needs 2.5 hours each, leaving 7.5 hours of
sleep, comfortably clearing a 7-hour floor. Also worked out (and then set aside as unnecessary complexity)
the exact total needed for a 5-person party to hit precisely 7 hours of sleep (8.75 hours) — concluded
that chasing an exact number per party size fights the floor/ceiling shape the rest of the page already
uses, and a flat 10-hour total handles any party size 4 or larger without adjustment.

**Restored real RAW instead of an invented approximation, twice.** When the player asked to keep "the
1-hour interruption etc." rule, the first pass got the *shape* right but not the *number*: 2024's actual
interrupted-Long-Rest mechanic (a Short Rest's benefit at the 1-hour mark, +1 hour needed per interruption
after that) and its real cooldown (16 hours after finishing, not a flat "once per 24 hours" — that's the
superseded 2014 rule) both had to be looked up properly rather than reconstructed from memory. This
directly fed the later full-page RAW-annotation pass.

**The RAW-annotation pass caught two of my own earlier mistakes.** Asked to annotate every section with
its actual 2024 RAW baseline, verified via search rather than recalled — and the search caught two things
already live on the page that I'd stated confidently earlier this same session: the Long Rest frequency
cap (see above), and Heroic Inspiration's one-at-a-time/pass-along-a-duplicate behavior, which is already
standard 2024 RAW and had been sitting under this page's "House rule" heading as if it were custom. Both
fixed in place rather than left standing, with the correction called out explicitly to the player rather
than silently patched.

**Layout change verified against the live build, not just the source Markdown.** For "collapse each rule
by default, with quick links at the top," checked `quartz.config.yaml` first rather than guessing whether
Quartz supported it — confirmed `ObsidianFlavoredMarkdown`'s foldable-callout syntax (`> [!note]-`) and the
existing `TableOfContents` plugin were both already enabled, which shaped the actual approach: keep real
`##` headings (so the sidebar TOC and anchors survive) and wrap only each section's body in a collapsed
callout, rather than converting headings themselves into raw `<details>` elements. After deploying, curled
the actual built HTML rather than trusting the diff: confirmed all 15 callouts render `is-collapsed`, and
diffed every heading's real `id` against every quick-link `href` — which caught one real bug an
Obsidian-preview or a markdown-to-text conversion tool wouldn't have surfaced: an em dash in "Drinking a
Potion — Bonus Action" produces a double-hyphen slug, not the single-hyphen one guessed when the heading
was renamed. Fixed and re-verified live. Extended the check to the whole site afterward — all 30 sitemap
URLs return 200, `Kingdom_of_Halden_Adults.md` (`draft: true`) correctly absent from the sitemap, and the
cross-links between `House_Rules.md` and `Character_Advancement.md` resolve rather than dangling.

**PACT Boons, started from a single pasted row.** The player pasted one tab-separated row for a "PACT
Boons" system that didn't exist yet anywhere in this repo (checked — no match in this repo, and the
GM-side repo wasn't in this session's scope to check either). Built a table with inferred column headers
(Level requirement, AP cost, Category) into `Character_Advancement.md` and flagged the inference explicitly
rather than asserting it as an established convention, since more entries are likely to follow. The single
entry (Renewed Fire) was also refined mid-session — from an unconditional "gain 1 Heroic Inspiration" to
"if you have no Heroic Inspiration, regain 1," specifically to avoid ever triggering the one-at-a-time
pass-along rule.

## Why it matters for next time

Two of the four DECISIONS.md entries this session exist specifically because an in-chat claim about "what
RAW says" turned out to be wrong when actually checked — both times, the wrong claim had already been
written into the page before the check happened. Worth remembering going forward: a confident-sounding RAW
claim from memory is not the same as a verified one, and this page's whole purpose (stating what differs
from standard rules) makes that distinction matter more here than it would on a purely narrative page.
