import * as express from "express";
import getHellos from "./backend/hello"

const app = express();
app.use(express.json());
app.use(express.static('frontend'));

// Listen for post requests at `getMessage`
app.post('/getMessage', function(request, response){
    console.log("Received request: ", request.body);
    response.send(getHellos());    // echo the result back
});

let server = app.listen(process.env.PORT || 8081, () => {
    console.log("Harp listening at ", server.address())
});
