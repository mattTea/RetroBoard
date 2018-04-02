import uuid from 'uuid';

// ADD_CARD
export const addCard = ({ cardText } = {}) => ({
  type: 'ADD_CARD',
  card: {
    id: uuid(),
    cardText
  }
});

// REMOVE_CARD
export const removeCard = ({ id } = {}) => ({
  type: 'REMOVE_CARD',
  id
});

// EDIT_CARD
export const editCard = (id, updates) => ({
  type: 'EDIT_CARD',
  id,
  updates
});