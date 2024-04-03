const express = require("express");
const authMiddleware = require("../../helpers/authMiddleware");
const { getCurrencyAmount } = require("../../../db/userDb");
const { checkIfMatchExists } = require("../../../db/matchesDb");
const { placeBet, getOdd, getUtcDateForMatch } = require("../../../db/betsDb");
const placeBetRouter = express.Router();
module.exports = placeBetRouter;

placeBetRouter.post("/", authMiddleware, async (req, res) => {
  try {
    let { bet_amount, match_id, bet_winner } = req.body;
    const { user_id } = req;
    let { currency_amount } = await getCurrencyAmount(user_id);
    currency_amount = Number(currency_amount);
    bet_amount = Number(bet_amount);
    if (bet_amount < 0) {
      return res
        .status(400)
        .json({ message: "The bet amount can't be negative" });
    }
    if (bet_amount > currency_amount) {
      return res.status(401).json({
        message: "You don't have enough credits for this transaction",
      });
    }

    const matchExists = await checkIfMatchExists(match_id);

    if (!matchExists) {
      return res.status(404).json({ message: "Match doesn't exist" });
    }

    let utc_date = await getUtcDateForMatch(match_id);
    utc_date = new Date(utc_date);
    const dateRn = new Date();
    if (utc_date <= dateRn) {
      return res.status(400).json({
        message:
          "Match already started or finished. You cant bet on this match.",
      });
    }

    if (
      bet_winner != "HOME_TEAM" &&
      bet_winner != "AWAY_TEAM" &&
      bet_winner != "DRAW"
    ) {
      return res
        .status(400)
        .json({ message: "Wrong input in bet_winner field" });
    }

    const odd = await getOdd(match_id, bet_winner);
    const betObj = {
      user_id,
      bet_amount,
      match_id,
      bet_winner,
      odd,
    };

    const bet_id = await placeBet(betObj);
    if (!bet_id) {
      return res
        .status(500)
        .json({ message: "Error while creating bet. Error Code 8" });
    }
    res.status(201).json({ ...betObj, bet_id });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Something went wrong. Error Code 6" });
  }
});
