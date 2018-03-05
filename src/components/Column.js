import React from 'react';
import AddCard from './AddCard';
import Cards from './Cards';

export default class Column extends React.Component {
  state = {
    cards: []
  };

  handleAddCard = (card) => {
    this.setState((prevState) => ({ cards: prevState.cards.concat(card) }));
    console.log('card added', this.state.cards.length + 1);
  };

  render() {
    return (
      <div>
        <p>{this.props.columnText}</p>
        <AddCard handleAddCard={this.handleAddCard} />
        <Cards cards={this.state.cards}/>
        <button className="button" onClick={(e) => {
          this.props.handleDeleteColumn(this.props.columnText);
        }}>Remove Column</button>
      </div>
    )
  }
}