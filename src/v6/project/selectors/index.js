import actions from "../../config/actions.json" with { type: "json" };
import selectObject from "./selectObject.js";
import renameObject from "./renameObject.js";
import renameValue from "./renameValue.js";

const actionHandlers = {
    selectObject,
    renameKey: renameObject,
    renameValue
};

const selectors = ({
    inValue,
    inSelect,
    inActionType
} = {}) => {
    const localAction = actions.actionTypes[inActionType];
    console.log("localAction : ", localAction);

    if (!localAction) {
        throw new Error(`Unsupported actionType: ${inActionType}`);
    }

    const localHandler = actionHandlers[localAction.handler];

    if (!localHandler) {
        throw new Error(
            `No handler registered for actionType: ${inActionType}`
        );
    }

    return localHandler({
        inValue,
        inSelect,
        inRename: inSelect
    });
};

export default selectors;
