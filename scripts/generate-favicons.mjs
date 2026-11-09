// Master-asset favicon generator — Richkris RK monogram.
// Source of truth: app/icon.svg (512x512). All rasters derive from it via sharp.
// Usage: node scripts/generate-favicons.mjs
import sharp from 'sharp';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const appDir = join(root, 'app');
const masterSvg = join(appDir, 'icon.svg');

if (!existsSync(masterSvg)) {
  console.error(`Master SVG not found: ${masterSvg}`);
  process.exit(1);
}
const svg = readFileSync(masterSvg);

// Validate: square 512 viewBox, brand colours, no external deps.
const src = svg.toString('utf8');
const checks = [
  ['viewBox="0 0 512 512"', 'square 512 viewBox'],
  ['#171918', 'charcoal background'],
  ['#B69A70', 'champagne monogram'],
];
for (const [needle, label] of checks) {
  if (!src.includes(needle)) {
    console.error(`Master SVG missing ${label} (${needle})`);
    process.exit(1);
  }
}
if (/<image|font-family|@import|url\(http/i.test(src)) {
  console.error('Master SVG must have no external fonts, images or dependencies.');
  process.exit(1);
}
console.log('Master SVG validated: 512x512, #171918 / #B69A70, self-contained.');

async function raster(outRel, size, opts = {}) {
  const { flatten = false, background = { r: 23, g: 25, b: 24 } } = opts;
  let pipeline = sharp(svg, { density: 384 }).resize(size, size, {
    fit: 'contain',
    background: { r: 23, g: 25, b: 24, alpha: 1 },
  });
  pipeline = flatten ? pipeline.flatten({ background }).removeAlpha() : pipeline.png();
  const buf = await pipeline.toBuffer();
  writeFileSync(join(appDir, outRel), buf);
  console.log(`wrote app/${outRel} — ${size}x${size} (${buf.length} bytes)`);
  return buf;
}

// 1. Full-bleed app icon (RGBA, keeps transparency for future use; bg rect makes it opaque)
await raster('icon.png', 512);
// 2. Standard favicon PNGs
await raster('favicon-32x32.png', 32);
await raster('favicon-16x16.png', 16);
// 3. Apple touch icon — MUST be opaque RGB, no alpha channel
await raster('apple-icon.png', 180, { flatten: true });

// 4. Multi-resolution ICO (16/32/48) — composed from the same sharp buffers.
const toBmpIcon = async (size) => {
  const raw = await sharp(svg, { density: 384 })
    .resize(size, size, { fit: 'contain', background: { r: 23, g: 25, b: 24, alpha: 1 } })
    .ensureAlpha()
    .raw()
    .toBuffer();
  return { size, raw };
};
const layers = await Promise.all([16, 32, 48].map(toBmpIcon));

// Minimal PNG-compressed ICO writer (Vista+; universally supported).
const pngs = await Promise.all(
  layers.map(async ({ size }) =>
    sharp(svg, { density: 384 })
      .resize(size, size, { fit: 'contain', background: { r: 23, g: 25, b: 24, alpha: 1 } })
      .png()
      .toBuffer()
  )
);
const count = pngs.length;
const headerSize = 6 + 16 * count;
const totalSize = headerSize + pngs.reduce((a, b) => a + b.length, 0);
const ico = Buffer.alloc(totalSize);
ico.writeUInt16LE(0, 0); // reserved
ico.writeUInt16LE(1, 2); // type: icon
ico.writeUInt16LE(count, 4);
let offset = headerSize;
pngs.forEach((png, i) => {
  const size = layers[i].size;
  const o = 6 + 16 * i;
  ico.writeUInt8(size >= 256 ? 0 : size, o); // width (0 = 256)
  ico.writeUInt8(size >= 256 ? 0 : size, o + 1); // height
  ico.writeUInt8(0, o + 2); // palette
  ico.writeUInt8(0, o + 3); // reserved
  ico.writeUInt16LE(1, o + 4); // planes
  ico.writeUInt16LE(32, o + 6); // bpp
  ico.writeUInt32LE(png.length, o + 8); // data size
  ico.writeUInt32LE(offset, o + 12); // data offset
  png.copy(ico, offset);
  offset += png.length;
});
writeFileSync(join(appDir, 'favicon.ico'), ico);
console.log(`wrote app/favicon.ico — 16/32/48 PNG-compressed (${ico.length} bytes)`);
console.log('Done. All rasters generated from app/icon.svg.');