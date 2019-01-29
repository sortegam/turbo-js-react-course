import React from 'react';
import PropTypes from 'prop-types';

import logoSrc from '../../assets/babel.png';

const StatelessExample = ({ showLogo, text }) => (
  <div>
    {showLogo && <img src={logoSrc} style={{ width: '200px' }} />}
    {text}
  </div>
);

StatelessExample.propTypes = {
  showLogo: PropTypes.bool,
  text: PropTypes.string
};

StatelessExample.defaultProps = {
  showLogo: true,
  text: 'This is my finished Stateless Component'
};

export default StatelessExample;
