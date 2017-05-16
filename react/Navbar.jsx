import React from 'react';
import { Link } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';

const Navbar = props => (
  <div className="clearfix">
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="h3 navbar-brand">
          <Scrollchor to="#top">Jean Chung</Scrollchor>
        </h1>
        <div className="navbar-menu">
          <ul className="list-reset">
            <li><Scrollchor to="#about">About</Scrollchor></li>
            <li><Scrollchor to="#projects">Projects</Scrollchor></li>
            <li><Scrollchor to="#contact">Contact</Scrollchor></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
