type MatchDetails = {
  gameId: string;
  teams: {
    teamId: number;
    players: {
      champion: {
        imageUrl: string;
        level: number;
      };
      summonerId: string;
      summonerName: string;
    }[];
  }[];
};

const exampleMatchDetails: MatchDetails = {
  gameId: "82247214",
  teams: [
    {
      teamId: 1,
      players: [
        {
          champion: {
            imageUrl:
              "https://opgg-static.akamaized.net/images/lol/champion/Malzahar.png",
            level: 6,
          },
          summonerId: "3952328",
          summonerName: "pythonic",
        },
        {
          champion: {
            imageUrl:
              "https://opgg-static.akamaized.net/images/lol/champion/Lucian.png",
            level: 9,
          },
          summonerId: "2371276",
          summonerName: "T1 Cuzz",
        },
        {
          champion: {
            imageUrl:
              "https://opgg-static.akamaized.net/images/lol/champion/Malzahar.png",
            level: 6,
          },
          summonerId: "2441219",
          summonerName: "feng ji xu chui",
        },
        {
          champion: {
            imageUrl:
              "https://opgg-static.akamaized.net/images/lol/champion/Tristana.png",
            level: 7,
          },
          summonerId: "2716035",
          summonerName: "hope health",
        },
        {
          champion: {
            imageUrl:
              "https://opgg-static.akamaized.net/images/lol/champion/Qiyana.png",
            level: 3,
          },
          summonerId: "2890792",
          summonerName: "UijU",
        },
      ],
    },
    {
      teamId: 2,
      players: [
        {
          champion: {
            imageUrl:
              "https://opgg-static.akamaized.net/images/lol/champion/Anivia.png",
            level: 31,
          },
          summonerId: "3260151",
          summonerName: "knightzz",
        },
        {
          champion: {
            imageUrl:
              "https://opgg-static.akamaized.net/images/lol/champion/Anivia.png",
            level: 31,
          },
          summonerId: "1890657",
          summonerName: "Lehends",
        },
        {
          champion: {
            imageUrl:
              "https://opgg-static.akamaized.net/images/lol/champion/Galio.png",
            level: 20,
          },
          summonerId: "2903256",
          summonerName: "읽씹맨",
        },
        {
          champion: {
            imageUrl:
              "https://opgg-static.akamaized.net/images/lol/champion/Anivia.png",
            level: 31,
          },
          summonerId: "2447651",
          summonerName: "T1 Kuri",
        },
        {
          champion: {
            imageUrl:
              "https://opgg-static.akamaized.net/images/lol/champion/Jayce.png",
            level: 12,
          },
          summonerId: "1914193",
          summonerName: "hope health",
        },
      ],
    },
  ],
};

export default MatchDetails;

export { exampleMatchDetails };
