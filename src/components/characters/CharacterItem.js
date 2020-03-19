import React, { Fragment } from "react";
import ImgThumb from "../layout/classImgs/ImgThumb";

const Character = ({ char }) => {
  console.log(char.character);

  return (
    <Fragment>
      <div className="card grid-2">
        <div className="all-center">
          <ImgThumb thumbnail={char.character.class} />
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
