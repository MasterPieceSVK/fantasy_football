const db = require("./db");

const pgp = require("pg-promise")();
const { ParameterizedQuery } = pgp;

module.exports = { placeBet, getOdd };

async function placeBet(obj) {
  const cs = new pgp.helpers.ColumnSet(
    ["user_id", "bet_amount", "match_id", "winner", "odd"],
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

async function getOdd(match_id, side) {
  const matches = new ParameterizedQuery({
    text: "SELECT * FROM matches WHERE match_id = $1",
    values: [match_id],
  });

  return db
    .one(matches)
    .then((data) => {
      if (side == "HOME_TEAM") {
        return data.home_odd;
      } else if (side == "AWAY_TEAM") {
        return data.away_odd;
      } else if (side == "DRAW") {
        return data.draw_odd;
      } else {
        return false;
      }
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
}
