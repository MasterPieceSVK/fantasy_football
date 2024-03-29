const express = require("express");
const getMatchesAndAddThemToTheDB = require("../../../funcs/getMatches");
const getMatchesRouter = express.Router();
module.exports = getMatchesRouter;

getMatchesRouter.get("/", async (req, res) => {
  if (req.headers.auth != process.env.OWN_API_AUTH_KEY) {
    res.status(401).send("Unathorized");
    return;
  }

  const success = await getMatchesAndAddThemToTheDB();

  if (success.every((val) => val === 201)) {
    res.send("got matches and added them to the db");
  } else {
    res
      .status(500)
      .send("Error while getting matches and adding them to the db");
  }
});
