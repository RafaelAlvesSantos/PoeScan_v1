import React, { Fragment } from "react";
import Saboteur from "./saboteurThumb.png";

const ImgThumb = props => {
  let img = props.thumbnail;

  switch (props.thumbnail) {
    case "Deadeye":
      img = Saboteur;
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
