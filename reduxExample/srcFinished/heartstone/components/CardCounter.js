import React from 'react';
import PropTypes from 'prop-types';
import './CardCounter.css';

const CardCounter = ({ cards }) => (
  <header className="CardCounter">
    Cards in the store: [ {cards.length.toString()} ]
  </header>
);

CardCounter.propTypes = {
  cards: PropTypes.any
};

export default CardCounter;
