#!/usr/bin/env node
// Given a newline-delimited manifest of image paths (relative to repo root),
// renames any whose filename contains an underscore to the same name with
// hyphens instead (Portrait_1_Wren.png -> Portrait-1-Wren.png) — underscores
// in image filenames are silently misread as Markdown emphasis by Quartz's
// wikilink embed parser (jackyzha0/quartz#2305), so this fixes it before any
// stub page ever embeds the bad name.
//
// Rewrites the manifest file in place with the corrected paths, so later
// pipeline steps (optimize-images.mjs, auto-handout-stub.mjs) operate on the
// renamed files, not the originals.
//
// Only handles underscores — the other two documented footguns (`@` in a
// filename, non-ASCII characters) aren't safely auto-fixable (no obvious
// correct replacement), so those stay caught by check-filenames.yml instead,
// which still needs a human to actually rename the file.
//
// Usage: node rename-unsafe-filenames.mjs <manifest-file>
import { existsSync, readFileSync, writeFileSync, renameSync } from "node:fs"
import path from "node:path"

const manifestPath = process.argv[2]
if (!manifestPath || !existsSync(manifestPath)) {
  console.log("No manifest provided (or it doesn't exist) — nothing to do.")
  process.exit(0)
}

const targets = readFileSync(manifestPath, "utf8")
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean)

const updated = []
let renamedCount = 0

for (const filePath of targets) {
  const dir = path.dirname(filePath)
  const base = path.basename(filePath)

  if (base.includes("_") && existsSync(filePath)) {
    const newBase = base.replaceAll("_", "-")
    const newPath = path.join(dir, newBase)
    if (existsSync(newPath)) {
      console.log(`Skipping rename for ${filePath}: ${newPath} already exists.`)
      updated.push(filePath)
      continue
    }
    renameSync(filePath, newPath)
    console.log(`Renamed ${filePath} -> ${newPath}`)
    updated.push(newPath)
    renamedCount += 1
  } else {
    updated.push(filePath)
  }
}

writeFileSync(manifestPath, updated.join("\n") + (updated.length ? "\n" : ""))

if (renamedCount === 0) {
  console.log("No filenames needed renaming.")
} else {
  console.log(`Renamed ${renamedCount} file(s), manifest updated.`)
}
