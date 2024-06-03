import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h1>Projects</h1>
      <div className="project">
        <h2>EduBridge: A Learning Management System</h2>
        <p>
          Spearheaded the development of a comprehensive Learning video streaming application EduBridge utilizing the MERN stack. This project mirrors Canvas’ functionality offering video uploading, sharing, and real-time streaming capabilities.
        </p>
      </div>
      <div className="project">
        <h2>RunOut</h2>
        <p>
          Led the development of an innovative action maze chase Human-Computer Interaction (HCI) application using Python and Pygame. This project featured the implementation of an AI-based opponent that dynamically follows the player using the A* algorithm.
        </p>
      </div>
      <div className="project">
        <h2>Simulation of Molecular Dynamics</h2>
        <p>
          Led a sophisticated project focusing on the simulation of molecular dynamics involving N particles employing C++ and the OpenMP library. Successfully optimized the simulation for parallel execution using OpenMP.
        </p>
      </div>
    </section>
  );
};

export default Projects;
