import React from 'react';
import About from './About';
import Projects from './Projects';

const Home = props => (
  <div className="container" id="top">
    <div className="page-header">
      <h2 className="page-title">Hello, World!</h2>
    </div>

    <About />
    <Projects />
  </div>
);


export default Home;
