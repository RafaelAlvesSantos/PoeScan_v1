import React, { useReducer } from "react";
import CharacterContext from "./CharacterContext";
import CharacterReducer from "./CharacterReducer";
import axios from "axios";
import { SEARCH_CHARACTERS } from "../types";

const CharacterState = props => {
  const initialState = {
    characters: []
  };

  const [state, dispatch] = useReducer(CharacterReducer, initialState);

  const getCharacterLadder = async () => {
    console.log(res.data.entries);

    dispatch({ type: SEARCH_CHARACTERS, payload: res.data.entries });
  };

  return (
    <CharacterContext.Provider
      value={{ characters: state.characters, getCharacterLadder }}
    >
      {props.children}
    </CharacterContext.Provider>
  );
};

export default CharacterState;
