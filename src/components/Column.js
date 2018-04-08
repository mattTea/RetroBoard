import React from 'react';
import { connect } from 'react-redux';
import { addCard } from './../actions/cards';
import AddCard from './AddCard';
import Cards from './Cards';
import configureStore from './../store/configureStore';

const store = configureStore();

class Column extends React.Component {
  // state = {
  //   cards: []
  // };

  handleAddCard = (card) => {
    // if (!card) {
    //   return 'Give the card a name to add it';
    // }
    
    // this.setState((prevState) => ({ cards: prevState.cards.concat(card) }));
    // store.dispatch(addCard({ cardText: card }));
    // console.log('card added', this.props.cards.length);
  };
  
  handleDeleteCard = (cardToRemove) => {
    this.setState((prevState) => ({
      cards: prevState.cards.filter((card) => cardToRemove !== card)
    }));
    console.log('Selected cards deleted');
  };

  allowDrop = (ev) => {
    console.log('target.id: ' + ev.target.id);
    if (ev.target.id == "drop-allowed") {
      ev.preventDefault();
      console.log('drop allowed');
    }    
  };

  handleDrop = (ev) => {    
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    console.log('drop handled');
  };

  render() {
    return (
      <div>
        <p className="column__text">{this.props.columnText}</p>
        <div className="flex-container-cards">
          <AddCard onAddCard={this.handleAddCard} />
          <div id="drop-allowed" className="cards" onDragOver={this.allowDrop} onDrop={this.handleDrop}>
            <Cards
              cards={this.props.cards}
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

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  };
};

export default connect(mapStateToProps)(Column);

// Next TODO - fix 'bin card' 
// error occurring because the state.cards.length is only seeing number of cards in a single column
// (watch line 16)
// poss fix is to move cards state to the Columns component, and manage it there (across all columns)