import React from 'react';

export default class AddColumn extends React.Component {
  
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
        
        <form onSubmit={this.handleAddColumn}>
          <input type="text" name="column" />
          <button className="button">Add Column</button>
        </form>
      </div>
    )
  }
}