import React, { useState, useEffect } from 'react';
import FocusTrap from 'focus-trap-react';
import { useNavigate } from 'react-router-dom';
import './Resume.css';

const Resume = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const link = document.createElement('a');
    link.href = '/Resume_Shail.pdf';
    link.download = 'Resume_Shail.pdf';
    link.click();
    setIsOpen(true); // Open the modal after the download
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    navigate('/'); // Redirect to Home page
  };

  return (
    <div className="resume-section">
      {isOpen && (
        <FocusTrap>
          <div className="modal">
            <div className="modal-content tile">
              <h2>Resume Downloaded</h2>
              <p>Shail Patel's Resume has been downloaded. Check your downloads folder.</p>
              <button onClick={closeModal} className="close-button">Close</button>
            </div>
          </div>
        </FocusTrap>
      )}
    </div>
  );
};

export default Resume;
