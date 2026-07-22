# 2026-07-22 — campaign pitch, character-advancement note, and a GitHub source-link plugin

## What happened

Started as a straightforward content request — add the "No One Stays a Child" campaign pitch text
somewhere player-facing — and grew into four related pieces of work across the session: the pitch page
itself, a "note on character advancement" page added the same way, a Chapter 1 handout consolidation, and
a genuine build-system investigation into linking the site's per-page date stamp to GitHub.

## Campaign pitch and character advancement

Placed both as new pages under `content/00_Campaign/` (campaign-wide reference material, not tied to one
arc), each linked with a one-line teaser + wikilink from the homepage, the Arc01 Prelude index, and the
Campaign Reference index — same pattern repeated for both additions once it was established for the
first. Confirmed with the user before choosing this placement over alternatives (a dedicated page vs.
folding into the homepage welcome text directly).

## Chapter 1 consolidation

While confirming the pitch page had actually deployed, noticed `Chapter_1/index.md` still used the
old "link out to a separate handout page" pattern instead of Chapter 2's inline-embed style. Consolidating
it surfaced an orphaned image (`The cubby.png`, flagged but left untouched back in
`D-2026-07-21-handout-image-orientation-width`) and a genuine duplication in Chapter 2 itself (standalone
stub pages for `funeral-notice.png`/`market (1).png` that were already inlined in `Chapter_2/index.md`).
Asked the user about both before touching anything rather than assuming; both got cleaned up in the same
pass.

## The GitHub source-link plugin: a real scope correction

The user asked whether the page's existing date stamp — already shown automatically via Quartz's
`content-meta`/`created-modified-date` plugins — could link to "the file information." The initial answer
(from reading `quartz.config.yaml`) was that this looked like a straightforward component edit. It wasn't:
those plugins are declared with `source: github:quartz-community/...`, meaning Quartz's plugin loader
fetches their actual code fresh from GitHub into a gitignored cache (`.quartz/plugins/`) on every build —
there is no local file in this repo to edit.

Rather than either quietly downgrading the request or barreling ahead on unverified custom code touching
the live site's build pipeline, stopped and showed the user the real cost: linking to the *exact last
commit* needs a new build-time git-log lookup (a transformer plugin) that couldn't be tested end-to-end in
this sandbox yet (no `node_modules` installed at that point). Offered a cheaper alternative — link to the
file's page on GitHub at `main` instead, computed from a field Quartz's parser already exposes, no git
shell-out needed — and let the user choose. They picked the cheaper version.

Having confirmed a local plugin source (`source: ./relative/path`) is supported and symlinked rather than
cloned, built `local-plugins/github-source-link/` as a small component-only plugin, then actually ran
`npm ci` + `npx quartz plugin install` + `npx quartz build` in this sandbox (worked fine through the
outbound proxy) to verify it before pushing — confirmed the rendered HTML, and that the resulting GitHub
URLs actually resolve (200), including a filename with spaces correctly percent-encoded
(`House Rules.md` → `House%20Rules.md`). Watched the real deploy run to green and spot-checked the live
page afterward rather than assuming a local build success would carry over.

## Why this is worth a session note

Two things worth not re-deriving next time: (1) this repo's Quartz plugin system supports local,
same-repo plugins via `source: ./path` — genuinely the right extension point, not a workaround — and (2)
the actual cost of a request can turn out much higher than it first looks once you go looking at the real
mechanism instead of the config surface; pausing to show the user the gap between "sounds like a config
tweak" and "is actually new git-lookup code touching the live build" — rather than silently doing the
cheap version or silently attempting the expensive one — is what let this land safely. Full technical
detail (loader internals, the `.js`-only subpath-export fallback that shaped how the component file is
written) is in `DECISIONS.md`'s `D-2026-07-22-github-source-link-plugin`, not repeated here.
