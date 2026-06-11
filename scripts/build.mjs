import { execSync } from 'child_process';
import { cpSync, existsSync, mkdirSync } from 'fs';

try {
  execSync('npx astro build', { stdio: 'inherit' });
} catch {
  const src = 'dist/server/_astro';
  const dst = 'dist/client/_astro';
  if (!existsSync(src)) {
    console.error('Build failed — no server assets found.');
    process.exit(1);
  }
  mkdirSync(dst, { recursive: true });
  cpSync(src, dst, { recursive: true, force: true });
  console.log('Windows EBUSY workaround: client assets copied from server/_astro.');
}
