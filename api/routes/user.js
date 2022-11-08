const express = require("express");
const router = express.Router();
const { CREATE_USER, GET_USER } = require("../controllers/user");

router.post("/createUser", CREATE_USER);

router.get("/getUser/:id", GET_USER);

module.exports = router;
