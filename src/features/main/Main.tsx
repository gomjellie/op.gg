import React, { useState } from "react";
import GGSvg from "../../assets/GG.svg";
import { RouteComponentProps, useHistory } from "react-router";
import OPGGImg from "../../assets/zyra_opgg.png";
import { useDispatch } from "react-redux";
import { fetchSummoner } from "../summoner/summonerSlice";
import { fetchMost } from "../summoner/mostSlice";
import { fetchMatches } from "../summoner/matchesSlice";
import useLocalStorage from "../../hooks/useLocalStorage";

const Main: React.FC<RouteComponentProps> = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [serachHistory, setSearchHistory] = useLocalStorage<string[]>(
    "searchs",
    []
  );

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      dispatch(fetchSummoner(userName));
      dispatch(fetchMatches(userName));
      dispatch(fetchMost(userName));

      if (!serachHistory.includes(userName)) {
        serachHistory.push(userName);
        setSearchHistory(serachHistory);
      }
      history.push(`/summoner/userName=${userName}`);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  return (
    <div className="Main">
      <img className="BannerImg" src={OPGGImg} alt="" />
      <div className="MainSearchBox">
        <input
          placeholder="Name1, Name2, ..."
          onKeyDown={onKeyDown}
          onChange={onChange}
        />
        <img height="14" src={GGSvg} alt="GG" />
      </div>
    </div>
  );
};

export default Main;
