import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

class Cards extends React.Component {

  // CARDS ARRAY NOT REACHING console.log() IN RENDER BELOW EITHER
  render() {
    return (
      <div>
        {console.log('cards array: ' + this.props.cards.length)}
        {
          this.props.cards.map((card) => (  
            <Card
              key={card.id}
              cardText={card.cardText}
              // count={index + 1}
              handleDeleteCard={card.handleDeleteCard}
            />
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  };
};

export default connect(mapStateToProps)(Cards);