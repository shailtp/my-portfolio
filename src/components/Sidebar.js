import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><NavLink exact to="/" activeClassName="active">About Me</NavLink></li>
        <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
        <li><NavLink to="/experience" activeClassName="active">Experience</NavLink></li>
        <li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
      </ul>
    </div>
  );
};

export default Sidebar;
