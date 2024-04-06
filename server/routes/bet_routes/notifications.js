const express = require("express");
const authMiddleware = require("../../helpers/authMiddleware");
const { doesUserHaveNotifs } = require("../../../db/notificationsDb");

const notificationsRouter = express.Router();
module.exports = notificationsRouter;

notificationsRouter.get("/", authMiddleware, async (req, res) => {
  try {
    const { user_id } = req;
    const notifs = await doesUserHaveNotifs(user_id);
    if (notifs) {
      return res.status(200).send();
    } else {
      return res.status(204).send();
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Something went wrong.Error code 16" });
  }
});
