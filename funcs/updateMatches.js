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
  const matches = await getUnfinishedPastMatches();
  if (!matches) {
    return false;
  }
  let today = new Date();
  let todayFormatted = today.toISOString().slice(0, 10);
  today.setDate(today.getDate() - 14);
  let twoWeeksAgo = today.toISOString().slice(0, 10);
  console.log("league " + league);
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
      // console.log(final);
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
      fetchedMatch.homeTeam.name = changeTeamName(fetchedMatch.homeTeam.name);
      fetchedMatch.awayTeam.name = changeTeamName(fetchedMatch.awayTeam.name);

      if (fetchedMatch.homeTeam.name && fetchedMatch.awayTeam.name) {
        return (
          fetchedMatch.utcDate == match.utc_date &&
          fetchedMatch.homeTeam.name == match.home_team &&
          fetchedMatch.awayTeam.name == match.away_team
        );
      }
    });

    match.status = "FINISHED";
    match.winner = theMatch.score.winner;
    match.score_home = theMatch.score.fullTime.home;
    match.score_away = theMatch.score.fullTime.away;

    return match;
  });
}

async function updateMatchesCentralFunc() {
  return footballDataList.map(async (league) => {
    console.log("league 2 " + league);
    const updatedMatches = await updateMatches(league);
    if (updatedMatches) {
      const success = dbUpdateMatches(updatedMatches);
      return success ? true : false;
    } else {
      return false;
    }
  });
}
