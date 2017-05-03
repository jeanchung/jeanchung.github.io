import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => (
  <nav className="navbar">
    <div className="navbar-brand">
      <Link to="/">Jean</Link>
    </div>
    <div className="navbar-menu-right">
      <ul>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Projects</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
