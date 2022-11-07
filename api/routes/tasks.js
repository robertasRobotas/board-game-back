const express = require("express");
const router = express.Router();
const {
  GET_TASKS,
  GET_TASK,
  INSERT_TASK,
  EDIT_TASK,
  CHANGE_TASK_STATUS,
  DELETE_TASK,
} = require("../controllers/tasks");

router.get("/getTasks", GET_TASKS);

router.get("/getTask/:id", GET_TASK);

router.post("/insertTask", INSERT_TASK);

router.put("/editTask/:id", EDIT_TASK);

router.put("/changeTaskStatus/:id", CHANGE_TASK_STATUS);

router.delete("/deleteTask/:id", DELETE_TASK);

module.exports = router;
