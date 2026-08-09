# z-cold

Drop-zone folder. Anything placed here is automatically committed and pushed
to this branch (`zcold-data`) of the PACT_Players repo within a few seconds,
by a background sync script running on this machine (see `~/dev/zcold-sync`).

This branch is dedicated storage for dropped files only — it's kept
separate from `main` so this folder stays available no matter what branch
you have checked out in your normal working copy. It's linked into your
normal `PACT_Players` folder via a junction, so it looks and behaves like
an ordinary folder there.
