#!/usr/bin/env node
// Given a newline-delimited manifest of file paths (relative to repo root)
// under content/, checks each filename against known Quartz filename
// footguns and fails (non-zero exit) if any are found:
//
//   - "@" anywhere in a filename — the GithubFlavoredMarkdown plugin's
//     remark-gfm turns "name@domain"-shaped text into a mailto: link before
//     Quartz's own wikilink parser sees it, breaking the embed/link
//     (jackyzha0/quartz#2172, originally reported for @2x-style names).
//   - non-ASCII characters — confirmed to crash the Quartz builder entirely
//     (jackyzha0/quartz#386).
//
// A third footgun — underscores in IMAGE filenames, misread as Markdown
// emphasis by Quartz's wikilink embed parser (jackyzha0/quartz#2305) — is
// NOT checked here anymore: auto-handout.yml's rename-unsafe-filenames.mjs
// step now auto-corrects that one upstream (underscores -> hyphens) before
// any stub page is created, so flagging it here would just be permanent
// noise on a problem that's already fixed within seconds. `@` and non-ASCII
// aren't safely auto-fixable the same way (no obvious correct replacement),
// so those still need a human to actually rename the file.
//
// Usage: node check-filenames.mjs <manifest-file>
// Exits 0 with no output if the manifest is empty/missing (nothing to check).
import { existsSync, readFileSync } from "node:fs"
import path from "node:path"

const manifestPath = process.argv[2]
if (!manifestPath || !existsSync(manifestPath)) {
  console.log("No manifest provided (or it doesn't exist) — nothing to check.")
  process.exit(0)
}

const targets = readFileSync(manifestPath, "utf8")
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean)

const problems = []

for (const filePath of targets) {
  const base = path.basename(filePath)

  if (base.includes("@")) {
    problems.push(`${filePath}: "@" in filename — Quartz's GFM plugin can turn this into a mailto: link before the wikilink parser sees it, breaking the embed/link.`)
  }
  if (/[^\x00-\x7F]/.test(base)) {
    problems.push(`${filePath}: non-ASCII/accented character in filename — known to crash the Quartz builder entirely.`)
  }
}

if (problems.length === 0) {
  console.log("All checked filenames look safe.")
  process.exit(0)
}

console.log("Filename problems found:")
for (const p of problems) console.log(` - ${p}`)
process.exit(1)
