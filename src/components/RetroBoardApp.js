// Routing
// Drag and drop
// Creating new objects (boards, lists, cards)
// Handling inputs and validation
// Client side path: How to use local storage, saving data to the local storage, reading data from the local storage.
// Server side path: How to use databases, saving data to the database, reading data from the database.
// Example repo at https://github.com/wesharehoodies/simple-trello


// Create board - <Board />
// Create column - <Column />
// Create card - <Card />

import React from 'react';
import Header from './Header';
import Columns from './Columns.js';
import AddColumn from './AddColumn';

export default class Board extends React.Component {
  state = {
    columns: []
  };

  handleDeleteColumns = () => {
    console.log('All columns deleted');
  };
  handleDeleteColumn = () => {
    console.log('Selected column deleted');
  };
  handleAddColumn = (column) => {
    this.setState((prevState) => ({ columns: prevState.columns.concat(column) }));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem('columns');
      const options = JSON.parse(json);

      if (columns) {
        this.setState(() => ({ columns }));
      }
    } catch (e) {
      // do nothing at all
    }
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.columns.length !== this.state.columns.length) {
      const json = JSON.stringify(this.state.columns);
      localStorage.setItem('columns', json);
    }
  };

  render() {
    const subtitle = 'Your efficacy: A retrospective.'
    
    return (
      <div>
        <Header subtitle={subtitle} />
        <AddColumn
          // columns={this.state.columns}
          handleAddColumn={this.handleAddColumn}
        />
        <Columns
          columns={this.state.columns}
          handleDeleteColumns={this.handleDeleteColumns}
          handleDeleteColumn={this.handleDeleteColumn}
        />
      </div>
    )
  }
}


// <Board /> needs <Columns /> component
// <Column /> should be like <Option /> in Indecision
// default number of columns = 0
// <AddColumn /> adds 1 to this number
// <Board /> to render the number to start with
// Then render number of elements (create <div> element in jsx to start with)
