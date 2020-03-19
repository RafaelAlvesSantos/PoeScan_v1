import React, { Fragment } from "react";
import Saboteur from "./saboteurThumb.png";
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
import Slayer from "./slayerThumb.png";
import Trickster from "./tricksterThumb.png";

const ImgThumb = props => {
  let img = props.thumbnail;

  switch (props.thumbnail) {
    case "Deadeye":
      img = Deadeye;
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
