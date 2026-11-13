import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One fixed line: the same bytes on every run.
const joke =
  "My agent ran git blame on the bug, saw its own commit from ten minutes ago, and called it legacy code.";

// The gate: 1 to 280 code points, at least one non-white-space character.
const points = [...joke].length;
if (points < 1 || points > 280 || !/\S/u.test(joke)) {
  throw new Error(`entry fails the gate (${points} code points)`);
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), joke, "utf8");
