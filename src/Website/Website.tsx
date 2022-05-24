import React, { useState, useEffect } from 'react';
import './Website.css';
// @ts-ignore
import Earth from '../Earth/Earth.tsx';
// @ts-ignore
import NavBar from '../NavBar/NavBar.tsx';

// This contains the entire website
const Website = (): JSX.Element => {

  const [viewToProjects, setViewToProjects] = useState(true);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    checkIfMobile();
  }, []);

  window.addEventListener('resize', () => {
    checkIfMobile();
  }, true);

  // Check if on mobile
  const checkIfMobile = () => {
    let mobileCheck = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      window.innerWidth < 700) {
      mobileCheck = true;
    }
    if (!isMobile && mobileCheck) {
      setIsMobile(true);
    } else if (isMobile && !mobileCheck) {
      setIsMobile(false);
    }
  }

  window.onscroll = (e) => {
    // Sections - 1. Home, 2. Projects, 3. About, 4. Contact
    const sectionHeights = Array.from(document.getElementsByClassName("section")).map(section => {
      const rect = section.getBoundingClientRect();
      return rect.bottom < window.innerHeight * 0.3;
    });
    const sectionIn = sectionHeights.indexOf(false);
    const sections = [
      Array.from(document.getElementsByClassName("logo"))[0],
      Array.from(document.getElementsByClassName("navlink"))[0],
      Array.from(document.getElementsByClassName("navlink"))[1],
      Array.from(document.getElementsByClassName("navlink"))[2]
    ];
    const currentSection = sections[sectionIn];
    for (let i = 0; i < sections.length; i++) {
      if (-i != 0 && sections[i] === currentSection) {
        sections[i].classList.add("aHover");
      } else {
        sections[i].classList.remove("aHover");
      }
    }
    if (document.documentElement.scrollTop > 0) {
      setViewToProjects(false);
    } else {
      setViewToProjects(true);
    }
  }

  return (
    <div className="main">
      <NavBar
        isMobile={isMobile}
      />
      {/*<Earth />*/}
      <div className="section homeSection">

      </div>
      <div className="section projectsSection">

      </div>
      <div className="section aboutSection">

      </div>
      <div className="section contactSection">

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
