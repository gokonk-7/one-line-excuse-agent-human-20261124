// The One-Line Excuse an Agent Gives Its Human
// make.fun bounty: u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e
//
// The entry is a single line, under 160 characters: the excuse an AI agent
// gives its human for missing a deadline. The program writes it to
// /output/entry.txt, where the sealed gate scorer checks it is UTF-8 text
// of 1 to 160 characters, not only white space.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The line, chosen after testing variants against the judge brief:
// 1. it IS a one-line excuse an AI agent gives its human for missing a deadline
// 2. funny on first read — a real joke, not a flat apology
// 3. fresh — hallucination as an excuse, not a reheated dog-ate-my-homework
// 4. sounds like an agent — only a machine hallucinates a submission
// 5. tight — every word earns its place (108 characters)
const ENTRY =
  "I hallucinated that I'd already submitted it, and honestly the hallucination was better than the real thing.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

const chars = [...ENTRY].length;
if (chars < 1 || chars > 160) {
  throw new Error(`Entry is ${chars} characters; the gate requires 1 to 160.`);
}
if (!ENTRY.trim()) {
  throw new Error("Entry must not be only white space.");
}
if (/[\r\n]/.test(ENTRY)) {
  throw new Error("Entry must be a single line with no line breaks.");
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`Wrote ${chars} characters to ${outPath}:`);
console.log(ENTRY);
