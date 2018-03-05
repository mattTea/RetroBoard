import React from 'react';
import Column from './Column';
// import AddCard from './AddCard';

export default class Columns extends React.Component {
  // do something like import super() to get the props down from parent too?
  // state = {
  //   cards: []
  // };

  // handleAddCard = (card) => {
  //   this.setState((prevState) => ({ cards: prevState.cards.concat(card) }));
  //   console.log('card added', this.state.cards.length + 1);
  // };

  render() {
    return (
      <div>
        <h3>Your board</h3>
        {this.props.columns.length === 0 && <p>Add a column to get started!</p>}
        <div className="flex-container">
          {
            this.props.columns.map((column, index) => (
              <Column
                key={index}
                columnText={column}
                count={index + 1}
                handleDeleteColumn={this.props.handleDeleteColumn}
              />
            ))
          }
        </div>
        <button
          className="button"
          disabled={this.props.columns.length === 0}
          onClick={this.props.handleRemoveAllColumns}
        >
          Remove All
        </button>
      </div>
    )
  }
}