import React from "react";
import { RouteComponentProps } from "react-router-dom";
import GGSvg from "../../assets/GG.svg";
import AvatarImg from "../../assets/avatar.jpg";
import GoldBracket from "../../assets/gold.png";

interface MatchParams {
  userName: string;
}

const Summoner = ({ match }: RouteComponentProps<MatchParams>) => {
  const { userName } = match.params;

  return (
    <div className="Summoner">
      <div className="SearchBar">
        <div className="SearchInputBox">
          <input placeholder="소환사명, 챔피언..."></input>
          <img height="14" src={GGSvg} alt="GG"/>
        </div>
      </div>
      <div className="QuickLook">
        <div className="Seasons">
          <div className="SeasonBadge">S7 Silver</div>
          <div className="SeasonBadge">S8 Silver</div>
          <div className="SeasonBadge">S9 Gold</div>
          <div className="SeasonBadge">S2020 Gold</div>
        </div>
        <div className="QuickLookBottomContainer">
          <img className="Avatar" src={AvatarImg} alt="avatar"/>
          <img className="BorderImage" src={GoldBracket} alt="bracket" />
            
          <div className="UserNameAndRaderInfo">
            <div className="UserName"> {userName} </div>
            <div className="LadderRank">Ladder Rank 962,248 (26% of top)</div>
          </div>
        </div>
      </div>
      <main className="SummonerBody">
        <div className="SideContent">
          <div className="RankedSolo">
            <div className="SoloRankIconWrapper"></div>
            <div className="SoloRankInfo"></div>
          </div>
          <div className="FlexRank"></div>
          <div className="WinRateBox"></div>
        </div>
        <div className="RealContent">
          <div className="QueueTypes">
            <div className="QueueType">Total</div>
            <div className="QueueType Selected">Ranked Solo</div>
            <div className="QueueType">Ranked Flex</div>
          </div>
          <div className="Overview"></div>
          <div className="GameRecords">
            <div className="GameRecord"></div>
            <div className="GameRecord"></div>
            <div className="GameRecord"></div>
            <div className="GameRecord"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Summoner;
