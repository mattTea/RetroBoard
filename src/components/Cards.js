import React from 'react';
import Card from './Card';

export default class Cards extends React.Component {

  render() {
    return (
      <div>
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