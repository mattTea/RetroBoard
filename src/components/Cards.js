import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

class Cards extends React.Component {

  // renderCards = () => {
  //   const { columns, columnId } = this.props;
  //   return columns[columnId].cards.map((card, i) => {
  //     return (
  //       <Card
  //         key={i}
  //         cardText={card.cardText}
  //         // cardId={card.cardId}
  //         listId={card.listId}
  //         handleDeleteCard={card.handleDeleteCard}
  //       />
  //     )
  //   })
  // }

  // render() {
  //   return (
  //     <div>
  //       {this.renderCards()}
  //     </div>
  //   )
  // }

  // CARDS ARRAY NOT REACHING console.log() IN RENDER BELOW EITHER
  render() {
    const { columnId } = this.props;
    return (
      <div>
        {console.log('cards array: ' + this.props.cards.length)}
        {
          this.props.cards.map((card) => (  
            <Card
              key={card.id}
              cardText={card.cardText}
              // count={index + 1}
              columnId={columnId}
              handleDeleteCard={card.handleDeleteCard}
            />
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  };
};

export default connect(mapStateToProps)(Cards);