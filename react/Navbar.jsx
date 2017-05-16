import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      showMobileMenu: false,
    };
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  toggleMobileMenu(evt) {
    this.setState({
      menu: !this.state.menu,
    });
  }

  render() {
    return (
      <div className="clearfix">
        <nav className="navbar">
          <div className="navbar-container">
            <h1 className="h3 navbar-brand">
              <Scrollchor to="#top">Jean Chung</Scrollchor>
            </h1>
            <div className="navbar-menu">
              <div className="navbar-menu-container">
                <ul className={`list-reset${this.state.showMobileMenu ? '' : ' hide-menu'}`}>
                  <li><Scrollchor to="#about">About</Scrollchor></li>
                  <li><Scrollchor to="#projects">Projects</Scrollchor></li>
                  <li><Scrollchor to="#contact">Contact</Scrollchor></li>
                </ul>
              </div>
            </div>
            <div className="nav-toggle">
              <button
                onClick={this.toggleMobileMenu}
                className="btn toggle-nav-btn"
                aria-hidden="true"
              >
                <i className="fa fa-bars" aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}


export default Navbar;
