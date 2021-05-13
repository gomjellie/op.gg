type Summoner = {
  name: string;
  level: number;
  profileImageUrl: string;
  profileBorderImageUrl: string;
  url: string;
  leagues: {
    hasResults: boolean;
    wins: number;
    losses: number;
    tierRank: {
      name: string;
      tier: string;
      tierDivision: string;
      string: string;
      shortString: string;
      division: string;
      imageUrl: string;
      lp: number;
      tierRankPoint: number;
    };
  }[];
  previousTiers: {
    name: string;
    tier: string;
    tierDivision: string;
    string: string;
    shortString: string;
    division: string;
    imageUrl: string;
    lp: number;
    tierRankPoint: number;
    season: number;
  }[];
  ladderRank: {
    rank: number;
    rankPercentOfTop: number;
  };
  profileBackgroundImageUrl: string;
};

const exampleSummoner: Summoner = {
  name: "gomjellie",
  level: 106,
  profileImageUrl:
    "https://opgg-static.akamaized.net/images/profile_icons/profileIcon1625.jpg",
  profileBorderImageUrl:
    "https://opgg-static.akamaized.net/images/borders2/challenger.png",
  url: "https://www.op.gg/summoner/userName=gomjellie",
  leagues: [
    {
      hasResults: true,
      wins: 762,
      losses: 251,
      tierRank: {
        name: "솔랭",
        tier: "Challenger",
        tierDivision: "Challenger",
        string: "Challenger (644LP)",
        shortString: "C1",
        division: "i",
        imageUrl:
          "https://opgg-static.akamaized.net/images/medals/challenger_1.png",
        lp: 644,
        tierRankPoint: 404,
      },
    },
    {
      hasResults: true,
      wins: 186,
      losses: 689,
      tierRank: {
        name: "자유 5:5 랭크",
        tier: "Platinum",
        tierDivision: "Platinum",
        string: "Platinum (582LP)",
        shortString: "P1",
        division: "i",
        imageUrl:
          "https://opgg-static.akamaized.net/images/medals/platinum_1.png",
        lp: 582,
        tierRankPoint: 317,
      },
    },
  ],
  previousTiers: [
    {
      name: "솔랭",
      tier: "Grandmaster",
      tierDivision: "Grandmaster",
      string: "Grandmaster (497LP)",
      shortString: "GM1",
      division: "i",
      imageUrl:
        "https://opgg-static.akamaized.net/images/medals/grandmaster_1.png",
      lp: 497,
      tierRankPoint: 406,
      season: 9,
    },
    {
      name: "솔랭",
      tier: "Diamond",
      tierDivision: "Diamond",
      string: "Diamond (950LP)",
      shortString: "D1",
      division: "i",
      imageUrl: "https://opgg-static.akamaized.net/images/medals/diamond_1.png",
      lp: 950,
      tierRankPoint: 13,
      season: 8,
    },
    {
      name: "솔랭",
      tier: "Diamond",
      tierDivision: "Diamond",
      string: "Diamond (144LP)",
      shortString: "D1",
      division: "i",
      imageUrl: "https://opgg-static.akamaized.net/images/medals/diamond_1.png",
      lp: 144,
      tierRankPoint: 159,
      season: 7,
    },
  ],
  ladderRank: {
    rank: 164043,
    rankPercentOfTop: 6,
  },
  profileBackgroundImageUrl:
    "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taliyah_0.jpg",
};

export default Summoner;

export { exampleSummoner };
