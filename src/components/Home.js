import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-section">
      <div className="tile">
        <div className="top-section">
          <div className="left-section">
            <h1>Hi, I am Shail Patel</h1>
            <h2>Full Stack Developer</h2>
          </div>
          <div className="right-section">
            <img src="/photo.jpeg" alt="Shail Patel" className="profile-photo" />
          </div>
        </div>
        <div className="content">
          <p> I am a seasoned Software Engineer with a M.S. in Computer Science from San Francisco State University and a B.S. in Computer Science from Vellore Institute of Technology, India. I have a proven ability to quickly adapt to new technologies, with a solid background in modern software development practices, version control, issue tracking, and containerization </p>
          <p> I am proficient in programming languages Javascript, Python and C++; Front-end technologies like React.js, Next.js, Bootstrap; and back-end frameworks such as Django, Node.js, Express, and RESTful APIs. I possess strong skills in databases including MySQL, Oracle DB, and MongoDB, and expertise in tools and IDEs such as Git, JIRA, Postman, Docker, and cloud technologies like AWS and Azure. </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
