import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';
import { ModalManager } from 'react-dynamic-modal';

import '../assets/sass/main.scss';

// Components
import Navbar from './Navbar';
import Home from './Home';
import ProjectModal from './ProjectModal';
import Footer from './Footer';

const openModal = (projectKey) => {
  ModalManager.open(<ProjectModal projectKey={projectKey} onRequestClose={() => true} />);
};

const HomeWithProps = props => (<Home openModal={openModal} {...props} />);

class App extends Component {
  constructor() {
    super();
    this.state = {
      mobileMenuOpen: false,
    };
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  toggleMobileMenu() {
    this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen });
  }

  render() {
    return (
      <Router>
        <div id="top" className={`site-container${this.state.mobileMenuOpen ? ' navbar-open' : ''}`}>
          <Navbar toggleMobileMenu={this.toggleMobileMenu} mobileMenuOpen={this.state.mobileMenuOpen} />
          <Route exact path="/" render={HomeWithProps} />
          <Footer />
        </div>
      </Router>
    );
  }
}


render(
  <App />,
  document.getElementById('main'),
);
