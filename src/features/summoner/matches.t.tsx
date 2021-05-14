type Game = {
  mmr: number | null;
  champion: {
    imageUrl: string;
    level: number;
  };
  spells: {
    imageUrl: string;
  }[];
  items: {
    imageUrl: string;
  }[];
  needRenew: boolean;
  gameId: string;
  createDate: number;
  gameLength: number;
  gameType: string;
  summonerId: string;
  summonerName: string;
  tierRankShort: string;
  stats: {
    general: {
      kill: number;
      death: number;
      assist: number;
      kdaString: string;
      cs: number;
      csPerMin: number;
      contributionForKillRate: string;
      goldEarned: number;
      totalDamageDealtToChampions: number;
      largestMultiKillString: string;
      opScoreBadge: string;
    };
    ward: {
      sightWardsBought: number;
      visionWardsBought: number;
    };
  };
  mapInfo: null;
  peak: string[];
  isWin: boolean;
};

type Matches = {
  games: Game[];
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
  }[];
  positions: {
    games: number;
    wins: number;
    losses: number;
    position: string;
    positionName: string;
  }[];
  summary: {
    wins: number;
    losses: number;
    kills: number;
    deaths: number;
    assists: number;
  };
};

const exampleMatches: Matches = {
  games: [
    {
      mmr: 664,
      champion: {
        imageUrl:
          "https://opgg-static.akamaized.net/images/lol/champion/Viktor.png",
        level: 11,
      },
      spells: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png",
        },
      ],
      items: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/1026.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/2031.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3020.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3020.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3340.png",
        },
      ],
      needRenew: false,
      gameId: "316421124",
      createDate: -1863,
      gameLength: 985,
      gameType: "Normal",
      summonerId: "11418747",
      summonerName: "pythonic",
      tierRankShort: "C1",
      stats: {
        general: {
          kill: 2,
          death: 4,
          assist: 3,
          kdaString: "1.25:1",
          cs: 156,
          csPerMin: 7.5,
          contributionForKillRate: "45%",
          goldEarned: 3910,
          totalDamageDealtToChampions: 3604,
          largestMultiKillString: "",
          opScoreBadge: "ACE",
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2,
        },
      },
      mapInfo: null,
      peak: [
        "https://opgg-static.akamaized.net/images/lol/perk/8229.png",
        "https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png",
      ],
      isWin: false,
    },
    {
      mmr: 491,
      champion: {
        imageUrl:
          "https://opgg-static.akamaized.net/images/lol/champion/Malzahar.png",
        level: 6,
      },
      spells: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png",
        },
      ],
      items: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3198.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3198.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3198.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/2031.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3198.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3340.png",
        },
      ],
      needRenew: false,
      gameId: "82247214",
      createDate: -4260,
      gameLength: 1727,
      gameType: "Flex 5:5 Rank",
      summonerId: "11418747",
      summonerName: "pythonic",
      tierRankShort: "C1",
      stats: {
        general: {
          kill: 4,
          death: 3,
          assist: 4,
          kdaString: "2.67:1",
          cs: 174,
          csPerMin: 7.5,
          contributionForKillRate: "3%",
          goldEarned: 4598,
          totalDamageDealtToChampions: 5960,
          largestMultiKillString: "",
          opScoreBadge: "ACE",
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2,
        },
      },
      mapInfo: null,
      peak: [
        "https://opgg-static.akamaized.net/images/lol/perk/8229.png",
        "https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png",
      ],
      isWin: false,
    },
    {
      mmr: 2897,
      champion: {
        imageUrl:
          "https://opgg-static.akamaized.net/images/lol/champion/Qiyana.png",
        level: 3,
      },
      spells: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png",
        },
      ],
      items: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/2031.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/1026.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3340.png",
        },
      ],
      needRenew: false,
      gameId: "68817372",
      createDate: -6263,
      gameLength: 2315,
      gameType: "Flex 5:5 Rank",
      summonerId: "11418747",
      summonerName: "pythonic",
      tierRankShort: "C1",
      stats: {
        general: {
          kill: 3,
          death: 1,
          assist: 2,
          kdaString: "5.00:1",
          cs: 124,
          csPerMin: 7.5,
          contributionForKillRate: "25%",
          goldEarned: 3719,
          totalDamageDealtToChampions: 3159,
          largestMultiKillString: "",
          opScoreBadge: "",
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2,
        },
      },
      mapInfo: null,
      peak: [
        "https://opgg-static.akamaized.net/images/lol/perk/8229.png",
        "https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png",
      ],
      isWin: true,
    },
    {
      mmr: 908,
      champion: {
        imageUrl:
          "https://opgg-static.akamaized.net/images/lol/champion/Viktor.png",
        level: 11,
      },
      spells: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png",
        },
      ],
      items: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3198.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3020.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/1026.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/1056.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/1026.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3364.png",
        },
      ],
      needRenew: false,
      gameId: "459410235",
      createDate: -8201,
      gameLength: 1631,
      gameType: "Ranked Solo",
      summonerId: "11418747",
      summonerName: "pythonic",
      tierRankShort: "C1",
      stats: {
        general: {
          kill: 8,
          death: 7,
          assist: 2,
          kdaString: "1.43:1",
          cs: 153,
          csPerMin: 7.5,
          contributionForKillRate: "57%",
          goldEarned: 4645,
          totalDamageDealtToChampions: 3345,
          largestMultiKillString: "Double Kill",
          opScoreBadge: "ACE",
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2,
        },
      },
      mapInfo: null,
      peak: [
        "https://opgg-static.akamaized.net/images/lol/perk/8229.png",
        "https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png",
      ],
      isWin: true,
    },
    {
      mmr: 831,
      champion: {
        imageUrl:
          "https://opgg-static.akamaized.net/images/lol/champion/Tristana.png",
        level: 7,
      },
      spells: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png",
        },
      ],
      items: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/1056.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3340.png",
        },
      ],
      needRenew: false,
      gameId: "390221028",
      createDate: -11425,
      gameLength: 1477,
      gameType: "ARAM",
      summonerId: "11418747",
      summonerName: "pythonic",
      tierRankShort: "C1",
      stats: {
        general: {
          kill: 2,
          death: 5,
          assist: 1,
          kdaString: "0.60:1",
          cs: 127,
          csPerMin: 7.5,
          contributionForKillRate: "36%",
          goldEarned: 4795,
          totalDamageDealtToChampions: 6989,
          largestMultiKillString: "",
          opScoreBadge: "",
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2,
        },
      },
      mapInfo: null,
      peak: [
        "https://opgg-static.akamaized.net/images/lol/perk/8229.png",
        "https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png",
      ],
      isWin: false,
    },
    {
      mmr: null,
      champion: {
        imageUrl:
          "https://opgg-static.akamaized.net/images/lol/champion/Galio.png",
        level: 20,
      },
      spells: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png",
        },
      ],
      items: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3198.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/1056.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3340.png",
        },
      ],
      needRenew: false,
      gameId: "357807914",
      createDate: -13990,
      gameLength: 235,
      gameType: "Flex 5:5 Rank",
      summonerId: "11418747",
      summonerName: "pythonic",
      tierRankShort: "C1",
      stats: {
        general: {
          kill: 0,
          death: 0,
          assist: 0,
          kdaString: "0.00:1",
          cs: 134,
          csPerMin: 7.5,
          contributionForKillRate: "9%",
          goldEarned: 3426,
          totalDamageDealtToChampions: 1104,
          largestMultiKillString: "",
          opScoreBadge: "ACE",
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2,
        },
      },
      mapInfo: null,
      peak: [
        "https://opgg-static.akamaized.net/images/lol/perk/8229.png",
        "https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png",
      ],
      isWin: false,
    },
    {
      mmr: 2059,
      champion: {
        imageUrl:
          "https://opgg-static.akamaized.net/images/lol/champion/Malzahar.png",
        level: 6,
      },
      spells: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png",
        },
      ],
      items: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3198.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3020.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3364.png",
        },
      ],
      needRenew: false,
      gameId: "122399819",
      createDate: -16245,
      gameLength: 724,
      gameType: "Normal",
      summonerId: "11418747",
      summonerName: "pythonic",
      tierRankShort: "C1",
      stats: {
        general: {
          kill: 5,
          death: 1,
          assist: 1,
          kdaString: "6.00:1",
          cs: 144,
          csPerMin: 7.5,
          contributionForKillRate: "30%",
          goldEarned: 1862,
          totalDamageDealtToChampions: 2324,
          largestMultiKillString: "Double Kill",
          opScoreBadge: "",
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2,
        },
      },
      mapInfo: null,
      peak: [
        "https://opgg-static.akamaized.net/images/lol/perk/8229.png",
        "https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png",
      ],
      isWin: false,
    },
    {
      mmr: 31,
      champion: {
        imageUrl:
          "https://opgg-static.akamaized.net/images/lol/champion/Anivia.png",
        level: 31,
      },
      spells: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png",
        },
      ],
      items: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3198.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3020.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/2031.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3340.png",
        },
      ],
      needRenew: false,
      gameId: "23121978",
      createDate: -18965,
      gameLength: 3187,
      gameType: "Normal",
      summonerId: "11418747",
      summonerName: "pythonic",
      tierRankShort: "C1",
      stats: {
        general: {
          kill: 4,
          death: 3,
          assist: 5,
          kdaString: "3.00:1",
          cs: 130,
          csPerMin: 7.5,
          contributionForKillRate: "53%",
          goldEarned: 1778,
          totalDamageDealtToChampions: 3582,
          largestMultiKillString: "Double Kill",
          opScoreBadge: "",
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2,
        },
      },
      mapInfo: null,
      peak: [
        "https://opgg-static.akamaized.net/images/lol/perk/8229.png",
        "https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png",
      ],
      isWin: false,
    },
    {
      mmr: 2500,
      champion: {
        imageUrl:
          "https://opgg-static.akamaized.net/images/lol/champion/Tristana.png",
        level: 7,
      },
      spells: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png",
        },
      ],
      items: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/1056.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/1026.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/2031.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3113.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3198.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3364.png",
        },
      ],
      needRenew: false,
      gameId: "227995277",
      createDate: -21054,
      gameLength: 3042,
      gameType: "Ranked Solo",
      summonerId: "11418747",
      summonerName: "pythonic",
      tierRankShort: "C1",
      stats: {
        general: {
          kill: 1,
          death: 6,
          assist: 5,
          kdaString: "1.00:1",
          cs: 135,
          csPerMin: 7.5,
          contributionForKillRate: "15%",
          goldEarned: 5768,
          totalDamageDealtToChampions: 4143,
          largestMultiKillString: "",
          opScoreBadge: "ACE",
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2,
        },
      },
      mapInfo: null,
      peak: [
        "https://opgg-static.akamaized.net/images/lol/perk/8229.png",
        "https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png",
      ],
      isWin: false,
    },
    {
      mmr: 2065,
      champion: {
        imageUrl:
          "https://opgg-static.akamaized.net/images/lol/champion/Tristana.png",
        level: 7,
      },
      spells: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png",
        },
      ],
      items: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/1056.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3364.png",
        },
      ],
      needRenew: false,
      gameId: "270766731",
      createDate: -23820,
      gameLength: 797,
      gameType: "Normal",
      summonerId: "11418747",
      summonerName: "pythonic",
      tierRankShort: "C1",
      stats: {
        general: {
          kill: 6,
          death: 5,
          assist: 4,
          kdaString: "2.00:1",
          cs: 185,
          csPerMin: 7.5,
          contributionForKillRate: "49%",
          goldEarned: 5173,
          totalDamageDealtToChampions: 2741,
          largestMultiKillString: "Double Kill",
          opScoreBadge: "ACE",
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2,
        },
      },
      mapInfo: null,
      peak: [
        "https://opgg-static.akamaized.net/images/lol/perk/8229.png",
        "https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png",
      ],
      isWin: false,
    },
    {
      mmr: 2413,
      champion: {
        imageUrl:
          "https://opgg-static.akamaized.net/images/lol/champion/Viktor.png",
        level: 11,
      },
      spells: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png",
        },
      ],
      items: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/2031.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3364.png",
        },
      ],
      needRenew: false,
      gameId: "290499526",
      createDate: -26639,
      gameLength: 2284,
      gameType: "Ranked Solo",
      summonerId: "11418747",
      summonerName: "pythonic",
      tierRankShort: "C1",
      stats: {
        general: {
          kill: 9,
          death: 2,
          assist: 2,
          kdaString: "5.50:1",
          cs: 134,
          csPerMin: 7.5,
          contributionForKillRate: "30%",
          goldEarned: 5765,
          totalDamageDealtToChampions: 589,
          largestMultiKillString: "Double Kill",
          opScoreBadge: "",
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2,
        },
      },
      mapInfo: null,
      peak: [
        "https://opgg-static.akamaized.net/images/lol/perk/8229.png",
        "https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png",
      ],
      isWin: false,
    },
    {
      mmr: 1743,
      champion: {
        imageUrl:
          "https://opgg-static.akamaized.net/images/lol/champion/Qiyana.png",
        level: 3,
      },
      spells: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png",
        },
      ],
      items: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/2031.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3198.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/1056.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3113.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3340.png",
        },
      ],
      needRenew: false,
      gameId: "222482126",
      createDate: -29971,
      gameLength: 2384,
      gameType: "Ranked Solo",
      summonerId: "11418747",
      summonerName: "pythonic",
      tierRankShort: "C1",
      stats: {
        general: {
          kill: 7,
          death: 3,
          assist: 4,
          kdaString: "3.67:1",
          cs: 191,
          csPerMin: 7.5,
          contributionForKillRate: "60%",
          goldEarned: 1315,
          totalDamageDealtToChampions: 5367,
          largestMultiKillString: "",
          opScoreBadge: "",
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2,
        },
      },
      mapInfo: null,
      peak: [
        "https://opgg-static.akamaized.net/images/lol/perk/8229.png",
        "https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png",
      ],
      isWin: false,
    },
    {
      mmr: 492,
      champion: {
        imageUrl:
          "https://opgg-static.akamaized.net/images/lol/champion/Lucian.png",
        level: 9,
      },
      spells: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png",
        },
      ],
      items: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/1056.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/1026.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/2031.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3020.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3364.png",
        },
      ],
      needRenew: false,
      gameId: "157720394",
      createDate: -32637,
      gameLength: 3065,
      gameType: "Flex 5:5 Rank",
      summonerId: "11418747",
      summonerName: "pythonic",
      tierRankShort: "C1",
      stats: {
        general: {
          kill: 9,
          death: 7,
          assist: 2,
          kdaString: "1.57:1",
          cs: 194,
          csPerMin: 7.5,
          contributionForKillRate: "39%",
          goldEarned: 5333,
          totalDamageDealtToChampions: 4724,
          largestMultiKillString: "Double Kill",
          opScoreBadge: "ACE",
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2,
        },
      },
      mapInfo: null,
      peak: [
        "https://opgg-static.akamaized.net/images/lol/perk/8229.png",
        "https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png",
      ],
      isWin: false,
    },
    {
      mmr: 1287,
      champion: {
        imageUrl:
          "https://opgg-static.akamaized.net/images/lol/champion/Galio.png",
        level: 20,
      },
      spells: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png",
        },
      ],
      items: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/1056.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3198.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/1056.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/1026.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3364.png",
        },
      ],
      needRenew: false,
      gameId: "62790477",
      createDate: -34749,
      gameLength: 3468,
      gameType: "ARAM",
      summonerId: "11418747",
      summonerName: "pythonic",
      tierRankShort: "C1",
      stats: {
        general: {
          kill: 3,
          death: 8,
          assist: 3,
          kdaString: "0.75:1",
          cs: 176,
          csPerMin: 7.5,
          contributionForKillRate: "13%",
          goldEarned: 1862,
          totalDamageDealtToChampions: 3251,
          largestMultiKillString: "Double Kill",
          opScoreBadge: "ACE",
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2,
        },
      },
      mapInfo: null,
      peak: [
        "https://opgg-static.akamaized.net/images/lol/perk/8229.png",
        "https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png",
      ],
      isWin: true,
    },
    {
      mmr: 2296,
      champion: {
        imageUrl:
          "https://opgg-static.akamaized.net/images/lol/champion/Jayce.png",
        level: 12,
      },
      spells: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png",
        },
      ],
      items: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/1056.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3113.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/1026.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3340.png",
        },
      ],
      needRenew: false,
      gameId: "81787087",
      createDate: -37080,
      gameLength: 3428,
      gameType: "Normal",
      summonerId: "11418747",
      summonerName: "pythonic",
      tierRankShort: "C1",
      stats: {
        general: {
          kill: 3,
          death: 4,
          assist: 3,
          kdaString: "1.50:1",
          cs: 102,
          csPerMin: 7.5,
          contributionForKillRate: "9%",
          goldEarned: 4826,
          totalDamageDealtToChampions: 4664,
          largestMultiKillString: "",
          opScoreBadge: "",
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2,
        },
      },
      mapInfo: null,
      peak: [
        "https://opgg-static.akamaized.net/images/lol/perk/8229.png",
        "https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png",
      ],
      isWin: true,
    },
    {
      mmr: 1891,
      champion: {
        imageUrl:
          "https://opgg-static.akamaized.net/images/lol/champion/Malzahar.png",
        level: 6,
      },
      spells: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png",
        },
      ],
      items: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/1056.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3113.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3340.png",
        },
      ],
      needRenew: false,
      gameId: "340397627",
      createDate: -40222,
      gameLength: 801,
      gameType: "ARAM",
      summonerId: "11418747",
      summonerName: "pythonic",
      tierRankShort: "C1",
      stats: {
        general: {
          kill: 3,
          death: 2,
          assist: 2,
          kdaString: "2.50:1",
          cs: 106,
          csPerMin: 7.5,
          contributionForKillRate: "52%",
          goldEarned: 2271,
          totalDamageDealtToChampions: 1470,
          largestMultiKillString: "",
          opScoreBadge: "ACE",
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2,
        },
      },
      mapInfo: null,
      peak: [
        "https://opgg-static.akamaized.net/images/lol/perk/8229.png",
        "https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png",
      ],
      isWin: true,
    },
    {
      mmr: 3157,
      champion: {
        imageUrl:
          "https://opgg-static.akamaized.net/images/lol/champion/Malzahar.png",
        level: 6,
      },
      spells: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png",
        },
      ],
      items: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3020.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/2031.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3198.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3198.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3113.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3340.png",
        },
      ],
      needRenew: false,
      gameId: "340246731",
      createDate: -43169,
      gameLength: 2534,
      gameType: "Ranked Solo",
      summonerId: "11418747",
      summonerName: "pythonic",
      tierRankShort: "C1",
      stats: {
        general: {
          kill: 6,
          death: 2,
          assist: 2,
          kdaString: "4.00:1",
          cs: 147,
          csPerMin: 7.5,
          contributionForKillRate: "19%",
          goldEarned: 55,
          totalDamageDealtToChampions: 4821,
          largestMultiKillString: "Double Kill",
          opScoreBadge: "",
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2,
        },
      },
      mapInfo: null,
      peak: [
        "https://opgg-static.akamaized.net/images/lol/perk/8229.png",
        "https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png",
      ],
      isWin: false,
    },
    {
      mmr: 2496,
      champion: {
        imageUrl:
          "https://opgg-static.akamaized.net/images/lol/champion/Lucian.png",
        level: 9,
      },
      spells: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png",
        },
      ],
      items: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/1056.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3364.png",
        },
      ],
      needRenew: false,
      gameId: "196061237",
      createDate: -46304,
      gameLength: 1908,
      gameType: "Normal",
      summonerId: "11418747",
      summonerName: "pythonic",
      tierRankShort: "C1",
      stats: {
        general: {
          kill: 1,
          death: 8,
          assist: 5,
          kdaString: "0.75:1",
          cs: 160,
          csPerMin: 7.5,
          contributionForKillRate: "54%",
          goldEarned: 1110,
          totalDamageDealtToChampions: 837,
          largestMultiKillString: "Double Kill",
          opScoreBadge: "",
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2,
        },
      },
      mapInfo: null,
      peak: [
        "https://opgg-static.akamaized.net/images/lol/perk/8229.png",
        "https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png",
      ],
      isWin: true,
    },
    {
      mmr: 1538,
      champion: {
        imageUrl:
          "https://opgg-static.akamaized.net/images/lol/champion/Tristana.png",
        level: 7,
      },
      spells: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png",
        },
      ],
      items: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/1026.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3364.png",
        },
      ],
      needRenew: false,
      gameId: "437665375",
      createDate: -48485,
      gameLength: 2873,
      gameType: "Normal",
      summonerId: "11418747",
      summonerName: "pythonic",
      tierRankShort: "C1",
      stats: {
        general: {
          kill: 8,
          death: 2,
          assist: 4,
          kdaString: "6.00:1",
          cs: 151,
          csPerMin: 7.5,
          contributionForKillRate: "56%",
          goldEarned: 4388,
          totalDamageDealtToChampions: 335,
          largestMultiKillString: "",
          opScoreBadge: "",
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2,
        },
      },
      mapInfo: null,
      peak: [
        "https://opgg-static.akamaized.net/images/lol/perk/8229.png",
        "https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png",
      ],
      isWin: true,
    },
    {
      mmr: 1416,
      champion: {
        imageUrl:
          "https://opgg-static.akamaized.net/images/lol/champion/Tristana.png",
        level: 7,
      },
      spells: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png",
        },
      ],
      items: [
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/1056.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3198.png",
        },
        {
          imageUrl:
            "https://opgg-static.akamaized.net/images/lol/item/3364.png",
        },
      ],
      needRenew: false,
      gameId: "143378109",
      createDate: -51326,
      gameLength: 1311,
      gameType: "Ranked Solo",
      summonerId: "11418747",
      summonerName: "pythonic",
      tierRankShort: "C1",
      stats: {
        general: {
          kill: 5,
          death: 1,
          assist: 5,
          kdaString: "10.00:1",
          cs: 137,
          csPerMin: 7.5,
          contributionForKillRate: "19%",
          goldEarned: 472,
          totalDamageDealtToChampions: 5022,
          largestMultiKillString: "Double Kill",
          opScoreBadge: "",
        },
        ward: {
          sightWardsBought: 0,
          visionWardsBought: 2,
        },
      },
      mapInfo: null,
      peak: [
        "https://opgg-static.akamaized.net/images/lol/perk/8229.png",
        "https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png",
      ],
      isWin: true,
    },
  ],
  champions: [
    {
      id: 90,
      key: "Malzahar",
      name: "Malzahar",
      imageUrl:
        "https://opgg-static.akamaized.net/images/lol/champion/Malzahar.png?image=w_30&v=1",
      games: 18,
      kills: 3,
      deaths: 20,
      assists: 19,
      wins: 8,
      losses: 10,
    },
    {
      id: 3,
      key: "Galio",
      name: "Galio",
      imageUrl:
        "https://opgg-static.akamaized.net/images/lol/champion/Galio.png?image=w_30&v=1",
      games: 1,
      kills: 19,
      deaths: 14,
      assists: 2,
      wins: 1,
      losses: 0,
    },
    {
      id: 112,
      key: "Viktor",
      name: "Viktor",
      imageUrl:
        "https://opgg-static.akamaized.net/images/lol/champion/Viktor.png?image=w_30&v=1",
      games: 1,
      kills: 11,
      deaths: 3,
      assists: 7,
      wins: 1,
      losses: 0,
    },
  ],
  positions: [
    {
      games: 17,
      wins: 13,
      losses: 4,
      position: "TOP",
      positionName: "Top",
    },
    {
      games: 3,
      wins: 1,
      losses: 2,
      position: "JNG",
      positionName: "Jungle",
    },
  ],
  summary: {
    wins: 10,
    losses: 10,
    kills: 33,
    deaths: 37,
    assists: 28,
  },
};

export default Matches;

export { exampleMatches };

export type { Game };
