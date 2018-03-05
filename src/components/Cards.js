import React from 'react';
import Card from './Card';

const Cards = (props) => (
  <div>
    {'Cards component'}
    <div className="flex-container-cards">
      {
        props.cards.map((card, index) => (
          <Card
            key={index}
            cardText={card}
            count={index + 1}
            // handleDeleteColumn={props.handleDeleteColumn}
          />
        ))
      }
    </div>
  </div>
);

export default Cards