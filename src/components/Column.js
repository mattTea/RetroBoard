import React from 'react';

const Column = (props) => (
  <div>
    <p>{props.columnText}</p>
    <button className="button" onClick={(e) => {
      props.handleDeleteColumn(props.columnText);
    }}>Remove Column</button>
  </div>
);

export default Column;
