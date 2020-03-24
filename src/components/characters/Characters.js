import React from "react";
import CharacterItem from "../characters/CharacterItem";

const Characters = ({ chars }) => {
  return (
    <div>
      {chars.map(char => (
        <CharacterItem key={char.rank} char={char} />
      ))}
    </div>
  );
};

export default Characters;
