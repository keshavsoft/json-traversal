import selectObject from "./selectObject.js";
import renameObject from "./renameObject.js";

// ─── Router ──────────────────────────────────────────────────────────────────

const selectors = ({
    inValue,
    inSelect,
    inActionType
} = {}) => {
    if (inActionType === "renameKey") {
        return renameObject({
            inValue,
            inRename: inSelect
        });
    }

    return selectObject({
        inValue,
        inSelect
    });
};

export default selectors;