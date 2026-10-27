import inspect from "./03-inspect.js";
import project from "./project/index.js";
import actions from "./config/actions.json" with { type: "json" };

const isValidActionType = ({ inActionType } = {}) => {
    return Object.prototype.hasOwnProperty.call(
        actions.actionTypes,
        inActionType
    );
};

const selectJson = (inSource, inSpec, inActionType) => {
    const localSource = inSource;
    const localSpec = inSpec;
    const localActionType = inActionType ?? "visibility";

    if (!isValidActionType({ inActionType: localActionType })) {
        throw new Error(
            `Invalid actionType "${localActionType}". Valid actionTypes: ${Object.keys(actions.actionTypes).join(", ")}`
        );
    }

    const inspected = inspect({
        inValue: localSource
    });

    return project({
        inValue: localSource,
        inSelect: localSpec,
        inActionType: localActionType,
        inspected
    });
};

export { isValidActionType };
export default selectJson;
