const express = require("express");

const app = express();
//route handler
app.get("/", (req, res) => res.status(200).send("hi"));
app.post("/", (req, res) => res.send("post"));

app.get("/api", (req, res) => res.status(200).json({ a: 5 }));

port = 3000;
app.listen(port, () => console.log(`listening to ${port}`));
