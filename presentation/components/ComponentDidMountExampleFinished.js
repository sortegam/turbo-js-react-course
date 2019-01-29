/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Spinner from './Spinner/Spinner';

class ComponentDidMountExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: []
    };
  }

  async componentDidMount() {
    const API_URL = 'https://pokeapi.co/api/v2/pokemon/';
    const response = await axios.get(API_URL);
    const {
      data: { results }
    } = response;
    this.setState({
      data: results,
      loading: false
    });
  }

  openDetails(item) {
    window.open(item.url);
  }

  render() {
    if (this.state.loading) {
      return <Spinner />;
    }
    if (this.state.data.length === 0) {
      return <span>There is no data to show!</span>;
    }
    return (
      <table>
        {this.state.data.map((item) => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td><button onClick={() => this.openDetails(item)}>DETAILS</button></td>
          </tr>
        ))}
      </table>
    );
  }
}

ComponentDidMountExample.propTypes = {
  showLogo: PropTypes.bool,
  text: PropTypes.string
};

ComponentDidMountExample.defaultProps = {
  showLogo: true,
  text: 'This is my finished Stateless Component'
};

export default ComponentDidMountExample;
