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
    const res = await axios.get(
      "http://api.pathofexile.com/ladders/Metamorph?limit=1"
    );
    console.log(res.data.entries);

    dispatch({ type: SEARCH_CHARACTERS, payload: res.data.entries });
  };

  return (
    <CharacterContext.Provider
      value={{ users: state.users, getCharacterLadder }}
    >
      {props.children}
    </CharacterContext.Provider>
  );
};

export default CharacterState;
