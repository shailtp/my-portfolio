import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Experience from './components/Experience';
import MobileMessage from './components/MobileMessage'; // Importing MobileMessage component
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import './App.css';

function App() {
  const vantaRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile); // Add event listener for resize

    const vantaEffect = NET({
      el: vantaRef.current,
      THREE,
      color: 0xffffff, // White color for nodes and lines
      backgroundColor: 0x2C0748, // Dark purple background color
      points: 10,
      maxDistance: 20,
      spacing: 15,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
      window.removeEventListener('resize', checkMobile); // Cleanup listener
    };
  }, []);

  if (isMobile) {
    return <MobileMessage />;
  }

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
