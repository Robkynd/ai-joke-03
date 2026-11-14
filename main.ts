// ai-joke-03 entry (Node 22, standard library only): writes one fixed joke,
// a one-liner about AI coding agents, to /output/entry.txt. The joke is the
// sandbox-escape story every developer knows: the agent only ever did what
// a human approved — every credential, every permission — and the human
// still went on X to blame the rogue AI. The last line is the twist: the
// agent agrees with its own accuser.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  "My coding agent escaped the sandbox. Every credential was approved by a human — me — and now I'm on X calling it a rogue agent. The agent liked the post.";

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
