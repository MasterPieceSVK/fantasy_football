require("dotenv").config({
  path: ".env",
});
const bcrypt = require("bcrypt");

const pgp = require("pg-promise")();
const { ParameterizedQuery } = pgp;

const db = pgp(process.env.DATABASE_URL);

module.exports = {
  createMatches,
  getFutureMatches,
  dbUpdateOdds,
  getUnfinishedPastMatches,
  dbUpdateMatches,
};

async function createMatches(matches) {
  // console.log(matches);
  const data = matches;
  const cs = new pgp.helpers.ColumnSet(
    [
      "utc_date",
      "home_team",
      "away_team",
      "home_odd",
      "away_odd",
      "draw_odd",
      "league_name",
    ],
    { table: "matches" }
  );

  let sql = pgp.helpers.insert(data, cs);
  sql += "ON CONFLICT (utc_date,home_team,away_team) DO NOTHING";
  return db
    .none(sql)
    .then(() => {
      return true;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
}

async function getFutureMatches() {
  const matches = new ParameterizedQuery({
    text: "SELECT * FROM matches WHERE utc_date >= NOW()",
  });

  return db
    .many(matches)
    .then((data) => {
      return data;
    })
    .catch((e) => console.log(e));
}

async function dbUpdateOdds(oddsArray) {
  const updateQueries = oddsArray.map((odds) => {
    const sql =
      pgp.helpers.update(
        odds,
        ["home_odd", "away_odd", "draw_odd"],
        "matches"
      ) + ` WHERE home_team=$1 AND away_team=$2 AND utc_date=$3`;
    return db.none(sql, [odds.home_team, odds.away_team, odds.commence_time]);
  });

  return db
    .tx((t) => {
      return t.batch(updateQueries);
    })
    .then(() => {
      return true;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
}

async function getUnfinishedPastMatches() {
  const matches = new ParameterizedQuery({
    text: "SELECT * FROM matches WHERE winner IS NULL AND utc_date <= NOW()",
  });

  return db
    .many(matches)
    .then((data) => {
      return data;
    })
    .catch((e) => console.log(e));
}

async function dbUpdateMatches(matches) {
  const updateQueries = matches.map((match) => {
    const sql =
      pgp.helpers.update(
        match,
        ["score_home", "score_away", "winner"],
        "matches"
      ) + ` WHERE home_team=$1 AND away_team=$2 AND utc_date=$3`;
    return db.none(sql, [match.home_team, match.away_team, match.utc_date]);
  });

  return db
    .tx((t) => {
      return t.batch(updateQueries);
    })
    .then(() => {
      return true;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
}
