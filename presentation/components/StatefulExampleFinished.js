// import React from 'react';

// const StatefulComponent = () => <div>I'll be a Stateful component</div>;

// export default StatefulComponent;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const emojiArray = ['😔', '😞', '😟', '😲', '😧', '😝', '🤯', '🤪', '😡', '🤬'];

class StatefulComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.getClickFeedback = this.getClickFeedback.bind(this);
  }

  /* eslint-disable */
  getClickFeedback() {
    const { counter } = this.state;
    return <div style={{ fontSize: counter * 10 }}>{emojiArray[counter] || '...'}</div>;
  }

  handleClick() {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        You clicked <strong>{counter || '0'}</strong> times
        <br />
        <button onClick={this.handleClick}>CLICK!!!</button>
        <br />
        <br />
        {this.getClickFeedback()}
      </div>
    );
  }
}

StatefulComponent.propTypes = {
  showLogo: PropTypes.bool,
  text: PropTypes.string
};

StatefulComponent.defaultProps = {
  showLogo: true,
  text: 'This is my finished Stateless Component'
};

export default StatefulComponent;
