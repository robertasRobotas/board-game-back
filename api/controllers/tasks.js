const TaskSchema = require("../models/taskModel");

const tasks = [];

module.exports.GET_TASKS = function (req, res) {
  TaskSchema.find().then((results) => {
    return res.status(200).json({ tasks: results });
  });
};

module.exports.INSERT_TASK = function (req, res) {
  const task = new TaskSchema({
    task: req.body.task,
    isDone: req.body.isDone,
  });

  task.save().then((result) => {
    return res.status(200).json({
      statusMessage: "task was inserted successfully",
      result: result,
    });
  });
};

module.exports.EDIT_TASK = (req, res) => {
  const index = tasks.findIndex((task) => task.id === req.params.id);

  tasks[index].task = req.body.editedTask;

  console.log("task", tasks);

  res.status(200).json({ statusMessage: "Eddited successfully" });
};

module.exports.DELETE_TASK = function (req, res) {
  TaskSchema.deleteOne({ _id: req.params.id }).then((results) => {
    console.log("results", results);
    res.status(200).json({
      statusMessage: "Item was deleted sucessfuly",
      deletedItem: results,
    });
  });
};
