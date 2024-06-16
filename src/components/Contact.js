import React, { useState } from 'react';
import './Contact.css';
import gmailLogo from '../assets/gmail.png';
import instagramLogo from '../assets/instagram.png';
import linkedinLogo from '../assets/linkedin.png';
import githubLogo from '../assets/github.png';
import leetcodeLogo from '../assets/leetcode.png';
import hackerrankLogo from '../assets/hackerrank.png';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = (e) => {
    const input = e.target.value;
    setMessage(input);
    setCharCount(input.length);
  };

  const handleSubmit = (e) => {
    if (charCount > 500) {
      e.preventDefault();
      alert('Message cannot exceed 500 characters.');
    }
  };

  return (
    <div className="contact-section">
      <div className="tile">
        <div className="social-media">
          <h1>Social Media and other handles</h1>
          <ul className="social-links">
            <li><a href="mailto:patelshail233@gmail.com"><img src={gmailLogo} alt="Gmail" /> Gmail</a></li>
            <li><a href="https://instagram.com/shaillpatell" target="_blank" rel="noopener noreferrer"><img src={instagramLogo} alt="Instagram" /> Instagram</a></li>
            <li><a href="https://linkedin.com/in/shail-patel-0954871aa/" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} alt="LinkedIn" /> LinkedIn</a></li>
            <li><a href="https://github.com/shailtp" target="_blank" rel="noopener noreferrer"><img src={githubLogo} alt="GitHub" /> GitHub</a></li>
            <li><a href="https://leetcode.com/u/shailtp/" target="_blank" rel="noopener noreferrer"><img src={leetcodeLogo} alt="LeetCode" /> LeetCode</a></li>
            <li><a href="https://www.hackerrank.com/profile/shailtp" target="_blank" rel="noopener noreferrer"><img src={hackerrankLogo} alt="HackerRank" /> HackerRank</a></li>
          </ul>
        </div>
      </div>
      <div className="tile">
        <div className="contact-form">
          <h1>Contact Me</h1>
          <form action="https://formspree.io/f/xbjnnqzg" method="POST" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Your message" value={message} onChange={handleInputChange} required></textarea>
            <div className={`char-count ${charCount > 500 ? 'exceed' : ''}`}>Characters: {charCount}/500</div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
