const express = require("express");
const authMiddleware = require("../../helpers/authMiddleware");
const { getMyBets, getMyBetsWithMatches } = require("../../../db/betsDb");

const getMyBetsRouter = express.Router();
module.exports = getMyBetsRouter;

getMyBetsRouter.get("/", authMiddleware, async (req, res) => {
  try {
    const { user_id } = req;
    const { includeMatchDetails } = req.query;
    let myBets;
    if (includeMatchDetails) {
      myBets = await getMyBetsWithMatches(user_id);
    } else {
      myBets = await getMyBets(user_id);
    }

    if (!myBets) {
      return res.status(404).json({ message: "No bets found." });
    }

    const settledBets = myBets.filter((bet) => {
      return bet.outcome != null;
    });

    settledBets.forEach((bet) => {
      if (bet.outcome == 1) {
        bet.profit = bet.odd * bet.bet_amount - bet.bet_amount;
      } else {
        bet.profit = -bet.bet_amount;
      }
    });

    const unsettledBets = myBets.filter((bet) => {
      return bet.outcome == null;
    });
    unsettledBets.reverse();
    res.json([{ settledBets }, { unsettledBets }]);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Something went wrong. Error Code 9 " });
  }
});
