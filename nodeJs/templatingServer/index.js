const http = require("http");
const fs = require("fs");

const tempOverview = fs.readFileSync(
  `${__dirname}/template-overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(`${__dirname}/template-card.html`, "utf-8");

const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const replaceHtml = function (temp, item) {
  let output = temp.replace(/{%ID%}/g, item.id);
  output = output.replace(/{%NAME%}/g, item.name);
  return output;
};

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/api") {
    res.writeHead("200", { "Content-type": "text/html" });
    const cardsHtml = dataObj.map((el) => replaceHtml(tempCard, el)).join("");
    const output = tempOverview.replace("{%CARDS%}", cardsHtml);
    res.end(output);
  }
});

server.listen("8000", "127.0.0.1", () => console.log("listening to port 8000"));
