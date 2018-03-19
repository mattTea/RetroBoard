import React from 'react';
import AddCard from './AddCard';
import Cards from './Cards';

export default class Column extends React.Component {
  state = {
    cards: []
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('cards');
      const cards = JSON.parse(json);

      if (cards) {
        this.setState(() => ({ cards }));
        console.log(cards);
      }
    } catch (e) {
      // do nothing at all
    }
  };

  handleAddCard = (card) => {
    this.setState((prevState) => ({ cards: prevState.cards.concat(card) }));
    console.log('card added', this.state.cards.length + 1);
  };
  
  handleDeleteCard = (cardToRemove) => {
    this.setState((prevState) => ({
      cards: prevState.cards.filter((card) => cardToRemove !== card)
    }));
    console.log('Selected cards deleted');
  };

  // *Below sets cards to local storage for every instance of a column!*
  // *Look at setting this on a component that is only rendering an update to a single column*

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.cards.length !== this.state.cards.length) {
  //     const json = JSON.stringify(this.state.cards);
  //     localStorage.setItem('cards', json);
  //   }
  // };

  render() {
    return (
      <div>
        <p>{this.props.columnText}</p>
        <div className="flex-container-cards">
          <AddCard handleAddCard={this.handleAddCard} />
          <Cards
            cards={this.state.cards}
            handleDeleteCard={this.handleDeleteCard}
          />
        </div>
        <button className="button" onClick={(e) => {
          this.props.handleDeleteColumn(this.props.columnText);
        }}>Remove Column</button>
      </div>
    )
  }
}