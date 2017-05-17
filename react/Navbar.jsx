import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';

const Navbar = ({ toggleMobileMenu, mobileMenuOpen }) => (
  <nav className="navbar">
    <div className="navbar-container">
      <h1 className="h3 navbar-brand">
        <Scrollchor to="#top">Jean Chung</Scrollchor>
      </h1>
      <div className="navbar-menu">
        <div className={`navbar-menu-container${mobileMenuOpen ? '' : ' hide-menu'}`}>
          <ul className="list-reset">
            <li><Scrollchor to="#about">About</Scrollchor></li>
            <li><Scrollchor to="#projects">Projects</Scrollchor></li>
            <li><Scrollchor to="#contact">Contact</Scrollchor></li>
          </ul>
        </div>
      </div>
      <div className="nav-toggle">
        <button
          onClick={toggleMobileMenu}
          className="btn toggle-nav-btn"
          aria-hidden="true"
        >
          <i className="fa fa-bars" aria-hidden="true" />
        </button>
      </div>
    </div>
  </nav>
    );


export default Navbar;
