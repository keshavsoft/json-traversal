import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { traverse, meta } from "../../src/index.js";

describe("json-traversal v8 (Decoupled Traversal Engine)", () => {
    test("exports meta correctly", () => {
        assert.equal(meta.version, "v8");
    });

    test("traverses nested structure and executes outside function", () => {
        const visitedTags = [];
        const tree = {
            tagName: "table",
            children: [
                {
                    tagName: "tr",
                    children: [
                        { tagName: "th" },
                        { tagName: "td" }
                    ]
                }
            ]
        };

        traverse({
            inSpec: tree,
            inFunc: (node) => {
                visitedTags.push(node.tagName);
            }
        });

        assert.deepEqual(visitedTags, ["table", "tr", "th", "td"]);
    });
});
