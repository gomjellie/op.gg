import React from "react";
import RedWardIcon from "../../assets/wards/red.png";
import BuildIcon from "../../assets/buildred.png";
import { Game } from "./t.matches";
import { toFloatPrecision as fp } from "../../utils/numbers";

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

const GameRecord: React.FC<{ game: Game }> = ({ game }) => {
  const vd = game.isWin ? "victory" : "defeat";

  const getChampName = (champUrl: string) => {
    return champUrl.split("champion/")[1].split(".png")[0];
  };

  return (
    <div className={`GameRecord ${vd}`}>
      <div className="GR1">
        <div className="GameType">{game.gameType}</div>
        <div className="TimeAgo">
          {-fp(game.createDate, 60 * 24, 0)} days ago
        </div>
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
            .map((item) => {
              /**
               * TODO: make unique Key id
               */
              if (item.imageUrl === null) return <div className="Item" />;
              return <img className="Item" src={item.imageUrl} alt="" />;
            })}
          <img className="Item" src={BuildIcon} alt="Build" />
        </div>
        <div className="ControlWardCount">
          <img className="ControlWard" src={RedWardIcon} alt="" />
          Control Ward {game.stats.ward.visionWardsBought}
        </div>
      </div>
      <div className="GR6">
        <span className="Team1">
          <PlayerStick
            imageUrl="https://opgg-static.akamaized.net/images/lol/champion/Viktor.png"
            summonerName="pythonic"
          />
          <PlayerStick
            imageUrl="https://opgg-static.akamaized.net/images/lol/champion/Viktor.png"
            summonerName="HLE Viper"
          />
          <PlayerStick
            imageUrl="https://opgg-static.akamaized.net/images/lol/champion/Anivia.png"
            summonerName="Babe G"
          />
          <PlayerStick
            imageUrl="https://opgg-static.akamaized.net/images/lol/champion/Viktor.png"
            summonerName="쪼렙이다말로하자"
          />
          <PlayerStick
            imageUrl="https://opgg-static.akamaized.net/images/lol/champion/Jayce.png"
            summonerName="SPG Zzus"
          />
        </span>
        <span className="Team2">
          <PlayerStick
            imageUrl="https://opgg-static.akamaized.net/images/lol/champion/Tristana.png"
            summonerName="asdf"
          />
          <PlayerStick
            imageUrl="https://opgg-static.akamaized.net/images/lol/champion/Jayce.png"
            summonerName="zyzyzyzyzy"
          />
          <PlayerStick
            imageUrl="https://opgg-static.akamaized.net/images/lol/champion/Anivia.png"
            summonerName="쭌 베"
          />
          <PlayerStick
            imageUrl="https://opgg-static.akamaized.net/images/lol/champion/Malzahar.png"
            summonerName="SPG Zzus"
          />
          <PlayerStick
            imageUrl="https://opgg-static.akamaized.net/images/lol/champion/Galio.png"
            summonerName="loremipsumloremipsum"
          />
        </span>
      </div>
    </div>
  );
};

export default GameRecord;
