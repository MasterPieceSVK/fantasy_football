const express = require("express");
const authMiddleware = require("../../helpers/authMiddleware");
const { addCurrency } = require("../../../db/userDb");
const addCurrencyRouter = express.Router();
module.exports = addCurrencyRouter;

addCurrencyRouter.put("/", authMiddleware, async (req, res) => {
  try {
    const { user_id } = req;
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
