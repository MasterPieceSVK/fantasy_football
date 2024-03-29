const jwt = require("jsonwebtoken");
require("dotenv").config({
  path: ".env",
});
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1heGlrbWF4aWtzcyIsImVtYWlsIjoibWF4aWtAbWF4aWsuY29tc3MiLCJ1c2VyX2lkIjoxNCwiY3VycmVuY3lfYW1vdW50IjoxMDAwLCJpYXQiOjE3MTE3Mzk4NTQsImV4cCI6MTcxNDMzMTg1NH0._STZzPWozoqWVTjE9aiOlSRo_mkx-fEY4lAQJYRBSpk";

jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
  if (err) {
    console.log("first error");
  }

  console.log(decoded);
});
