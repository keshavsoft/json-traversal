//#region src/v4/03-inspect.js
var e = ({ inValue: e } = {}) => typeof e == "object" && !!e, t = ({ inValue: e } = {}) => Array.isArray(e), n = ({ inValue: n } = {}) => e({ inValue: n }) && !t({ inValue: n }), r = ({ inValue: e } = {}) => t({ inValue: e }) ? {
	type: "array",
	isArray: !0,
	isObject: !0
} : n({ inValue: e }) ? {
	type: "object",
	isArray: !1,
	isObject: !0
} : {
	type: typeof e,
	isArray: !1,
	isObject: !1
}, i = ({ inValue: e } = {}) => typeof e == "object" && !!e, a = ({ inValue: e } = {}) => Array.isArray(e), o = ({ inValue: e, inSelect: t } = {}) => {
	if (!i({ inValue: e }) || !i({ inValue: t })) return e;
	let n = {};
	return Object.entries(t).forEach(([t, r]) => {
		if (!Object.prototype.hasOwnProperty.call(e, t)) return;
		let o = e[t];
		if (r === !0) {
			n[t] = o;
			return;
		}
		if (i({ inValue: r })) {
			if (a({ inValue: o })) {
				n[t] = o.map((e) => selectObject({
					inValue: e,
					inSelect: r
				}));
				return;
			}
			i({ inValue: o }) && (n[t] = selectObject({
				inValue: o,
				inSelect: r
			}));
		}
	}), n;
}, s = ({ inValue: e } = {}) => typeof e == "object" && !!e, c = ({ inValue: e } = {}) => Array.isArray(e), l = ({ inValue: e, inRename: t } = {}) => {
	if (!s({ inValue: e }) || !s({ inValue: t })) return e;
	let n = {};
	return Object.entries(e).forEach(([e, r]) => {
		let i = t[e] ?? e;
		if (c({ inValue: r })) {
			n[i] = r.map((e) => typeof e == "object" && e ? renameObject({
				inValue: e,
				inRename: t
			}) : e);
			return;
		}
		if (s({ inValue: r })) {
			n[i] = renameObject({
				inValue: r,
				inRename: t
			});
			return;
		}
		n[i] = r;
	}), n;
}, u = ({ inValue: e, inSelect: t, inActionType: n } = {}) => n === "renameKey" ? l({
	inValue: e,
	inRename: t
}) : o({
	inValue: e,
	inSelect: t
}), d = ({ inValue: e, inSelect: t, inActionType: n } = {}) => !e || typeof e != "object" ? e : u({
	inValue: e,
	inSelect: t,
	inActionType: n
}), f = ({ inValue: e, inSelect: t, inActionType: n } = {}) => Array.isArray(e) ? e.map((e) => typeof e == "object" && e ? u({
	inValue: e,
	inSelect: t,
	inActionType: n
}) : e) : e, p = ({ inValue: e, inSelect: t, inActionType: n, inspected: r } = {}) => r?.type === "array" ? f({
	inValue: e,
	inSelect: t,
	inActionType: n
}) : r?.type === "object" ? d({
	inValue: e,
	inSelect: t,
	inActionType: n
}) : e, m = (e, t, n) => {
	let i = e;
	return p({
		inValue: i,
		inSelect: t,
		inActionType: n ?? "visibility",
		inspected: r({ inValue: i })
	});
}, h = {
	version: "v7.0",
	description: "Modular story-driven JSON projection engine — actionType: visibility | renameKey"
};
//#endregion
//#region src/v4/index.js
((e) => {
	let t = typeof e == "function" ? e : e?.inFuncDefinition;
	typeof globalThis < "u" && t && (globalThis.ks ??= {}, globalThis.ks["select-json-by-json"] = {
		meta: h,
		selectJson: t
	}, globalThis.ks.selectJson = t);
})({ inFuncDefinition: m });
var g = m;
//#endregion
export { g as default, h as meta, m as selectJson };
