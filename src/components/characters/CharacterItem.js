import React, { Fragment } from "react";
import Saboteur from "../layout/saboteurThumb.png";

const Character = ({ char }) => {
  console.log(char.character);
  return (
    <Fragment>
      <div className="card grid-2">
        <div className="all-center">
          <img src={Saboteur} className="" alt="" style={{ width: "150px" }} />
          <h2>{char.character.name}</h2>
          <p>Level: {char.character.level} </p>
        </div>
        <div>
          <Fragment>
            <h3>Bio</h3>
            <p>Challenges: {char.account.challenges.total}</p>
          </Fragment>
          <a href="http://www.google.com" className="btn btn-dark my-1">
            PoB Code
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Character;
