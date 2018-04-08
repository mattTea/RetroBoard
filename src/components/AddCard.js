import React from 'react';
import { connect } from 'react-redux';
import { addCard } from './../actions/cards';
import configureStore from './../store/configureStore';

const store = configureStore();

class AddCard extends React.Component {
  state = {
    error: ''
  };
  onAddCard = (e) => {
    e.preventDefault();
    if (!e.target.elements.card.value) {
      this.setState(() => ({ error: 'Give the card a name to add it' }));
    } else {
      this.setState(() => ({ error: '' }));
      const card = e.target.elements.card.value.trim();
      // this.props.onAddCard({
      //   cardText: this.state.cardText
      // });
      this.props.dispatch(addCard({ cardText: card }));
      console.log('Card added: ' + card);

      console.log(store.getState());
      e.target.elements.card.value = '';
    }
    
    
    // NEXT LINE NOT WORKING - not able to use handleAddCard from Column.js
    // const error = this.props.handleAddCard(card);
    
    // this.setState(() => ({ error }));
    // change to store.dispatch?
    
    // below console.log() is working - showing store.getState() - how make this state the 'this.props.cards' array in Cards?
    

    // if (!error) {
    //   e.target.elements.card.value = '';
    // }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form className="flex-container-input" onSubmit={this.onAddCard}>
          <input type="text" name="card" placeholder="new card"/>
          <button className="button">+</button>
        </form>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     cards: state.cards
//   };
// };

// export default connect(mapStateToProps)(AddCard);
export default connect()(AddCard);