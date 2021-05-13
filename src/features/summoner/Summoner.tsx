import React from "react";
import { RouteComponentProps } from "react-router-dom";
import SearchBar from "./SearchBar";
import QuickLook from "./QuickLook";
import OverView from "./OverView";
import GameRecord from "./GameRecord";
import RankGameOverView from "./RankGameOverView";
import WinRatioSummary from "./WinRatioSummary";

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
          <WinRatioSummary />
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
