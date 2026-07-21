#!/usr/bin/env node
// Given a newline-delimited manifest of image paths (relative to repo root),
// creates a minimal stub page (title + embed) for each one that doesn't already
// have a matching .md file, and links it from the folder's index.md if one
// exists. Images whose filename contains "ignoremd" (case-insensitive) are
// skipped — use that marker for banners, composites, or anything meant to be
// embedded elsewhere instead of getting its own page.
//
// Usage: node auto-handout-stub.mjs <manifest-file>
// The manifest is only ever the set of images newly ADDED in the triggering
// push (see .github/workflows/auto-handout.yml) — this script never walks the
// whole content/ tree, so it never touches pre-existing images that were
// deliberately left without a standalone page.
import { existsSync, readFileSync, writeFileSync } from "node:fs"
import path from "node:path"

const IMAGE_EXTS = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp"])
const SKIP_MARKER = "ignoremd"

function titleCase(stem) {
  return stem
    .replace(/[-_]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

const manifestPath = process.argv[2]
if (!manifestPath || !existsSync(manifestPath)) {
  console.log("No manifest provided (or it doesn't exist) — nothing to do.")
  process.exit(0)
}

const targets = readFileSync(manifestPath, "utf8")
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean)
  .filter((f) => IMAGE_EXTS.has(path.extname(f).toLowerCase()))
  .filter((f) => existsSync(f))

const created = []

for (const imgPath of targets) {
  const dir = path.dirname(imgPath)
  const base = path.basename(imgPath)
  const stem = base.slice(0, base.length - path.extname(base).length)

  if (base.toLowerCase().includes(SKIP_MARKER)) continue

  const mdPath = path.join(dir, `${stem}.md`)
  if (existsSync(mdPath)) continue

  const title = titleCase(stem)
  writeFileSync(mdPath, `# ${title}\n\n![[${base}]]\n`)
  created.push({ dir, stem, base, title, mdPath })

  // Best-effort: link the new page from the folder's index.md, if one exists,
  // and it doesn't already reference this stem. Append-only — never rewrites
  // existing content.
  const indexPath = path.join(dir, "index.md")
  if (existsSync(indexPath)) {
    const indexContent = readFileSync(indexPath, "utf8")
    if (!indexContent.includes(`[[${stem}`)) {
      writeFileSync(indexPath, indexContent.replace(/\n*$/, "\n") + `\n## ${title}\n\n[[${stem}|${title}]]\n`)
    }
  }
}

if (created.length === 0) {
  console.log("No new images need handout pages.")
  process.exit(0)
}

console.log(`Created ${created.length} handout page(s):`)
for (const c of created) console.log(` - ${c.mdPath}`)
