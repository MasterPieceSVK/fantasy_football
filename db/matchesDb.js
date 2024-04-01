const convertLeagueCodeToName = require("../funcs/helpers/convertLeagueCodeToName");
const db = require("./db");

const pgp = require("pg-promise")();
const { ParameterizedQuery } = pgp;

module.exports = {
  createMatches,
  getFutureMatches,
  dbUpdateOdds,
  getUnfinishedPastMatches,
  dbUpdateMatches,
  checkIfMatchExists,
  getMatches,
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
      "status",
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

async function getUnfinishedPastMatches(league) {
  const league_name = convertLeagueCodeToName(league);

  const matches = new ParameterizedQuery({
    text: "SELECT * FROM matches WHERE (utc_date + INTERVAL '2 hours') < CURRENT_TIMESTAMP AND league_name= $1",
    values: [league_name],
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
        ["score_home", "score_away", "winner", "status"],
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

async function checkIfMatchExists(match_id) {
  const matchExists = new ParameterizedQuery({
    text: "SELECT EXISTS (SELECT 1 FROM matches WHERE match_id = $1)",
    values: [match_id],
  });

  return db
    .one(matchExists)
    .then((data) => {
      return data.exists;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
}

async function getMatches() {
  const matches = new ParameterizedQuery({
    text: "SELECT * FROM matches WHERE utc_date > (CURRENT_TIMESTAMP - INTERVAL '14 days') AND utc_date < (CURRENT_TIMESTAMP + INTERVAL '14 days') ORDER BY utc_date",
  });

  return db
    .many(matches)
    .then((data) => {
      // console.log(data);
      return data;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
}
