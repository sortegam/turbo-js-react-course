import React from 'react';
import PropTypes from 'prop-types';
import './CardList.css';

const CardList = ({ cards }) => (
  <table className="CardList">
    <tr>
      <td className="headers">NAME</td>
      <td className="headers">IMAGE</td>
    </tr>
    {cards
      && cards
        .filter((card) => Boolean(card.img) === true)
        .map((card) => (
          <tr key={card.cardId}>
            <td>{card.name}</td>
            <td>
              <img src={card.img} style={{ width: 150 }} />
            </td>
          </tr>
        ))}
  </table>
);

CardList.propTypes = {
  cards: PropTypes.any
};

export default CardList;
