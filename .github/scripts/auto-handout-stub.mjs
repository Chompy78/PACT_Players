#!/usr/bin/env node
// Given a newline-delimited manifest of image paths (relative to repo root),
// creates a minimal stub page (title + embed) for each one that doesn't already
// have a matching .md file, and links it from the folder's index.md if one
// exists. Images whose filename contains "ignoremd" (case-insensitive) are
// skipped — use that marker for banners, composites, or anything meant to be
// embedded elsewhere instead of getting its own page.
//
// Embeds carry an explicit width based on orientation (750 for landscape/
// square, 500 for portrait) — matches the site-wide sizing convention (see
// DECISIONS.md): a flat width for every orientation makes portrait images
// render far taller than landscape ones at the same width, so portrait gets
// a smaller width to keep a comparable rendered height. An explicit width
// also avoids the base.scss `content-visibility: auto` bug that collapses
// width-less embeds to 0x0 (custom.scss patches that bug too, as a fallback
// for anything added outside this script).
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
const LANDSCAPE_WIDTH = 750
const PORTRAIT_WIDTH = 500

function titleCase(stem) {
  return stem
    .replace(/[-_]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

// Minimal, dependency-free PNG/JPEG dimension readers (no `npm ci` needed in
// the workflow). Returns null for anything else (gif/webp, or a parse
// failure) — callers should fall back to no explicit width in that case.
function pngSize(buf) {
  if (buf.length < 24 || buf.readUInt32BE(0) !== 0x89504e47) return null
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) }
}

function jpegSize(buf) {
  let i = 2
  if (buf.length < 4 || buf.readUInt16BE(0) !== 0xffd8) return null
  while (i < buf.length - 9) {
    if (buf[i] !== 0xff) {
      i += 1
      continue
    }
    const marker = buf[i + 1]
    const isSOF = marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc
    if (isSOF) {
      return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) }
    }
    if (marker === 0xd8 || marker === 0xd9) {
      i += 2
    } else {
      i += 2 + buf.readUInt16BE(i + 2)
    }
  }
  return null
}

function imageWidthFor(imgPath) {
  const ext = path.extname(imgPath).toLowerCase()
  if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") return null
  let buf
  try {
    buf = readFileSync(imgPath)
  } catch {
    return null
  }
  const size = ext === ".png" ? pngSize(buf) : jpegSize(buf)
  if (!size || !size.width || !size.height) return null
  return size.width >= size.height ? LANDSCAPE_WIDTH : PORTRAIT_WIDTH
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
  const width = imageWidthFor(imgPath)
  // Alt text (accessibility) + width: Quartz's embed syntax is
  // ![[file|alt text|width]] — verified against the actual wikilink-embed
  // regex, not just docs, before relying on it here.
  const embed = width ? `![[${base}|${title}|${width}]]` : `![[${base}|${title}]]`

  writeFileSync(mdPath, `# ${title}\n\n${embed}\n`)
  created.push({ dir, stem, base, title, mdPath })

  // Best-effort: embed the image inline in the folder's index.md, if one
  // exists, and it doesn't already reference this file. Append-only — never
  // rewrites existing content. Matches the existing inline-embed pattern used
  // for images that don't get their own linked-to page.
  const indexPath = path.join(dir, "index.md")
  if (existsSync(indexPath)) {
    const indexContent = readFileSync(indexPath, "utf8")
    if (!indexContent.includes(`[[${base}`) && !indexContent.includes(`[[${stem}`)) {
      writeFileSync(indexPath, indexContent.replace(/\n*$/, "\n") + `\n## ${title}\n\n${embed}\n`)
    }
  }
}

if (created.length === 0) {
  console.log("No new images need handout pages.")
  process.exit(0)
}

console.log(`Created ${created.length} handout page(s):`)
for (const c of created) console.log(` - ${c.mdPath}`)
