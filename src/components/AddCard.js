import React from 'react';

export default class AddCard extends React.Component {
  state = {
    error: undefined
  };
  handleAddCard = (e) => {
    e.preventDefault();
    const card = e.target.elements.card.value.trim();
    const error = this.props.handleAddCard(card);
    
    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.card.value = '';
    }
    
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form className="flex-container-input" onSubmit={this.handleAddCard}>
          <input type="text" name="card" placeholder="new card"/>
          <button className="button">+</button>
        </form>
      </div>
    )
  }
}