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
              <div className="location">
                <span role="img" aria-label="pin" className="pin-emoji">📍</span>
                <span>San Francisco, California</span>
              </div>
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
          <div className="skills">
            <p><strong className="category">Programming Languages:</strong> <span className="skill">JavaScript, Python, C/C++, Swift</span></p>
            <p><strong className="category">Database:</strong> <span className="skill">MySQL, Oracle DB, MongoDB, PostgreSQL, Redis</span></p>
            <p><strong className="category">Frontend Technologies:</strong> <span className="skill">HTML, CSS, React.js, Next.js, D3.js, TypeScript</span></p>
            <p><strong className="category">Backend Web Technologies:</strong> <span className="skill">Node.js, Express, RESTful API, GraphQL, Django</span></p>
            <p><strong className="category">Other Tools/Softwares:</strong> <span className="skill">AWS, JIRA, Postman, Docker, Git, Snowflake, Azure, Firebase</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
