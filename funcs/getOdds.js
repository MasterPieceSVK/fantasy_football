const { axios } = require("axios");
const bundesliga = require("../bundesliga");
const { epl } = require("../epl");

async function getOdds() {
  const odds = [];

  epl.map((match) => {
    let home = 0;
    let bookiesCount = 0;
    let away = 0;
    let draw = 0;

    const {
      away_team: awayTeam,
      home_team: homeTeam,
      sport_title: leagueName,
      commence_time,
    } = match;

    match.bookmakers.map((bookmarker) => {
      bookmarker.markets.map((market) => {
        if (market.key == "h2h") {
          home += market.outcomes[0].price;
          away += market.outcomes[1].price;
          draw += market.outcomes[2].price;
          bookiesCount += 1;
        }
      });
    });

    const homeOdd = parseFloat((home / bookiesCount).toFixed(3));
    const awayOdd = parseFloat((away / bookiesCount).toFixed(3));
    const drawOdd = parseFloat((draw / bookiesCount).toFixed(3));

    odds.push({
      homeTeam,
      awayTeam,
      leagueName,
      commence_time,
      homeOdd,
      awayOdd,
      drawOdd,
    });
  });
  return odds;
}

// console.log(getOdds());
module.exports = getOdds;
