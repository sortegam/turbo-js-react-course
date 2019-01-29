import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadCards as loadCardsAction } from '../redux';
import CardList from '../components/CardList';
import NavBar from '../components/NavBar';


// CardsPage page component
class CardsPage extends React.Component {
  // render
  render() {
    const { isLoading, cards } = this.props;
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="page-CardsPage">
        <NavBar />
        <h4>HeartStone Cards</h4>
        <button onClick={() => this.props.loadCards()}>Load Cards!</button>
        {cards.length > 0 && <CardList cards={cards} />}
      </div>
    );
  }
}

CardsPage.propTypes = {
  cards: PropTypes.any,
  isLoading: PropTypes.bool,
  loadCards: PropTypes.func
};

CardsPage.defaultProps = {
  isLoading: false,
  cards: []
};

const mapStateToProps = (state) => ({
  isLoading: state.heartstone.loading,
  cards: state.heartstone.cards
});

const mapDispatchToProps = {
  loadCards: loadCardsAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsPage);
