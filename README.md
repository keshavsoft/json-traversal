# select-json-by-json

**Describe the JSON you want. Get exactly that.**

[![Live demo](https://img.shields.io/badge/Live%20demo-GitHub%20Pages-blue?style=flat&logo=github)](https://keshavsoft.github.io/select-json-by-json/)
[![npm](https://img.shields.io/npm/v/select-json-by-json?style=flat&logo=npm)](https://www.npmjs.com/package/select-json-by-json)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

You have a large JSON document and need a handful of fields from it. Instead of writing mapping code, write a **spec**: plain JSON shaped like the result you want. `selectJson` returns a new object or array with only those fields, and never touches your source.

Engine v6.0 · Package v1.6.1 · Node.js and modern browsers

## In 30 seconds

```js
import { selectJson } from "select-json-by-json";

const source = {
  DATE: "20260401",
  VOUCHERNUMBER: "S-1042",
  PARTYNAME: "Asha Traders",
  "ALLINVENTORYENTRIES.LIST": [
    { STOCKITEMNAME: "Widget A", RATE: "120.00", QTY: "10 pcs" },
    { STOCKITEMNAME: "Widget B", RATE: "80.00", QTY: "5 pcs" }
  ]
};

const spec = {
  DATE: true,
  VOUCHERNUMBER: true,
  "ALLINVENTORYENTRIES.LIST": { STOCKITEMNAME: true, RATE: true }
};

selectJson(source, spec);
// {
//   DATE: "20260401",
//   VOUCHERNUMBER: "S-1042",
//   "ALLINVENTORYENTRIES.LIST": [
//     { STOCKITEMNAME: "Widget A", RATE: "120.00" },
//     { STOCKITEMNAME: "Widget B", RATE: "80.00" }
//   ]
// }
```

The first argument is the source. The second is the spec. `source` is never mutated.

## The spec

| Spec value | Meaning |
| ---------- | ------- |
| `true` | Keep this field from the source as-is. |
| `{ ... }` | Go inside the nested object or array and apply the sub-spec. |
| *(absent)* | Leave the field out of the result. |

## Install

**npm**

```bash
npm install select-json-by-json
```

```js
import { selectJson } from "select-json-by-json";      // latest engine (v6)
import { selectJson } from "select-json-by-json/v6";   // pin a version
import { selectJson } from "select-json-by-json/v5";
```

**npx: copy the engine into your project** (plain JavaScript, zero dependencies)

```bash
npx select-json-by-json                                  # copies v6 to ./select-json-by-json/
npx select-json-by-json ./src/lib/engine                 # custom destination
npx select-json-by-json ./lib/engine --version-target=v5 # specific version
npx select-json-by-json --help                           # all options
```

```js
import { selectJson } from "./select-json-by-json/index.js";
```

**CDN: ES module in the browser**

```html
<script type="module">
  import { selectJson } from "https://keshavsoft.github.io/select-json-by-json/docs/dist/min.js";
  console.log(selectJson(sourceData, { DATE: true, VOUCHERNUMBER: true }));
</script>
```

Also registered globally as `globalThis.ks["select-json-by-json"]` and `globalThis.ks.selectJson`. A pinned bundle lives at `docs/dist/v6/min.js`.

## Try it live

Tick fields and watch the spec and result update in the [interactive playground](https://keshavsoft.github.io/select-json-by-json/).

## Develop

| Command | What it does |
| ------- | ------------ |
| `npm test` | Runs the Node.js native test suite. |
| `npm run build` | Bundles the highest `src/vN` with Vite into `docs/dist/vN/min.js` and `docs/dist/min.js`. |
| `npm start` | Runs the demo in `save.js`. |

```
src/
  index.js        re-exports the latest engine (v6)
  v5/             previous engine
  v6/             current engine
bin/cli.js        the npx CLI
test/             manual tests with source.json and spec.json
docs/             playground and CDN bundles
```

## Links

- [Live demo and playground](https://keshavsoft.github.io/select-json-by-json/)
- [npm package](https://www.npmjs.com/package/select-json-by-json)
- [Source on GitHub](https://github.com/keshavsoft/select-json-by-json)

## License

MIT