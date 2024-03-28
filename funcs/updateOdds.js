const { default: axios } = require("axios");

const { fetchOdds } = require("./getOdds");
const normalizeTime = require("./helpers/normalizeTime");
const { getFutureMatches, dbUpdateOdds } = require("../db/matchesDb");
const oddLeagueList = require("../lists/oddLeagueList");

async function updateOdds(league) {
  const matches = await getFutureMatches();
  const odds = await fetchOdds(league);

  let updatedCounter = 0;
  const updated = [];
  matches.forEach((match) => {
    match.utc_date = normalizeTime(match.utc_date);

    const theMatch = odds.find((odd) => {
      odd.commence_time = normalizeTime(odd.commence_time);
      //   odd.home_odd = 3;
      //   odd.away_odd = 2;
      //   odd.draw_odd = 1.3;
      return (
        odd.commence_time == match.utc_date &&
        odd.home_team == match.home_team &&
        odd.away_team == match.away_team
      );
    });

    if (theMatch) {
      if (
        match.home_odd != theMatch.home_odd ||
        match.away_odd != theMatch.away_odd ||
        match.draw_odd != theMatch.draw_odd
      ) {
        if (match.home_odd != theMatch.home_odd) {
          match.home_odd = theMatch.home_odd;
          updatedCounter += 1;
        }
        if (match.away_odd != theMatch.away_odd) {
          match.away_odd = theMatch.away_odd;
          updatedCounter += 1;
        }

        if (match.draw_odd != theMatch.draw_odd) {
          match.draw_odd = theMatch.draw_odd;
          updatedCounter += 1;
        }
        updated.push(theMatch);
      }
    }
  });
  console.log("Updated odds: " + updatedCounter);
  //   console.log(updated);

  if (updated.length == 0) {
    return false;
  }
  const update = await dbUpdateOdds(updated);
  if (update) {
    console.log("UPDATED");
  } else {
    console.log("ERROR");
  }
}

async function updateOddsCentralFunction() {
  oddLeagueList.forEach((league) => {
    updateOdds(league);
  });
}

updateOddsCentralFunction();
