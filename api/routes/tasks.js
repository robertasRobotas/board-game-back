const express = require("express");
const router = express.Router();
const {
  GET_TASKS,
  INSERT_TASK,
  EDIT_TASK,
  DELETE_TASK,
} = require("../controllers/tasks");

router.get("/getTasks", GET_TASKS);

router.post("/insertTask", INSERT_TASK);

router.put("/editTask/:id", EDIT_TASK);

router.delete("/deleteTask/:id", DELETE_TASK);

module.exports = router;
