import React from 'react';
import NavBar from '../components/NavBar';

// CardsPage page component
class CardsPage extends React.Component {
  // render
  render() {
    return (
      <div className="page-CardsPage">
        <NavBar />
        <h4>HeartStone Cards</h4>
        <button>Load Cards!</button>
      </div>
    );
  }
}

export default CardsPage;
