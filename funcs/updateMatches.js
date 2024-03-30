const { default: axios } = require("axios");
const {
  getUnfinishedPastMatches,
  dbUpdateMatches,
} = require("../db/matchesDb");
const changeTeamName = require("./helpers/changeTeamName");
const normalizeTime = require("./helpers/normalizeTime");
const footballDataList = require("../lists/footballDataList");

module.exports = updateMatchesCentralFunc;

async function updateMatches(league) {
  const matches = await getUnfinishedPastMatches(league);
  if (!matches) {
    return false;
  }
  let today = new Date();
  let todayFormatted = today.toISOString().slice(0, 10);
  today.setDate(today.getDate() - 14);
  let twoWeeksAgo = today.toISOString().slice(0, 10);

  return axios
    .get(`http://api.football-data.org/v4/competitions/${league}/matches`, {
      params: {
        dateFrom: twoWeeksAgo,
        dateTo: todayFormatted,
      },
      headers: {
        "X-Unfold-Goals": true,
        "X-Auth-Token": process.env.FOOTBALL_DATA_TOKEN,
      },
    })
    .then(async (data) => {
      const final = await findFinishedMatches(matches, data.data.matches);
      return final;
    })
    .catch((e) => console.log(e));
}

async function findFinishedMatches(matches, fetchedMatches) {
  fetchedMatches = fetchedMatches.filter((match) => {
    return match.status == "FINISHED";
  });

  return matches.map((match, i) => {
    match.utc_date = normalizeTime(match.utc_date);

    const theMatch = fetchedMatches.find((fetchedMatch) => {
      const tempMatch = {
        utcDate: fetchedMatch.utcDate,
        homeTeam: {
          name: fetchedMatch.homeTeam.name,
        },
        awayTeam: {
          name: fetchedMatch.awayTeam.name,
        },
      };
      tempMatch.homeTeam.name = changeTeamName(tempMatch.homeTeam.name);
      tempMatch.awayTeam.name = changeTeamName(tempMatch.awayTeam.name);
      // console.log(tempMatch);
      // console.log(match);
      return (
        tempMatch.utcDate == match.utc_date &&
        tempMatch.homeTeam.name == match.home_team &&
        tempMatch.awayTeam.name == match.away_team
      );
    });

    if (theMatch) {
      match.status = "FINISHED";
      match.winner = theMatch.score.winner;
      match.score_home = theMatch.score.fullTime.home;
      match.score_away = theMatch.score.fullTime.away;
    } else {
      console.log("Match not found");
    }

    return match;
  });
}

async function updateMatchesCentralFunc() {
  return footballDataList.map(async (league) => {
    const updatedMatches = await updateMatches(league);
    if (updatedMatches) {
      const success = dbUpdateMatches(updatedMatches);
      return success ? true : false;
    } else {
      return false;
    }
  });
}
