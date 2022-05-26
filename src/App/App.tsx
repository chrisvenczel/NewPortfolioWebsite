import React, { useState, useEffect } from 'react';

import Earth from '../components/Earth/Earth.tsx';
import NavBar from '../components/NavBar/NavBar.tsx';
import Projects from '../components/Projects/Projects.tsx';

import './global.css';

// This contains the entire website
const Website = (): JSX.Element => {

  const [viewToProjects, setViewToProjects] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    checkIfMobile();

    window.addEventListener('scroll', removeToProjects);
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('scroll', removeToProjects);
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const removeToProjects = () => {
    if (document.documentElement.scrollTop > 0) {
      setViewToProjects(false);
    } else {
      setViewToProjects(true);
    }
  }

  const checkIfMobile = () => {
    let mobileCheck = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      window.innerWidth < 730) {
      mobileCheck = true;
    }
    if (!isMobile && mobileCheck) {
      setIsMobile(true);
    } else if (isMobile && !mobileCheck) {
      setIsMobile(false);
    }
  }

  return (
    <div className="main">
      <NavBar isMobile={isMobile} />
      <div className="section homeSection">
        <h1>Home</h1>
      </div>
      <Projects />
      <div className="section aboutSection">
        <h1>About</h1>
      </div>
      <div className="section contactSection">
        <h1>Contact</h1>
      </div>
      <div id="copyright">
        Copyright © 2022 Christopher Venczel.&nbsp;&nbsp;
        MIT Licence
      </div>
      {viewToProjects && (
        <div id="footerText">
          <span>to projects ⤵</span>
        </div>
      )}
      <div id="footerShadow"></div>
    </div>
  );
}

export default Website;
