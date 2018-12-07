"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let hellos = 0;
function getHellos() {
    hellos += 1;
    // fill: ES6 features!
    return new Array(hellos).fill(0).map(() => "Hello! ");
}
exports.default = getHellos;
//# sourceMappingURL=hello.js.map