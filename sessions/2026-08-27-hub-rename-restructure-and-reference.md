# Session — rename to Amble Player Hub, restructure, add Reference, open Arc 2

**Date:** 2026-08-27
**Driven from:** the Amble Story project — see its
`sessions/2026-08-27-prose-passes-and-agent-cards.md` for the full arc of the day.

---

## What we did

This repo turned out to be the *cause* of a bug being chased on the home server. The PACT Player Agent was
calling Bram "a player-controlled halfling" — he is an NPC and human — and the reason was here: **nothing
published on this site states who anyone is.** The NPC page is images only.

### Reference section (new, 49 pages)

One page per character and per chapter, plus roster pages and a Stoneharbour place card. **Generated**, not
hand-written — the source is `ai/agent-cards/cards-source.json` in the Amble Story project, rendered by
`render-cards.py` straight into `content/Amble_Campaign/Reference/`. Edit there and re-render; don't edit
these pages directly.

Placed at **campaign level rather than under Arc 1**, because it covers the party across every arc and the
recurring cast who leave Amble behind. (It was briefly under Arc 1 and moved the same session.)

Cards are natural-language sentences rather than data. That was measured on the home server's own embedding
model and reranker — for "is Bram a player character or an NPC?", JSON scored 3.2, a sentence card 10.4,
narrative prose −3.1. Retrieval matches language, not syntax.

### Rename and home page

**PACT Player Archive → Amble Player Hub.** Dropped the `" - Amble"` title suffix, which would have made
every browser tab read "Amble Player Hub - Amble". Home page reordered: welcome first, a new **Player
tools** section, a real description under Campaign, The Story So Far surfaced, and arcs regrouped
**Current / Past / Later** at two levels.

### Arc 2

Opened as **Among Strangers** — banner reused from the campaign repo (filename spelling corrected from
"amoung"), an intro written only from published Chapter 4, and **Ch. 1: Indentured**. A **Stoneharbour**
page under Campaign Reference carries the eight districts, who holds civil/Watch/Concord/shrine authority,
and the arrival map.

### Fixes along the way

- Chapter 4's `[REDACTED]` title replaced with *The Iron Coin* — it has been published since yesterday.
- Arc titles normalised to `Arc 1: / Arc 2: / Arc 3`. A space sorts before a digit, so `"Arc 2: Among
  Strangers"` had been sorting *ahead* of `"Arc01 Prelude"` in the explorer.
- The Story So Far gained an Arc 2 section, honestly empty.

---

## What was deliberately NOT published

Everything was audited against what the site already carried before going up:

- PC parents' names and the "Haldeni" people-name — chargen-database and GM-canon detail
- A forward-looking line about Bram's later arc — a spoiler for unwritten chapters
- Corvin Thale's species — canon marks it "tentative — open to revision"
- For Arc 2, which is **unplayed**: every `Function`/`Arc` line from its `Cast.md` (they say what each
  person is *for* later), Stoneharbour's organised-crime figure, the gambling den behind a shop counter,
  the unlicensed half of the tattoo parlour, the optional romantic interests, and every chapter one-off
- **The cookshop dog** — the arc reference says in bold to let the players name it (John confirmed)
- Chapter 1's remaining handouts, including the first monthly statement, which is a reveal

---

## Verification

Agent answers "Bram Cotter is a non-player character (NPC). He is human" with a citation. Asked "what
happens to Dela Brant?" it answers "I'm not aware of any event involving Dela Brant" — **that is the audit
working, not a gap.**

---

## Worth knowing next time

**Wrong-case URLs on this GitHub Pages site return HTTP 200, not 404.** Slugs are lowercase
(`/the_story_so_far/`, `/amble_campaign/stoneharbour`). Polling a capitalised path looks exactly like "not
deployed yet" and wasted seven minutes, and produced one false "it isn't live" report.

Also: file pages have no trailing slash (`/amble_campaign/stoneharbour`), folder pages do.
