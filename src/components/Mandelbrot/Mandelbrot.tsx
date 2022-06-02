import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './Mandelbrot.module.css';
import Template from '../Template/Template.tsx';

interface MandelbrotProps {
  isMobile: boolean;
}

// Mandelbrot Set Viewer
const Mandelbrot: FC<MandelbrotProps> = (props) => {

  useEffect(() => {
    document.title = "Mandelbrot Set | Chris Venczel";
  }, []);

  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvas.current || ctx) return;
    setCtx(canvas.current.getContext('2d'));
  }, [canvas.current]);

  useEffect(() => {
    if (!ctx || !canvas.current) return;
    const imageData = ctx.getImageData(0, 0, canvas.current.width, canvas.current.height);
    const data = imageData.data;
    for (var i = 0; i < data.length; i += 4) {
      data[i] = 10;     // red
      data[i + 1] = 10; // green
      data[i + 2] = 10; // blue
    }
    console.log(data, canvas.current, ctx);
    ctx.putImageData(imageData, 0, 0);
  }, [ctx, canvas.current]);

  return (
    <Template isMobile={props.isMobile}>
      <canvas ref={canvas} className={styles.canvas} />
    </Template>
  );
}

export default Mandelbrot;
