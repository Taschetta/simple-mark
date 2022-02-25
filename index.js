import fs from 'fs/promises'
import Markdown from 'markdown-it'

const mark_path = process.argv[2]

const markdown = new Markdown()

const html_path = mark_path.replace('.md', '.html')

const mark = await fs.readFile(mark_path, { encoding: 'utf-8' })
const html = markdown.render(mark) 

await fs.writeFile(html_path, html)