const express = require("express");
const { getMatches } = require("../../../db/matchesDb");
const getMatchesRouter = express.Router();
module.exports = getMatchesRouter;

getMatchesRouter.get("/", async (req, res) => {
  const matches = await getMatches();

  let finishedMatches = [];
  finishedMatches = matches.filter((match) => {
    return match.status == "FINISHED";
  });
  let timedMatches = [];
  timedMatches = matches.filter((match) => {
    return match.status == "TIMED";
  });

  const finalObj = [{ finishedMatches }, { timedMatches }];
  res.json(finalObj);
});
