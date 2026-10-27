const isObject = ({ inValue } = {}) => {
    return inValue !== null && typeof inValue === "object";
};

const isArray = ({ inValue } = {}) => {
    return Array.isArray(inValue);
};

const hasRename = ({
    inSelect,
    key
} = {}) => {
    return isObject({ inValue: inSelect }) &&
        Object.prototype.hasOwnProperty.call(inSelect, key);
};

const renamePrimitive = ({
    key,
    value,
    inSelect
} = {}) => {
    if (hasRename({ inSelect, key })) {
        return inSelect[key];
    }

    return value;
};

const renameObject = ({
    inValue,
    inSelect
} = {}) => {
    return Object.fromEntries(
        Object.entries(inValue).map(([key, value]) => [
            key,
            renameValue({
                key,
                inValue: value,
                inSelect
            })
        ])
    );
};

const renameArray = ({
    inValue,
    inSelect
} = {}) => {
    return inValue.map((item) => {
        return renameValue({
            inValue: item,
            inSelect
        });
    });
};

const renameValue = ({
    key,
    inValue,
    inSelect
} = {}) => {
    if (isArray({ inValue })) {
        return renameArray({
            inValue,
            inSelect
        });
    }

    if (isObject({ inValue })) {
        return renameObject({
            inValue,
            inSelect
        });
    }

    return renamePrimitive({
        key,
        value: inValue,
        inSelect
    });
};

export default renameValue;