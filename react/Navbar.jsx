import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => (
  <div className="clearfix">
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="h3 navbar-brand">
          <a href="#top">Jean Chung</a>
        </h1>
        <div className="navbar-menu">
          <ul className="list-reset">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
