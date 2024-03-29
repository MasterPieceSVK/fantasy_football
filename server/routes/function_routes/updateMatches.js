const express = require("express");
const updateMatchesCentralFunc = require("../../../funcs/updateMatches");
const updateMatchesRouter = express.Router();
module.exports = updateMatchesRouter;

updateMatchesRouter.get("/", async (req, res) => {
  if (req.headers.auth != process.env.OWN_API_AUTH_KEY) {
    res.status(401).send("Unathorized");
    return;
  }

  const success = await updateMatchesCentralFunc();
  if (success) {
    res.send("updated");
  } else {
    res.status(500).send("error while updating");
  }
});
