import React from 'react';
import Column from './Column';

const Columns = (props) => (
  <div>
    <div>
      <h3>Columns</h3>
      <button onClick={props.handleDeleteColumns}>Remove All</button>
    </div>
    {props.columns.length === 0 && <p>Add a column to get started!</p>}
    {
      props.columns.map((column, index) => (
        <Column
          key={index}
          columnText={column}
          count={index + 1}
          handleDeleteColumn={props.handleDeleteColumn}
        />
      ))
    }
  </div>
);

export default Columns;