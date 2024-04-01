const express = require("express");
const loginRouter = express.Router();
module.exports = loginRouter;
const { check, validationResult, body } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  checkAvailabilityOfUsername,
  userLogin,
} = require("../../../db/userDb");
const signToken = require("../../helpers/signToken");

function validateInput() {
  return [
    body("username").notEmpty().isLength({ min: 6, max: 15 }).escape(),
    body("password")
      .notEmpty()
      .isLength({ min: 8, max: 20 })
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
      ),
  ];
}

loginRouter.post("/", validateInput(), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { username, password } = req.body;

    const doesNotUsernameExist = await checkAvailabilityOfUsername(username);

    if (!doesNotUsernameExist) {
      return res
        .status(401)
        .json({ message: "Credentials don't match our database" });
    }

    const userObj = await userLogin(username);
    if (!userObj) {
      return res
        .status(500)
        .json({ message: "Something went wrong. Error Code 4" });
    }
    const currency_amount = userObj.currency_amount;
    delete userObj.currency_amount;

    const hashedPassword = userObj.password;
    const match = await bcrypt.compare(password, hashedPassword);

    if (!match) {
      return res
        .status(401)
        .json({ message: "Credentials dont match our database" });
    }
    delete userObj.password;

    const token = signToken(userObj);

    res.json({
      ...userObj,
      success: true,
      token,
      currency_amount,
    });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ message: "Something went wrong while loging in. Error Code 1" });
  }
});
