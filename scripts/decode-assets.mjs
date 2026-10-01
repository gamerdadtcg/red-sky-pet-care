import { readFileSync, writeFileSync, existsSync } from 'fs';
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
