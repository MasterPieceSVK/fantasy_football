const express = require("express");
const authMiddleware = require("../../helpers/authMiddleware");
const {
  notificationExists,
  deleteNotifications,
} = require("../../../db/notificationsDb");
const deleteNotificationsRouter = express.Router();
module.exports = deleteNotificationsRouter;

deleteNotificationsRouter.delete("/", authMiddleware, async (req, res) => {
  try {
    const { user_id } = req;
    const deleted = await deleteNotifications(user_id);
    if (!deleted) {
      return res
        .status(500)
        .json({ message: "Error while deleting the notifications+*" });
    }

    res.status(204).send();
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Something went wrong. Error Code 11 " });
  }
});
