import React, { FC, useEffect, useRef, useState } from 'react';
import TypeMate from 'typemate';
import { MathJaxContext } from 'better-react-mathjax';

import './App.css';

// Pages
import Main from '../Main/Main.tsx';

const App: FC = () => {

  // Stops "orphan" words (single word lines ending paragraphs) across app
  const typeMateInstance = new TypeMate();
  typeMateInstance.apply();

  const [isMobile, setIsMobile] = useState(false);
  const isMobileRef = useRef(isMobile);
  useEffect(() => {
    isMobileRef.current = isMobile;
  }, [isMobile]);

  useEffect(() => {
    // Check if mobile mode
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

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
      <Main isMobile={isMobile} />
    </MathJaxContext>
  );
}

export default App;
