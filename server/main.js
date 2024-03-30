const express = require("express");
const apiRouter = express.Router();

apiRouter.get("/ping", (req, res) => {
  res.status(200).send();
});

apiRouter.get("/", (req, res) => {
  res.json({
    working: true,
  });
});

const getMatchesFuncRouter = require("./routes/function_routes/getMatches");
apiRouter.use("/get-matches-func", getMatchesFuncRouter);

const updateMatchesRouter = require("./routes/function_routes/updateMatches");
apiRouter.use("/update-matches", updateMatchesRouter);

const updateOddsRouter = require("./routes/function_routes/updateOdds");
apiRouter.use("/update-odds", updateOddsRouter);

const registerAccountRouter = require("./routes/user_routes/registerAccount");
apiRouter.use("/register", registerAccountRouter);

const loginRouter = require("./routes/user_routes/login");
apiRouter.use("/login", loginRouter);

const placeBetRouter = require("./routes/bet_routes/place-bet");
apiRouter.use("/place-bet", placeBetRouter);

const getMatchesRouter = require("./routes/matches_routes.js/getMatches");

apiRouter.use("/get-matches", getMatchesRouter);

module.exports = apiRouter;
