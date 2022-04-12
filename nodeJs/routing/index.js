const http = require("http");

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("Overview");
  } else if (pathName === "/product") {
    res.end("Product");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found</h1>");
  }
});

//http://127.0.0.1:8000
server.listen(8000, "127.0.0.1", () => console.log("listening to 8000 port"));
