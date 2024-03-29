const db = require("./db");

const pgp = require("pg-promise")();
const { ParameterizedQuery } = pgp;

module.exports = { placeBet };

async function placeBet(obj) {
  const cs = new pgp.helpers.ColumnSet(
    ["user_id", "bet_amount", "match_id", "winner"],
    { table: "bets" }
  );

  let sql = `${pgp.helpers.insert(obj, cs)} RETURNING bet_id`;
  return db
    .one(sql)
    .then((data) => {
      return data.bet_id;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
}
