import React from 'react';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Home = ({ openModal }) => (
  <div id="top">
    <div className="section-one">
      <div className="section-container">
        <Intro />
      </div>
    </div>
    <div className="section-two">
      <div id="about" />
      <div className="section-container">
        <About />
      </div>
    </div>
    <div className="section-three">
      <div id="projects" />
      <div className="section-container">
        <Projects openModal={openModal} />
      </div>
    </div>
    <div className="section-four">
      <div id="contact" />
      <div className="section-container">
        <Contact />
      </div>
    </div>
  </div>
);


export default Home;
