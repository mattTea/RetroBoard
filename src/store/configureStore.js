import { createStore, combineReducers } from 'redux';
import cardsReducer from '../reducers/cards';

export default () => {
  const store = createStore(
    combineReducers({
      cards: cardsReducer
    })
  );

  return store;
};

