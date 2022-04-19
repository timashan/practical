const EventEmitter = require("events");

const myEmitter = new EventEmitter();
myEmitter.on("msg", () => console.log("func 1"));
myEmitter.on("msg", (arg) => console.log("func " + arg));

myEmitter.emit("msg", 2);

///////////////////////////////////////
class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter2 = new Sales();
myEmitter2.on("mySales", () => console.log("func"));

myEmitter2.emit("mySales");

///////////////////////////////////////
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => res.end("request received!"));
server.on("request", (req, res) => console.log("request received: " + req.url));

server.listen(8000, "127.0.0.1", () => console.log("waiting for requests..."));
