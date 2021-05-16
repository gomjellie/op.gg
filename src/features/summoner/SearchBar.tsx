import React from "react";
import { useHistory } from "react-router";
import GGSvg from "../../assets/GG.svg";
import OPGGSvg from "../../assets/opgglogo.svg";

const SearchBar: React.FC = () => {
  const history = useHistory();

  return (
    <div className="SearchBar">
      <div className="OPGG">
        <img height="20" src={OPGGSvg} alt="" onClick={() => history.push("/")} />
      </div>
      <div className="SearchInputBox">
        <input placeholder="소환사명, 챔피언..."></input>
        <img height="14" src={GGSvg} alt="GG" />
      </div>
    </div>
  );
};

export default SearchBar;
