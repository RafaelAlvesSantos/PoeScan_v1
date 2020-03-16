import React, { useContext, useEffect } from "react";
import CharacterContext from "../../context/characters/CharacterContext";

const Characters = () => {
  const characterContext = useContext(CharacterContext);
  const { getCharacterLadder } = characterContext;
  useEffect(() => {
    getCharacterLadder();
    //eslint-disable-next-line
  }, []);
  return <div></div>;
};

export default Characters;
