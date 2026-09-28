import selectJson from "./02-engine.js";
import registerGlobal from "./registerGlobal.js";
import meta from "./meta.js";
import actions from "./config/actions.json" with { type: "json" };

registerGlobal({
    inFuncDefinition: selectJson
});

const actionTypes = Object.freeze(actions.actionTypes);

export {
    selectJson,
    actionTypes,
    meta
};

export default selectJson;
