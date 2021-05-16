import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { fetchSummoner } from "../features/summoner/summonerSlice";
import { fetchMost } from "../features/summoner/mostSlice";
import { fetchMatches } from "../features/summoner/matchesSlice";
import GGSvg from "../assets/GG.svg";
import CloseIcon from "../assets/close.png";
import useLocalStorage from "../hooks/useLocalStorage";
import useOnClickOutside from "../hooks/useOnClickOutside";

const SummonerSearchInput: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [summonerName, setSummonerName] = useState("");
  const [focused, setFocused] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [serachHistory, setSearchHistory] = useLocalStorage<string[]>(
    "searchs",
    []
  );

  const onSearch = (query: string) => {
    dispatch(fetchSummoner(query));
    dispatch(fetchMatches(query));
    dispatch(fetchMost(query));

    setSearchHistory((prevHistory) => {
      /**
       * 히스토리에 최근 4개만 유지시킨다.
       * 만약 이미 검색내역에 있으면 스택 맨위로 끌어올린다.
       */
      if (prevHistory.includes(query))
        return prevHistory.filter((h) => h !== query).concat(query);
      return prevHistory.slice(-3).concat(query);
    });
    history.push(`/summoner/userName=${query}`);
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onSearch(summonerName);
    }
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSummonerName(event.target.value);
  };

  const handleClickOutside = () => setFocused(false);
  const handleClickInside = () => setFocused(true);

  useOnClickOutside(wrapperRef, handleClickOutside);

  const renderedSearchSuggests = (
    <div className="SummonerSearchSuggestsContainer">
      {serachHistory
        .slice(-5)
        .reverse()
        .map((user, idx) => {
          return (
            <div className="SummonerSearched" key={`SummonerSearched_${user}_${idx}`}>
              <span className="SummonerName" onClick={() => onSearch(user)}>
                {user}
              </span>
              <img className="DeleteHistoryBtn" src={CloseIcon} alt="GG" />
            </div>
          );
        })}
    </div>
  );
  return (
    <div
      className="SummonerSearchInputWrapper"
      ref={wrapperRef}
      onFocus={handleClickInside}
    >
      <div className="SummonerSearchInput">
        <input
          placeholder="Name1, Name2, ..."
          onKeyDown={onKeyDown}
          onChange={onChangeInput}
        />
        <img height="14" src={GGSvg} alt="GG" />
      </div>
      {focused ? renderedSearchSuggests : null}
    </div>
  );
};

export default SummonerSearchInput;
