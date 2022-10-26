const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasks");

router.get("/getTasks", tasksController.GET_TASKS);

router.post("/insertTask", tasksController.INSERT_TASK);

router.put("/editTask/:id", tasksController.EDIT_TASK);

router.delete("/deleteTask/:id", tasksController.DELETE_TASK);

module.exports = router;
