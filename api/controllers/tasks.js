const TaskSchema = require("../models/taskModel");

const tasks = [];

module.exports.GET_TASKS = function (req, res) {
  TaskSchema.find()
    .sort("task")
    .then((results) => {
      return res.status(200).json({ tasks: results });
    });
};

module.exports.GET_TASK = function (req, res) {
  TaskSchema.findOne({ _id: req.params.id }).then((results) => {
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
  TaskSchema.updateOne(
    { _id: req.params.id },
    { task: req.body.editedTask }
  ).then((result) => {
    return res
      .status(200)
      .json({ statusMessage: "Eddited successfully", editedTask: result });
  });
};

module.exports.CHANGE_TASK_STATUS = async (req, res) => {
  const currentTask = await TaskSchema.findOne({ _id: req.params.id }).exec();

  TaskSchema.updateOne(
    { _id: req.params.id },
    { isDone: !currentTask.isDone }
  ).then((result) => {
    return res
      .status(200)
      .json({ statusMessage: "Eddited successfully", editedTask: result });
  });
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
