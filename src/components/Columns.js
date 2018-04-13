import React from 'react';
import { connect } from 'react-redux';
import Column from './Column';

// export default class Columns extends React.Component {
class Columns extends React.Component {

  render() {
    return (
      <div>
        <h3>Your board</h3>
        {this.props.columns.length === 0 && <p>Add a column to get started!</p>}
        <div className="flex-container">
          {
            this.props.columns.map((column, index) => (
              <Column
                columns={this.props.columns}
                columnId={index}
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

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  };
};

export default connect(mapStateToProps)(Columns);
