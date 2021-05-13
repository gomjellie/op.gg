import React from "react";
import { useSelector } from "react-redux";
import UnrankedIcon from "../../assets/unranked.png";
import { selectSummoner } from "./summonerSlice";

interface Props {
  rankType: "솔랭" | "자유 5:5 랭크";
}

const RankGameOverView: React.FC<Props> = ({ rankType }) => {
  const summoner = useSelector(selectSummoner);
  const league = summoner.leagues.filter((league) => {
    if (!league.hasResults) return false;
    return league.tierRank.name === rankType;
  })?.[0];

  if (league === undefined) {
    return (
      <div className="RankGame">
        <div className="RankIconWrapper">
          <img className="RankIcon" src={UnrankedIcon} alt="gold3" />
        </div>
        <div className="RankInfo">
          <div className="GameType">{rankType}</div>
          <div className="Tier">Unranked</div>
        </div>
      </div>
    );
  }

  const winRate = Math.floor(
    (league.wins / (league.wins + league.losses || 1)) * 100
  );

  return (
    <div className="RankGame">
      <div className="RankIconWrapper">
        <img className="RankIcon" src={league.tierRank.imageUrl} alt="gold3" />
      </div>
      <div className="RankInfo">
        <div className="GameType">{league.tierRank.name}</div>
        <div className="PreferredPosition">top (total 27 Played)</div>
        <div className="Tier">{league.tierRank.tier}</div>
        <div className="Points">
          <div className="LP">{league.tierRank.lp}</div>
          <div className="WL">
            &nbsp; / {league.wins}W {league.losses}L
          </div>
        </div>
        <div className="LeagueName">Win Ratio {winRate}%</div>
      </div>
    </div>
  );
};

export default RankGameOverView;
