import React, { FC, useEffect, useRef, useState } from 'react';
import TypeMate from 'typemate';
import { MathJaxContext } from 'better-react-mathjax';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

// Pages
import Main from '../Main/Main.tsx';
import Mandelbrot from '../Mandelbrot/Mandelbrot';
import ButterflyEffect from '../ButterflyEffect/ButterflyEffect';

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
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Main isMobile={isMobile} />}
          />
          <Route
            path="/mandelbrot-set"
            element={<Mandelbrot isMobile={isMobile} />}
          />
          <Route
            path="/butterfly-effect"
            element={<ButterflyEffect isMobile={isMobile} />}
          />
        </Routes>
      </BrowserRouter>
    </MathJaxContext>
  );
}

export default App;
