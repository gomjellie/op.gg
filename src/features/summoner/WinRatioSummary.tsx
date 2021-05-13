import React, { useCallback, useState } from "react";
import { exampleMost } from "./most.t";
import { toFloatPrecision } from "../../utils/numbers";

type Tab = "Champion Win Ratio" | "Rank win rate per week";

const WinRatioSummary: React.FC = () => {
  const data = exampleMost;
  const [tab, setTab] = useState<Tab>("Champion Win Ratio");
  const onChampWinRatioClick = useCallback(() => {
    setTab("Champion Win Ratio");
  }, []);
  const onPerWeekClick = useCallback(() => {
    setTab("Rank win rate per week");
  }, []);

  const tabViews = (
    <div className="LRContainer">
      <div className={`ChampsWinRateButton ${tab === "Champion Win Ratio" ? "Selected" : ""}`} onClick={onChampWinRatioClick}>
        Champion Win ratio
      </div>
      <div className={`ChampsWinRateButton ${tab === "Rank win rate per week" ? "Selected": ""}`} onClick={onPerWeekClick}>
        Rank win rate per week
      </div>
    </div>
  );

  if (tab === "Rank win rate per week") {
    return (
      <div className="ChampsWinRatioBox">
        { tabViews }
        {data.recentWinRate.map((item, idx) => (
          <div className="ChampWinRatioItem" key={`ChampWinRatioWeek_${item.name}_${idx}`}>
            <img className="ChampAvatar" src={item.imageUrl} alt="" />
            <div className="ChampName">{item.name}</div>
            <div className="WinRatio">
              {toFloatPrecision(item.wins * 100, item.wins + item.losses)}%
            </div>
            <div className="WinLose">
              <div className="Win" style={{ flex: item.wins }}>
                {item.wins}승
              </div>
              <div className="Loss" style={{ flex: item.losses }}>
                {item.losses}패
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="ChampsWinRatioBox">
      { tabViews }
      {data.champions.map((champ, idx) => {
        const { kills, deaths, assists, games, wins } = champ;
        const prefix = "ChampWinRatio";
        return (
          <div className="ChampWinRatioItem" key={`${prefix}${champ.name}${idx}`}>
            <img className="ChampAvatar" src={champ.imageUrl} alt="" />
            <div className="TDContainer1">
              <div className="Top1">{champ.name}</div>
              <div className="Down1">
                CS {champ.cs} ({toFloatPrecision(champ.cs, champ.games)})
              </div>
            </div>
            <div className="TDContainer2">
              <div className="Top2">
                {toFloatPrecision(kills + assists, deaths)}:1 평점
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
              <div className="Down3">{games}게임</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WinRatioSummary;
