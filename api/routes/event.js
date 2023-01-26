const express = require("express");
const router = express.Router();

const {
  CREATE_EVENT,
  GET_EVENTS,
  GET_EVENT,
  JOIN_EVENT,
  LEAVE_EVENT,
  DELETE_EVENT,
} = require("../controllers/event");

router.post("/event", CREATE_EVENT);

router.get("/events", GET_EVENTS);

router.post("/event/:id", GET_EVENT);

router.put("/event/join/:id", JOIN_EVENT);

router.put("/event/leave/:id", LEAVE_EVENT);

router.delete("/event/:id", DELETE_EVENT);

module.exports = router;
