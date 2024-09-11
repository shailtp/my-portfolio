import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import './MobileMessage.css';

const MobileMessage = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
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
    };
  }, []);

  return (
    <div className="mobile-message-container" ref={vantaRef}>
      <h1 className="mobile-message-text">
        This website is best viewed on a desktop or laptop computer.
      </h1>
    </div>
  );
};

export default MobileMessage;
