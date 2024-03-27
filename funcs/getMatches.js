const { default: axios } = require("axios");
const getOdds = require("./getOdds");

async function getMatches() {
  axios
    .get("http://api.football-data.org/v4/competitions/2021/matches", {
      params: {
        dateFrom: "2024-03-27",
        dateTo: "2024-04-08",
      },
      headers: {
        "X-Unfold-Goals": true,
        "X-Auth-Token": "b8b7216163c248cd9b28acd257dbeb0d",
      },
    })
    .then((data) => {
      return formatData(data);
    })
    .catch((e) => console.log(e));
}

async function formatData(data) {
  const odds = await getOdds();

  let formattedData = [];
  data.data.matches.map((match) => {
    const tempData = {};
    tempData.utcDate = match.utcDate;
    tempData.homeTeam = changeTeamName(match.homeTeam.name);
    tempData.awayTeam = changeTeamName(match.awayTeam.name);

    // failsafe
    if (!tempData.homeTeam || !tempData.awayTeam) {
      console.log(tempData);
      console.log("DANGER DNAGER");
    }
    tempData.scoreHome = match.score.fullTime.home;
    tempData.scoreAway = match.score.fullTime.away;

    // move to update function
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

  const final = odds.map((odd) => {
    const theMatch = formattedData.filter((match) => {
      return (
        match.utcDate == odd.commence_time &&
        match.homeTeam == odd.homeTeam &&
        match.awayTeam == odd.awayTeam
      );
    });
    theMatch[0].homeOdd = odd.homeOdd;
    theMatch[0].awayOdd = odd.awayOdd;
    theMatch[0].drawOdd = odd.drawOdd;

    return theMatch[0];
  });

  console.log(final);
}

function changeTeamName(name) {
  switch (name) {
    case "Newcastle United FC":
      return "Newcastle United";
    case "AFC Bournemouth":
      return "Bournemouth";
    case "Everton FC":
      return "Everton";
    case "Chelsea FC":
      return "Chelsea";
    case "Burnley FC":
      return "Burnley";
    case "Nottingham Forest FC":
      return "Nottingham Forest";
    case "Crystal Palace FC":
      return "Crystal Palace";
    case "Sheffield United FC":
      return "Sheffield United";
    case "Fulham FC":
      return "Fulham";
    case "Tottenham Hotspur FC":
      return "Tottenham Hotspur";
    case "Luton Town FC":
      return "Luton";
    case "Wolverhampton Wanderers FC":
      return "Wolverhampton Wanderers";
    case "Aston Villa FC":
      return "Aston Villa";
    case "Brentford FC":
      return "Brentford";
    case "Manchester United FC":
      return "Manchester United";
    case "Liverpool FC":
      return "Liverpool";
    case "Brighton & Hove Albion FC":
      return "Brighton and Hove Albion";
    case "Manchester City FC":
      return "Manchester City";
    case "Arsenal FC":
      return "Arsenal";
    case "West Ham United FC":
      return "West Ham United";
    default:
      return null;
  }
}

getMatches();
module.exports = getMatches;
