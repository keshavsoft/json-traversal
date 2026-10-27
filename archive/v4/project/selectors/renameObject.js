const isObject = ({ inValue } = {}) => {
    return inValue !== null && typeof inValue === "object";
};

const isArray = ({ inValue } = {}) => {
    return Array.isArray(inValue);
};

// ─── actionType: "renameKey" ─────────────────────────────────────────────────
// Renames keys at every level using inRename as a flat dictionary.
// { "OLD_KEY": "newKey" } — applied recursively to all objects and array items.
// Keys not in the dictionary are kept with their original name.

const startFunc = ({
    inValue,
    inRename
} = {}) => {
    if (!isObject({ inValue }) || !isObject({ inValue: inRename })) {
        return inValue;
    }

    const result = {};

    Object.entries(inValue).forEach(([key, value]) => {
        const localNewKey = inRename[key] ?? key;

        if (isArray({ inValue: value })) {
            result[localNewKey] = value.map((item) => {
                if (item !== null && typeof item === "object") {
                    return renameObject({ inValue: item, inRename });
                }
                return item;
            });
            return;
        }

        if (isObject({ inValue: value })) {
            result[localNewKey] = renameObject({ inValue: value, inRename });
            return;
        }

        result[localNewKey] = value;
    });

    return result;
};

export default startFunc;