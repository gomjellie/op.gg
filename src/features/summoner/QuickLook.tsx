import React from "react";
import { useSelector } from "react-redux";
import { selectPreviousTiers, selectSummoner } from "./summonerSlice";

const QuickLook: React.FC = () => {
  const summoner = useSelector(selectSummoner);
  const previousTiers = useSelector(selectPreviousTiers);

  return (
    <div className="QuickLook">
      <div className="Seasons">
        {previousTiers.map((prevTier) => (
          <div className="SeasonBadge" key={`SeasonBadge_${prevTier.season}`}>
            S{prevTier.season} {prevTier.shortString}
          </div>
        ))}
      </div>
      <div className="QuickLookBottomContainer">
        <img className="Avatar" src={summoner.profileImageUrl} alt="avatar" />
        <img
          className="BorderImage"
          src={summoner.profileBorderImageUrl}
          alt="bracket"
        />

        <div className="UserNameAndRaderInfo">
          <div className="UserName"> {summoner.name} </div>
          <span className="LadderRank">
            Ladder Rank
            <span className="Accent"> {summoner.ladderRank.rank} </span> (
            {summoner.ladderRank.rankPercentOfTop}% of top)
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuickLook;
