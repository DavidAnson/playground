import { globbySync } from "globby";

const inputs = [
  // Show existing files
  [ "*.json",  "*.mjs",  "*.md" ],

  // Scenario 1: Stop matching *.json
  [ "*.json",  "*.mjs",  "!*.md" ],
  [            "*.mjs",  "!*.md" ],

  // Scenario 2: Stop matching *.json
  [ "*.json",  "!*.mjs", "!*.md" ],
  [            "!*.mjs", "!*.md" ],
];

const results = Object.fromEntries(
  inputs.map((patterns) => [ JSON.stringify(patterns), globbySync(patterns) ])
);

console.log("globby pattern: files matched");
console.dir(results);
