import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const demoState = {
  cards: [{
    cardText: 'demoCardText'
  }]
};

// ADD_CARD
const addCard = ({ cardText } = {}) => ({
  type: 'ADD_CARD',
  card: {
    id: uuid(),
    cardText
  }
});

// REMOVE_CARD
const removeCard = ({ id } = {}) => ({
  type: 'REMOVE_CARD',
  id
});

// EDIT_CARD
const editCard = (id, updates) => ({
  type: 'EDIT_CARD',
  id,
  updates
});

// Cards reducer
const cardsReducerDefaultState = [];

const cardsReducer = (state = cardsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      if (action.card.cardText !== '' && action.card.cardText !== undefined) {
        return [
          ...state,
          action.card
        ];
      } else {
        console.log('Give the card a name to add it');
      }
    case 'REMOVE_CARD':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_CARD':
      return state.map((card) => {
        if (card.id === action.id) {
          return {
            ...card, // spread out card object properties
            ...action.updates // spread out action object properties and override any on card object
          };
        } else {
          return card;
        }
      });
    default:
      return state;
  }
}

// Store creation

const store = createStore(
  combineReducers({
    cards: cardsReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const cardOne = store.dispatch(addCard({ cardText: 'Card One' }));
const cardTwo = store.dispatch(addCard({ cardText: 'Card Two' }));

store.dispatch(removeCard({ id: cardOne.card.id }));

store.dispatch(editCard(cardTwo.card.id, {/* this is the updates object */ cardText: 'Edited Card Text' }));
