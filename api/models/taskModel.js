const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  task: { type: String, required: true, min: 3 },
  isDone: { type: Boolean, required: true },
  id: { type: String, required: false },
});

module.exports = mongoose.model("Task", taskSchema);
