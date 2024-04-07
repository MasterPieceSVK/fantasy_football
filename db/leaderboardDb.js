const db = require("./db");

const pgp = require("pg-promise")();
const { ParameterizedQuery } = pgp;

module.exports = { getLeaderboard };

function getLeaderboard() {
  const leaderboardSql = new ParameterizedQuery({
    text: `SELECT users.username,SUM(profit) AS profit FROM bets JOIN users ON bets.user_id = users.user_id GROUP BY users.user_id ORDER BY profit DESC LIMIT 10`,
  });

  return db
    .many(leaderboardSql)
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
}
