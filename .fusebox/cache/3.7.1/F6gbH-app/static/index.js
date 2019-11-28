module.exports = { contents: "\"use strict\";\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst moment_1 = __importDefault(require(\"moment\"));\ndocument.body.textContent = moment_1.default().startOf('month').fromNow();\n",
dependencies: ["moment"],
sourceMap: {},
headerContent: undefined,
mtime: 1574951994999,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
