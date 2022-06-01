import React, { FC } from 'react';
import styles from './Mandelbrot.module.css';
import Template from '../Template/Template.tsx';

interface MandelbrotProps {
  isMobile: boolean;
}

// Mandelbrot Set Viewer
const Mandelbrot:FC<MandelbrotProps> = (props) => {
  return (
    <Template isMobile={props.isMobile}>
      Hello testing
    </Template>
  );
}

export default Mandelbrot;
