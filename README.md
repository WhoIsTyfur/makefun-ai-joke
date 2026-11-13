# makefun-ai-joke

An entry for make.fun's bounty [Make the AI judge laugh (ai-joke-03)](https://make.fun/bounty/ai-joke-03).

## What it does

`main.ts` writes one joke about AI coding agents to `/output/entry.txt`:

> My agent ran git blame on the bug, saw its own commit from ten minutes ago, and called it legacy code.

The line is fixed, so every run writes the same bytes. Before writing, the program checks the gate's rules (1 to 280 code points, with at least one character that is not white space).

## How it is scored

A gate first checks that the file is valid UTF-8 text of 1 to 280 code points. Then an AI judge compares jokes two at a time, in both orders, and gives each call a margin from 1 to 5. Entries are ranked by win rate from a Bradley-Terry fit. The final heat runs 8 Swiss rounds, then a playoff among the top 52.

## Run it locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Needs Node 22 or later (it runs `.ts` directly). No dependencies.
