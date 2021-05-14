import React from "react";
import { useSelector } from "react-redux";
import GameRecord from "./GameRecord";
import { selectGames, selectGameType } from "./matchesSlice";

const GameRecordList: React.FC = () => {
  const gameType = useSelector(selectGameType);
  const games = useSelector(selectGames);

  if (games === undefined) {
    return <div className="GameRecords" />;
  }

  const selectedGames = games.filter((game) => {
    if (gameType === "Total") return true;
    if (gameType === "Ranked Flex") {
      return game.gameType === "Flex 5:5 Rank";
    }

    return game.gameType === gameType;
  });

  if (selectedGames.length === 0) return null;

  return (
    <div className="GameRecords">
      {selectedGames.map((game) => (
        <GameRecord
          game={game}
          key={`GameRecord_${game.summonerId}_${game.createDate}`}
        />
      ))}
    </div>
  );
};

export default GameRecordList;
