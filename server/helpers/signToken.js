const jwt = require("jsonwebtoken");

module.exports = signToken;

function signToken(userData) {
  return jwt.sign(userData, process.env.JWT_SECRET_KEY, {
    expiresIn: "30d",
  });
}
