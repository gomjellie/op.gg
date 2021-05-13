import React from "react";
import { RouteComponentProps } from "react-router-dom";
import OverView from "./OverView";
import GameRecord from "./GameRecord";
import GGSvg from "../../assets/GG.svg";
import AvatarImg from "../../assets/avatar.jpg";
import GoldBracket from "../../assets/gold.png";
import RankIcon from "../../assets/gold_3.png";
import UnRankedIcon from "../../assets/unranked@2x.png";

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
          <img height="14" src={GGSvg} alt="GG" />
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
          <img className="Avatar" src={AvatarImg} alt="avatar" />
          <img className="BorderImage" src={GoldBracket} alt="bracket" />

          <div className="UserNameAndRaderInfo">
            <div className="UserName"> {userName} </div>
            <div className="LadderRank">Ladder Rank 962,248 (26% of top)</div>
          </div>
        </div>
      </div>
      <main className="SummonerBody">
        <div className="SideContent">
          <div className="RankGame">
            <div className="RankIconWrapper">
              <img className="RankIcon" src={RankIcon} alt="gold3" />
            </div>
            <div className="RankInfo">
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
          <div className="RankGame">
            <div className="RankIconWrapper">
              <img className="UnRanked" src={UnRankedIcon} alt="gold3" />
            </div>
            <div className="RankInfo">
              <div className="GameType">Flex 5:5 Rank</div>
              <div className="Tier">Unranked</div>
            </div>
          </div>
          <div className="ChampsWinRateBox">
            <div className="LRContainer">
              <div className="ChampsWinRateButton Selected">Champion Win ratio</div>
              <div className="ChampsWinRateButton">Rank win rate per week</div>
            </div>
            <div className="WinRateItem">
              <img className="ChampAvatar" src={AvatarImg} alt=""/>
              <div className="TDContainer1">
                <div className="Top1">신지드</div>
                <div className="Down1">CS 67.8 (2.4)</div>
              </div>
              <div className="TDContainer2">
                <div className="Top2">2.47 평점</div>
                <div className="Down2">4.3 / 6.1 / 10.7</div>
              </div>
              <div className="TDContainer3">
                <div className="Top3">69%</div>
                <div className="Down3">35게임</div>
              </div>
            </div>
            <div className="WinRateItem">
              <img className="ChampAvatar" src={AvatarImg} alt=""/>
              <div className="TDContainer1">
                <div className="Top1">리산드라</div>
                <div className="Down1">CS 67.8 (2.4)</div>
              </div>
              <div className="TDContainer2">
                <div className="Top2">4.53 평점</div>
                <div className="Down2">6.6 / 3.0 / 6.8</div>
              </div>
              <div className="TDContainer3">
                <div className="Top3">71%</div>
                <div className="Down3">34게임</div>
              </div>
            </div>
          </div>
        </div>
        <div className="RealContent">
          <div className="QueueTypes">
            <div className="QueueType">Total</div>
            <div className="QueueType Selected">Ranked Solo</div>
            <div className="QueueType">Ranked Flex</div>
          </div>
          <OverView />
          <div className="GameRecords">
            <GameRecord />
            <GameRecord />
            <GameRecord />
            <GameRecord />
            <GameRecord />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Summoner;
