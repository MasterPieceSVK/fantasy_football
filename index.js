const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const app = express();
const rateLimit = require("express-rate-limit");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 3000,
});

app.use(limiter);

app.listen(PORT, () => {
  console.log("server listening on port " + PORT);
});
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const mainRouter = require("./server/main");
app.use("/", mainRouter);

module.exports.handler = serverless(app);
