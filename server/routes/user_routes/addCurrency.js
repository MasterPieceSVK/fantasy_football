const express = require("express");
const authMiddleware = require("../../helpers/authMiddleware");
const {
  addCurrency,
  isUserEligibleForNewCurrency,
} = require("../../../db/userDb");
const calculateTimeRemaining = require("../../helpers/calculateTimeRemaining");
const addCurrencyRouter = express.Router();
module.exports = addCurrencyRouter;

addCurrencyRouter.put("/", authMiddleware, async (req, res) => {
  try {
    const { user_id } = req;

    const claimed_at = await isUserEligibleForNewCurrency(user_id);

    let utc_date = new Date(claimed_at);
    utc_date.setHours(utc_date.getHours() + 24);

    const dateRn = new Date();

    if (utc_date > dateRn) {
      const { diffHrs, diffMins, diffSecs } = calculateTimeRemaining(
        utc_date,
        dateRn
      );

      return res.status(400).json({
        message: "24 hours have not passed since your last free claim.",
        timeRemaining: `${diffHrs}:${diffMins}:${diffSecs}`,
        availableAgain: utc_date,
      });
    }

    const added = await addCurrency(user_id, 100);

    if (!added) {
      return res.status(500).json({ message: "Error while adding currency" });
    }

    res.json(added);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Something went wrong. Error Code 13" });
  }
});
