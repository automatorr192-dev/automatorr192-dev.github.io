import sharp from 'sharp'

const jobs = [
  ['design/shots/ai-crm-src.png', 'ai-crm', [480, 800, 1200], { left: 0, top: 0, width: 1440, height: 900 }],
  ['design/shots/rovno.png', 'rovno', [480, 800, 1200], { left: 0, top: 0, width: 1424, height: 890 }],
  ['design/shots/pech.png', 'pech', [480, 800, 1200], { left: 0, top: 0, width: 1424, height: 890 }],
  ['design/shots/capy.png', 'capy', [480, 800, 1200], { left: 0, top: 0, width: 1424, height: 890 }],
  ['design/shots/nebula.png', 'nebula', [360, 720]],
  ['design/shots/glyanets.png', 'glyanets', [360, 720]],
]

for (const [src, id, widths, crop] of jobs) {
  for (const w of widths) {
    let img = sharp(src)
    if (crop) img = img.extract(crop)
    await img.resize({ width: w }).webp({ quality: 74 }).toFile(`public/works/${id}-${w}.webp`)
  }
}

await sharp('design/refs/atelier-unit-frame.png').webp({ quality: 72 }).toFile('public/hero-poster.webp')

await sharp('design/shots/og.png').jpeg({ quality: 82, mozjpeg: true }).toFile('public/og.jpg')
