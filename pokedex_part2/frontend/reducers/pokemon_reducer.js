import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const initialState = {};

const pokemonReducer = (state = initialState, action) => {
  let newState = {};
  switch(action.type) {

    case RECEIVE_ALL_POKEMON:
      let pokeIndices = Object.keys(action.pokemon);
      pokeIndices.forEach((pokeId) => {newState[pokeId] = action.pokemon[pokeId];});
      return newState;
    case RECEIVE_SINGLE_POKEMON:
      // action.pokemon.item_ids = action.itemsReducer
      action.payload.pokemon.item_ids = action.payload.items.map(item => item.id);
      return merge(state,{[action.payload.pokemon.id]: action.payload.pokemon});
    default:
      return state;
  }

};

export default pokemonReducer;
