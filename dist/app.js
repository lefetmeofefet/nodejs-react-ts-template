"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const hello_1 = require("./backend/hello");
const app = express();
app.use(express.json());
app.use(express.static('frontend'));
// Listen for post requests at `getMessage`
app.post('/getMessage', function (request, response) {
    console.log("Received request: ", request.body);
    response.send(hello_1.default()); // echo the result back
});
let server = app.listen(process.env.PORT || 8081, () => {
    console.log("Harp listening at ", server.address());
});
//# sourceMappingURL=app.js.map