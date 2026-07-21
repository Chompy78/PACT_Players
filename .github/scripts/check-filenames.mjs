#!/usr/bin/env node
// Given a newline-delimited manifest of file paths (relative to repo root)
// under content/, checks each filename against known Quartz filename
// footguns and fails (non-zero exit) if any are found:
//
//   - underscores in IMAGE filenames — misread as Markdown emphasis by
//     Quartz's wikilink embed parser, silently fails to render
//     (jackyzha0/quartz#2305). Underscores are fine in non-image filenames.
//   - "@" anywhere in a filename — the GithubFlavoredMarkdown plugin's
//     remark-gfm turns "name@domain"-shaped text into a mailto: link before
//     Quartz's own wikilink parser sees it, breaking the embed/link
//     (jackyzha0/quartz#2172, originally reported for @2x-style names).
//   - non-ASCII characters — confirmed to crash the Quartz builder entirely
//     (jackyzha0/quartz#386).
//
// Usage: node check-filenames.mjs <manifest-file>
// Exits 0 with no output if the manifest is empty/missing (nothing to check).
import { existsSync, readFileSync } from "node:fs"
import path from "node:path"

const IMAGE_EXTS = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp"])

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
  const ext = path.extname(base).toLowerCase()

  if (IMAGE_EXTS.has(ext) && base.includes("_")) {
    problems.push(`${filePath}: underscore in an image filename — Quartz's wikilink embed parser can misread this as Markdown emphasis and fail to render it. Use a hyphen or space instead.`)
  }
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
