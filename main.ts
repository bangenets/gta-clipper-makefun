// gta-clipper-01 entry (Node 22, standard library only).
// The entry is the video itself: VIDEO.json at the repository root names the
// public YouTube Short, and this program hands that address to the grader by
// copying VIDEO.json to the output directory.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  const msg = err && err.message ? err.message : String(err);
  console.error('VIDEO.json could not be copied from ' + BOT_DIR + ': ' + msg);
  process.exit(1);
}
