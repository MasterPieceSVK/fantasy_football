const express = require("express");
const authMiddleware = require("../../helpers/authMiddleware");
const {
  getMyNotifications,
  doesUserHaveNotifs,
  getMyNotificationsWithMatchDetails,
} = require("../../../db/notificationsDb");
const getMyNotificationsRouter = express.Router();
module.exports = getMyNotificationsRouter;

getMyNotificationsRouter.get("/", authMiddleware, async (req, res) => {
  try {
    const { user_id } = req;
    const { includeMatchDetails } = req.query;

    const notifs = await doesUserHaveNotifs(user_id);
    if (!notifs) {
      return res.status(404).json({ message: "No notifications found" });
    }

    let notifications;
    if (includeMatchDetails) {
      notifications = await getMyNotificationsWithMatchDetails(user_id);
    } else {
      notifications = await getMyNotifications(user_id);
    }

    if (!notifications) {
      return res
        .status(500)
        .json({ message: "Error while getting notifications" });
    }

    res.json(notifications);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Something went wrong. Error Code 11" });
  }
});
