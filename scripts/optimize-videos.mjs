import fs from 'node:fs/promises'
import path from 'node:path'
import { spawn } from 'node:child_process'
import ffmpegPath from 'ffmpeg-static'

const projectRoot = process.cwd()
const publicDir = path.join(projectRoot, 'public')

const targets = [
  { input: 'herovideo.mp4', maxWidth: 1920, crf: 28 },
  { input: 'bridal-real.MP4', maxWidth: 1920, crf: 29 }
]

const formatBytes = (bytes) => {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

const runFfmpeg = (args) =>
  new Promise((resolve, reject) => {
    const proc = spawn(ffmpegPath, args, { stdio: ['ignore', 'pipe', 'pipe'] })

    let stderr = ''
    proc.stderr.on('data', (chunk) => {
      stderr += chunk.toString()
    })

    proc.on('close', (code) => {
      if (code === 0) {
        resolve()
        return
      }
      reject(new Error(`ffmpeg failed with code ${code}\n${stderr}`))
    })

    proc.on('error', reject)
  })

for (const { input, maxWidth, crf } of targets) {
  const inputPath = path.join(publicDir, input)
  const tmpOutputPath = path.join(publicDir, `${path.parse(input).name}.optimized.mp4`)

  await runFfmpeg([
    '-y',
    '-i',
    inputPath,
    '-vf',
    `scale='min(${maxWidth},iw)':-2`,
    '-c:v',
    'libx264',
    '-preset',
    'medium',
    '-crf',
    String(crf),
    '-c:a',
    'aac',
    '-b:a',
    '96k',
    '-movflags',
    '+faststart',
    tmpOutputPath
  ])

  const oldStats = await fs.stat(inputPath)
  const newStats = await fs.stat(tmpOutputPath)

  await fs.rename(tmpOutputPath, inputPath)

  const reduction = (((oldStats.size - newStats.size) / oldStats.size) * 100).toFixed(1)
  console.log(`${input}: ${formatBytes(oldStats.size)} -> ${formatBytes(newStats.size)} (${reduction}% smaller)`)
}
