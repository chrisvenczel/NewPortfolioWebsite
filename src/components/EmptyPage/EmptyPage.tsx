import React, { FC, useState, useEffect, useRef } from 'react';
import { MathJaxContext } from 'better-react-mathjax';
import TypeMate from 'typemate';

import NavBar from '../NavBar/NavBar.tsx';

import './global.css';
import { isPropertySignature } from 'typescript';

interface EmptyPageProps {
  children: React.ReactNode;
}

// An empty page with no contents, only a nav bar
// This acts a container for web pages
const EmptyPage:FC<EmptyPageProps> = (props) => {

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
        {props.children}
      </div>
    </MathJaxContext>
  );
}

export default EmptyPage;
