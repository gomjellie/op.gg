import React from "react";
import { exampleSummoner } from "./summoner.t";

const QuickLook: React.FC<{summonerName: string}> = ({summonerName}) => {
  const {profileImageUrl, profileBorderImageUrl, ladderRank} = exampleSummoner;

  return (
    <div className="QuickLook">
      <div className="Seasons">
        <div className="SeasonBadge">S7 Silver</div>
        <div className="SeasonBadge">S8 Silver</div>
        <div className="SeasonBadge">S9 Gold</div>
        <div className="SeasonBadge">S2020 Gold</div>
      </div>
      <div className="QuickLookBottomContainer">
        <img className="Avatar" src={profileImageUrl} alt="avatar" />
        <img className="BorderImage" src={profileBorderImageUrl} alt="bracket" />

        <div className="UserNameAndRaderInfo">
          <div className="UserName"> {summonerName} </div>
          <div className="LadderRank">Ladder Rank {ladderRank.rank} ({ladderRank.rankPercentOfTop}% of top)</div>
        </div>
      </div>
    </div>
  );
};

export default QuickLook;
