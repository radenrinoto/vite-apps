import { produce } from "immer";
import { SET_POKEMON, SET_USERNAME, SET_STEP } from "./constant";

export const initialState = {
  pokemon: {},
  username: {},
  step: 1
}

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_POKEMON:
        draft.pokemon = action.pokemon;
        break;
      case SET_USERNAME:
        draft.username = action.username;
        break
      case SET_STEP:
        draft.step = action.step;
        break
      default:
        break;
    }
  })

export default homeReducer;