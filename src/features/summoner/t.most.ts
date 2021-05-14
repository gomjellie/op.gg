type Most = {
  champions: {
    id: number;
    key: string;
    name: string;
    imageUrl: string;
    games: number;
    kills: number;
    deaths: number;
    assists: number;
    wins: number;
    losses: number;
    cs: number;
    rank: number;
  }[];
  recentWinRate: {
    id: number;
    key: string;
    name: string;
    imageUrl: string;
    wins: number;
    losses: number;
  }[];
};

const exampleMost: Most = {
  champions: [
    {
      id: 106,
      key: "Volibear",
      name: "Volibear",
      imageUrl:
        "//opgg-static.akamaized.net/images/lol/champion/Volibear.png?image=q_auto&v=1591083841",
      games: 79,
      kills: 170,
      deaths: 147,
      assists: 281,
      wins: 56,
      losses: 23,
      cs: 55,
      rank: 1,
    },
    {
      id: 34,
      key: "Anivia",
      name: "Anivia",
      imageUrl:
        "https://opgg-static.akamaized.net/images/lol/champion/Anivia.png?image=w_30&v=1",
      games: 80,
      kills: 175,
      deaths: 165,
      assists: 264,
      wins: 79,
      losses: 1,
      cs: 169,
      rank: 2,
    },
    {
      id: 82,
      key: "Mordekaiser",
      name: "Mordekaiser",
      imageUrl:
        "https:///opgg-static.akamaized.net/images/lol/champion/Mordekaiser.png?image=q_auto&v=1591083841",
      games: 69,
      kills: 223,
      deaths: 230,
      assists: 191,
      wins: 40,
      losses: 29,
      cs: 159,
      rank: 3,
    },
    {
      id: 236,
      key: "Lucian",
      name: "Lucian",
      imageUrl:
        "https://opgg-static.akamaized.net/images/lol/champion/Lucian.png?image=w_30&v=1",
      games: 84,
      kills: 113,
      deaths: 170,
      assists: 62,
      wins: 56,
      losses: 28,
      cs: 153,
      rank: 4,
    },
    {
      id: 106,
      key: "Volibear",
      name: "Volibear",
      imageUrl:
        "//opgg-static.akamaized.net/images/lol/champion/Volibear.png?image=q_auto&v=1591083841",
      games: 97,
      kills: 115,
      deaths: 46,
      assists: 71,
      wins: 73,
      losses: 24,
      cs: 195,
      rank: 5,
    },
    {
      id: 34,
      key: "Anivia",
      name: "Anivia",
      imageUrl:
        "https://opgg-static.akamaized.net/images/lol/champion/Anivia.png?image=w_30&v=1",
      games: 95,
      kills: 157,
      deaths: 7,
      assists: 53,
      wins: 65,
      losses: 30,
      cs: 168,
      rank: 6,
    },
    {
      id: 82,
      key: "Mordekaiser",
      name: "Mordekaiser",
      imageUrl:
        "https:///opgg-static.akamaized.net/images/lol/champion/Mordekaiser.png?image=q_auto&v=1591083841",
      games: 7,
      kills: 98,
      deaths: 170,
      assists: 225,
      wins: 4,
      losses: 3,
      cs: 112,
      rank: 7,
    },
    {
      id: 34,
      key: "Anivia",
      name: "Anivia",
      imageUrl:
        "https://opgg-static.akamaized.net/images/lol/champion/Anivia.png?image=w_30&v=1",
      games: 57,
      kills: 185,
      deaths: 237,
      assists: 104,
      wins: 18,
      losses: 39,
      cs: 167,
      rank: 8,
    },
  ],
  recentWinRate: [
    {
      id: 106,
      key: "Volibear",
      name: "Volibear",
      imageUrl:
        "//opgg-static.akamaized.net/images/lol/champion/Volibear.png?image=q_auto&v=1591083841",
      wins: 5,
      losses: 3,
    },
    {
      id: 106,
      key: "Volibear",
      name: "Volibear",
      imageUrl:
        "//opgg-static.akamaized.net/images/lol/champion/Volibear.png?image=q_auto&v=1591083841",
      wins: 10,
      losses: 5,
    },
  ],
};

export default Most;

export { exampleMost };
