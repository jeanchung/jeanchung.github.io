import React from 'react';
import About from './About';
import Projects from './Projects';

const Home = props => (
  <div id="top">
    <div id="about-section">
      <div className="section-container first-section">
        <About />
      </div>
    </div>
    <div id="projects-section">
      <div className="section-container">
        <Projects />
      </div>
    </div>
  </div>
);


export default Home;
