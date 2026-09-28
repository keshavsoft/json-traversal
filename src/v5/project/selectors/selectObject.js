const isObject = ({ inValue } = {}) => {
    return inValue !== null && typeof inValue === "object";
};

const isArray = ({ inValue } = {}) => {
    return Array.isArray(inValue);
};

// ─── actionType: "visibility" ────────────────────────────────────────────────
// Keeps only fields declared true (or nested spec) in inSelect.
// Source is never mutated. Returns a new projected object.

const startFunc = ({
    inValue,
    inSelect
} = {}) => {
    if (!isObject({ inValue }) || !isObject({ inValue: inSelect })) {
        return inValue;
    }

    const result = {};

    Object.entries(inSelect).forEach(([key, rule]) => {
        if (!Object.prototype.hasOwnProperty.call(inValue, key)) {
            return;
        }

        const value = inValue[key];

        if (rule === true) {
            result[key] = value;
            return;
        }

        if (!isObject({ inValue: rule })) {
            return;
        }

        if (isArray({ inValue: value })) {
            result[key] = value.map((item) => {
                return selectObject({
                    inValue: item,
                    inSelect: rule
                });
            });

            return;
        }

        if (isObject({ inValue: value })) {
            result[key] = selectObject({
                inValue: value,
                inSelect: rule
            });
        }
    });

    return result;
};

export default startFunc;