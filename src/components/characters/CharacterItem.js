import React, { Fragment } from "react";
import ImgThumb from "../layout/classImgs/ImgThumb";

const Character = ({ char }) => {
  console.log(char.character);

  return (
    <Fragment>
      <div className="card grid-3">
        <div className="all-center">
          <ImgThumb thumbnail={char.character.class} />
          <p>Level: {char.character.level} </p>
          <h4>{char.character.name}</h4>
        </div>
        <div>
          <Fragment>
            <p>Challenges: {char.account.challenges.total}</p>
          </Fragment>
          <a href="http://www.google.com" className="btn btn-dark my-1">
            PoB Code
          </a>
        </div>
        <div>
          <Fragment>
            <p>Challenges: {char.account.challenges.total}</p>
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default Character;
