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

  return (
    <CharacterContext.Provider
      value={{ users: state.users }}
    ></CharacterContext.Provider>
  );
};

export default CharacterState;
