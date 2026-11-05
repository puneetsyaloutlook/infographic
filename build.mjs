// Builds the site into dist/: index.html (the skill map) plus each markdown
// file rendered as a page. Run with: npm run build
import { marked } from 'marked';
import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync, existsSync } from 'node:fs';
import { dirname, join, posix } from 'node:path';

const REPO = 'https://github.com/puneetsyaloutlook/infographic';
const OUT = 'dist';

// source file -> output route
const pages = [
  { src: 'README.md', route: 'readme', title: 'README' },
  { src: 'DESIGN-NOTES.md', route: 'design-notes', title: 'Design notes' },
  { src: 'docs/test-run-1.md', route: 'docs/test-run-1', title: 'Test run 1' },
];
for (const name of readdirSync('.claude/skills').sort()) {
  const src = `.claude/skills/${name}/SKILL.md`;
  if (existsSync(src)) pages.push({ src, route: `skills/${name}`, title: name });
}

const routeBySrc = new Map(pages.map(p => [p.src, p.route]));
routeBySrc.set('docs/skill-map.html', '');

function rewriteHref(href, fromSrc) {
  if (/^([a-z]+:|#|\/\/)/i.test(href)) return href;
  const [path, hash] = href.split('#');
  if (!path) return href;
  const target = posix.normalize(posix.join(posix.dirname(fromSrc), path));
  if (routeBySrc.has(target)) return '/' + routeBySrc.get(target) + (hash ? '#' + hash : '');
  return `${REPO}/blob/main/${target}` + (hash ? '#' + hash : '');
}

function stripFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  return m ? { meta: m[1], body: text.slice(m[0].length) } : { meta: '', body: text };
}

function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

const css = readFileSync('index.html', 'utf8').match(/<style>([\s\S]*?)<\/style>/)[1];
const pageCss = `
main.doc { max-width: 780px; }
.back { font-size: 0.92rem; margin-bottom: var(--space-lg); }
.doc h1 { margin-top: 0; }
.doc pre { white-space: pre-wrap; overflow-wrap: anywhere; background: var(--surface-quiet); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: var(--space-md); overflow-x: auto; font-size: 0.88rem; }
.doc code { font-size: 0.9em; }
.doc table { width: 100%; }
.doc .meta { background: var(--surface-quiet); border: 1px solid var(--border-default); border-radius: var(--radius-md); padding: var(--space-sm) var(--space-md); font-size: 0.9rem; color: var(--text-secondary); margin-bottom: var(--space-lg); }
.doc .meta dt { font-weight: 600; display: inline; }
.doc .meta dd { display: inline; margin: 0 0 0 4px; }
.doc .meta div { margin: 2px 0; }
`;

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'index.html'), readFileSync('index.html'));

for (const p of pages) {
  const { meta, body } = stripFrontmatter(readFileSync(p.src, 'utf8'));
  const renderer = new marked.Renderer();
  renderer.link = function ({ href, title, tokens }) {
    const text = this.parser.parseInline(tokens);
    return `<a href="${esc(rewriteHref(href, p.src))}"${title ? ` title="${esc(title)}"` : ''}>${text}</a>`;
  };
  renderer.html = ({ text }) => esc(text);
  const html = marked.parse(body, { renderer, gfm: true });
  let metaHtml = '';
  if (meta) {
    const rows = meta.split('\n').map(l => l.match(/^(\w[\w-]*):\s*(.*)$/)).filter(Boolean)
      .map(m => `<div><dt>${esc(m[1])}:</dt><dd>${esc(m[2].replace(/^["']|["']$/g, ''))}</dd></div>`).join('');
    metaHtml = `<dl class="meta">${rows}</dl>`;
  }
  const page = `<!DOCTYPE html>
<html lang="en-AU">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(p.title)} | Infographic skill map</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora:wght@500;600&family=Public+Sans:wght@400;600&display=swap" rel="stylesheet">
<style>${css}${pageCss}</style>
</head>
<body>
<main class="doc">
<p class="back"><a href="/">Back to the skill map</a> &middot; <a href="${REPO}/blob/main/${p.src}">View ${esc(p.src)} on GitHub</a></p>
${metaHtml}
${html}
</main>
</body>
</html>
`;
  const dir = join(OUT, p.route);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), page);
}
console.log(`Built ${pages.length + 1} pages into ${OUT}/`);
