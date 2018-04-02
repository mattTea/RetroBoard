import React from 'react';
import ReactDOM from 'react-dom';
import { addCard } from './actions/cards';
import configureStore from './store/configureStore';
import RetroBoardApp from './components/RetroBoardApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addCard({ cardText: 'Card One' }));

console.log(store.getState());

ReactDOM.render(<RetroBoardApp />, document.getElementById('app'));