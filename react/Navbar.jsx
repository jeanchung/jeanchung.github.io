import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => (
  <div className="clearfix">
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-brand">
          <Link to="/">Jean Chung</Link>
        </h1>
        <div className="navbar-menu-right">
          <ul className="list-reset">
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Projects</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
