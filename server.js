const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url == "/") {
    response.writeHead(200);
    response.end("Hey, welcome to this testing server");
  }

  if (request.url == "/goodbye") {
    response.end("Goodbye World.");
  }

  if (request.url == "/error") {
    response.setHeader("Content-Type", "application/json");
    response.statusCode = 500;
    response.end(JSON.stringify({ error: "server error" }));
    //console.log(response.statusCode);
  }
});

server.listen(3000);
// console.log("Server address: http://localhost:3000");
