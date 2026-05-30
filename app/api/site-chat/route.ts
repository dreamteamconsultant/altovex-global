import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

type Doc = { path: string; text: string };

let INDEX: Doc[] | null = null;

function buildIndex(): Doc[] {
  if (INDEX) return INDEX;
  const root = path.join(process.cwd());
  const searchDirs = ['app', 'components', 'public'];
  const exts = ['.tsx', '.ts', '.md', '.jsx', '.js'];
  const docs: Doc[] = [];

  function walk(dir: string) {
    let entries: string[] = [];
    try {
      entries = fs.readdirSync(dir);
    } catch (e) {
      return;
    }
    for (const name of entries) {
      const full = path.join(dir, name);
      let stat: fs.Stats;
      try {
        stat = fs.statSync(full);
      } catch (e) {
        continue;
      }
      if (stat.isDirectory()) {
        walk(full);
      } else if (exts.includes(path.extname(full))) {
        try {
          const raw = fs.readFileSync(full, 'utf8');
          docs.push({ path: path.relative(root, full).replace(/\\/g, '/'), text: raw });
        } catch (e) {
          // ignore
        }
      }
    }
  }

  for (const d of searchDirs) {
    walk(path.join(root, d));
  }

  INDEX = docs;
  return INDEX;
}

function scoreDoc(docText: string, tokens: string[]) {
  const txt = docText.toLowerCase();
  let score = 0;
  for (const t of tokens) {
    if (!t) continue;
    const re = new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const m = txt.match(re);
    if (m) score += m.length;
  }
  return score;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const query = String(body?.query || '').trim();
  if (!query) return NextResponse.json({ error: 'empty query' }, { status: 400 });

  const index = buildIndex();
  const tokens = query.toLowerCase().split(/\s+/).filter(Boolean);

  const scored = index.map((d) => ({ d, score: scoreDoc(d.text, tokens) }));
  scored.sort((a, b) => b.score - a.score);

  const top = scored.filter(s => s.score > 0).slice(0, 5);

  if (top.length === 0) {
    // fallback: return a short sitemap-like overview
    const pages = index
      .filter((i) => i.path.startsWith('app/') && i.path.endsWith('.tsx'))
      .map((i) => i.path.replace(/^app\//, '').replace(/index\.tsx$/, '').replace(/\.tsx$/, ''))
      .filter(Boolean)
      .slice(0, 20);

    const answer = `I couldn't find exact matches. Here are some site pages I know about:\n\n${pages.map(p => `- /${p}`).join('\n')}`;
    return NextResponse.json({ answer, sources: [] });
  }

  const sources = top.map((t) => {
    // extract a snippet around the first match
    const low = t.d.text.toLowerCase();
    const idx = Math.max(...tokens.map(tok => low.indexOf(tok))).valueOf();
    const start = Math.max(0, idx - 120);
    const snippet = t.d.text.substring(start, start + 360).replace(/\n\s+/g, ' ').trim();
    return { path: t.d.path, score: t.score, snippet };
  });

  const answerLines = ['I found these relevant files and snippets:'];
  for (const s of sources) {
    answerLines.push(`\nSource: ${s.path} (score: ${s.score})\n"${s.snippet}\"\n`);
  }

  return NextResponse.json({ answer: answerLines.join('\n'), sources });
}
