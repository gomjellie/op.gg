import React from "react";
import ZyraImg from "../../assets/champs/Zyra.png";
import FlashImg from "../../assets/spells/flash.png";
import IgniteImg from "../../assets/spells/ignite.png";
import ArcaneCometImg from "../../assets/runes/arcaneComet.png";
import LiandryIcon from "../../assets/items/liandry.png";
import RedWardIcon from "../../assets/wards/red.png";
import BuildIcon from "../../assets/buildred.png";

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

const GameRecord: React.FC = () => {
  return (
    <div className="GameRecord defeat">
      <div className="GR1">
        <div className="GameType">Ranked Solo</div>
        <div className="TimeAgo">8 days ago</div>
        <div className="Divider"></div>
        <div className="Outcome defeat">Defeat</div>
        <div className="PlayTime">21m 10s</div>
      </div>
      <div className="GR2">
        <div className="ChampVisuals">
          <img className="ChampAvatar" src={ZyraImg} alt="ChampAvatar" />
          <div className="Spells">
            <img className="Spell" src={FlashImg} alt="Spell" />
            <img className="Spell" src={IgniteImg} alt="Spell" />
          </div>
          <div className="Runes">
            <img className="Rune" src={ArcaneCometImg} alt="Rune" />
            <img className="Rune" src={ArcaneCometImg} alt="Rune" />
          </div>
        </div>
        <div className="ChampName">Zyra</div>
      </div>
      <div className="GR3">
        <div className="KDASeperated">
          <span className="K">4</span>/<span className="D">6</span>/
          <span className="A">4</span>
        </div>
        <div className="KDAScoreContainer">
          <span className="KDAScore">1.33:1</span>
          <span className="KDAScoreSuffix">KDA</span>
        </div>
        <div className="Badges">
          <div className="Badge kill">Quadra Kill</div>
          <div className="Badge ace">ACE</div>
        </div>
      </div>
      <div className="GR4">
        <span className="Level">Level9</span>
        <span className="CS">21 (1) CS</span>
        <span className="PKill">P/Kill 67%</span>
      </div>
      <div className="GR5">
        <div className="Items">
          <img className="Item" src={LiandryIcon} alt="Item" />
          <img className="Item" alt="Item" />
          <img className="Item" alt="Item" />
          <img className="Item" alt="WardItem" />
          <img className="Item" alt="Item" />
          <img className="Item" alt="Item" />
          <img className="Item" alt="Item" />
          <img className="Item" src={BuildIcon} alt="Build" />
        </div>
        <div className="ControlWardCount">
          <img className="ControlWard" src={RedWardIcon} alt="" />
          Control Ward 4
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
