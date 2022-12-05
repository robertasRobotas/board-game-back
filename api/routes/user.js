const express = require("express");
const router = express.Router();
const {
  CREATE_USER,
  GET_USER,
  GET_ALL_USERS,
  USER_LOGIN,
} = require("../controllers/user");

router.post("/createUser", CREATE_USER);

router.get("/getUser/:id", GET_USER);

router.get("/getAllUsers", GET_ALL_USERS);

router.post("/login", USER_LOGIN);

module.exports = router;
