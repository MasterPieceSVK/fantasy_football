const express = require("express");
const authMiddleware = require("../../helpers/authMiddleware");
const { getBalanceAmount } = require("../../../db/userDb");
const getBalanceAmountRouter = express.Router();
module.exports = getBalanceAmountRouter;

getBalanceAmountRouter.get("/", authMiddleware, async (req, res) => {
  try {
    const { user_id } = req;

    const amount = await getBalanceAmount(user_id);
    console.log(amount);
    res.json({ balance: amount });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong.Error code 15" });
  }
});
