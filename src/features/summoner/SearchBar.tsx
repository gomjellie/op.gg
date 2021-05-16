import React from "react";
import { useHistory } from "react-router";
import OPGGSvg from "../../assets/opgglogo.svg";
import SummonerSearchInput from "../../components/SummonerSearchInput";

const SearchBar: React.FC = () => {
  const history = useHistory();

  return (
    <div className="SearchBar">
      <div className="OPGG">
        <img
          height="20"
          src={OPGGSvg}
          alt=""
          onClick={() => history.push("/")}
        />
      </div>
      <div className="SearchInputContainer">
        <SummonerSearchInput />
      </div>
    </div>
  );
};

export default SearchBar;
