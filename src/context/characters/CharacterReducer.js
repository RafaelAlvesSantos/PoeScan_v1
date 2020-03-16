import { SEARCH_CHARACTERS } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_CHARACTERS:
      return {
        ...state,
        characters: action.payload
      };
    default:
      return state;
  }
};
