const http = require("http");

const server = http.createServer((req, res) => {
  res.end("hello from server"); //response to client
});

//http://127.0.0.1:8000
server.listen(8000, "127.0.0.1", () => console.log("listening to 8000 port"));
