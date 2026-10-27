const isObject = ({ inValue } = {}) => {
    return inValue !== null &&
        typeof inValue === "object" &&
        !Array.isArray(inValue);
};

const isArray = ({ inValue } = {}) => {
    return Array.isArray(inValue);
};

const getNewKey = ({
    inKey,
    inRename
} = {}) => {
    return inRename[inKey] ?? inKey;
};

const renameArray = ({
    inValue,
    inRename
} = {}) => {
    return inValue.map((item) => {
        if (isObject({ inValue: item })) {
            return renameObject({
                inValue: item,
                inRename
            });
        }

        if (isArray({ inValue: item })) {
            return renameArray({
                inValue: item,
                inRename
            });
        }

        return item;
    });
};

const renameValue = ({
    inValue,
    inRename
} = {}) => {
    if (isArray({ inValue })) {
        return renameArray({
            inValue,
            inRename
        });
    }

    if (isObject({ inValue })) {
        return renameObject({
            inValue,
            inRename
        });
    }

    return inValue;
};

const renameEntry = ({
    inKey,
    inValue,
    inRename
} = {}) => {
    const localNewKey = getNewKey({
        inKey,
        inRename
    });

    return [
        localNewKey,
        renameValue({
            inValue,
            inRename
        })
    ];
};

const renameObject = ({
    inValue,
    inRename
} = {}) => {
    return Object.fromEntries(
        Object.entries(inValue).map(([key, value]) => {
            return renameEntry({
                inKey: key,
                inValue: value,
                inRename
            });
        })
    );
};

const startFunc = ({
    inValue,
    inRename
} = {}) => {
    if (!isObject({ inValue }) ||
        !isObject({ inValue: inRename })) {
        return inValue;
    }

    return renameObject({
        inValue,
        inRename
    });
};

export default startFunc;