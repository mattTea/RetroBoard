import React from 'react';
import Column from './Column';

const Columns = (props) => (
  <div>
    <h3>Your board</h3>
    {props.columns.length === 0 && <p>Add a column to get started!</p>}
    <div className="flex-container">
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
    <button
      className="button"
      disabled={props.columns.length === 0}
      onClick={props.handleRemoveAllColumns}
    >
      Remove All
    </button>
  </div>
);

export default Columns;