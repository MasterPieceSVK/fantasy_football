require("dotenv").config({
  path: ".env",
});
const pgp = require("pg-promise")();
const db = pgp(process.env.DATABASE_URL);
module.exports = db;
