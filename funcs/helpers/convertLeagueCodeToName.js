function convertLeagueCodeToName(code) {
  switch (code) {
    case 2002: {
      return "Bundesliga - Germany";
      break;
    }
    case 2021: {
      return "EPL";
      break;
    }
    case 2019: {
      return "Seria A - Italy";
      break;
    }
    case 2014: {
      return "La Liga - Spain";
      break;
    }
    case 2015: {
      return "Ligue 1 - France";
      break;
    }
  }
}

module.exports = convertLeagueCodeToName;
