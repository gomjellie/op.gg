import Summoner, { exampleSummoner } from "../features/summoner/t.summoner";

const getSummoner = async (summonerName: string) => {
  try {
    const response = await fetch(
      `https://codingtest.op.gg/api/summoner/${summonerName}?hl=en`
    ).then((res) => res.json());

    return (response as { summoner: Summoner }).summoner;
  } catch {
    return exampleSummoner;
  }
};

export { getSummoner };
