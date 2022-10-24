const express = require("express");
var bodyParser = require("body-parser");

const app = express();

// var cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cors());

const tasks = [];

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/getTasks", function (req, res) {
  res.status(200).json({ tasks: tasks });
});

app.post("/insertTask", function (req, res) {
  console.log(req.body.task);
  tasks.push({
    id: req.body.id,
    task: req.body.task,
    isDone: req.body.isDone,
  });

  res.status(200).json({ statusMessage: "task was inserted successfully" });
});

app.put("/editTask/:id", function (req, res) {
  const index = tasks.findIndex((task) => task.id === req.params.id);

  tasks[index].task = req.body.editedTask;

  console.log("task", tasks);

  res.status(200).json({ statusMessage: "Eddited successfully" });
});

app.delete("/deleteTask/:id", function (req, res) {
  const index = tasks.findIndex((task) => task.id === req.params.id);

  const deletedValue = tasks.splice(index, 1);

  console.log("task", tasks);

  res.status(200).json({ deletedItem: deletedValue });
});

app.listen(3000);
