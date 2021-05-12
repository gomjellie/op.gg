import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface MatchParams {
  userName: string;
}

const Summoner = ({ match }: RouteComponentProps<MatchParams>) => {
  const { userName } = match.params;

  return <div className="Summoner">
    hi {userName}
  </div>;
};

export default Summoner;
