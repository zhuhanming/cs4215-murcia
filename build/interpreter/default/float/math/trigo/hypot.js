"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hypot = void 0;
const utils_1 = require("../../../../../types/utils");
const closure_1 = require("../../../../closure");
exports.hypot = new closure_1.DefaultClosure((0, utils_1.makeFunctionType)(utils_1.floatType, utils_1.floatType), 1, (args) => {
    return { value: Math.hypot(args[0].value), type: utils_1.floatType };
});
//# sourceMappingURL=hypot.js.map