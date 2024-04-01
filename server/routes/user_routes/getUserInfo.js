const express = require("express");
const getUserInfoRouter = express.Router();
module.exports = getUserInfoRouter;
const jwt = require("jsonwebtoken");
const authMiddleware = require("../../helpers/authMiddleware");
require("dotenv").config({
  path: ".env",
});

getUserInfoRouter.get("/", authMiddleware, (req, res) => {
  res.json({ username: req.username, email: req.email, user_id: req.user_id });
});
