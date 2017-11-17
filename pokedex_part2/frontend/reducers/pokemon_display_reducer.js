import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const initialState = null;

const pokemonDisplayReducer = (state = initialState, action) => {
  Object.freeze(state);
  // let newState = {};
  switch(action.type) {
    case RECEIVE_SINGLE_POKEMON:
      return action.payload.pokemon.id;
    default:
      return state;
  }
};

export default pokemonDisplayReducer;
