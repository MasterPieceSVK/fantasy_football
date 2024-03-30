const express = require("express");
const authMiddleware = require("../../helpers/authMiddleware");
const {
  deleteBet,
  getMatchIdByBetId,
  getUtcDateForMatch,
  doesBetExist,
} = require("../../../db/betsDb");
const cancelBetRouter = express.Router();
module.exports = cancelBetRouter;

cancelBetRouter.delete("/", authMiddleware, async (req, res) => {
  try {
    const { bet_id } = req.query;
    const { user_id } = req;

    const betExists = await doesBetExist(bet_id);
    if (!betExists) {
      return res.status(404).json({ message: "Bet doesnt exist" });
    }

    const match_id = await getMatchIdByBetId(bet_id);
    if (!match_id) {
      return res
        .status(500)
        .json({ message: "Error while getting match id. Match doesnt exist" });
    }

    let utc_date = await getUtcDateForMatch(match_id);
    utc_date = new Date(utc_date);
    const dateRn = new Date();

    if (utc_date <= dateRn) {
      return res.status(400).json({
        message:
          "Match already started or finished. You cant cancel the bet on this match.",
      });
    }

    const deleted = await deleteBet(bet_id, user_id);
    if (!deleted) {
      return res.status(500).json({ message: "Error while deleting bet." });
    }

    res.status(204).send("Bet deleted");
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Something went wrong. Error Code 10" });
  }
});
