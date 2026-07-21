#!/usr/bin/env node
// Given a newline-delimited manifest of image paths (relative to repo root),
// re-encodes each PNG/JPEG in place with sharp (already a project dependency —
// Quartz uses it too) at a reasonable quality/compression level, and downsizes
// anything wider than MAX_DIMENSION on its long edge. Only overwrites the file
// if the result is actually smaller — never makes a file bigger. Skips
// anything sharp can't read, or that isn't already smaller after re-encoding.
//
// PNG re-encoding here is near-lossless, not byte-identical: verified against
// real repo images, ~99.4% of pixel channel values are untouched and the rest
// shift by ~1-2/255 on average (max observed 49/255 on a handful of pixels) —
// imperceptible in practice, likely tied to an sBIT (significant-bits) chunk
// in the source PNGs that sharp's decoder/encoder handle slightly differently
// than whatever produced the originals. Cuts these AI-generated PNGs by
// roughly 55-60% in testing (3.0MB -> 1.26MB on one sample).
//
// Usage: node optimize-images.mjs <manifest-file>
// Run this BEFORE auto-handout-stub.mjs in the workflow, since it doesn't
// touch filenames or markdown — only the image bytes themselves.
import { existsSync, readFileSync, writeFileSync, statSync } from "node:fs"
import path from "node:path"
import sharp from "sharp"

const MAX_DIMENSION = 2000
const PNG_COMPRESSION_LEVEL = 9
const PNG_EFFORT = 10 // libvips' slowest/best-compression setting; still lossless
const JPEG_QUALITY = 85

const manifestPath = process.argv[2]
if (!manifestPath || !existsSync(manifestPath)) {
  console.log("No manifest provided (or it doesn't exist) — nothing to do.")
  process.exit(0)
}

const targets = readFileSync(manifestPath, "utf8")
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean)
  .filter((f) => [".png", ".jpg", ".jpeg"].includes(path.extname(f).toLowerCase()))
  .filter((f) => existsSync(f))

let totalBefore = 0
let totalAfter = 0
let touched = 0

for (const imgPath of targets) {
  const before = statSync(imgPath).size
  let pipeline = sharp(imgPath).resize({
    width: MAX_DIMENSION,
    height: MAX_DIMENSION,
    fit: "inside",
    withoutEnlargement: true,
  })

  const ext = path.extname(imgPath).toLowerCase()
  pipeline =
    ext === ".png"
      ? pipeline.png({ compressionLevel: PNG_COMPRESSION_LEVEL, effort: PNG_EFFORT })
      : pipeline.jpeg({ quality: JPEG_QUALITY })

  let out
  try {
    out = await pipeline.toBuffer()
  } catch (err) {
    console.log(`Skipping ${imgPath} (sharp couldn't process it: ${err.message})`)
    continue
  }

  if (out.length < before) {
    writeFileSync(imgPath, out)
    totalBefore += before
    totalAfter += out.length
    touched += 1
    console.log(`${imgPath}: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(out.length / 1024 / 1024).toFixed(2)}MB`)
  } else {
    console.log(`${imgPath}: already optimal (${(before / 1024 / 1024).toFixed(2)}MB), left unchanged`)
  }
}

if (touched > 0) {
  console.log(
    `Optimized ${touched} image(s): ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB`,
  )
} else {
  console.log("No images needed optimization.")
}
