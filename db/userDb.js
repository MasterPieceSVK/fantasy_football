const bcrypt = require("bcrypt");
const db = require("./db");

const pgp = require("pg-promise")();
const { ParameterizedQuery } = pgp;

module.exports = {
  checkAvailabilityOfUsername,
  checkAvailabilityOfEmail,
  createUser,
  userLogin,
};

async function checkAvailabilityOfUsername(username) {
  const user = new ParameterizedQuery({
    text: "SELECT * FROM users WHERE username = $1",
    values: [username],
  });

  return db
    .none(user)
    .then(() => {
      return true;
    })
    .catch(() => false);
}

async function checkAvailabilityOfEmail(email) {
  const user = new ParameterizedQuery({
    text: "SELECT * FROM users WHERE email = $1",
    values: [email],
  });

  return db
    .none(user)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

async function createUser(obj) {
  const cs = new pgp.helpers.ColumnSet(["username", "password", "email"], {
    table: "users",
  });
  const sql = `${pgp.helpers.insert(
    obj,
    cs
  )} RETURNING user_id, currency_amount`;
  return db
    .one(sql)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}

async function userLogin(username) {
  const user = new ParameterizedQuery({
    text: "SELECT * FROM users WHERE username = $1",
    values: [username],
  });

  return db
    .one(user)
    .then((data) => {
      return data;
    })
    .catch(() => {
      return false;
    });
}
