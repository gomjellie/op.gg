import React from "react";
import { RouteComponentProps } from "react-router-dom";
import GGSvg from "../../assets/GG.svg";
import AvatarImg from "../../assets/avatar.jpg";
import GoldBracket from "../../assets/gold.png";
import RankIcon from "../../assets/gold_3.png";

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
            <div className="SoloRankIconWrapper">
              <img className="SoloRankIcon"  src={RankIcon} alt="gold3" />
            </div>
            <div className="SoloRankInfo">
              <div className="GameType">Ranked Solo</div>
              <div className="PreferredPosition">top (total 27 Played)</div>
              <div className="Tier">Platinum 2</div>
              <div className="Points">
                <div className="LP">80 Lp </div>
                <div className="WL">&nbsp; / 17W 14L</div>
              </div>
              <div className="LeagueName">Win Ratio 55%</div>
            </div>
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
