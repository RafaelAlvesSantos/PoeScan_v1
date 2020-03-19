import React, { Fragment, useEffect } from "react";
import Saboteur from "./saboteurThumb.png";

const ImgThumb = props => {
  const img = "";
  useEffect(() => {
    setImgThumb();
    //eslint-disable-next-line
  }, []);

  const setImgThumb = () => {
    switch (props.class) {
      case "Deadeye":
        img = Saboteur;
    }
  };

  return (
    <Fragment>
      <img src={img} className="" alt="" style={{ width: "150px" }} />
    </Fragment>
  );
};

export default ImgThumb;
