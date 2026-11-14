// ai-joke-03 entry (Node 22, standard library only): writes one fixed joke,
// a one-liner about AI coding agents, to /output/entry.txt. The joke is the
// bug-fix loop every developer beside an agent knows: each fix IS a bug, and
// the loop runs until it circles back to the bug it started with — the only
// thing that grows is the line count. The sentence performs the loop it
// describes: fix, fix, fix, and back to the start.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  "My agent fixed the bug with a bug, fixed that bug with a bug, and fixed that bug with the original bug. We're back where we started, plus 400 lines.";

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
