const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  if (pathname === "/product") {
    console.log(query);
    res.end("api");
  }
});

server.listen("8000", "127.0.0.1", () => console.log("listening to port 8000"));
