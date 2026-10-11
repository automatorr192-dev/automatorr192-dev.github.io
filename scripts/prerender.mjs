import { readFile, writeFile, rm } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'

const { render } = await import(pathToFileURL('dist-ssr/entry-server.js').href)
const html = await readFile('dist/index.html', 'utf8')
await writeFile('dist/index.html', html.replace('<!--app-->', render()))
await rm('dist-ssr', { recursive: true })
