import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const initialState = {};

const itemsReducer = (state = initialState, action) => {
  let newState = {};
  switch(action.type) {
    case RECEIVE_SINGLE_POKEMON:
      action.payload.items.forEach(item => {
        newState[item.id] = item;
      });
      return newState;
    default:
      return state;
  }

};

export default itemsReducer;
