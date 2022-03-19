import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);
  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        src="logos/netflix-logo.png"
        alt="Netflix Logo"
        className="nav__logo"
      />
      <img src="logos/avatar.png" alt="avatar" className="nav__avatar" />{' '}
    </div>
  );
}

export default Navbar;
