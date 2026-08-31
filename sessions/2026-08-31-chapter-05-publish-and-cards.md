# 2026-08-31 — Chapter 5 published, Arc 2's Story So Far opened, and a card that had been wrong for four days

## What happened

Chapter 5, "The Rounds", is live. It is the first Arc 2 chapter on this site, so it also opens
`content/The_Story_So_Far/Arc02_among_strangers/` with its own index, and replaces the parent index's
"Nothing written up yet" placeholder with the link.

The chapter came from the Amble Story project, drafted against a session-5 transcript that was itself
built by **merging three independent pipeline runs** — this session's own run plus two Copilot runs —
and then corrected against this campaign's Arc 2 canon. The merge is documented on that side; what
matters here is that the names on the page are the campaign's own (Sena Voll, Tomkin "Tam" Reed, Dela
Brant, Juna Sennet, Old Sabine, Odalys Praed) rather than the transcript's mishearings of them.

Four commits, in order: `149bd0b` chapter and indexes, `447a764` the reference cards, `afc0861` a
placement correction, `a9df436` an expanded dance plus a mechanics cleanup.

## The two things worth remembering

**A card had been publicly wrong since 2026-08-27.** Corley Finn's said "human, about 16". He is a
half-elf of twenty. The agent had been answering "is Corley a human?" incorrectly for four days, with a
citation, from this site.

The trail is the interesting part. The session transcript contradicts *itself* about him — "Corley's a
female elf" at `[0:23:32]`, then "Corley is a human" at `[0:28:32]` — and the card inherited the wrong
half of a GM slip. **Cards inherit a transcript's errors exactly as prose does, and a card is the worse
place for it**, because a card is a flat assertion with nothing around it to undercut the claim. The
rule that came out of it: check a transcript-stated attribute against campaign canon before carding it.

**The cookshop dog is now carded, reversing a deliberate decision.** The Amble Story card source carried
an explicit instruction not to card him, because the arc reference says in bold to let the players name
the dog and a card would have taken that off the table. They named him **Fluffy** in this session — the
name is learned from a child of about twelve who hauls him off Moss by the collar — so the reason for
withholding was spent. The card records the name as theirs rather than assigning one. Three other
exclusions (the optional romantic interests, plus two chapter figures) were extended past on the same
reasoning: all are named in a published chapter now, and their cards say only what that chapter says.

## Publication discipline

Every fact on the new pages is drawn from the published chapter, not from GM-side canon. The
pre-publication scan caught one leak before it went out: **"Factor Berrin Slate"**. The full name is
correct campaign canon, but the table only ever said "Factor Slate", and the correction sheet's own
full-name policy forbids expanding short names. It was reverted in the transcript, the chapter and the
mirror. That scan is worth running on every chapter rather than treating it as a formality — it is the
second time in two days it has caught something real.

Also stripped on the way out, as usual: the tic-budget markers, the `[VERIFY]` notes and the whole
Session Metadata block. The PCs' parents' names stay off the site per the 2026-08-27 audit, even though
one of them became relevant this session.

## Numbers

- Chapter 5: 10,670 words on the page — long, against Chapter 4's 6,235, from a shorter session.
  Flagged to John as a judgement call rather than a defect; the one-chapter-per-session rule explicitly
  allows whatever length the session needs.
- Reference cards: 7 new, 7 updated. Knowledge base now **47 character cards, 5 chapter cards**.
- Deploy: `Deploy Quartz Site` and `Check content filenames` both ran on each push.

## Still open

- Chapter 5 is marked DRAFT in the source project — John has not read it yet. Chapters 1–4 only became
  APPROVED after his read.
- One outline flag remains unresolved: Caspian, Anders and Archer are carried through the chapter but the
  transcript never independently places them, including during the party's one split.
