const jwt = require("jsonwebtoken");
require("dotenv").config({
  path: ".env",
});
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyNSwidXNlcm5hbWUiOiJhZG1pbjEyM3MiLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbXMiLCJpYXQiOjE3MTE5MDg1MDIsImV4cCI6MTcxNDUwMDUwMn0.EfhcwaMeV0hoQF7h_4yJ4JNKfkyhkD-GkHxmK8HNln8";

jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
  if (err) {
    console.log("first error");
  }

  console.log(decoded);
});
