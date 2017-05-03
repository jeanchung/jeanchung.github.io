import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';

import '../sass/main.scss';

// Components
import Home from './Home';
import Navbar from './Navbar';

render(
  <Router>
    <div className="site-container">
      <Navbar />
      <div className="container">
        <Route exact path="/" component={Home} />
      </div>
    </div>
  </Router>,
  document.getElementById('main'),
);
