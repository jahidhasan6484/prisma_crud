const express = require("express");
const { signUp } = require("./user.controller");
const route = express.Router();

route.post("/sign-up", signUp);

module.exports = route;
