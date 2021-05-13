import React from "react";
import { Pie } from "react-chartjs-2";
import ZyraImg from "../../assets/champs/Zyra.png";
import LuluImg from "../../assets/champs/Lulu.png";
import SupImg from "../../assets/mostpositions/sup.png";
import AdcImg from "../../assets/mostpositions/adc.png";

const chartData = {
  datasets: [
    {
      data: [9, 11],
      backgroundColor: ["#ee5a52", "#1f8ecd"],
      borderWidth: 0,
    },
  ],
};

const OverView: React.FC = () => {
  return (
    <div className="Overview">
      <div className="OveralWinRate">
        <div className="Left">
          <div className="CurrentTwentyGames">20전 11승 9패</div>
          <div className="ChartContainer">
            <Pie type data={chartData} />
            <div className="CurrentWinRatio">55%</div>
          </div>
        </div>
        <div className="Right">
          <div className="AverageKDAs">
            <div className="AverageKill">25.9</div>/
            <div className="AverageDeath">15.8</div>/
            <div className="AverageAssist">14.1</div>
          </div>
          <div className="Avg">
            <div className="KDARatio green">2.57:1</div>(
            <div className="WinRatio red">47%</div>)
          </div>
        </div>
      </div>
      <div className="MostChampWinRatios">
        <div className="MostChampWinRatio">
          <img className="ChampAvatar" src={ZyraImg} alt="" />
          <div className="RContainer">
            <div className="Up">Zyra</div>
            <div className="Down">
              <span className="WinRatio">33%</span>
              <span className="WinLoose">(5W 10L)</span>
              <span className="KDA">2.24 KDA</span>
            </div>
          </div>
        </div>
        <div className="MostChampWinRatio">
          <img className="ChampAvatar" src={LuluImg} alt="" />
          <div className="RContainer">
            <div className="Up">Lulu</div>
            <div className="Down">
              <span className="WinRatio red">100%</span>
              <span className="WinLoose">(3W 0L)</span>
              <span className="KDA gold">5.11 KDA</span>
            </div>
          </div>
        </div>
      </div>
      <div className="PreferredPosition">
        <div className="Title">Preferred Position(Rank)</div>
        <div className="LaneInfo">
          <img className="LaneIcon" src={SupImg} alt="Sup" />
          <div className="Right">
            <div className="Up">Support</div>
            <div className="Down">
              <span className="PickRatio">95%</span>
              <span className="WRPrefix">Win Ratio</span>
              <span className="WinRatio">47%</span>
            </div>
          </div>
        </div>
        <div className="LaneInfo">
          <img className="LaneIcon" src={AdcImg} alt="Sup" />
          <div className="Right">
            <div className="Up">ADC</div>
            <div className="Down">
              <span className="PickRatio">5%</span>
              <span className="WRPrefix">Win Ratio</span>
              <span className="WinRatio">100%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
