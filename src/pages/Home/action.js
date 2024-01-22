import {
  FETCH_POKEMON,
  SET_POKEMON,
  SET_USERNAME,
  SET_STEP
} from "./constant";

export const fetchPokemon = () => ({
  type: FETCH_POKEMON
});

export const setPokemon = (pokemon) => ({
  type: SET_POKEMON,
  pokemon
})

export const setUsernameDispatcher = (username) => ({
  type: SET_USERNAME,
  username
})

export const setStep = (step) => ({
  type: SET_STEP,
  step
})