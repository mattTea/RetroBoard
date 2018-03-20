import React from 'react';

const Card = (props) => (
  <div className="card">
    <p className="card__text">{props.cardText}</p>
    <button className="button" onClick={(e) => {
      props.handleDeleteCard(props.cardText);
    }}>bin card</button>
  </div>
);

export default Card;