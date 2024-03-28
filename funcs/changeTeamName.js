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

module.exports = changeTeamName;
