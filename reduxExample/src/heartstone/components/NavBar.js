import React from 'react';
import { Link } from 'react-router';

import './NavBar.css';

const NavBar = () => (
  <nav className="NavBar">
    <Link to="/">HOME CARDS</Link>
    <Link to="/count">CARD COUNTER</Link>
    <Link to="/thumb">CARD THUMBNAILS</Link>
  </nav>
);

export default NavBar;
