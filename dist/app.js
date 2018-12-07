"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var nothing_1 = require("./backend/nothing");
console.log(nothing_1.default);
var app = express();
app.use(express.static('frontend'));
var server = app.listen(process.env.PORT || 8081, function () {
    console.log("Harp listening at ", server.address());
});
//# sourceMappingURL=app.js.map