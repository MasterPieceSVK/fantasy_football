const bcrypt = require("bcrypt");
const db = require("./db");

const pgp = require("pg-promise")();
const { ParameterizedQuery } = pgp;

module.exports = {
  checkAvailabilityOfUsername,
  checkAvailabilityOfEmail,
  createUser,
  userLogin,
  getCurrencyAmount,
  addCurrency,
  userExists,
  isUserEligibleForNewCurrency,
  getBalanceAmount,
};

async function checkAvailabilityOfUsername(username) {
  const user = new ParameterizedQuery({
    text: "SELECT EXISTS (SELECT 1 FROM users WHERE username = $1)",
    values: [username],
  });

  return db
    .one(user)
    .then((data) => {
      return data.exists;
    })
    .catch((e) => {
      console.log(e);
      false;
    });
}

async function checkAvailabilityOfEmail(email) {
  const user = new ParameterizedQuery({
    text: "SELECT EXISTS (SELECT 1 FROM users WHERE email = $1)",
    values: [email],
  });

  return db
    .one(user)
    .then((data) => {
      return data.exists;
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
    .catch((e) => {
      console.log(e);
      return false;
    });
}

async function getCurrencyAmount(user_id) {
  const currencyAmountSql = new ParameterizedQuery({
    text: "SELECT currency_amount FROM users WHERE user_id = $1",
    values: [user_id],
  });

  return db
    .one(currencyAmountSql)
    .then((currencyAmount) => {
      return currencyAmount;
    })
    .catch(() => {
      return false;
    });
}

async function addCurrency(user_id, currency) {
  const updateQuery = new ParameterizedQuery({
    text: `UPDATE users SET currency_amount = currency_amount + $1 WHERE user_id = $2 RETURNING currency_amount`,
    values: [currency, user_id],
  });

  const insertQuery = new ParameterizedQuery({
    text: `INSERT INTO free_currency(user_id, amount) VALUES($1, $2)`,
    values: [user_id, currency],
  });

  return db
    .tx((t) => {
      return t.batch([t.one(updateQuery), t.none(insertQuery)]);
    })
    .then((data) => {
      return data[0];
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
}

async function isUserEligibleForNewCurrency(user_id) {
  const isEligibleSql = new ParameterizedQuery({
    text: `SELECT claimed_at FROM free_currency WHERE user_id = $1 ORDER BY claimed_at DESC LIMIT 1`,
    values: [user_id],
  });

  return db
    .oneOrNone(isEligibleSql)
    .then((data) => {
      return data ? data.claimed_at : null;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
}

async function userExists(user_id) {
  const user = new ParameterizedQuery({
    text: "SELECT EXISTS (SELECT 1 FROM users WHERE user_id = $1)",
    values: [user_id],
  });

  return db
    .one(user)
    .then((data) => {
      return data.exists;
    })
    .catch((e) => {
      console.log(e);
      false;
    });
}

async function getBalanceAmount(user_id) {
  const userSql = new ParameterizedQuery({
    text: "SELECT currency_amount FROM users WHERE user_id = $1",
    values: [user_id],
  });

  return db
    .one(userSql)
    .then((data) => {
      return Number(data.currency_amount);
    })
    .catch((e) => {
      console.log(e);
      false;
    });
}
