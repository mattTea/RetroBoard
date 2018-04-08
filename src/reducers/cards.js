// Cards reducer

const cardsReducerDefaultState = [];

export default (state = cardsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      if (action.card.cardText !== '' && action.card.cardText !== undefined) {
        return [
          ...state,
          action.card
        ];
      } else {
        alert('Give the card a name to add it');
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