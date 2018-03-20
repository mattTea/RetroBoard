import React from 'react';
import Card from './Card';

export default class Cards extends React.Component {
  // state = {
  //   cards: this.props.cards
  // };

  // componentDidMount() {
  //   try {
  //     const json = localStorage.getItem('cards');
  //     const cards = JSON.parse(json);

  //     if (cards) {
  //       this.setState(() => ({ cards }));
  //       console.log(cards);
  //     }
  //   } catch (e) {
  //     // do nothing at all
  //   }
  // };
  
  // *Below sets cards to local storage for every instance of a column!*
  // *Look at setting this on a component that is only rendering an update to a single column*
  
  // componentDidUpdate(prevProps, prevState) {
  //   console.log(this.props.cards.length);
  //   if (prevProps.cards.length !== this.props.cards.length) {
  //     const json = JSON.stringify(this.props.cards);
  //     console.log(json);
  //     localStorage.setItem('cards', json);
  //     console.log(localStorage.getItem('cards'));
  //     console.log(this.props.cards.length);
  //   }
  // };

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