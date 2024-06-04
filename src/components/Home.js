import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Home.css';

function Home() {
  return (
    <div className="home-section">
      <div className="tile">
        <div className="top-section">
          <div className="left-section">
            <h1>
              <TypeAnimation
                sequence={["Hi, I am Shail Patel", 2000]}
                wrapper="span"
                cursor={true}
                repeat={0}
              />
            </h1>
            <div className="sub-section">
              <h2>Full Stack Developer</h2>
              <div className="icons">
                <a href="https://linkedin.com/in/shail-patel-0954871aa/" target="_blank" rel="noopener noreferrer">
                  <img src="/linkedin.png" alt="LinkedIn" className="icon-image" />
                </a>
                <a href="https://github.com/shailtp" target="_blank" rel="noopener noreferrer">
                  <img src="/github.png" alt="GitHub" className="icon-image" />
                </a>
                <a href="mailto:patelshail233@gmail.com">
                  <img src="/email.png" alt="Mail" className="icon-image" />
                </a>
              </div>
            </div>
          </div>
          <div className="right-section">
            <img src="/photo.jpeg" alt="Shail Patel" className="profile-photo" />
          </div>
        </div>
        <div className="content">
          <p> I am a seasoned Software Engineer with a M.S. in Computer Science from San Francisco State University and a B.S. in Computer Science from Vellore Institute of Technology, India. I have a proven ability to quickly adapt to new technologies, with a solid background in modern software development practices, version control, issue tracking, and containerization </p>
          <p> I am proficient in programming languages <b>Javascript</b>, <b>Python</b> and <b>C++</b>; Front-end technologies like <b>React.js</b>, <b>Next.js</b>, <b>Bootstrap</b>; and back-end frameworks such as <b>Django</b>, <b>Node.js</b>, <b>Express</b>, and <b>RESTful APIs</b>. I possess strong skills in databases including <b>MySQL</b>, <b>Oracle DB</b>, and <b>MongoDB</b>, and expertise in tools and IDEs such as Git, JIRA, Postman, Docker, and cloud technologies like <b>AWS</b> and <b>Azure</b>. </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
