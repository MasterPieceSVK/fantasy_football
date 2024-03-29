const express = require("express");
const registerAccountRouter = express.Router();
const { check, validationResult, body } = require("express-validator");
const {
  checkAvailabilityOfUsername,
  checkAvailabilityOfEmail,
  createUser,
} = require("../../../db/userDb");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const signToken = require("../../helpers/signToken");
module.exports = registerAccountRouter;

function validateInput() {
  return [
    body("email").notEmpty().isEmail().normalizeEmail(),
    body("username").notEmpty().isLength({ min: 6, max: 15 }).escape(),
    body("password")
      .notEmpty()
      .isLength({ min: 8, max: 20 })
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
      ),
  ];
}

registerAccountRouter.post("/", validateInput(), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { username, password, email } = req.body;

    const isAvailableUsername = await checkAvailabilityOfUsername(username);

    if (isAvailableUsername) {
      res.status(409).json({ message: "Username is already being used" });
      return;
    }

    const isAvailableEmail = await checkAvailabilityOfEmail(email);
    if (isAvailableEmail) {
      res.status(409).json({ message: "Email is already being used" });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const { user_id, currency_amount } = await createUser({
      username,
      password: hashedPassword,
      email,
    });

    if (user_id) {
      const userData = {
        username,
        email,
        user_id,
      };
      const token = signToken(userData);

      if (!token) {
        return res
          .status(500)
          .json({ message: "Something went wrong. Error Code 5" });
      }

      res.status(201).json({
        success: true,
        user_id,
        username,
        email,
        token,
        currency_amount,
      });
    } else {
      res
        .status(500)
        .json({ message: "Error while creating account. Error Code 2" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "something went wrong.  Error Code 3" });
  }
});
