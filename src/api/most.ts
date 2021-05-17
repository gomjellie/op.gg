import Most, { exampleMost } from "../features/summoner/t.most";

const getMost = async (summonerName: string) => {
  try {
    const response = await fetch(
      `https://codingtest.op.gg/api/summoner/${summonerName}/mostInfo?hl=en`
    ).then((res) => res.json());

    return response as Most;
  } catch {
    return exampleMost;
  }
};

export { getMost };
