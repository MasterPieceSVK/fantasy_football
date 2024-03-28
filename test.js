const { all } = require("axios");

const data = [
  {
    id: "f52b50f0b2bd05369529954766c0fddb",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2024-03-29T20:00:00Z",
    home_team: "Lille",
    away_team: "RC Lens",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.15,
              },
              {
                name: "RC Lens",
                price: 3.61,
              },
              {
                name: "Draw",
                price: 3.43,
              },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.21,
              },
              {
                name: "RC Lens",
                price: 3.6,
              },
              {
                name: "Draw",
                price: 3.52,
              },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.1,
              },
              {
                name: "RC Lens",
                price: 3.5,
              },
              {
                name: "Draw",
                price: 3.4,
              },
            ],
          },
        ],
      },
      {
        key: "betclic",
        title: "Betclic",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.1,
              },
              {
                name: "RC Lens",
                price: 3.48,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: "livescorebet_eu",
        title: "LiveScore Bet (EU)",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Lille",
                price: 1.99,
              },
              {
                name: "RC Lens",
                price: 3.25,
              },
              {
                name: "Draw",
                price: 3.1,
              },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2024-03-28T21:18:33Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:18:33Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.2,
              },
              {
                name: "RC Lens",
                price: 3.71,
              },
              {
                name: "Draw",
                price: 3.47,
              },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.12,
              },
              {
                name: "RC Lens",
                price: 3.4,
              },
              {
                name: "Draw",
                price: 3.4,
              },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.12,
              },
              {
                name: "RC Lens",
                price: 3.45,
              },
              {
                name: "Draw",
                price: 3.45,
              },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.13,
              },
              {
                name: "RC Lens",
                price: 3.48,
              },
              {
                name: "Draw",
                price: 3.4,
              },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.1,
              },
              {
                name: "RC Lens",
                price: 3.4,
              },
              {
                name: "Draw",
                price: 3.4,
              },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2024-03-28T21:22:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.2,
              },
              {
                name: "RC Lens",
                price: 3.75,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.22,
              },
              {
                name: "RC Lens",
                price: 3.8,
              },
              {
                name: "Draw",
                price: 3.6,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.1,
              },
              {
                name: "RC Lens",
                price: 3.65,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: "everygame",
        title: "Everygame",
        last_update: "2024-03-28T21:21:31Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:31Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.1,
              },
              {
                name: "RC Lens",
                price: 3.5,
              },
              {
                name: "Draw",
                price: 3.3,
              },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.15,
              },
              {
                name: "RC Lens",
                price: 3.6,
              },
              {
                name: "Draw",
                price: 3.43,
              },
            ],
          },
        ],
      },
      {
        key: "coolbet",
        title: "Coolbet",
        last_update: "2024-03-28T21:19:54Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:19:54Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.15,
              },
              {
                name: "RC Lens",
                price: 3.65,
              },
              {
                name: "Draw",
                price: 3.43,
              },
            ],
          },
        ],
      },
      {
        key: "matchbook",
        title: "Matchbook",
        last_update: "2024-03-28T21:22:49Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:49Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.2,
              },
              {
                name: "RC Lens",
                price: 3.75,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2024-03-28T21:22:49Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.22,
              },
              {
                name: "RC Lens",
                price: 3.8,
              },
              {
                name: "Draw",
                price: 3.6,
              },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.15,
              },
              {
                name: "RC Lens",
                price: 3.4,
              },
              {
                name: "Draw",
                price: 3.45,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "0f7c41bf84ba09760bd982846d880661",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2024-03-30T16:00:00Z",
    home_team: "Metz",
    away_team: "AS Monaco",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.65,
              },
              {
                name: "Metz",
                price: 5.1,
              },
              {
                name: "Draw",
                price: 4.23,
              },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.7,
              },
              {
                name: "Metz",
                price: 5.17,
              },
              {
                name: "Draw",
                price: 4.29,
              },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2024-03-28T21:18:33Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:18:33Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.68,
              },
              {
                name: "Metz",
                price: 5.4,
              },
              {
                name: "Draw",
                price: 4.33,
              },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.65,
              },
              {
                name: "Metz",
                price: 5.0,
              },
              {
                name: "Draw",
                price: 4.0,
              },
            ],
          },
        ],
      },
      {
        key: "betclic",
        title: "Betclic",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.58,
              },
              {
                name: "Metz",
                price: 5.2,
              },
              {
                name: "Draw",
                price: 4.23,
              },
            ],
          },
        ],
      },
      {
        key: "livescorebet_eu",
        title: "LiveScore Bet (EU)",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.55,
              },
              {
                name: "Metz",
                price: 4.55,
              },
              {
                name: "Draw",
                price: 3.75,
              },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.65,
              },
              {
                name: "Metz",
                price: 4.9,
              },
              {
                name: "Draw",
                price: 4.1,
              },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.65,
              },
              {
                name: "Metz",
                price: 4.9,
              },
              {
                name: "Draw",
                price: 4.15,
              },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.64,
              },
              {
                name: "Metz",
                price: 5.0,
              },
              {
                name: "Draw",
                price: 4.15,
              },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.62,
              },
              {
                name: "Metz",
                price: 5.0,
              },
              {
                name: "Draw",
                price: 4.2,
              },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2024-03-28T21:22:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.69,
              },
              {
                name: "Metz",
                price: 5.6,
              },
              {
                name: "Draw",
                price: 4.3,
              },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.7,
              },
              {
                name: "Metz",
                price: 5.7,
              },
              {
                name: "Draw",
                price: 4.4,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.64,
              },
              {
                name: "Metz",
                price: 5.25,
              },
              {
                name: "Draw",
                price: 4.2,
              },
            ],
          },
        ],
      },
      {
        key: "everygame",
        title: "Everygame",
        last_update: "2024-03-28T21:21:31Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:31Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.62,
              },
              {
                name: "Metz",
                price: 5.0,
              },
              {
                name: "Draw",
                price: 4.1,
              },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.66,
              },
              {
                name: "Metz",
                price: 5.32,
              },
              {
                name: "Draw",
                price: 4.1,
              },
            ],
          },
        ],
      },
      {
        key: "coolbet",
        title: "Coolbet",
        last_update: "2024-03-28T21:19:54Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:19:54Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.65,
              },
              {
                name: "Metz",
                price: 5.3,
              },
              {
                name: "Draw",
                price: 4.25,
              },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.65,
              },
              {
                name: "Metz",
                price: 5.0,
              },
              {
                name: "Draw",
                price: 4.15,
              },
            ],
          },
        ],
      },
      {
        key: "matchbook",
        title: "Matchbook",
        last_update: "2024-03-28T21:22:49Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:49Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.69,
              },
              {
                name: "Metz",
                price: 5.7,
              },
              {
                name: "Draw",
                price: 4.3,
              },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2024-03-28T21:22:49Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.7,
              },
              {
                name: "Metz",
                price: 5.8,
              },
              {
                name: "Draw",
                price: 4.4,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "74d30895af722c4a2b352ba1cbb253a2",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2024-03-30T20:00:00Z",
    home_team: "Lyon",
    away_team: "Stade de Reims",
    bookmakers: [
      {
        key: "sport888",
        title: "888sport",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.1,
              },
              {
                name: "Stade de Reims",
                price: 3.4,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.07,
              },
              {
                name: "Stade de Reims",
                price: 3.55,
              },
              {
                name: "Draw",
                price: 3.72,
              },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.12,
              },
              {
                name: "Stade de Reims",
                price: 3.54,
              },
              {
                name: "Draw",
                price: 3.81,
              },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2024-03-28T21:18:33Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:18:33Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.1,
              },
              {
                name: "Stade de Reims",
                price: 3.66,
              },
              {
                name: "Draw",
                price: 3.8,
              },
            ],
          },
        ],
      },
      {
        key: "betclic",
        title: "Betclic",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.01,
              },
              {
                name: "Stade de Reims",
                price: 3.38,
              },
              {
                name: "Draw",
                price: 3.73,
              },
            ],
          },
        ],
      },
      {
        key: "livescorebet_eu",
        title: "LiveScore Bet (EU)",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Lyon",
                price: 1.92,
              },
              {
                name: "Stade de Reims",
                price: 3.2,
              },
              {
                name: "Draw",
                price: 3.3,
              },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.05,
              },
              {
                name: "Stade de Reims",
                price: 3.35,
              },
              {
                name: "Draw",
                price: 3.65,
              },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.08,
              },
              {
                name: "Stade de Reims",
                price: 3.35,
              },
              {
                name: "Draw",
                price: 3.7,
              },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.05,
              },
              {
                name: "Stade de Reims",
                price: 3.42,
              },
              {
                name: "Draw",
                price: 3.68,
              },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.05,
              },
              {
                name: "Stade de Reims",
                price: 3.4,
              },
              {
                name: "Draw",
                price: 3.6,
              },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2024-03-28T21:22:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.14,
              },
              {
                name: "Stade de Reims",
                price: 3.6,
              },
              {
                name: "Draw",
                price: 3.8,
              },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.18,
              },
              {
                name: "Stade de Reims",
                price: 3.7,
              },
              {
                name: "Draw",
                price: 3.85,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.12,
              },
              {
                name: "Stade de Reims",
                price: 3.4,
              },
              {
                name: "Draw",
                price: 3.7,
              },
            ],
          },
        ],
      },
      {
        key: "everygame",
        title: "Everygame",
        last_update: "2024-03-28T21:21:31Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:31Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.0,
              },
              {
                name: "Stade de Reims",
                price: 3.45,
              },
              {
                name: "Draw",
                price: 3.6,
              },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.1,
              },
              {
                name: "Stade de Reims",
                price: 3.46,
              },
              {
                name: "Draw",
                price: 3.7,
              },
            ],
          },
        ],
      },
      {
        key: "coolbet",
        title: "Coolbet",
        last_update: "2024-03-28T21:19:54Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:19:54Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.15,
              },
              {
                name: "Stade de Reims",
                price: 3.45,
              },
              {
                name: "Draw",
                price: 3.63,
              },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.1,
              },
              {
                name: "Stade de Reims",
                price: 3.3,
              },
              {
                name: "Draw",
                price: 3.65,
              },
            ],
          },
        ],
      },
      {
        key: "matchbook",
        title: "Matchbook",
        last_update: "2024-03-28T21:22:49Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:49Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.14,
              },
              {
                name: "Stade de Reims",
                price: 3.65,
              },
              {
                name: "Draw",
                price: 3.8,
              },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2024-03-28T21:22:49Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.16,
              },
              {
                name: "Stade de Reims",
                price: 3.7,
              },
              {
                name: "Draw",
                price: 3.85,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "d9ec4cc317a2b14d3d5d46015c1c6b5c",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2024-03-31T11:00:00Z",
    home_team: "Lorient",
    away_team: "Brest",
    bookmakers: [
      {
        key: "betclic",
        title: "Betclic",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Brest",
                price: 1.94,
              },
              {
                name: "Lorient",
                price: 3.9,
              },
              {
                name: "Draw",
                price: 3.37,
              },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Brest",
                price: 2.0,
              },
              {
                name: "Lorient",
                price: 4.0,
              },
              {
                name: "Draw",
                price: 3.25,
              },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Brest",
                price: 1.98,
              },
              {
                name: "Lorient",
                price: 3.9,
              },
              {
                name: "Draw",
                price: 3.45,
              },
            ],
          },
        ],
      },
      {
        key: "livescorebet_eu",
        title: "LiveScore Bet (EU)",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Brest",
                price: 1.89,
              },
              {
                name: "Lorient",
                price: 3.6,
              },
              {
                name: "Draw",
                price: 3.05,
              },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Brest",
                price: 1.95,
              },
              {
                name: "Lorient",
                price: 3.9,
              },
              {
                name: "Draw",
                price: 3.4,
              },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Brest",
                price: 2.04,
              },
              {
                name: "Lorient",
                price: 4.08,
              },
              {
                name: "Draw",
                price: 3.57,
              },
            ],
          },
        ],
      },
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Brest",
                price: 2.05,
              },
              {
                name: "Lorient",
                price: 4.01,
              },
              {
                name: "Draw",
                price: 3.37,
              },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Brest",
                price: 1.97,
              },
              {
                name: "Lorient",
                price: 3.94,
              },
              {
                name: "Draw",
                price: 3.45,
              },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2024-03-28T21:18:33Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:18:33Z",
            outcomes: [
              {
                name: "Brest",
                price: 2.07,
              },
              {
                name: "Lorient",
                price: 4.1,
              },
              {
                name: "Draw",
                price: 3.47,
              },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Brest",
                price: 1.95,
              },
              {
                name: "Lorient",
                price: 3.8,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Brest",
                price: 2.0,
              },
              {
                name: "Lorient",
                price: 4.0,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2024-03-28T21:22:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Brest",
                price: 2.06,
              },
              {
                name: "Lorient",
                price: 4.1,
              },
              {
                name: "Draw",
                price: 3.4,
              },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Brest",
                price: 2.12,
              },
              {
                name: "Lorient",
                price: 4.4,
              },
              {
                name: "Draw",
                price: 3.55,
              },
            ],
          },
        ],
      },
      {
        key: "everygame",
        title: "Everygame",
        last_update: "2024-03-28T21:21:31Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:31Z",
            outcomes: [
              {
                name: "Brest",
                price: 2.0,
              },
              {
                name: "Lorient",
                price: 3.9,
              },
              {
                name: "Draw",
                price: 3.25,
              },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Brest",
                price: 2.01,
              },
              {
                name: "Lorient",
                price: 4.08,
              },
              {
                name: "Draw",
                price: 3.43,
              },
            ],
          },
        ],
      },
      {
        key: "coolbet",
        title: "Coolbet",
        last_update: "2024-03-28T21:19:54Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:19:54Z",
            outcomes: [
              {
                name: "Brest",
                price: 2.02,
              },
              {
                name: "Lorient",
                price: 4.1,
              },
              {
                name: "Draw",
                price: 3.44,
              },
            ],
          },
        ],
      },
      {
        key: "matchbook",
        title: "Matchbook",
        last_update: "2024-03-28T21:22:49Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:49Z",
            outcomes: [
              {
                name: "Brest",
                price: 2.08,
              },
              {
                name: "Lorient",
                price: 4.3,
              },
              {
                name: "Draw",
                price: 3.4,
              },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2024-03-28T21:22:49Z",
            outcomes: [
              {
                name: "Brest",
                price: 2.12,
              },
              {
                name: "Lorient",
                price: 4.4,
              },
              {
                name: "Draw",
                price: 3.55,
              },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Brest",
                price: 2.0,
              },
              {
                name: "Lorient",
                price: 3.85,
              },
              {
                name: "Draw",
                price: 3.4,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "9752475e211aa045ed830b3947574bc6",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2024-03-31T13:00:00Z",
    home_team: "Clermont",
    away_team: "Toulouse",
    bookmakers: [
      {
        key: "sport888",
        title: "888sport",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Clermont",
                price: 3.0,
              },
              {
                name: "Toulouse",
                price: 2.38,
              },
              {
                name: "Draw",
                price: 3.25,
              },
            ],
          },
        ],
      },
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Clermont",
                price: 3.22,
              },
              {
                name: "Toulouse",
                price: 2.37,
              },
              {
                name: "Draw",
                price: 3.33,
              },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Clermont",
                price: 3.17,
              },
              {
                name: "Toulouse",
                price: 2.39,
              },
              {
                name: "Draw",
                price: 3.56,
              },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2024-03-28T21:18:33Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:18:33Z",
            outcomes: [
              {
                name: "Clermont",
                price: 3.27,
              },
              {
                name: "Toulouse",
                price: 2.43,
              },
              {
                name: "Draw",
                price: 3.39,
              },
            ],
          },
        ],
      },
      {
        key: "betclic",
        title: "Betclic",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Clermont",
                price: 3.03,
              },
              {
                name: "Toulouse",
                price: 2.25,
              },
              {
                name: "Draw",
                price: 3.38,
              },
            ],
          },
        ],
      },
      {
        key: "livescorebet_eu",
        title: "LiveScore Bet (EU)",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Clermont",
                price: 2.95,
              },
              {
                name: "Toulouse",
                price: 2.2,
              },
              {
                name: "Draw",
                price: 3.05,
              },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Clermont",
                price: 3.05,
              },
              {
                name: "Toulouse",
                price: 2.32,
              },
              {
                name: "Draw",
                price: 3.35,
              },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Clermont",
                price: 3.05,
              },
              {
                name: "Toulouse",
                price: 2.32,
              },
              {
                name: "Draw",
                price: 3.35,
              },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Clermont",
                price: 3.06,
              },
              {
                name: "Toulouse",
                price: 2.31,
              },
              {
                name: "Draw",
                price: 3.44,
              },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2024-03-28T21:22:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Clermont",
                price: 3.25,
              },
              {
                name: "Toulouse",
                price: 2.36,
              },
              {
                name: "Draw",
                price: 3.55,
              },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Clermont",
                price: 3.4,
              },
              {
                name: "Toulouse",
                price: 2.44,
              },
              {
                name: "Draw",
                price: 3.6,
              },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Clermont",
                price: 3.0,
              },
              {
                name: "Toulouse",
                price: 2.25,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Clermont",
                price: 3.05,
              },
              {
                name: "Toulouse",
                price: 2.4,
              },
              {
                name: "Draw",
                price: 3.45,
              },
            ],
          },
        ],
      },
      {
        key: "everygame",
        title: "Everygame",
        last_update: "2024-03-28T21:21:31Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:31Z",
            outcomes: [
              {
                name: "Clermont",
                price: 3.1,
              },
              {
                name: "Toulouse",
                price: 2.3,
              },
              {
                name: "Draw",
                price: 3.2,
              },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Clermont",
                price: 3.15,
              },
              {
                name: "Toulouse",
                price: 2.36,
              },
              {
                name: "Draw",
                price: 3.4,
              },
            ],
          },
        ],
      },
      {
        key: "coolbet",
        title: "Coolbet",
        last_update: "2024-03-28T21:19:54Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:19:54Z",
            outcomes: [
              {
                name: "Clermont",
                price: 3.15,
              },
              {
                name: "Toulouse",
                price: 2.42,
              },
              {
                name: "Draw",
                price: 3.34,
              },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Clermont",
                price: 3.1,
              },
              {
                name: "Toulouse",
                price: 2.3,
              },
              {
                name: "Draw",
                price: 3.4,
              },
            ],
          },
        ],
      },
      {
        key: "matchbook",
        title: "Matchbook",
        last_update: "2024-03-28T21:22:49Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:49Z",
            outcomes: [
              {
                name: "Clermont",
                price: 3.25,
              },
              {
                name: "Toulouse",
                price: 2.38,
              },
              {
                name: "Draw",
                price: 3.55,
              },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2024-03-28T21:22:49Z",
            outcomes: [
              {
                name: "Clermont",
                price: 3.4,
              },
              {
                name: "Toulouse",
                price: 2.44,
              },
              {
                name: "Draw",
                price: 3.6,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "154154a5a06a0799623705d8d87b8699",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2024-03-31T13:00:00Z",
    home_team: "Le Havre",
    away_team: "Montpellier",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 2.57,
              },
              {
                name: "Montpellier",
                price: 2.89,
              },
              {
                name: "Draw",
                price: 3.36,
              },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2024-03-28T21:18:33Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:18:33Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 2.62,
              },
              {
                name: "Montpellier",
                price: 2.95,
              },
              {
                name: "Draw",
                price: 3.45,
              },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 2.64,
              },
              {
                name: "Montpellier",
                price: 2.85,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 2.6,
              },
              {
                name: "Montpellier",
                price: 2.75,
              },
              {
                name: "Draw",
                price: 3.2,
              },
            ],
          },
        ],
      },
      {
        key: "betclic",
        title: "Betclic",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 2.48,
              },
              {
                name: "Montpellier",
                price: 2.74,
              },
              {
                name: "Draw",
                price: 3.3,
              },
            ],
          },
        ],
      },
      {
        key: "livescorebet_eu",
        title: "LiveScore Bet (EU)",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 2.4,
              },
              {
                name: "Montpellier",
                price: 2.65,
              },
              {
                name: "Draw",
                price: 3.05,
              },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 2.5,
              },
              {
                name: "Montpellier",
                price: 2.8,
              },
              {
                name: "Draw",
                price: 3.35,
              },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 2.52,
              },
              {
                name: "Montpellier",
                price: 2.8,
              },
              {
                name: "Draw",
                price: 3.35,
              },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 2.55,
              },
              {
                name: "Montpellier",
                price: 2.75,
              },
              {
                name: "Draw",
                price: 3.38,
              },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2024-03-28T21:22:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 2.6,
              },
              {
                name: "Montpellier",
                price: 2.96,
              },
              {
                name: "Draw",
                price: 3.35,
              },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 2.72,
              },
              {
                name: "Montpellier",
                price: 3.15,
              },
              {
                name: "Draw",
                price: 3.45,
              },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 2.5,
              },
              {
                name: "Montpellier",
                price: 2.7,
              },
              {
                name: "Draw",
                price: 3.4,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 2.65,
              },
              {
                name: "Montpellier",
                price: 2.75,
              },
              {
                name: "Draw",
                price: 3.35,
              },
            ],
          },
        ],
      },
      {
        key: "everygame",
        title: "Everygame",
        last_update: "2024-03-28T21:21:31Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:31Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 2.5,
              },
              {
                name: "Montpellier",
                price: 2.8,
              },
              {
                name: "Draw",
                price: 3.25,
              },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 2.58,
              },
              {
                name: "Montpellier",
                price: 2.87,
              },
              {
                name: "Draw",
                price: 3.35,
              },
            ],
          },
        ],
      },
      {
        key: "coolbet",
        title: "Coolbet",
        last_update: "2024-03-28T21:19:54Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:19:54Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 2.7,
              },
              {
                name: "Montpellier",
                price: 2.78,
              },
              {
                name: "Draw",
                price: 3.33,
              },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 2.55,
              },
              {
                name: "Montpellier",
                price: 2.8,
              },
              {
                name: "Draw",
                price: 3.4,
              },
            ],
          },
        ],
      },
      {
        key: "matchbook",
        title: "Matchbook",
        last_update: "2024-03-28T21:22:49Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:49Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 2.64,
              },
              {
                name: "Montpellier",
                price: 2.98,
              },
              {
                name: "Draw",
                price: 3.35,
              },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2024-03-28T21:22:49Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 2.7,
              },
              {
                name: "Montpellier",
                price: 3.05,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "b58b3733de3a0b7467e7c719f781844d",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2024-03-31T13:00:00Z",
    home_team: "Nice",
    away_team: "Nantes",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Nantes",
                price: 5.28,
              },
              {
                name: "Nice",
                price: 1.76,
              },
              {
                name: "Draw",
                price: 3.61,
              },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Nantes",
                price: 5.0,
              },
              {
                name: "Nice",
                price: 1.73,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2024-03-28T21:18:33Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:18:33Z",
            outcomes: [
              {
                name: "Nantes",
                price: 5.4,
              },
              {
                name: "Nice",
                price: 1.78,
              },
              {
                name: "Draw",
                price: 3.76,
              },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Nantes",
                price: 5.38,
              },
              {
                name: "Nice",
                price: 1.77,
              },
              {
                name: "Draw",
                price: 3.77,
              },
            ],
          },
        ],
      },
      {
        key: "betclic",
        title: "Betclic",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Nantes",
                price: 4.92,
              },
              {
                name: "Nice",
                price: 1.71,
              },
              {
                name: "Draw",
                price: 3.55,
              },
            ],
          },
        ],
      },
      {
        key: "livescorebet_eu",
        title: "LiveScore Bet (EU)",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Nantes",
                price: 4.6,
              },
              {
                name: "Nice",
                price: 1.63,
              },
              {
                name: "Draw",
                price: 3.3,
              },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Nantes",
                price: 4.9,
              },
              {
                name: "Nice",
                price: 1.75,
              },
              {
                name: "Draw",
                price: 3.55,
              },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Nantes",
                price: 4.9,
              },
              {
                name: "Nice",
                price: 1.75,
              },
              {
                name: "Draw",
                price: 3.55,
              },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Nantes",
                price: 5.05,
              },
              {
                name: "Nice",
                price: 1.74,
              },
              {
                name: "Draw",
                price: 3.6,
              },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2024-03-28T21:22:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Nantes",
                price: 5.6,
              },
              {
                name: "Nice",
                price: 1.81,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Nantes",
                price: 5.9,
              },
              {
                name: "Nice",
                price: 1.83,
              },
              {
                name: "Draw",
                price: 3.75,
              },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Nantes",
                price: 5.0,
              },
              {
                name: "Nice",
                price: 1.73,
              },
              {
                name: "Draw",
                price: 3.6,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Nantes",
                price: 5.4,
              },
              {
                name: "Nice",
                price: 1.75,
              },
              {
                name: "Draw",
                price: 3.6,
              },
            ],
          },
        ],
      },
      {
        key: "everygame",
        title: "Everygame",
        last_update: "2024-03-28T21:21:31Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:31Z",
            outcomes: [
              {
                name: "Nantes",
                price: 5.0,
              },
              {
                name: "Nice",
                price: 1.7,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Nantes",
                price: 5.1,
              },
              {
                name: "Nice",
                price: 1.79,
              },
              {
                name: "Draw",
                price: 3.57,
              },
            ],
          },
        ],
      },
      {
        key: "coolbet",
        title: "Coolbet",
        last_update: "2024-03-28T21:19:54Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:19:54Z",
            outcomes: [
              {
                name: "Nantes",
                price: 5.35,
              },
              {
                name: "Nice",
                price: 1.8,
              },
              {
                name: "Draw",
                price: 3.47,
              },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Nantes",
                price: 5.0,
              },
              {
                name: "Nice",
                price: 1.77,
              },
              {
                name: "Draw",
                price: 3.6,
              },
            ],
          },
        ],
      },
      {
        key: "matchbook",
        title: "Matchbook",
        last_update: "2024-03-28T21:22:49Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:49Z",
            outcomes: [
              {
                name: "Nantes",
                price: 5.7,
              },
              {
                name: "Nice",
                price: 1.81,
              },
              {
                name: "Draw",
                price: 3.6,
              },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2024-03-28T21:22:49Z",
            outcomes: [
              {
                name: "Nantes",
                price: 5.9,
              },
              {
                name: "Nice",
                price: 1.83,
              },
              {
                name: "Draw",
                price: 3.7,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "c0d6bed113eb13b15d404200bd11e265",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2024-03-31T15:05:00Z",
    home_team: "Strasbourg",
    away_team: "Rennes",
    bookmakers: [
      {
        key: "sport888",
        title: "888sport",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Rennes",
                price: 2.25,
              },
              {
                name: "Strasbourg",
                price: 3.2,
              },
              {
                name: "Draw",
                price: 3.4,
              },
            ],
          },
        ],
      },
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Rennes",
                price: 2.36,
              },
              {
                name: "Strasbourg",
                price: 3.14,
              },
              {
                name: "Draw",
                price: 3.43,
              },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Rennes",
                price: 2.35,
              },
              {
                name: "Strasbourg",
                price: 3.17,
              },
              {
                name: "Draw",
                price: 3.65,
              },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2024-03-28T21:18:33Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:18:33Z",
            outcomes: [
              {
                name: "Rennes",
                price: 2.42,
              },
              {
                name: "Strasbourg",
                price: 3.19,
              },
              {
                name: "Draw",
                price: 3.51,
              },
            ],
          },
        ],
      },
      {
        key: "betclic",
        title: "Betclic",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Rennes",
                price: 2.21,
              },
              {
                name: "Strasbourg",
                price: 3.02,
              },
              {
                name: "Draw",
                price: 3.48,
              },
            ],
          },
        ],
      },
      {
        key: "livescorebet_eu",
        title: "LiveScore Bet (EU)",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Rennes",
                price: 2.2,
              },
              {
                name: "Strasbourg",
                price: 2.85,
              },
              {
                name: "Draw",
                price: 3.1,
              },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Rennes",
                price: 2.3,
              },
              {
                name: "Strasbourg",
                price: 2.95,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Rennes",
                price: 2.32,
              },
              {
                name: "Strasbourg",
                price: 2.95,
              },
              {
                name: "Draw",
                price: 3.55,
              },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Rennes",
                price: 2.27,
              },
              {
                name: "Strasbourg",
                price: 3.06,
              },
              {
                name: "Draw",
                price: 3.52,
              },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Rennes",
                price: 2.25,
              },
              {
                name: "Strasbourg",
                price: 3.0,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Rennes",
                price: 2.33,
              },
              {
                name: "Strasbourg",
                price: 3.1,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2024-03-28T21:22:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Rennes",
                price: 2.36,
              },
              {
                name: "Strasbourg",
                price: 3.15,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Rennes",
                price: 2.44,
              },
              {
                name: "Strasbourg",
                price: 3.4,
              },
              {
                name: "Draw",
                price: 3.7,
              },
            ],
          },
        ],
      },
      {
        key: "everygame",
        title: "Everygame",
        last_update: "2024-03-28T21:21:31Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:31Z",
            outcomes: [
              {
                name: "Rennes",
                price: 2.3,
              },
              {
                name: "Strasbourg",
                price: 3.0,
              },
              {
                name: "Draw",
                price: 3.3,
              },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Rennes",
                price: 2.33,
              },
              {
                name: "Strasbourg",
                price: 3.12,
              },
              {
                name: "Draw",
                price: 3.51,
              },
            ],
          },
        ],
      },
      {
        key: "coolbet",
        title: "Coolbet",
        last_update: "2024-03-28T21:19:54Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:19:54Z",
            outcomes: [
              {
                name: "Rennes",
                price: 2.32,
              },
              {
                name: "Strasbourg",
                price: 3.18,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Rennes",
                price: 2.3,
              },
              {
                name: "Strasbourg",
                price: 3.0,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: "matchbook",
        title: "Matchbook",
        last_update: "2024-03-28T21:22:49Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:49Z",
            outcomes: [
              {
                name: "Rennes",
                price: 2.36,
              },
              {
                name: "Strasbourg",
                price: 3.2,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2024-03-28T21:22:49Z",
            outcomes: [
              {
                name: "Rennes",
                price: 2.44,
              },
              {
                name: "Strasbourg",
                price: 3.35,
              },
              {
                name: "Draw",
                price: 3.65,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "9fcc79d04ee0b37ef82b84d4d2438755",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2024-03-31T18:45:00Z",
    home_team: "Marseille",
    away_team: "Paris Saint Germain",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Marseille",
                price: 3.35,
              },
              {
                name: "Paris Saint Germain",
                price: 2.08,
              },
              {
                name: "Draw",
                price: 3.92,
              },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Marseille",
                price: 3.2,
              },
              {
                name: "Paris Saint Germain",
                price: 2.1,
              },
              {
                name: "Draw",
                price: 3.75,
              },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2024-03-28T21:18:33Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:18:33Z",
            outcomes: [
              {
                name: "Marseille",
                price: 3.47,
              },
              {
                name: "Paris Saint Germain",
                price: 2.11,
              },
              {
                name: "Draw",
                price: 4.0,
              },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Marseille",
                price: 3.46,
              },
              {
                name: "Paris Saint Germain",
                price: 2.11,
              },
              {
                name: "Draw",
                price: 3.96,
              },
            ],
          },
        ],
      },
      {
        key: "betclic",
        title: "Betclic",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Marseille",
                price: 3.23,
              },
              {
                name: "Paris Saint Germain",
                price: 2.0,
              },
              {
                name: "Draw",
                price: 3.85,
              },
            ],
          },
        ],
      },
      {
        key: "livescorebet_eu",
        title: "LiveScore Bet (EU)",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Marseille",
                price: 3.0,
              },
              {
                name: "Paris Saint Germain",
                price: 1.94,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Marseille",
                price: 3.25,
              },
              {
                name: "Paris Saint Germain",
                price: 2.08,
              },
              {
                name: "Draw",
                price: 3.7,
              },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Marseille",
                price: 3.3,
              },
              {
                name: "Paris Saint Germain",
                price: 2.08,
              },
              {
                name: "Draw",
                price: 3.7,
              },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Marseille",
                price: 3.5,
              },
              {
                name: "Paris Saint Germain",
                price: 2.13,
              },
              {
                name: "Draw",
                price: 4.0,
              },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2024-03-28T21:22:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Marseille",
                price: 3.35,
              },
              {
                name: "Paris Saint Germain",
                price: 2.14,
              },
              {
                name: "Draw",
                price: 4.0,
              },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Marseille",
                price: 3.55,
              },
              {
                name: "Paris Saint Germain",
                price: 2.18,
              },
              {
                name: "Draw",
                price: 4.2,
              },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Marseille",
                price: 3.3,
              },
              {
                name: "Paris Saint Germain",
                price: 2.0,
              },
              {
                name: "Draw",
                price: 3.9,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Marseille",
                price: 3.3,
              },
              {
                name: "Paris Saint Germain",
                price: 2.08,
              },
              {
                name: "Draw",
                price: 3.95,
              },
            ],
          },
        ],
      },
      {
        key: "everygame",
        title: "Everygame",
        last_update: "2024-03-28T21:21:31Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:31Z",
            outcomes: [
              {
                name: "Marseille",
                price: 3.25,
              },
              {
                name: "Paris Saint Germain",
                price: 2.0,
              },
              {
                name: "Draw",
                price: 3.75,
              },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Marseille",
                price: 3.35,
              },
              {
                name: "Paris Saint Germain",
                price: 2.05,
              },
              {
                name: "Draw",
                price: 4.04,
              },
            ],
          },
        ],
      },
      {
        key: "coolbet",
        title: "Coolbet",
        last_update: "2024-03-28T21:19:54Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:19:54Z",
            outcomes: [
              {
                name: "Marseille",
                price: 3.25,
              },
              {
                name: "Paris Saint Germain",
                price: 2.15,
              },
              {
                name: "Draw",
                price: 3.88,
              },
            ],
          },
        ],
      },
      {
        key: "matchbook",
        title: "Matchbook",
        last_update: "2024-03-28T21:22:49Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:49Z",
            outcomes: [
              {
                name: "Marseille",
                price: 3.4,
              },
              {
                name: "Paris Saint Germain",
                price: 2.14,
              },
              {
                name: "Draw",
                price: 4.0,
              },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2024-03-28T21:22:49Z",
            outcomes: [
              {
                name: "Marseille",
                price: 3.55,
              },
              {
                name: "Paris Saint Germain",
                price: 2.18,
              },
              {
                name: "Draw",
                price: 4.1,
              },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Marseille",
                price: 3.15,
              },
              {
                name: "Paris Saint Germain",
                price: 2.05,
              },
              {
                name: "Draw",
                price: 4.15,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "17911999201a46f946f14426b2be715d",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2024-04-05T19:00:00Z",
    home_team: "Lille",
    away_team: "Marseille",
    bookmakers: [
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.24,
              },
              {
                name: "Marseille",
                price: 3.14,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.32,
              },
              {
                name: "Marseille",
                price: 3.25,
              },
              {
                name: "Draw",
                price: 3.62,
              },
            ],
          },
        ],
      },
      {
        key: "betclic",
        title: "Betclic",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.18,
              },
              {
                name: "Marseille",
                price: 3.0,
              },
              {
                name: "Draw",
                price: 3.25,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.25,
              },
              {
                name: "Marseille",
                price: 3.25,
              },
              {
                name: "Draw",
                price: 3.55,
              },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2024-03-28T21:18:33Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:18:33Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.35,
              },
              {
                name: "Marseille",
                price: 3.26,
              },
              {
                name: "Draw",
                price: 3.57,
              },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.28,
              },
              {
                name: "Marseille",
                price: 3.05,
              },
              {
                name: "Draw",
                price: 3.45,
              },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.28,
              },
              {
                name: "Marseille",
                price: 3.05,
              },
              {
                name: "Draw",
                price: 3.45,
              },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.2,
              },
              {
                name: "Marseille",
                price: 3.1,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.25,
              },
              {
                name: "Marseille",
                price: 3.14,
              },
              {
                name: "Draw",
                price: 3.42,
              },
            ],
          },
        ],
      },
      {
        key: "livescorebet_eu",
        title: "LiveScore Bet (EU)",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.15,
              },
              {
                name: "Marseille",
                price: 2.9,
              },
              {
                name: "Draw",
                price: 3.15,
              },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.2,
              },
              {
                name: "Marseille",
                price: 3.2,
              },
              {
                name: "Draw",
                price: 3.4,
              },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2024-03-28T21:22:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.24,
              },
              {
                name: "Marseille",
                price: 3.15,
              },
              {
                name: "Draw",
                price: 3.4,
              },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Lille",
                price: 2.32,
              },
              {
                name: "Marseille",
                price: 3.8,
              },
              {
                name: "Draw",
                price: 4.1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "036b5e2735b43b9248bda2a4e6238a23",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2024-04-06T15:00:00Z",
    home_team: "RC Lens",
    away_team: "Le Havre",
    bookmakers: [
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 6.0,
              },
              {
                name: "RC Lens",
                price: 1.56,
              },
              {
                name: "Draw",
                price: 4.1,
              },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 6.21,
              },
              {
                name: "RC Lens",
                price: 1.62,
              },
              {
                name: "Draw",
                price: 4.25,
              },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2024-03-28T21:18:33Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:18:33Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 6.5,
              },
              {
                name: "RC Lens",
                price: 1.59,
              },
              {
                name: "Draw",
                price: 4.4,
              },
            ],
          },
        ],
      },
      {
        key: "betclic",
        title: "Betclic",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 5.65,
              },
              {
                name: "RC Lens",
                price: 1.51,
              },
              {
                name: "Draw",
                price: 3.82,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 6.25,
              },
              {
                name: "RC Lens",
                price: 1.57,
              },
              {
                name: "Draw",
                price: 4.1,
              },
            ],
          },
        ],
      },
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 6.02,
              },
              {
                name: "RC Lens",
                price: 1.54,
              },
              {
                name: "Draw",
                price: 4.07,
              },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 5.85,
              },
              {
                name: "RC Lens",
                price: 1.55,
              },
              {
                name: "Draw",
                price: 4.15,
              },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 5.85,
              },
              {
                name: "RC Lens",
                price: 1.55,
              },
              {
                name: "Draw",
                price: 4.1,
              },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 6.0,
              },
              {
                name: "RC Lens",
                price: 1.53,
              },
              {
                name: "Draw",
                price: 4.2,
              },
            ],
          },
        ],
      },
      {
        key: "livescorebet_eu",
        title: "LiveScore Bet (EU)",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 5.5,
              },
              {
                name: "RC Lens",
                price: 1.45,
              },
              {
                name: "Draw",
                price: 3.8,
              },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 6.5,
              },
              {
                name: "RC Lens",
                price: 1.53,
              },
              {
                name: "Draw",
                price: 4.0,
              },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2024-03-28T21:22:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 6.2,
              },
              {
                name: "RC Lens",
                price: 1.56,
              },
              {
                name: "Draw",
                price: 4.0,
              },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Le Havre",
                price: 8.2,
              },
              {
                name: "RC Lens",
                price: 1.64,
              },
              {
                name: "Draw",
                price: 5.0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "4c0297cf71839d5af95e925be29640d6",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2024-04-06T19:00:00Z",
    home_team: "Paris Saint Germain",
    away_team: "Clermont",
    bookmakers: [
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Clermont",
                price: 15.75,
              },
              {
                name: "Paris Saint Germain",
                price: 1.15,
              },
              {
                name: "Draw",
                price: 8.3,
              },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Clermont",
                price: 18.0,
              },
              {
                name: "Paris Saint Germain",
                price: 1.17,
              },
              {
                name: "Draw",
                price: 9.55,
              },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2024-03-28T21:18:33Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:18:33Z",
            outcomes: [
              {
                name: "Clermont",
                price: 17.0,
              },
              {
                name: "Paris Saint Germain",
                price: 1.17,
              },
              {
                name: "Draw",
                price: 10.0,
              },
            ],
          },
        ],
      },
      {
        key: "betclic",
        title: "Betclic",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Clermont",
                price: 12.0,
              },
              {
                name: "Paris Saint Germain",
                price: 1.15,
              },
              {
                name: "Draw",
                price: 7.1,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Clermont",
                price: 17.0,
              },
              {
                name: "Paris Saint Germain",
                price: 1.16,
              },
              {
                name: "Draw",
                price: 8.5,
              },
            ],
          },
        ],
      },
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Clermont",
                price: 13.7,
              },
              {
                name: "Paris Saint Germain",
                price: 1.14,
              },
              {
                name: "Draw",
                price: 8.61,
              },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Clermont",
                price: 18.0,
              },
              {
                name: "Paris Saint Germain",
                price: 1.15,
              },
              {
                name: "Draw",
                price: 7.7,
              },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Clermont",
                price: 18.0,
              },
              {
                name: "Paris Saint Germain",
                price: 1.15,
              },
              {
                name: "Draw",
                price: 7.8,
              },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Clermont",
                price: 17.0,
              },
              {
                name: "Paris Saint Germain",
                price: 1.12,
              },
              {
                name: "Draw",
                price: 9.0,
              },
            ],
          },
        ],
      },
      {
        key: "livescorebet_eu",
        title: "LiveScore Bet (EU)",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Clermont",
                price: 10.75,
              },
              {
                name: "Paris Saint Germain",
                price: 1.1,
              },
              {
                name: "Draw",
                price: 7.75,
              },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Clermont",
                price: 15.0,
              },
              {
                name: "Paris Saint Germain",
                price: 1.15,
              },
              {
                name: "Draw",
                price: 8.0,
              },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2024-03-28T21:22:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Clermont",
                price: 13.5,
              },
              {
                name: "Paris Saint Germain",
                price: 1.17,
              },
              {
                name: "Draw",
                price: 8.6,
              },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Clermont",
                price: 26.0,
              },
              {
                name: "Paris Saint Germain",
                price: 1.2,
              },
              {
                name: "Draw",
                price: 11.0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "d72fcc33d14d0673f50c09e60b4ce3f5",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2024-04-07T11:00:00Z",
    home_team: "Brest",
    away_team: "Metz",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Brest",
                price: 1.53,
              },
              {
                name: "Metz",
                price: 6.52,
              },
              {
                name: "Draw",
                price: 3.94,
              },
            ],
          },
        ],
      },
      {
        key: "betclic",
        title: "Betclic",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Brest",
                price: 1.49,
              },
              {
                name: "Metz",
                price: 6.15,
              },
              {
                name: "Draw",
                price: 3.72,
              },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2024-03-28T21:18:33Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:18:33Z",
            outcomes: [
              {
                name: "Brest",
                price: 1.58,
              },
              {
                name: "Metz",
                price: 7.0,
              },
              {
                name: "Draw",
                price: 4.2,
              },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Brest",
                price: 1.53,
              },
              {
                name: "Metz",
                price: 7.0,
              },
              {
                name: "Draw",
                price: 3.8,
              },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Brest",
                price: 1.59,
              },
              {
                name: "Metz",
                price: 6.88,
              },
              {
                name: "Draw",
                price: 4.12,
              },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Brest",
                price: 1.54,
              },
              {
                name: "Metz",
                price: 6.65,
              },
              {
                name: "Draw",
                price: 3.98,
              },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2024-03-28T21:22:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Brest",
                price: 1.52,
              },
              {
                name: "Metz",
                price: 6.4,
              },
              {
                name: "Draw",
                price: 3.9,
              },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Brest",
                price: 1.63,
              },
              {
                name: "Metz",
                price: 11.0,
              },
              {
                name: "Draw",
                price: 330.0,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Brest",
                price: 1.57,
              },
              {
                name: "Metz",
                price: 6.75,
              },
              {
                name: "Draw",
                price: 3.95,
              },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Brest",
                price: 1.52,
              },
              {
                name: "Metz",
                price: 6.8,
              },
              {
                name: "Draw",
                price: 3.9,
              },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Brest",
                price: 1.52,
              },
              {
                name: "Metz",
                price: 6.8,
              },
              {
                name: "Draw",
                price: 3.95,
              },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Brest",
                price: 1.53,
              },
              {
                name: "Metz",
                price: 6.5,
              },
              {
                name: "Draw",
                price: 3.9,
              },
            ],
          },
        ],
      },
      {
        key: "livescorebet_eu",
        title: "LiveScore Bet (EU)",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Brest",
                price: 1.44,
              },
              {
                name: "Metz",
                price: 5.75,
              },
              {
                name: "Draw",
                price: 3.7,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "55dd4eb465b276581add45a9f1835d61",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2024-04-07T13:00:00Z",
    home_team: "Montpellier",
    away_team: "Lorient",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Lorient",
                price: 4.81,
              },
              {
                name: "Montpellier",
                price: 1.65,
              },
              {
                name: "Draw",
                price: 4.07,
              },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Lorient",
                price: 5.0,
              },
              {
                name: "Montpellier",
                price: 1.67,
              },
              {
                name: "Draw",
                price: 4.0,
              },
            ],
          },
        ],
      },
      {
        key: "betclic",
        title: "Betclic",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Lorient",
                price: 4.65,
              },
              {
                name: "Montpellier",
                price: 1.61,
              },
              {
                name: "Draw",
                price: 3.8,
              },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2024-03-28T21:18:33Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:18:33Z",
            outcomes: [
              {
                name: "Lorient",
                price: 5.1,
              },
              {
                name: "Montpellier",
                price: 1.7,
              },
              {
                name: "Draw",
                price: 4.33,
              },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Lorient",
                price: 5.07,
              },
              {
                name: "Montpellier",
                price: 1.72,
              },
              {
                name: "Draw",
                price: 4.24,
              },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Lorient",
                price: 4.9,
              },
              {
                name: "Montpellier",
                price: 1.66,
              },
              {
                name: "Draw",
                price: 4.1,
              },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2024-03-28T21:22:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Lorient",
                price: 4.8,
              },
              {
                name: "Montpellier",
                price: 1.65,
              },
              {
                name: "Draw",
                price: 4.0,
              },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Lorient",
                price: 6.0,
              },
              {
                name: "Montpellier",
                price: 1.79,
              },
              {
                name: "Draw",
                price: 5.2,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Lorient",
                price: 4.9,
              },
              {
                name: "Montpellier",
                price: 1.68,
              },
              {
                name: "Draw",
                price: 4.1,
              },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Lorient",
                price: 4.65,
              },
              {
                name: "Montpellier",
                price: 1.65,
              },
              {
                name: "Draw",
                price: 4.15,
              },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Lorient",
                price: 4.7,
              },
              {
                name: "Montpellier",
                price: 1.68,
              },
              {
                name: "Draw",
                price: 4.15,
              },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Lorient",
                price: 4.8,
              },
              {
                name: "Montpellier",
                price: 1.65,
              },
              {
                name: "Draw",
                price: 4.0,
              },
            ],
          },
        ],
      },
      {
        key: "livescorebet_eu",
        title: "LiveScore Bet (EU)",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Lorient",
                price: 4.5,
              },
              {
                name: "Montpellier",
                price: 1.54,
              },
              {
                name: "Draw",
                price: 3.8,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "422dd3a297d914bcbc404eb68e6e9cc1",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2024-04-07T13:00:00Z",
    home_team: "Stade de Reims",
    away_team: "Nice",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Nice",
                price: 2.87,
              },
              {
                name: "Stade de Reims",
                price: 2.53,
              },
              {
                name: "Draw",
                price: 3.21,
              },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Nice",
                price: 2.88,
              },
              {
                name: "Stade de Reims",
                price: 2.5,
              },
              {
                name: "Draw",
                price: 3.2,
              },
            ],
          },
        ],
      },
      {
        key: "betclic",
        title: "Betclic",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Nice",
                price: 2.72,
              },
              {
                name: "Stade de Reims",
                price: 2.43,
              },
              {
                name: "Draw",
                price: 3.12,
              },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2024-03-28T21:18:33Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:18:33Z",
            outcomes: [
              {
                name: "Nice",
                price: 2.99,
              },
              {
                name: "Stade de Reims",
                price: 2.63,
              },
              {
                name: "Draw",
                price: 3.36,
              },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Nice",
                price: 2.99,
              },
              {
                name: "Stade de Reims",
                price: 2.6,
              },
              {
                name: "Draw",
                price: 3.38,
              },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Nice",
                price: 2.89,
              },
              {
                name: "Stade de Reims",
                price: 2.51,
              },
              {
                name: "Draw",
                price: 3.26,
              },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2024-03-28T21:22:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Nice",
                price: 2.86,
              },
              {
                name: "Stade de Reims",
                price: 2.52,
              },
              {
                name: "Draw",
                price: 3.2,
              },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Nice",
                price: 3.3,
              },
              {
                name: "Stade de Reims",
                price: 2.86,
              },
              {
                name: "Draw",
                price: 3.95,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Nice",
                price: 2.88,
              },
              {
                name: "Stade de Reims",
                price: 2.55,
              },
              {
                name: "Draw",
                price: 3.35,
              },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Nice",
                price: 2.85,
              },
              {
                name: "Stade de Reims",
                price: 2.5,
              },
              {
                name: "Draw",
                price: 3.25,
              },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Nice",
                price: 2.88,
              },
              {
                name: "Stade de Reims",
                price: 2.52,
              },
              {
                name: "Draw",
                price: 3.25,
              },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Nice",
                price: 2.8,
              },
              {
                name: "Stade de Reims",
                price: 2.45,
              },
              {
                name: "Draw",
                price: 3.4,
              },
            ],
          },
        ],
      },
      {
        key: "livescorebet_eu",
        title: "LiveScore Bet (EU)",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Nice",
                price: 2.67,
              },
              {
                name: "Stade de Reims",
                price: 2.4,
              },
              {
                name: "Draw",
                price: 3.0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "38aa681a21b8e185cb8bf30efabe7de3",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2024-04-07T13:00:00Z",
    home_team: "Toulouse",
    away_team: "Strasbourg",
    bookmakers: [
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Strasbourg",
                price: 3.55,
              },
              {
                name: "Toulouse",
                price: 2.03,
              },
              {
                name: "Draw",
                price: 3.55,
              },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Strasbourg",
                price: 3.6,
              },
              {
                name: "Toulouse",
                price: 2.0,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: "betclic",
        title: "Betclic",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Strasbourg",
                price: 3.28,
              },
              {
                name: "Toulouse",
                price: 1.99,
              },
              {
                name: "Draw",
                price: 3.4,
              },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2024-03-28T21:18:33Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:18:33Z",
            outcomes: [
              {
                name: "Strasbourg",
                price: 3.73,
              },
              {
                name: "Toulouse",
                price: 2.1,
              },
              {
                name: "Draw",
                price: 3.73,
              },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Strasbourg",
                price: 3.67,
              },
              {
                name: "Toulouse",
                price: 2.1,
              },
              {
                name: "Draw",
                price: 3.75,
              },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Strasbourg",
                price: 3.54,
              },
              {
                name: "Toulouse",
                price: 2.03,
              },
              {
                name: "Draw",
                price: 3.62,
              },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2024-03-28T21:22:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Strasbourg",
                price: 3.35,
              },
              {
                name: "Toulouse",
                price: 1.98,
              },
              {
                name: "Draw",
                price: 3.0,
              },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Strasbourg",
                price: 4.3,
              },
              {
                name: "Toulouse",
                price: 2.32,
              },
              {
                name: "Draw",
                price: 5.3,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Strasbourg",
                price: 3.55,
              },
              {
                name: "Toulouse",
                price: 2.07,
              },
              {
                name: "Draw",
                price: 3.65,
              },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Strasbourg",
                price: 3.45,
              },
              {
                name: "Toulouse",
                price: 2.02,
              },
              {
                name: "Draw",
                price: 3.7,
              },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Strasbourg",
                price: 3.45,
              },
              {
                name: "Toulouse",
                price: 2.02,
              },
              {
                name: "Draw",
                price: 3.7,
              },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Strasbourg",
                price: 3.4,
              },
              {
                name: "Toulouse",
                price: 2.0,
              },
              {
                name: "Draw",
                price: 3.7,
              },
            ],
          },
        ],
      },
      {
        key: "livescorebet_eu",
        title: "LiveScore Bet (EU)",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Strasbourg",
                price: 3.3,
              },
              {
                name: "Toulouse",
                price: 1.89,
              },
              {
                name: "Draw",
                price: 3.3,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "d00bec01cd3785c3c443a2139d3d655d",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2024-04-07T15:05:00Z",
    home_team: "AS Monaco",
    away_team: "Rennes",
    bookmakers: [
      {
        key: "sport888",
        title: "888sport",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.85,
              },
              {
                name: "Rennes",
                price: 4.0,
              },
              {
                name: "Draw",
                price: 3.75,
              },
            ],
          },
        ],
      },
      {
        key: "betclic",
        title: "Betclic",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.82,
              },
              {
                name: "Rennes",
                price: 3.63,
              },
              {
                name: "Draw",
                price: 3.63,
              },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.95,
              },
              {
                name: "Rennes",
                price: 3.96,
              },
              {
                name: "Draw",
                price: 4.01,
              },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2024-03-28T21:18:33Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:18:33Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.93,
              },
              {
                name: "Rennes",
                price: 4.1,
              },
              {
                name: "Draw",
                price: 4.0,
              },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.88,
              },
              {
                name: "Rennes",
                price: 3.82,
              },
              {
                name: "Draw",
                price: 3.88,
              },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2024-03-28T21:22:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.87,
              },
              {
                name: "Rennes",
                price: 3.85,
              },
              {
                name: "Draw",
                price: 3.8,
              },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 2.02,
              },
              {
                name: "Rennes",
                price: 4.9,
              },
              {
                name: "Draw",
                price: 4.8,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.88,
              },
              {
                name: "Rennes",
                price: 3.9,
              },
              {
                name: "Draw",
                price: 4.0,
              },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.88,
              },
              {
                name: "Rennes",
                price: 3.65,
              },
              {
                name: "Draw",
                price: 3.9,
              },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.9,
              },
              {
                name: "Rennes",
                price: 3.7,
              },
              {
                name: "Draw",
                price: 3.95,
              },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.85,
              },
              {
                name: "Rennes",
                price: 3.75,
              },
              {
                name: "Draw",
                price: 3.9,
              },
            ],
          },
        ],
      },
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.87,
              },
              {
                name: "Rennes",
                price: 3.85,
              },
              {
                name: "Draw",
                price: 3.8,
              },
            ],
          },
        ],
      },
      {
        key: "livescorebet_eu",
        title: "LiveScore Bet (EU)",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "AS Monaco",
                price: 1.75,
              },
              {
                name: "Rennes",
                price: 3.6,
              },
              {
                name: "Draw",
                price: 3.55,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2eaf03f8ffde77c18f17ad1743effece",
    sport_key: "soccer_france_ligue_one",
    sport_title: "Ligue 1 - France",
    commence_time: "2024-04-07T18:45:00Z",
    home_team: "Nantes",
    away_team: "Lyon",
    bookmakers: [
      {
        key: "betclic",
        title: "Betclic",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.19,
              },
              {
                name: "Nantes",
                price: 3.02,
              },
              {
                name: "Draw",
                price: 3.22,
              },
            ],
          },
        ],
      },
      {
        key: "sport888",
        title: "888sport",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.3,
              },
              {
                name: "Nantes",
                price: 3.2,
              },
              {
                name: "Draw",
                price: 3.25,
              },
            ],
          },
        ],
      },
      {
        key: "onexbet",
        title: "1xBet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.32,
              },
              {
                name: "Nantes",
                price: 3.31,
              },
              {
                name: "Draw",
                price: 3.54,
              },
            ],
          },
        ],
      },
      {
        key: "suprabets",
        title: "Suprabets",
        last_update: "2024-03-28T21:18:33Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:18:33Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.34,
              },
              {
                name: "Nantes",
                price: 3.37,
              },
              {
                name: "Draw",
                price: 3.47,
              },
            ],
          },
        ],
      },
      {
        key: "betfair_ex_eu",
        title: "Betfair",
        last_update: "2024-03-28T21:22:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.28,
              },
              {
                name: "Nantes",
                price: 3.25,
              },
              {
                name: "Draw",
                price: 3.35,
              },
            ],
          },
          {
            key: "h2h_lay",
            last_update: "2024-03-28T21:22:51Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.32,
              },
              {
                name: "Nantes",
                price: 3.75,
              },
              {
                name: "Draw",
                price: 3.95,
              },
            ],
          },
        ],
      },
      {
        key: "marathonbet",
        title: "Marathon Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.24,
              },
              {
                name: "Nantes",
                price: 3.2,
              },
              {
                name: "Draw",
                price: 3.42,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_eu",
        title: "Unibet",
        last_update: "2024-03-28T21:22:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:22:50Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.28,
              },
              {
                name: "Nantes",
                price: 3.25,
              },
              {
                name: "Draw",
                price: 3.45,
              },
            ],
          },
        ],
      },
      {
        key: "nordicbet",
        title: "Nordic Bet",
        last_update: "2024-03-28T21:21:28Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:28Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.28,
              },
              {
                name: "Nantes",
                price: 3.15,
              },
              {
                name: "Draw",
                price: 3.35,
              },
            ],
          },
        ],
      },
      {
        key: "betsson",
        title: "Betsson",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.28,
              },
              {
                name: "Nantes",
                price: 3.15,
              },
              {
                name: "Draw",
                price: 3.35,
              },
            ],
          },
        ],
      },
      {
        key: "williamhill",
        title: "William Hill",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.2,
              },
              {
                name: "Nantes",
                price: 3.1,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: "pinnacle",
        title: "Pinnacle",
        last_update: "2024-03-28T21:21:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:29Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.26,
              },
              {
                name: "Nantes",
                price: 3.22,
              },
              {
                name: "Draw",
                price: 3.31,
              },
            ],
          },
        ],
      },
      {
        key: "livescorebet_eu",
        title: "LiveScore Bet (EU)",
        last_update: "2024-03-28T21:21:30Z",
        markets: [
          {
            key: "h2h",
            last_update: "2024-03-28T21:21:30Z",
            outcomes: [
              {
                name: "Lyon",
                price: 2.15,
              },
              {
                name: "Nantes",
                price: 3.0,
              },
              {
                name: "Draw",
                price: 3.1,
              },
            ],
          },
        ],
      },
    ],
  },
];

let allClubs = [];

// Extracting all the clubs from the data
data.forEach((match) => {
  allClubs.push(match.home_team);
  allClubs.push(match.away_team);
});

// Removing duplicates
allClubs = [...new Set(allClubs)];

console.log(allClubs);
