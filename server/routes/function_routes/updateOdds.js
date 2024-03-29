const express = require("express");
const updateOddsCentralFunction = require("../../../funcs/updateOdds");
const updateOddsRouter = express.Router();
module.exports = updateOddsRouter;

updateOddsRouter.get("/", async (req, res) => {
  if (req.headers.auth != process.env.OWN_API_AUTH_KEY) {
    res.status(401).send("Unathorized");
    return;
  }

  const success = await updateOddsCentralFunction();

  if (success != false) {
    res.send(success);
  } else {
    res.status(500).send("error while updating odds");
  }
});
