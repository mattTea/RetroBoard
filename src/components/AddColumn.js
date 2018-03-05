import React from 'react';

export default class AddColumn extends React.Component {
  state = {
    error: undefined
  };
  handleAddColumn = (e) => {
    e.preventDefault();
    const column = e.target.elements.column.value.trim();
    const error = this.props.handleAddColumn(column);
    
    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.column.value = '';
    }
    
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddColumn}>
          <input type="text" name="column" placeholder="new column name"/>
          <button className="button">Add Column</button>
        </form>
      </div>
    )
  }
}