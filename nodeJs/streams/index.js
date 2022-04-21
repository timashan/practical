const fs = require("fs");

const server = require("http").createServer();

//Method #1: Send entire file
server.on("request", (req, res) => {
  fs.readFile("test.txt", (err, data) => {
    if (err) console.log(err);
    res.end(data);
  });
});

server.listen(8000, "127.0.0.1", () => console.log("Listening..."));

//Method #2: Stream the file as chunks
server.on("request", (req, res) => {
  const readbale = fs.createReadStream("test.txt");
  readbale.on("data", (chunk) => res.write(chunk));
  readbale.on("end", () => res.end());
  readbale.on("error", (err) => {
    res.statusCode = 500;
    res.end("File not found");
  });
});

//Method #3:  readable.pipe() method
server.on("request", (req, res) => {
  const readable = fs.createReadStream("test.txt");
  readable.pipe(res); //readableSource.pipe(writableStream)
});
