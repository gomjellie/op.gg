import React from "react";
import { toFloatPrecision } from "../../utils/numbers";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMostChampions,
  selectMostRecents,
  selectMostType,
  switchMostType,
} from "./mostSlice";

const WinRatioSummary: React.FC = () => {
  const tab = useSelector(selectMostType);
  const mostChampions = useSelector(selectMostChampions);
  const recents = useSelector(selectMostRecents);
  const dispatch = useDispatch();

  const renderedTabs = (
    <div className="LRContainer">
      <div
        className={`ChampsWinRateButton ${
          tab === "Champion Win Ratio" ? "Selected" : ""
        }`}
        onClick={() =>
          dispatch(switchMostType({ mostType: "Champion Win Ratio" }))
        }
      >
        Champion Win ratio
      </div>
      <div
        className={`ChampsWinRateButton ${
          tab === "Rank win rate per week" ? "Selected" : ""
        }`}
        onClick={() =>
          dispatch(switchMostType({ mostType: "Rank win rate per week" }))
        }
      >
        Rank win rate per week
      </div>
    </div>
  );

  if (tab === "Rank win rate per week") {
    return (
      <div className="ChampsWinRatioBox">
        {renderedTabs}
        {recents?.map((item, idx) => (
          <div
            className="ChampWinRatioItem"
            key={`ChampWinRatioWeek_${item.name}_${idx}`}
          >
            <img className="ChampAvatar" src={item.imageUrl} alt="" />
            <div className="ChampName">{item.name}</div>
            <div className="WinRatio">
              {toFloatPrecision(item.wins * 100, item.wins + item.losses)}%
            </div>
            <div className="WinLose">
              <div className="Win" style={{ flex: item.wins }}>
                {item.wins}W
              </div>
              <div className="Loss" style={{ flex: item.losses }}>
                {item.losses}L
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="ChampsWinRatioBox">
      {renderedTabs}
      {mostChampions?.map((champ, idx) => {
        const { kills, deaths, assists, games, wins } = champ;
        const prefix = "ChampWinRatio";
        return (
          <div
            className="ChampWinRatioItem"
            key={`${prefix}${champ.name}${idx}`}
          >
            <img className="ChampAvatar" src={champ.imageUrl} alt="" />
            <div className="TDContainer1">
              <div className="Top1">{champ.name}</div>
              <div className="Down1">
                CS {champ.cs} ({toFloatPrecision(champ.cs, champ.games)})
              </div>
            </div>
            <div className="TDContainer2">
              <div className="Top2">
                {toFloatPrecision(kills + assists, deaths)}:1 KDA
              </div>
              <div className="Down2">
                {toFloatPrecision(kills, games)} /{" "}
                {toFloatPrecision(deaths, games)} /{" "}
                {toFloatPrecision(assists, games)}
              </div>
            </div>
            <div className="TDContainer3">
              <div className="Top3">
                {toFloatPrecision(wins * 100, games, 0)}%
              </div>
              <div className="Down3">{games} Played</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WinRatioSummary;
