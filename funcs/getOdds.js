const { default: axios } = require("axios");
const bundesliga = require("../bundesliga");
const { epl } = require("../epl");

async function fetchOdds(league) {
  return axios
    .get(`https://api.the-odds-api.com/v4/sports/${league}/odds`, {
      params: {
        apiKey: process.env.ODD_API_KEY,
        regions: "eu",
      },
    })
    .then(async (data) => {
      const odds = await getOdds(data.data);
      return odds;
    })
    .catch((e) => console.log(e));
}

async function getOdds(fetchedOddArray) {
  const odds = [];

  fetchedOddArray.map((match) => {
    let home = 0;
    let bookiesCount = 0;
    let away = 0;
    let draw = 0;

    const {
      away_team,
      home_team,
      sport_title: league_name,
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

    const home_odd = parseFloat((home / bookiesCount).toFixed(3));
    const away_odd = parseFloat((away / bookiesCount).toFixed(3));
    const draw_odd = parseFloat((draw / bookiesCount).toFixed(3));

    odds.push({
      home_team,
      away_team,
      league_name,
      commence_time,
      home_odd,
      away_odd,
      draw_odd,
    });
  });
  return odds;
}

// console.log(getOdds());
module.exports = { getOdds, fetchOdds };
