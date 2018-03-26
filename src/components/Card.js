import React from 'react';

export default class Card extends React.Component {

  handleDrag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log(ev.target.id, 'Drag started');
  };

  render() {
    return (
      <div id={this.props.cardText} className="card" draggable="true" onDragStart={this.handleDrag}>
        <p className="card__text">{this.props.cardText}</p>
        <button className="button" onClick={(e) => {
          this.props.handleDeleteCard(this.props.cardText);
        }}>bin card</button>
      </div>    
    )
  }
}