import React from 'react';
import AddCard from './AddCard';
import Cards from './Cards';

export default class Column extends React.Component {
  state = {
    cards: []
  };

  // componentDidMount() {
  //   try {
  //     const json = localStorage.getItem('cards');
  //     const cards = JSON.parse(json);

  //     if (cards) {
  //       this.setState(() => ({ cards }));
  //       console.log(cards);
  //     }
  //   } catch (e) {
  //     // do nothing at all
  //   }
  // };

  // *Below sets cards to local storage for every instance of a column!*
  // *Look at setting this on a component that is only rendering an update to a single column*

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.cards.length !== this.state.cards.length) {
  //     const json = JSON.stringify(this.state.cards);
  //     localStorage.setItem('cards', json);
  //   }
  // };

  handleAddCard = (card) => {
    if (!card) {
      return 'Give the card a name to add it';
    }
    
    this.setState((prevState) => ({ cards: prevState.cards.concat(card) }));
    console.log('card added', this.state.cards.length + 1);
  };
  
  handleDeleteCard = (cardToRemove) => {
    this.setState((prevState) => ({
      cards: prevState.cards.filter((card) => cardToRemove !== card)
    }));
    console.log('Selected cards deleted');
  };

  allowDrop = (ev) => {
    ev.preventDefault();
    console.log('drop allowed');
  };

  handleDrop = (ev) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    
    this.setState((prevState) => ({ cards: prevState.cards.concat(data) }));
    console.log('drop handled');
  };

  render() {
    return (
      <div onDragOver={this.allowDrop} onDrop={this.handleDrop}>
        <p className="column__text">{this.props.columnText}</p>
        <div className="flex-container-cards">
          <AddCard handleAddCard={this.handleAddCard} />
          <div className="cards">
            <Cards
              cards={this.state.cards}
              handleDeleteCard={this.handleDeleteCard}
            />
          </div>
        </div>
        <button className="button" onClick={(e) => {
          this.props.handleDeleteColumn(this.props.columnText);
        }}>Remove Column</button>
      </div>
    )
  }
}