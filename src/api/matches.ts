import Matches, { exampleMatches } from "../features/summoner/t.matches";

const getMatches = async (summonerName: string) => {
  try {
    const response = await fetch(
      `https://codingtest.op.gg/api/summoner/${summonerName}/matches?hl=en`
    ).then((res) => res.json());

    return response as Matches;
  } catch {
    return exampleMatches;
  }
};

export { getMatches };
