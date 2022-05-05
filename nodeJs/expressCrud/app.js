const express = require("express");

const app = express();

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours.json`)
);

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    results: tours.length,
    tours,
  });
});

app.use(express.json());

app.post("/api/v1/tours", (req, res) => {
  const newID = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newID }, req.body);
  tours.push(newTour);
  fs.writeFile("data.json", JSON.stringify(tours), (err) =>
    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    })
  );
});

app.get("/api/v1/tours/:id", (req, res) => {
  console.log(req.params);

  const id = +req.params.id;
  const tour = tours.find((el) => el.id === id);

  if (!tour)
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });

  res.status(200).json({
    status: "success",
    data: { tour },
  });
});

app.patch("/api/v1/tours/:id", (req, res) => {
  const id = +req.params.id;
  const tour = tours.find((el) => el.id === id);

  if (!tour)
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });

  Object.keys(req.body).forEach((key) => (tour[key] = req.body[key]));

  fs.writeFile("data.json", JSON.stringify(tours), (err) =>
    res.status(200).json({
      status: "success",
      data: { tour },
    })
  );
});

app.delete("/api/v1/tours/:id", (req, res) => {
  const id = +req.params.id;
  const tour = tours.findIndex((el) => el.id === id);

  if (tour === -1)
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });

  tours.pop(tour);

  fs.writeFile("data.json", JSON.stringify(tours), () =>
    res.status(204).json({
      status: "success",
      data: null,
    })
  );
});

port = 3000;
app.listen(port, () => console.log(`listening to ${port}`));
