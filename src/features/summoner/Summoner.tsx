import React from "react";
import { RouteComponentProps } from "react-router-dom";
import SearchBar from "./SearchBar";
import QuickLook from "./QuickLook";
import Summary from "./Summary";
import GameRecordList from "./GameRecordList";
import RankGameOverView from "./RankGameOverView";
import WinRatioSummary from "./WinRatioSummary";
import { useSelector, useDispatch } from "react-redux";
import { selectGameType, switchGameType } from "./matchesSlice";

interface MatchParams {
  userName: string;
}

const Summoner: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  // const { userName } = match.params;
  const gameType = useSelector(selectGameType);
  const dispatch = useDispatch();

  return (
    <div className="Summoner">
      <SearchBar />
      <QuickLook />
      <main className="SummonerBody">
        <div className="SideContent">
          <RankGameOverView rankType="솔랭" />
          <RankGameOverView rankType="자유 5:5 랭크" />
          <WinRatioSummary />
        </div>
        <div className="RealContent">
          <div className="QueueTypes">
            <div
              className={`QueueType ${gameType === "Total" ? "Selected" : ""}`}
              onClick={(e) => {
                dispatch(switchGameType({ gameType: "Total" }));
              }}
            >
              Total
            </div>
            <div
              className={`QueueType ${
                gameType === "Ranked Solo" ? "Selected" : ""
              }`}
              onClick={(e) => {
                dispatch(switchGameType({ gameType: "Ranked Solo" }));
              }}
            >
              Ranked Solo
            </div>
            <div
              className={`QueueType ${
                gameType === "Ranked Flex" ? "Selected" : ""
              }`}
              onClick={(e) => {
                dispatch(switchGameType({ gameType: "Ranked Flex" }));
              }}
            >
              Ranked Flex
            </div>
          </div>
          <Summary />
          <GameRecordList />
        </div>
      </main>
    </div>
  );
};

export default Summoner;
