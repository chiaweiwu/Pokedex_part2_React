import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { receiveAllPokemon, requestAllPokemon, requestSinglePokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';
import configureStore from './store/store';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  window.requestSinglePokemon = requestSinglePokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store}/>, root);
  // window.store = store;
});
