import React, { useEffect, useState } from "react";
import RedWardIcon from "../../assets/wards/red.png";
import BuildIcon from "../../assets/buildred.png";
import { Game } from "./t.matches";
import { toFloatPrecision as fp } from "../../utils/numbers";
import { getTimeAgoString } from "../../utils/dates";
import MatchDetails from "./t.matchDetails";

const PlayerStick: React.FC<{ imageUrl: string; summonerName: string }> = ({
  imageUrl,
  summonerName,
}) => {
  return (
    <div className="Player">
      <img className="Champion" src={imageUrl} alt="" />
      <span className="SummonerName">{summonerName}</span>
    </div>
  );
};

const TeamLists: React.FC<{ summonerName: string; gameId: string }> = ({
  summonerName,
  gameId,
}) => {
  const [matchDetails, setMatchDetails] = useState<MatchDetails>();

  useEffect(() => {
    fetch(
      `https://codingtest.op.gg/api/summoner/${summonerName}/matchDetail/${gameId}`
    )
      .then((res) => res.json())
      .then((res) => setMatchDetails?.(res));

    return () => {
      setMatchDetails(undefined);
    };
  }, [summonerName, gameId]);

  if (matchDetails === undefined) {
    return <div className="GR6"></div>;
  }

  return (
    <div className="GR6">
      <span className="Team1">
        {matchDetails.teams[0].players.map((player, idx) => (
          <PlayerStick
            imageUrl={player.champion.imageUrl}
            summonerName={player.summonerName}
            key={`Game_${gameId}PlayerStick_${player.summonerName}_${idx}`}
          />
        ))}
      </span>
      <span className="Team2">
        {matchDetails.teams[1].players.map((player, idx) => (
          <PlayerStick
            imageUrl={player.champion.imageUrl}
            summonerName={player.summonerName}
            key={`Game_${gameId}PlayerStick_${player.summonerName}_${idx}`}
          />
        ))}
      </span>
    </div>
  );
};

const MemoTeamLists = React.memo(TeamLists);

const GameRecord: React.FC<{ game: Game }> = ({ game }) => {
  const vd = game.isWin ? "victory" : "defeat";

  const getChampName = (champUrl: string) => {
    return champUrl.split("champion/")[1].split(".png")[0];
  };

  return (
    <div className={`GameRecord ${vd}`}>
      <div className="GR1">
        <div className="GameType">{game.gameType}</div>
        <time className="TimeAgo">{getTimeAgoString(game.createDate)}</time>
        <div className="Divider"></div>
        <div className={`Outcome ${vd}`}>{vd}</div>
        <div className="PlayTime">
          {fp(game.gameLength, 60, 0)}m {game.gameLength % 60}s
        </div>
      </div>
      <div className="GR2">
        <div className="ChampVisuals">
          <img
            className="ChampAvatar"
            src={game.champion.imageUrl}
            alt="ChampAvatar"
          />
          <div className="Spells">
            <img className="Spell" src={game.spells[0].imageUrl} alt="Spell" />
            <img className="Spell" src={game.spells[1].imageUrl} alt="Spell" />
          </div>
          <div className="Runes">
            <img className="Rune" src={game.peak[0]} alt="Rune" />
            <img className="Rune" src={game.peak[1]} alt="Rune" />
          </div>
        </div>
        <div className="ChampName">{getChampName(game.champion.imageUrl)}</div>
      </div>
      <div className="GR3">
        <div className="KDASeperated">
          <span className="K">{game.stats.general.kill}</span>/
          <span className="D">{game.stats.general.death}</span>/
          <span className="A">{game.stats.general.assist}</span>
        </div>
        <div className="KDAScoreContainer">
          <span className="KDAScore">{game.stats.general.kdaString}</span>
          <span className="KDAScoreSuffix">KDA</span>
        </div>
        <div className="Badges">
          {game.stats.general.largestMultiKillString && (
            <div className="Badge kill">
              {game.stats.general.largestMultiKillString}
            </div>
          )}
          {game.stats.general.opScoreBadge && (
            <div className="Badge ace">{game.stats.general.opScoreBadge}</div>
          )}
        </div>
      </div>
      <div className="GR4">
        <span className="Level">Level {game.champion.level}</span>
        <span className="CS">
          {game.stats.general.cs} ({game.stats.general.csPerMin}) CS
        </span>
        <span className="PKill">
          P/Kill {game.stats.general.contributionForKillRate}
        </span>
      </div>
      <div className="GR5">
        <div className="Items">
          {[
            ...game.items,
            { imageUrl: null },
            { imageUrl: null },
            { imageUrl: null },
            { imageUrl: null },
            { imageUrl: null },
            { imageUrl: null },
            { imageUrl: null },
          ]
            .slice(0, 7)
            .map((item, idx) => {
              if (item.imageUrl === null)
                return (
                  <div
                    className="Item"
                    key={`Game_${game.gameId}_Item_Empty_${idx}`}
                  />
                );
              return (
                <img
                  className="Item"
                  src={item.imageUrl}
                  alt=""
                  key={`Game_${game.gameId}_Item_${item.imageUrl}_${idx}`}
                />
              );
            })}
          <img className="Item" src={BuildIcon} alt="Build" />
        </div>
        <div className="ControlWardCount">
          <img className="ControlWard" src={RedWardIcon} alt="" />
          Control Ward {game.stats.ward.visionWardsBought}
        </div>
      </div>
      <MemoTeamLists gameId={game.gameId} summonerName={game.summonerName} />
    </div>
  );
};

export default GameRecord;
