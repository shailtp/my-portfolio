import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Experience from './components/Experience';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import './App.css';

function App() {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = NET({
      el: vantaRef.current,
      THREE,
      color: 0xffffff, // White color for nodes and lines
      backgroundColor: 0x7A00AF, // Dark purple background color
      points: 10,
      maxDistance: 20,
      spacing: 15,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <Router>
      <div className="App" ref={vantaRef}>
        <Sidebar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
