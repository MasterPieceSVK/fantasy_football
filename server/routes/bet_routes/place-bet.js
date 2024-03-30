const express = require("express");
const authMiddleware = require("../../helpers/authMiddleware");
const { getCurrencyAmount } = require("../../../db/userDb");
const { checkIfMatchExists } = require("../../../db/matchesDb");
const { placeBet, getOdd } = require("../../../db/betsDb");
const placeBetRouter = express.Router();
module.exports = placeBetRouter;

placeBetRouter.post("/", authMiddleware, async (req, res) => {
  try {
    const { bet_amount, match_id, winner } = req.body;
    const { user_id } = req;

    const { currency_amount } = await getCurrencyAmount(user_id);
    if (bet_amount > currency_amount) {
      return res
        .status(401)
        .json({ message: "You dont have enough credits for this transaction" });
    }

    const matchExists = await checkIfMatchExists(match_id);
    if (!matchExists) {
      return res.status(404).json({ message: "Match doesnt exist" });
    }

    if (winner != "HOME_TEAM" && winner != "AWAY_TEAM" && winner != "DRAW") {
      return res.status(400).json({ message: "Wrong input in winner field" });
    }

    const odd = await getOdd(match_id, winner);
    const betObj = {
      user_id,
      bet_amount,
      match_id,
      winner,
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
