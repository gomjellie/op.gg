import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import SearchBar from "./SearchBar";
import QuickLook from "./QuickLook";
import Summary from "./Summary";
import GameRecordList from "./GameRecordList";
import RankGameOverView from "./RankGameOverView";
import WinRatioSummary from "./WinRatioSummary";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchMatches,
  selectGameType,
  selectMatchesStatus,
  switchGameType,
} from "./matchesSlice";
import { fetchSummoner, selectSummonerStatus } from "./summonerSlice";
import { fetchMost, selectMostStatus } from "./mostSlice";

interface MatchParams {
  userName: string;
}

const Summoner: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const { userName } = match.params;
  const gameType = useSelector(selectGameType);
  const dispatch = useDispatch();
  const summonerStatus = useSelector(selectSummonerStatus);
  const mostStatus = useSelector(selectMostStatus);
  const matchesStatus = useSelector(selectMatchesStatus);

  useEffect(() => {
    if (summonerStatus === "idle") {
      dispatch(fetchSummoner(userName));
    }
  }, [summonerStatus, userName, dispatch]);

  useEffect(() => {
    if (mostStatus === "idle") {
      dispatch(fetchMost(userName));
    }
  }, [mostStatus, userName, dispatch]);

  useEffect(() => {
    if (matchesStatus === "idle") {
      dispatch(fetchMatches(userName));
    }
  }, [matchesStatus, userName, dispatch]);

  return (
    <div className="Summoner">
      <SearchBar />
      <QuickLook />
      <main className="SummonerBody">
        <div className="SideContent">
          <RankGameOverView rankType="Ranked Solo" />
          <RankGameOverView rankType="Flex 5:5 Rank" />
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
