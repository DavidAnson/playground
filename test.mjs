import { platform } from "os";
import { globbySync } from "globby";

const inputs = [ "*", "!", "!/**" ];

const results = Object.fromEntries(
  inputs.map((pattern) => [ pattern, globbySync([ pattern ]).length ])
);

console.log(`globby pattern: count of files matched on ${platform}`);
console.dir(results);
