const express = require("express");
const { signUp, allUsers } = require("./user.controller");
const router = express.Router();

router.post("/sign-up", signUp);
router.get("/all", allUsers);

module.exports = router;
