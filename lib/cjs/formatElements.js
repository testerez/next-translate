"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var tagRe = /<(\w+)>(.*?)<\/\1>|<(\w+)\/>/;
var nlRe = /(?:\r\n|\r|\n)/g;
function getElements(parts) {
    if (!parts.length)
        return [];
    var _a = parts.slice(0, 4), paired = _a[0], children = _a[1], unpaired = _a[2], after = _a[3];
    return [
        [(paired || unpaired), children || '', after],
    ].concat(getElements(parts.slice(4, parts.length)));
}
function formatElements(value, elements) {
    if (elements === void 0) { elements = []; }
    var parts = value.replace(nlRe, '').split(tagRe);
    if (parts.length === 1)
        return value;
    var tree = [];
    var before = parts.shift();
    if (before)
        tree.push(before);
    getElements(parts).forEach(function (_a, realIndex) {
        var key = _a[0], children = _a[1], after = _a[2];
        var element = elements[key] || React.createElement(react_1.Fragment, null);
        tree.push((0, react_1.cloneElement)(element, { key: realIndex }, children ? formatElements(children, elements) : element.props.children));
        if (after)
            tree.push(after);
    });
    return tree;
}
exports.default = formatElements;
