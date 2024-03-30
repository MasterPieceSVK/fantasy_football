const jwt = require("jsonwebtoken");
require("dotenv").config({
  path: ".env",
});
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RlcjEyMzRzIiwiZW1haWwiOiJtYXhpa0B0ZXN0LmNvbWFzcyIsInVzZXJfaWQiOjIzLCJpYXQiOjE3MTE4MDUyODksImV4cCI6MTcxNDM5NzI4OX0.yqdwJhyIQTRkbd_xtXM9I0Fv7EmuWtTYKIvRWvpSL_0";

jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
  if (err) {
    console.log("first error");
  }

  console.log(decoded);
});
