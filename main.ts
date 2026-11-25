// Robot wedding vow: love promised across every update, even the ones that brick it.
import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "I promise to love you through every update, even the ones that brick me, until your battery or mine runs out.");
