import React, { useEffect } from 'react';
import './Resume.css';

const Resume = () => {
  useEffect(() => {
    const link = document.createElement('a');
    link.href = '/Resume_Shail.pdf';
    link.download = 'Resume_Shail.pdf';
    link.click();
  }, []);

  return (
    <section id="resume" className="resume-section">
      <h1>Resume</h1>
      <p>Shail Patel's Resume has been downloaded successfully in your system!</p>
    </section>
  );
};

export default Resume;
