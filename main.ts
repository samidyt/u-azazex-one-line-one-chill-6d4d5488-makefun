// One Line, One Chill — make.fun entry.
// Writes a single sentence of horror to /output/entry.txt.
// Runs on Node 22.18+ (the grader runs Node 22.23.4), no dependencies.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  `The locksmith rekeyed the whole house, then handed me an extra key and said, "That's for the room you don't have."`;

// Gate self-check, mirroring the sealed scorer: UTF-8 text of 1 to 200
// characters, not only white space, exactly one line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Gate fail: entry is ${ENTRY.length} characters, must be 1-200.`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("Gate fail: entry is only white space.");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("Gate fail: entry must be a single line.");
}

// The grader's sandbox provides /output; OUTPUT_DIR lets a local run
// point at a scratch directory instead.
const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");

// Read the file back and verify it is byte-identical to the entry.
const readBack = readFileSync(OUTPUT_PATH, "utf8");
if (readBack !== ENTRY) {
  throw new Error("Read-back mismatch: /output/entry.txt differs from the entry.");
}
console.log(`Wrote ${ENTRY.length} characters to ${OUTPUT_PATH} (read-back verified)`);
