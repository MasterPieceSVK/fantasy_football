const db = require("./db");

const pgp = require("pg-promise")();
const { ParameterizedQuery } = pgp;

module.exports = {
  getMyNotifications,
  notificationExists,
  deleteNotifications,
  doesUserHaveNotifs,
  getMyNotificationsWithMatchDetails,
};

async function getMyNotifications(user_id) {
  const notificationsSql = new ParameterizedQuery({
    text: "SELECT * FROM bets_notifications WHERE user_id = $1",
    values: [user_id],
  });

  return db
    .many(notificationsSql)
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
}

async function getMyNotificationsWithMatchDetails(user_id) {
  const notificationsSql = new ParameterizedQuery({
    text: "SELECT * FROM bets_notifications JOIN matches ON bets_notifications.match_id = matches.match_id WHERE bets_notifications.user_id = $1",
    values: [user_id],
  });

  return db
    .many(notificationsSql)
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
}

async function notificationExists(bets_notification_id) {
  const notificationsSql = new ParameterizedQuery({
    text: "SELECT EXISTS (SELECT 1 FROM bets_notifications WHERE bets_notification_id = $1)",
    values: [bets_notification_id],
  });

  return db
    .one(notificationsSql)
    .then((data) => {
      return data.exists;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
}

async function deleteNotifications(user_id) {
  const notificationsSql = new ParameterizedQuery({
    text: "DELETE FROM bets_notifications WHERE user_id = $1",
    values: [user_id],
  });

  return db
    .none(notificationsSql)
    .then(() => {
      return true;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
}

async function doesUserHaveNotifs(user_id) {
  const notificationsSql = new ParameterizedQuery({
    text: "SELECT EXISTS (SELECT 1 FROM bets_notifications WHERE user_id = $1)",
    values: [user_id],
  });

  return db
    .one(notificationsSql)
    .then((data) => {
      return data.exists;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
}
