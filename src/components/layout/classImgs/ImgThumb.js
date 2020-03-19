import React, { Fragment } from "react";
import Ascendant from "./ascendantThumb.png";
import Assassin from "./assassinThumb.png";
import Berserker from "./berserkerThumb.png";
import Champion from "./championThumb.png";
import Chieftain from "./chieftainThumb.png";
import Deadeye from "./deadeyeThumb.png";
import Elementalist from "./elementalistThumb.png";
import Gladiator from "./gladiatorThumb.png";
import Guardian from "./guardianThumb.png";
import Hierophant from "./hierophantThumb.png";
import Inquisitor from "./inquisitorThumb.png";
import Juggernaut from "./juggernautThumb.png";
import Necromancer from "./necromancerThumb.png";
import Occultist from "./occultistThumb.png";
import Pathfinder from "./pathfinderThumb.png";
import Raider from "./raiderThumb.png";
import Saboteur from "./saboteurThumb.png";
import Slayer from "./slayerThumb.png";
import Trickster from "./tricksterThumb.png";

const ImgThumb = props => {
  let img = props.thumbnail;

  switch (props.thumbnail) {
    case "Ascendant":
      img = Ascendant;
      break;
    case "Assassin":
      img = Assassin;
      break;
    case "Berserker":
      img = Berserker;
      break;
    case "Champion":
      img = Champion;
      break;
    case "Chieftain":
      img = Chieftain;
      break;
    case "Deadeye":
      img = Deadeye;
      break;
    case "Elementalist":
      img = Elementalist;
      break;
    case "Gladiator":
      img = Gladiator;
      break;
    case "Guardian":
      img = Guardian;
      break;
    case "Hierophant":
      img = Hierophant;
      break;
    case "Inquisitor":
      img = Inquisitor;
      break;
    case "Juggernaut":
      img = Juggernaut;
      break;
    case "Necromancer":
      img = Necromancer;
      break;
    case "Occultist":
      img = Occultist;
      break;
    case "Pathfinder":
      img = Pathfinder;
      break;
    case "Raider":
      img = Raider;
      break;
    case "Saboteur":
      img = Saboteur;
      break;
    case "Slayer":
      img = Slayer;
      break;
    case "Trickster":
      img = Trickster;
      break;
    default:
      img = "";
  }

  return (
    <Fragment>
      <img src={img} className="" alt="" style={{ width: "150px" }} />
    </Fragment>
  );
};

export default ImgThumb;
