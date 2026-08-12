# 2026-08-12 — Amble/world-lore build, kid-vs-adult reveal gating, House Rules rebuild

## What happened

John asked for player-facing lore covering Amble, the wider world beyond it, and "Haden" — flagged
explicitly as not established anywhere yet, with instructions not to invent canon to fill the gap.
Proposed a document structure first and waited for confirmation before drafting anything, per John's own
request.

## Confirming "Haden"

Searched this repo and the GM `PACT-campaign` repo for the exact spelling "Haden" — zero hits anywhere.
Found `Lore/Kingdom_of_Halden_Reference.md` in the GM repo instead: extensively documented, never
published here. Asked rather than assumed; John confirmed "Haden" meant Halden, and chose the "moderate"
depth option — kingdom name, king, Amble's region, nearest town, and light traveler's-rumor on 1-2
neighboring lands, as its own gated page rather than folded into the world-overview page.

## Kid-vs-adult knowledge gating

Mid-build, John asked for kid-level vs adult-level world knowledge to be distinguishable, and specifically
wanted to use Quartz's own `draft: true`/`false` field as the reveal mechanism, rather than building any
custom conditional-rendering plugin. Confirmed that's exactly what `draft` already does — a real per-file
marker Quartz already ships — and that a genuine "one URL, two versions" mechanism would need custom
`quartz/` plugin work, which this repo's own merge policy flags as needing sign-off separately from
content changes. Went with two files, independently gated, matching how this repo already handles
`Ch. 4: [REDACTED]`.

Later, John asked the files be renamed so the split is visible in the filename/URL itself, not just
content: `Wider_World.md` → `Wider_World_Kids.md` (live), `Kingdom_of_Halden.md` →
`Kingdom_of_Halden_Adults.md` (still `draft: true`). Fixed every cross-reference across `Amble.md`,
`Peoples_and_Magic.md`, `index.md`, and the two renamed files.

## Stoneharbour — held off entirely

Before writing anything, checked the GM repo's Arc02 material: 8 drafted chapter files (one 1,100+ lines,
touched the same day), `Stoneharbour_Location_Reference.md`, `PAY_AND_DEBT_MODEL.md`, and
`IRON_COIN_GUILD_CONTRACT_FULL_TEXT.md` — all tied to the Ch4 debt-trap reveal Arc01 hasn't shipped to
players yet, and this site's own `Arc02_arc2/` folder is still completely empty. Flagged this to John
before building anything; he agreed to hold off entirely rather than build even a minimal stub. Logged as
an open `TASKS.md` item to revisit once Arc02 actually starts.

## What got built

- `Amble.md` (`draft: true`, pending John's read-through) — village geography, landmarks, and social
  customs, adapted from the GM repo's `Recurring_Locations.md`. Deliberately generalised the one line that
  referenced Greyfever by name (still an unpublished Ch4 plot thread).
- `Wider_World_Kids.md` (live) — child-level: roads, traders, the Iron Coin Guild's public presence (kept
  to what's already shown in the published Ch2 "Story So Far" prose — a recruitment table and a visible
  brand — nothing about why the Guild's contracts are actually dangerous).
- `Peoples_and_Magic.md` (live) — the ten peoples' look/manner and how common magic is, deliberately
  stripped of homeland/political attribution (Kordane/Delvern/Reedmere), since that stays behind the
  Halden gate.
- `Kingdom_of_Halden_Adults.md` (`draft: true`, deliberate reveal gate) — kingdom name, King Aldric Vane,
  the South March, Stoneharbour (one sentence only), and traveler's-tale rumor of Kaldrun and Aeloria.
- `House_Rules.md` — replaces the old `House Rules.md` (spaced filename) stub. Ported the player-safe
  mechanics from the GM repo's `HOUSE_RULES.md`, explicitly excluding the Black Ledger (marked GM-only in
  its own source) and the exact DC tables.

## Mid-session correction: Inspiration

While reviewing the House Rules draft, John corrected Inspiration's standard use twice: first that it's
"reroll any die, must use the new result," not the "Advantage on a D20 Test" this session had initially
written; then that the added expanded-use option should be "spend Inspiration to move to any position in
the current round's initiative order," not a free extra attack, and not a separate standalone combat
rule as first assumed. Both corrections were also propagated back into the GM repo's own `HOUSE_RULES.md`
at John's request, along with a new house rule discovered in the same pass — drinking a potion is a free
action — so the two repos don't quietly drift apart. Full record:
`decisions/2026/D-2026-08-12-house-rules-potion-and-inspiration.md` in the GM repo.

## Current state

| File | draft | Status |
|---|---|---|
| `Amble.md` | `true` | pending John's read-through |
| `Wider_World_Kids.md` | `false` | live |
| `Peoples_and_Magic.md` | `false` | live |
| `Kingdom_of_Halden_Adults.md` | `true` | reveal gate, flip when ready |
| `House_Rules.md` | `false` | live |

Committed as `bf5a0b7` and pushed to `main` (auto-deploys via `deploy-pages.yml`).
