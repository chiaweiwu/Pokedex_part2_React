import { combineReducers } from 'redux';
import pokemonDisplayReducer from './pokemon_display_reducer';


const uiReducer = combineReducers({
  pokemonDisplay: pokemonDisplayReducer
});

export default uiReducer;
