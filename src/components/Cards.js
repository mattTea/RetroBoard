import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

class Cards extends React.Component {

  // CARDS ARRAY NOT REACHING console.log() IN RENDER BELOW EITHER
  render() {
    return (
      <div>
        {console.log('cards array: ' + this.props.cards)}
        {
          this.props.cards.map((card, index) => (  
            <Card
              key={index}
              cardText={card}
              count={index + 1}
              handleDeleteCard={this.props.handleDeleteCard}
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