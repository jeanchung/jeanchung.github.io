import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';
import { ModalManager } from 'react-dynamic-modal';

import '../assets/sass/main.scss';

// Components
import Navbar from './Navbar';
import Home from './Home';
import ProjectModal from './ProjectModal';

const openModal = (projectKey) => {
  ModalManager.open(<ProjectModal projectKey={projectKey} onRequestClose={() => true} />);
};

const HomeWithProps = props => (<Home openModal={openModal} {...props} />);

const App = props => (
  <Router>
    <div className="site-container">
      <Navbar />
      <Route exact path="/" render={HomeWithProps} />
    </div>
  </Router>
    );

render(
  <App />,
  document.getElementById('main'),
);
