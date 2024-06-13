import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: 'EduBridge: A Learning Management System',
    github: 'https://github.com/CSC-648-SFSU/csc648-04-sp24-team-04',
    description: [
      'Spearheaded the full stack development of a comprehensive Learning video streaming application, Edu Bridge, utilizing the MERN stack. This project mirrors Canvas\' functionality, offering video uploading, sharing, and real-time streaming capabilities.',
      'Orchestrated project workflow and task management using JIRA. Built a modern and responsive web design using HTML/CSS and React.js. Backend API endpoints and features using Node mailer and multer. Used Directus for Content Management.',
      'Implemented MySQL database for efficient data storage, coupled with Express and Node.js for scalable backend services. Deployed using AWS EC2. Crafted an interactive front-end experience with React, optimized for performance and cross-browser compatibility.'
    ]
  },
  {
    title: 'SFO Passenger Traffic Visualization System',
    github: 'https://github.com/supriyakr/airtraffic-sfo',
    description: [
      'Developed and maintained a real-time data visualization platform to analyze passenger traffic at San Francisco International Airport (SFO), leveraging a dataset of 35.3k rows, resulting in a 25% increase in data processing efficiency.',
      'Implemented interactive visualizations using D3.js on a Next.js web application, providing insights into peak travel periods, airline performance, and passenger behavior, which led to a 30% improvement in operational decision-making speed.',
      'Integrated PostgreSQL for efficient data storage and retrieval, with backend services managed using Prisma and Node.js, reducing database latency by 40% and ensuring seamless and scalable data handling.',
      'Enhanced operational efficiency through predictive analytics and comparative metrics, aiding strategic planning and resource allocation at SFO, resulting in a 20% reduction in resource allocation time.'
    ]
  },
  {
    title: 'No-Escape: Action maze chase game',
    github: 'https://github.com/shailtp/no-escape',
    description: [
      'Led the development of an innovative action maze chase Human-Computer Interaction (HCI) application using Python and Pygame. This project featured the implementation of an AI-based opponent that dynamically follows the player using the A* algorithm to determine the optimal path based on the player\'s movements.',
      'Designed and implemented a user-friendly GUI to enhance user engagement and experience.'
    ]
  }
];

const Projects = () => {
  const [expanded, setExpanded] = React.useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="projects-section">
      <h1 className="projects-heading">Projects</h1>
      <div className="cards-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`card ${expanded === index ? 'expanded' : ''}`}
            onClick={() => toggleExpand(index)}
            animate={{ 
              flex: expanded === index ? 3 : 1, 
              height: expanded === index ? 'auto' : '60px' 
            }}
            transition={{ layout: { duration: 0.3, type: 'spring' } }}
            layout
          >
            <motion.h2 layout="position">{project.title}</motion.h2>
            {expanded === index && (
              <motion.div className="card-content" layout="position">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <img src="/github.png" alt="GitHub" className="github-logo" />
                </a>
                <ul>
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
