const tasks = [];

module.exports.GET_TASKS = function (req, res) {
  console.log(req.body);
  res.status(200).json({ tasks: tasks });
};

module.exports.INSERT_TASK = function (req, res) {
  console.log(req.body);
  tasks.push({
    id: req.body.id,
    task: req.body.task,
    isDone: req.body.isDone,
  });

  res.status(200).json({ statusMessage: "task was inserted successfully" });
};

module.exports.EDIT_TASK = (req, res) => {
  const index = tasks.findIndex((task) => task.id === req.params.id);

  tasks[index].task = req.body.editedTask;

  console.log("task", tasks);

  res.status(200).json({ statusMessage: "Eddited successfully" });
};

module.exports.DELETE_TASK = function (req, res) {
  const index = tasks.findIndex((task) => task.id === req.params.id);

  const deletedValue = tasks.splice(index, 1);

  console.log("task", tasks);

  res.status(200).json({ deletedItem: deletedValue });
};
