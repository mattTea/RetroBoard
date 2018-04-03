import React from 'react';
import { connect } from 'react-redux';
import { addCard } from './../actions/cards';
import configureStore from './../store/configureStore';

const store = configureStore();

class AddCard extends React.Component {
  // state = {
  //   error: undefined
  // };
  handleAddCard = (e) => {
    e.preventDefault();
    const card = e.target.elements.card.value.trim();
    // NEXT LINE NOT WORKING - not able to use handleAddCard from Column.js
    const error = this.props.handleAddCard(card);
    
    // this.setState(() => ({ error }));
    // change to store.dispatch?
    store.dispatch(addCard({ cardText: card }));
    console.log(store.getState());

    if (!error) {
      e.target.elements.card.value = '';
    }
  };

  render() {
    return (
      <div>
        {this.props.error && <p>{this.props.error}</p>}
        <form className="flex-container-input" onSubmit={this.handleAddCard}>
          <input type="text" name="card" placeholder="new card"/>
          <button className="button">+</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  };
};

export default connect(mapStateToProps)(AddCard);