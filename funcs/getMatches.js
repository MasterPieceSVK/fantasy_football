const { default: axios } = require("axios");
const getOdds = require("./getOdds");
const changeTeamName = require("./changeTeamName");
const { createMatches } = require("../db/db");

async function getMatches() {
  let today = new Date();
  let todayFormatted = today.toISOString().slice(0, 10);
  today.setDate(today.getDate() + 14);
  let twoWeeksFromToday = today.toISOString().slice(0, 10);

  return axios
    .get("http://api.football-data.org/v4/competitions/2021/matches", {
      params: {
        dateFrom: todayFormatted,
        dateTo: twoWeeksFromToday,
      },
      headers: {
        "X-Unfold-Goals": true,
        "X-Auth-Token": "b8b7216163c248cd9b28acd257dbeb0d",
      },
    })
    .then(async (data) => {
      const final = await formatData(data);
      return final;
    })
    .catch((e) => console.log(e));
}

async function formatData(data) {
  const odds = await getOdds();
  let formattedData = [];
  data.data.matches.map((match) => {
    const tempData = {};
    tempData.utc_date = match.utcDate;
    tempData.home_team = changeTeamName(match.homeTeam.name);
    tempData.away_team = changeTeamName(match.awayTeam.name);
    // failsafe
    if (!tempData.home_team || !tempData.away_team) {
      console.log(tempData);
      console.log("DANGER DNAGER");
    }
    // tempData.score_home = match.score.fullTime.home;
    // tempData.score_away = match.score.fullTime.away;
    tempData.score_home = null;
    tempData.score_away = null;
    tempData.winner = null;

    // if (tempData.scoreHome && tempData.scoreAway) {
    //   tempData.winner =
    //     match.score.winner == "HOME_TEAM"
    //       ? "home"
    //       : match.score.winner == "DRAW"
    //       ? "draw"
    //       : "away";
    // }

    formattedData.push(tempData);
  });

  let final = odds.map((odd) => {
    const theMatch = formattedData.find((match) => {
      return (
        match.utc_date == odd.commence_time &&
        match.home_team == odd.home_team &&
        match.away_team == odd.away_team
      );
    });
    if (theMatch) {
      theMatch.league_name = odd.league_name;
      theMatch.home_odd = odd.home_odd;
      theMatch.away_odd = odd.away_odd;
      theMatch.draw_odd = odd.draw_odd;
      return theMatch;
    }
  });

  final = final.filter((match) => {
    return match != undefined;
  });

  if (final.length != formattedData.length) {
    console.log("error, the arrays are different lenghts");
    console.log("final: ", final.length);
    console.log("formatted Data: ", formattedData.length);
    console.log("odds: ", odds.length);
  }
  return final;
}

async function getMatchesAndAddThemToTheDB() {
  const matches = await getMatches();
  if (matches.length > 0) {
    const success = await createMatches(matches);
    if (success) {
      console.log("yay");
      return;
    } else {
      console.log("No");
      return;
    }
  }
}

getMatchesAndAddThemToTheDB();

module.exports = getMatches;
