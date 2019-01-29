import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';

import './ThumbPage.css';

// ThumbPage page component
class ThumbPage extends React.Component {
  // render
  render() {
    const { cards } = this.props;
    return (
      <div>
        <NavBar />
        {cards.length > 0
          && cards
            .filter((card) => Boolean(card.img) === true)
            .map((card) => <img className="thumbHS" key={card.cardId} src={card.img} />)}
      </div>
    );
  }
}

ThumbPage.propTypes = {
  cards: PropTypes.any
};

ThumbPage.defaultProps = {
  cards: []
};

const mapStateToProps = (state) => ({
  cards: state.heartstone.cards
});

export default connect(
  mapStateToProps,
  {}
)(ThumbPage);
