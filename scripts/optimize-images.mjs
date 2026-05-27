import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const projectRoot = process.cwd()
const publicDir = path.join(projectRoot, 'public')

const targets = [
  'lehenga-orange.JPG',
  'cyan-frock.JPG',
  'yellow-lehenga.JPG',
  'purple-lehenga.JPG',
  'sherwani-men.JPG',
  'jacket-men.JPG',
  'orange-lehenga-pair.jpg',
  'yellow-kurta-men.jpg'
]

const formatBytes = (bytes) => {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

for (const fileName of targets) {
  const sourcePath = path.join(publicDir, fileName)
  const parsed = path.parse(fileName)
  const outputName = `${parsed.name}.avif`
  const outputPath = path.join(publicDir, outputName)

  const sourceBuffer = await fs.readFile(sourcePath)

  await sharp(sourceBuffer)
    .rotate()
    .resize({ width: 2200, height: 2200, fit: 'inside', withoutEnlargement: true })
    .avif({ quality: 52, effort: 6 })
    .toFile(outputPath)

  const sourceStats = await fs.stat(sourcePath)
  const outputStats = await fs.stat(outputPath)

  const reduction = (((sourceStats.size - outputStats.size) / sourceStats.size) * 100).toFixed(1)
  console.log(`${fileName} -> ${outputName}`)
  console.log(`  ${formatBytes(sourceStats.size)} -> ${formatBytes(outputStats.size)} (${reduction}% smaller)`)
}
