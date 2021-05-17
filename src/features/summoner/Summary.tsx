import React, { useCallback } from "react";
import { Pie } from "react-chartjs-2";
import { colorOfKDA, colorOfScore, colorOfWinRatio } from "../../utils/colors";
import SupImg from "../../assets/mostpositions/sup.png";
import AdcImg from "../../assets/mostpositions/adc.png";
import MidImg from "../../assets/mostpositions/mid.png";
import TopImg from "../../assets/mostpositions/top.png";
import JngImg from "../../assets/mostpositions/jungle.png";

import { useSelector } from "react-redux";
import {
  selectSummary,
  selectChampions,
  selectPositions,
} from "./matchesSlice";
import { toFloatPrecision as fp } from "../../utils/numbers";

type Position = "TOP" | "JNG" | "MID" | "ADC" | "SUP";

const OverView: React.FC = () => {
  const summary = useSelector(selectSummary);
  const champions = useSelector(selectChampions);
  const positions = useSelector(selectPositions);

  const chartDataFactory = useCallback(() => {
    return {
      datasets: [
        {
          data: [summary!.losses, summary!.wins],
          backgroundColor: ["#ee5a52", "#1f8ecd"],
          borderWidth: 0,
        },
      ],
    };
  }, [summary]);

  const positionImgFactory = (position: Position) => {
    if (position === "ADC") return AdcImg;
    if (position === "JNG") return JngImg;
    if (position === "MID") return MidImg;
    if (position === "SUP") return SupImg;
    if (position === "TOP") return TopImg;
  };

  if (
    summary === undefined ||
    champions === undefined ||
    positions === undefined
  ) {
    return <div className="Summary" />;
  }

  return (
    <div className="Summary">
      <div className="OveralWinRate">
        <div className="Left">
          <div className="CurrentTwentyGames">
            {summary.wins + summary.losses}G {summary.wins}W {summary.losses}L
          </div>
          <div className="ChartContainer">
            <Pie
              type
              data={chartDataFactory()}
              options={{
                tooltips: { enabled: false },
                // hover: { mode: null },
              }}
            />
            <div className="CurrentWinRatio">
              {fp(summary.wins * 100, summary.wins + summary.losses, 0)}%
            </div>
          </div>
        </div>
        <div className="Right">
          <div className="AverageKDAs">
            <div className="AverageKill">
              {fp(summary.kills, summary.wins + summary.losses)}
            </div>
            /
            <div className="AverageDeath">
              {fp(summary.deaths, summary.wins + summary.losses)}
            </div>
            /
            <div className="AverageAssist">
              {fp(summary.assists, summary.wins + summary.losses)}
            </div>
          </div>
          <div className="Avg">
            <div
              className={`KDARatio ${colorOfKDA(
                (summary.kills + summary.assists) / summary.deaths
              )}`}
            >
              {fp(summary.kills + summary.assists, summary.deaths, 2)}:1
            </div>
            (
            <div
              className={`WinRatio ${colorOfWinRatio(
                summary.wins / (summary.wins + summary.losses)
              )}`}
            >
              {fp(summary.wins * 100, summary.wins + summary.losses, 0)}%
            </div>
            )
          </div>
        </div>
      </div>
      <div className="MostChampWinRatios">
        {champions.map((champ, idx) => {
          return (
            <div
              className="MostChampWinRatio"
              key={`MostChampWinRatio_${champ.name}_${idx}`}
              /* Key 안전하지 않을 수 있음 */
            >
              <img className="ChampAvatar" src={champ.imageUrl} alt="" />
              <div className="RContainer">
                <div className="Up">{champ.name}</div>
                <div className="Down">
                  <span
                    className={`WinRatio ${colorOfWinRatio(
                      champ.wins / champ.games
                    )}`}
                  >
                    {fp(champ.wins * 100, champ.games, 0)}%
                  </span>
                  <span className="WinLoose">
                    ({champ.wins}W {champ.losses}L)
                  </span>
                  <span
                    className={`KDA ${colorOfScore(
                      (champ.kills + champ.assists) / champ.deaths
                    )}`}
                  >
                    {fp(champ.kills + champ.assists, champ.deaths, 2)} KDA
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="PreferredPosition">
        <div className="Title">Preferred Position(Rank)</div>
        {positions.map((position, idx) => {
          return (
            <div
              className="LaneInfo"
              key={`LaneInfo_${position.position}_${idx}`}
            >
              <img
                className="LaneIcon"
                src={positionImgFactory(position.position as Position)}
                alt="Sup"
              />
              <div className="Right">
                <div className="Up">{position.positionName}</div>
                <div className="Down">
                  <span className="PickRatio">
                    {fp(position.games * 100, 20, 0)}%
                  </span>
                  <span className="WRPrefix">Win Ratio</span>
                  <span
                    className={`WinRatio ${colorOfWinRatio(
                      position.wins / position.games
                    )}`}
                  >
                    {fp(position.wins * 100, position.games, 0)}%
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OverView;
