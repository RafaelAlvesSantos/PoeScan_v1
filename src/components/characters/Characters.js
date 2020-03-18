import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterItem from "../characters/CharacterItem";

const Characters = () => {
  const [chars, setChars] = useState([]);
  useEffect(() => {
    getCharacterLadder();
    //eslint-disable-next-line
  }, []);

  const getCharacterLadder = async () => {
    const res = await axios.get(
      "http://api.pathofexile.com/ladders/Metamorph?limit=3"
    );
    setChars(res.data.entries);
  };
  return (
    <div>
      {chars.map(char => (
        <CharacterItem char={char} />
      ))}
    </div>
  );
};

export default Characters;
