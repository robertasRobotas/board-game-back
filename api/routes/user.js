const express = require("express");
const router = express.Router();
const { CREATE_USER } = require("../controllers/user");

router.post("/user", CREATE_USER);

module.exports = router;
