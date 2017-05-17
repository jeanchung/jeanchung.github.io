import React from 'react';

const Contact = props => (
  <div>
    <h3 className="h2 section-title white">Contact</h3>
    <div className="contact-content">
      <div>
        <p>Email me at <a href="mailto:jc@jeanchung.io">
          {/* <i className="fa fa-envelope" aria-hidden="true" /> */}
          jc@jeanchung.io
        </a>
        </p>
      </div>
      <p>Or find me around the web:</p>
      <div className="social-links">
        <ul>
          <li>
            <a href="https://github.com/jeanchung">
              <i className="fa fa-github" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jean-chung/">
              <i className="fa fa-linkedin" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/jxchung">
              <i className="fa fa-twitter" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Contact;
