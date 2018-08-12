const http = require("http");
const url = require("url");

const start = (route, handle) => {
  onRequest = (request, response) => {
    let pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received");
    route(handle, pathname, response, request);
  }

http.createServer(onRequest).listen(2015);
console.log("Connected to the Server, now has Started");
}
exports.start = start;
