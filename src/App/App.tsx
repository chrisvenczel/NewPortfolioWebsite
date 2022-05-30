import React, { useState, useEffect, useRef } from 'react';
import { MathJaxContext } from 'better-react-mathjax';
import TypeMate from 'typemate';

import Home from '../components/Home/Home.tsx';
import NavBar from '../components/NavBar/NavBar.tsx';
import Projects from '../components/Projects/Projects.tsx';
import About from '../components/About/About.tsx';
import Contact from '../components/Contact/Contact.tsx';

import './global.css';

// This contains the entire website
const Website = (): JSX.Element => {

  // Stops "orphan" words (single word lines ending paragraphs)
  const typeMateInstance = new TypeMate();
  typeMateInstance.apply();

  const [viewToProjects, setViewToProjects] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const isMobileRef = useRef(isMobile);
  useEffect(() => {
    isMobileRef.current = isMobile;
  }, [isMobile]);

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
    if (!isMobileRef.current && mobileCheck) {
      setIsMobile(true);
    } else if (isMobileRef.current && !mobileCheck) {
      setIsMobile(false);
    }
  }

  return (
    <MathJaxContext>
      <div className={`main ${isMobile ? "mobile" : ""}`}>
        <NavBar isMobile={isMobile} />
        {/*<Home />*/}
        <Projects isMobile={isMobile} />
        <About />
        <Contact />
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
    </MathJaxContext>
  );
}

export default Website;
