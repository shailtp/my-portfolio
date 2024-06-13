import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-section">
      <div className="tile">
        <h1>Projects</h1>
        <div className="projects-container">
          <div className="project">
            <div className="project-header">
              <h2>EduBridge: A Learning Management System</h2>
              <a href="https://github.com/CSC-648-SFSU/csc648-04-sp24-team-04" target="_blank" rel="noopener noreferrer">
                <img src="/github.png" alt="GitHub" className="github-logo" />
              </a>
            </div>
            <ul>
              <li>Spearheaded the full stack development of a comprehensive Learning video streaming application, Edu Bridge, utilizing the MERN stack. This project mirrors Canvas' functionality, offering video uploading, sharing, and real-time streaming capabilities.</li>
              <li>Orchestrated project workflow and task management using JIRA. Built a modern and responsive web design using HTML/CSS and React.js. Backend API endpoints and features using Node mailer and multer. Used Directus for Content Management.</li>
              <li>Implemented MySQL database for efficient data storage, coupled with Express and Node.js for scalable backend services. Deployed using AWS EC2. Crafted an interactive front-end experience with React, optimized for performance and cross-browser compatibility.</li>
            </ul>
          </div>
          <div className="project">
            <div className="project-header">
              <h2>SFO Passenger Traffic Visualization System</h2>
              <a href="https://github.com/supriyakr/airtraffic-sfo" target="_blank" rel="noopener noreferrer">
                <img src="/github.png" alt="GitHub" className="github-logo" />
              </a>
            </div>
            <ul>
              <li>Developed and maintained a real-time data visualization platform to analyze passenger traffic at San Francisco International Airport (SFO), leveraging a dataset of 35.3k rows, resulting in a 25% increase in data processing efficiency.</li>
              <li>Implemented interactive visualizations using D3.js on a Next.js web application, providing insights into peak travel periods, airline performance, and passenger behavior, which led to a 30% improvement in operational decision-making speed.</li>
              <li>Integrated PostgreSQL for efficient data storage and retrieval, with backend services managed using Prisma and Node.js, reducing database latency by 40% and ensuring seamless and scalable data handling.</li>
              <li>Enhanced operational efficiency through predictive analytics and comparative metrics, aiding strategic planning and resource allocation at SFO, resulting in a 20% reduction in resource allocation time.</li>
            </ul>
          </div>
          <div className="project">
            <div className="project-header">
              <h2>No-Escape: Action maze chase game</h2>
              <a href="https://github.com/shailtp/no-escape" target="_blank" rel="noopener noreferrer">
                <img src="/github.png" alt="GitHub" className="github-logo" />
              </a>
            </div>
            <ul>
              <li>Led the development of an innovative action maze chase Human-Computer Interaction (HCI) application using Python and Pygame. This project featured the implementation of an AI-based opponent that dynamically follows the player using the A* algorithm to determine the optimal path based on the player's movements.</li>
              <li>Designed and implemented a user-friendly GUI to enhance user engagement and experience.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
