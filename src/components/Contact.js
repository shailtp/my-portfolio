import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="tile">
        <h1>Contact</h1>
        <p>
          You can reach out to me via email at{' '}
          <a href="mailto:patelshail233@gmail.com">patelshail233@gmail.com</a>
          {' '}or connect with me on{' '}
          <a href="https://linkedin.com/in/shail-patel-0954871aa/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          .
        </p>
      </div>
    </div>
  );
};

export default Contact;
