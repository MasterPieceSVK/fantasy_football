const db = require("./db");

const pgp = require("pg-promise")();
const { ParameterizedQuery } = pgp;

module.exports = {
  placeBet,
  getOdd,
  getMyBets,
  getMyBetsWithMatches,
  getUtcDateForMatch,
  deleteBet,
  getMatchIdByBetId,
  doesBetExist,
};

async function placeBet(obj) {
  const cs = new pgp.helpers.ColumnSet(
    ["user_id", "bet_amount", "match_id", "bet_winner", "odd"],
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

async function getMyBets(user_id) {
  const matches = new ParameterizedQuery({
    text: "SELECT * FROM bets WHERE user_id = $1",
    values: [user_id],
  });

  return db
    .many(matches)
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
}

async function getMyBetsWithMatches(user_id) {
  const matches = new ParameterizedQuery({
    text: "SELECT * FROM bets JOIN matches ON bets.match_id = matches.match_id WHERE bets.user_id = $1",
    values: [user_id],
  });

  return db
    .many(matches)
    .then((data) => {
      return data;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
}

async function getUtcDateForMatch(match_id) {
  const utcDateForMatch = new ParameterizedQuery({
    text: "SELECT utc_date FROM matches WHERE match_id = $1",
    values: [match_id],
  });

  return db
    .one(utcDateForMatch)
    .then((data) => {
      // console.log(data.utc_date);
      return data.utc_date;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
}

async function deleteBet(bet_id, user_id) {
  const deleteSql = new ParameterizedQuery({
    text: "DELETE FROM bets WHERE bet_id = $1 AND user_id = $2",
    values: [bet_id, user_id],
  });

  return db
    .none(deleteSql)
    .then(() => {
      return true;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
}

async function getMatchIdByBetId(bet_id) {
  const getMatchId = new ParameterizedQuery({
    text: "SELECT match_id FROM bets WHERE bet_id = $1",
    values: [bet_id],
  });

  return db
    .one(getMatchId)
    .then((data) => {
      return data.match_id;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
}

async function doesBetExist(bet_id) {
  const betExistsSql = new ParameterizedQuery({
    text: "SELECT EXISTS (SELECT 1 FROM bets WHERE bet_id = $1)",
    values: [bet_id],
  });

  return db
    .one(betExistsSql)
    .then((data) => {
      return data.exists;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
}
