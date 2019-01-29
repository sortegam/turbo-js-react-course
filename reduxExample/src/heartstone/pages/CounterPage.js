import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardCounter from '../components/CardCounter';
import NavBar from '../components/NavBar';

// CounterPage page component
class CounterPage extends React.Component {
  // render
  render() {
    const { cards } = this.props;
    return (
      <div>
        <NavBar />
        <div className="page-CounterPage">
          <CardCounter cards={cards} />
        </div>
      </div>
    );
  }
}

CounterPage.propTypes = {
  cards: PropTypes.any
};

CounterPage.defaultProps = {
  cards: []
};

const mapStateToProps = (state) => ({
  cards: state.heartstone.cards
});

export default connect(
  mapStateToProps,
  {}
)(CounterPage);
