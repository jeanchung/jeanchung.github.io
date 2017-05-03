import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';

import '../assets/sass/main.scss';

// Components
import Navbar from './Navbar';
import Home from './Home';

render(
  <Router>
    <div className="site-container">
      <Navbar />
      <Route exact path="/" component={Home} />
    </div>
  </Router>,
  document.getElementById('main'),
);
