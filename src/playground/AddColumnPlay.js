// this file was the app.js file when playing around

import React from 'react';
import ReactDOM from 'react-dom';
// import RetroBoardApp from './components/RetroBoardApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

let columns = [];

const addColumnSubmit = (e) => {
  e.preventDefault();

  const columnName = e.target.elements.column.value; // target was the form below, on this have access to elements, and on that the 'name' element
  
  if (columnName) {
    columns.push(columnName); // columnName = the text input form field below
    e.target.elements.column.value = ''; // clear inout field
    console.log('Column added: ' + columns.length);
    render(); // re-render app with updated state
  }
};
const onRemoveAllColumns = () => {
  columns = [];
  render();
  console.log('Columns reset');
}

const render = () => {
  const templateTwo = (
    <div>
      <h1>Columns: {columns.length}</h1>
      <form onSubmit={addColumnSubmit}>
        <input type="text" name="column"/>
        <button>Add Column</button>
      </form>
      {columns.length === 0 && <p>Add a column to get started!</p>}
      {
        columns.map((column) => <p key={column}>{'Column name: ' + column}</p>) // taking columns array and generating jsx (<p> tags) for each column item in array
      }
      <button disabled={columns.length === 0} onClick={onRemoveAllColumns}>Remove All Columns</button>
    </div>  
  );

  // ReactDOM.render(<RetroBoardApp />, document.getElementById('app'));
  ReactDOM.render(templateTwo, document.getElementById('app'));
};

render();