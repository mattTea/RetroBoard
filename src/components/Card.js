import React from 'react';

const Card = (props) => (
  <div>
    <p>{props.cardText}</p>
    <button className="button" onClick={(e) => {
      props.handleDeleteCard(props.cardText);
    }}>bin card</button>
  </div>
);

export default Card;