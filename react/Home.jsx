import React from 'react';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';

const Home = props => (
  <div id="top">
    <div className="intro-section">
      <div className="section-container">
        <Intro />
      </div>
    </div>
    <div className="about-section">
      <div className="section-container">
        <About />
      </div>
    </div>
    <div className="projects-section">
      <div className="section-container">
        <Projects />
      </div>
    </div>
  </div>
);


export default Home;
