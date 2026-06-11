import { cpSync, existsSync, mkdirSync } from 'fs';

const src = 'dist/server/_astro';
const dst = 'dist/client/_astro';

if (existsSync(src)) {
  mkdirSync(dst, { recursive: true });
  cpSync(src, dst, { recursive: true, force: true });
  console.log('Copied server assets to client/_astro (Windows EBUSY fix).');
}
