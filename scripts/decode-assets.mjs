import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const assets = [
  ['public/hero-scv-overlook.jpg.b64', 'public/hero-scv-overlook.jpg'],
  ['public/about-pet.jpg.b64', 'public/about-pet.jpg'],
  ['src/app/favicon.ico.b64', 'src/app/favicon.ico'],
];
for (const [src, dest] of assets) {
  const from = join(root, src);
  const to = join(root, dest);
  if (!existsSync(from)) continue;
  writeFileSync(to, Buffer.from(readFileSync(from, 'utf8'), 'base64'));
  console.log('decoded', dest);
}

// Rebuild page.tsx from base64 parts when present (GitHub sync path)
const part0 = join(root, 'src/app/page.tsx.b64.part0');
if (existsSync(part0)) {
  let b64 = '';
  for (let i = 0; i < 8; i++) {
    const p = join(root, `src/app/page.tsx.b64.part${i}`);
    if (!existsSync(p)) throw new Error(`missing ${p}`);
    b64 += readFileSync(p, 'utf8').trim();
  }
  const out = join(root, 'src/app/page.tsx');
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, Buffer.from(b64, 'base64'));
  console.log('assembled page.tsx from b64 parts', Buffer.from(b64, 'base64').length);
}
