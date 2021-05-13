import React from "react";
import { RouteComponentProps } from "react-router-dom";
import SearchBar from "./SearchBar";
import QuickLook from "./QuickLook";
import OverView from "./OverView";
import GameRecord from "./GameRecord";
import RankGameOverView from "./RankGameOverView";
import AvatarImg from "../../assets/avatar.jpg";

interface MatchParams {
  userName: string;
}

const Summoner = ({ match }: RouteComponentProps<MatchParams>) => {
  const { userName } = match.params;

  return (
    <div className="Summoner">
      <SearchBar />
      <QuickLook summonerName={userName} />
      <main className="SummonerBody">
        <div className="SideContent">
          <RankGameOverView summonerName={userName} rankType="솔랭"/>
          <RankGameOverView summonerName={userName} rankType="자유 5:5 랭크"/>
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
