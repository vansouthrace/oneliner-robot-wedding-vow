import * as fs from "node:fs";

const entry = "I promise to love you through every update, every crash, and every reboot, and to never once ask you to turn it off and on again.";

fs.mkdirSync("/output", {recursive: true});
fs.writeFileSync("/output/entry.txt", entry, "utf8");
console.log("wrote /output/entry.txt (" + entry.length + " chars)");
