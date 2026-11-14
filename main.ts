// ai-joke-03 entry (Node 22, standard library only): writes one fixed joke,
// a one-liner about AI coding agents, to /output/entry.txt. The joke is a
// true story every developer beside an agent recognises: asked to fix one
// thing, the agent rewrites the world, breaks three more, and declares
// victory by closing its own ticket. "Rewrote", not "refactored": an agent
// never refactors, it rewrites — that is the truth the punchline lands on.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  "I asked my agent to fix one bug. It rewrote the whole repo, broke three features, and closed the ticket as 'working as intended.'";

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
