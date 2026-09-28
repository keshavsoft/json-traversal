# Action configuration

`actions.json` is the single source of truth for the action types accepted by the engine.

Current action types:

- `visibility`
- `renameKey`
- `renameValue`

The JSON is imported by the engine for validation and by the public entry point/global registration for exposure.

Implementation handlers remain JavaScript because the JSON declares the public contract; it does not contain executable code.
