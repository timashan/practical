const app = express();

app.use(express.json()); //body parser, access request.body of request obj

app.use((req, res, next) => {
  console.log("ok: " + JSON.stringify(req.body));
  req.requestedTime = new Date().toISOString();
  next();
});

app.post("/", (req, res) => {
  console.log(req.requestedTime);
  res.status(200).json({
    status: "success",
    requestedAt: req.requestedTime,
    data: req.body,
  });
});
