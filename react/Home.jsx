import React from 'react';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';

const Home = props => (
  <div id="top">
    <div id="intro-section">
      <div className="section-container first-section">
        <Intro />
      </div>
    </div>
    <div id="about-section">
      <div className="section-container">
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
