import React from 'react';
import Card from './Card';

export default class Column extends React.Component {
  // look at course and constructor() plus super(props) to set state/props for the below methods
  state = {
    cards: this.props.cards
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('cards');
      const cards = JSON.parse(json);

      if (cards) {
        this.setState(() => ({ cards }));
      }
    } catch (e) {
      // do nothing at all
    }
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.cards.length !== this.state.cards.length) {
      const json = JSON.stringify(this.state.cards);
      localStorage.setItem('cards', json);
    }
  };

  render() {
    return (
      <div>
        {
          this.props.cards.map((card, index) => (
            <Card
              key={index}
              cardText={card}
              count={index + 1}
              handleDeleteCard={this.props.handleDeleteCard}
            />
          ))
        }
      </div>
    )
  }

// const Cards = (props) => (
//   <div>
//     {
//       props.cards.map((card, index) => (
//         <Card
//           key={index}
//           cardText={card}
//           count={index + 1}
//           handleDeleteCard={props.handleDeleteCard}
//         />
//       ))
//     }
//   </div>
// );
}
// export default Cards