import React from "react";
import { RouteComponentProps } from "react-router-dom";
import GGSvg from "../../assets/GG.svg";
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
          <img height="14" src={GGSvg} alt="GG"/>
        </div>
      </div>
      hi {userName}
    </div>
  );
};

export default Summoner;
