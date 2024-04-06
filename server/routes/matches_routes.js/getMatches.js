const express = require("express");
const { getMatches } = require("../../../db/matchesDb");
const getMatchesRouter = express.Router();
module.exports = getMatchesRouter;

getMatchesRouter.get("/", async (req, res) => {
  try {
    const matches = await getMatches();
    if (!matches) {
      return res.status(204).send();
    }
    let finishedMatches = [];
    finishedMatches = matches.filter((match) => {
      return match.status == "FINISHED";
    });
    finishedMatches.reverse();

    let timedMatches = [];
    timedMatches = matches.filter((match) => {
      return match.status == "TIMED";
    });

    const finalObj = [{ finishedMatches }, { timedMatches }];
    res.json(finalObj);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Something went wrong.Error code 14" });
  }
});
