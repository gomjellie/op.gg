import React from "react";
import GGSvg from "../../assets/GG.svg";

const SearchBar: React.FC = () => {
  return (
    <div className="SearchBar">
      <div className="SearchInputBox">
        <input placeholder="소환사명, 챔피언..."></input>
        <img height="14" src={GGSvg} alt="GG" />
      </div>
    </div>
  );
};

export default SearchBar;
