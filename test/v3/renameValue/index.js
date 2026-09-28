import selectJson from "../../../src/index.js";

import source from "./source.json" with { type: "json" };
import rename from "./rename.json" with { type: "json" };

console.log("\n=== actionType: renameKey ===");
const renamed = selectJson(source, rename, "renameValue");
console.log(JSON.stringify(renamed, null, 2));
