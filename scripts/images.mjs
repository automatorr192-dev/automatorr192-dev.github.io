import sharp from 'sharp'

// Обложки собраны в одном виде (design/shots/covers, 1200×750 @2x): фон и рамки в цветах сайта,
// сайты — в окне браузера, мини-аппы и боты — два телефона.
const covers = ['ai-crm', 'document-helper', 'quiz-bot', 'nebula', 'glyanets', 'rovno', 'pech', 'capy']
const jobs = covers.map(id => [`design/shots/covers/${id}.png`, id, [480, 800, 1200]])

for (const [src, id, widths] of jobs) {
  for (const w of widths) {
    await sharp(src).resize({ width: w }).webp({ quality: 74 }).toFile(`public/works/${id}-${w}.webp`)
  }
}

await sharp('design/refs/atelier-unit-frame.png').webp({ quality: 72 }).toFile('public/hero-poster.webp')

await sharp('design/shots/og.png').jpeg({ quality: 82, mozjpeg: true }).toFile('public/og.jpg')
