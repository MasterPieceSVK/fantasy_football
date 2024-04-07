const express = require("express");
const { getLeaderboard } = require("../../../db/leaderboardDb");
const getLeaderboardRouter = express.Router();
module.exports = getLeaderboardRouter;

getLeaderboardRouter.get("/", async (req, res) => {
  try {
    const leaderboard = await getLeaderboard();
    if (!leaderboard) {
      return res
        .status(500)
        .json({ message: "Error while getting leaderboard." });
    }

    res.json(leaderboard);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Something went wrong. Error Code 18" });
  }
});
