// Routing
// Drag and drop
// Creating new objects (boards, lists, cards)
// Handling inputs and validation
// Client side path: How to use local storage, saving data to the local storage, reading data from the local storage.
// Server side path: How to use databases, saving data to the database, reading data from the database.
// Example repo at https://github.com/wesharehoodies/simple-trello

import React from 'react';
import Header from './Header';
import Columns from './Columns.js';
import AddColumn from './AddColumn';

export default class RetroBoardApp extends React.Component {
  state = {
    columns: []
  };

  handleRemoveAllColumns = () => {
    this.setState(() => ({ columns: [] }));
    console.log('Columns reset');
  };
  handleDeleteColumn = (columnToRemove) => {
    this.setState((prevState) => ({
      columns: prevState.columns.filter((column) => columnToRemove !== column)
    }));
    console.log('Selected column deleted');
  };
  handleAddColumn = (column) => {
    if (!column) {
      return 'Give the column a name to add it';
    }
    
    this.setState((prevState) => ({ columns: prevState.columns.concat(column) }));
    console.log('column added', this.state.columns.length + 1);
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem('columns');
      const columns = JSON.parse(json);

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
          handleAddColumn={this.handleAddColumn}
        />
        <Columns
          columns={this.state.columns}
          handleRemoveAllColumns={this.handleRemoveAllColumns}
          handleDeleteColumn={this.handleDeleteColumn}
        />
      </div>
    )
  }
}
