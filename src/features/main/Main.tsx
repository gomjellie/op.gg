import React from "react";
import { RouteComponentProps } from "react-router";
import OPGGImg from "../../assets/zyra_opgg.png";
import SummonerSearchInput from "../../components/SummonerSearchInput";

const Main: React.FC<RouteComponentProps> = () => {
  return (
    <div className="Main">
      <img className="BannerImg" src={OPGGImg} alt="" />
      <div className="MainSearchContainer">
        <SummonerSearchInput />
      </div>
    </div>
  );
};

export default Main;
