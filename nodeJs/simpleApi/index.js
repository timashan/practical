const http = require("http");
const fs = require("fs");

const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8");

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/api") {
    res.writeHead("200", { "Content-type": "application/json" });
    res.end(data);
  }
});

server.listen("8000", "127.0.0.1", () => console.log("listening to port 8000"));
