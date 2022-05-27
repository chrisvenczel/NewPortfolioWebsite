import React, { useState, useEffect } from 'react';
import Modal from "../../Modal/Modal.tsx";
import { MathJax } from 'better-react-mathjax';

import styles from './MenuItem.module.css';

// This contains the entire website
const ProjectMenuItem = (props): JSX.Element => {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        isMobile={props.isMobile}
      >

        <h1>The Mandelbrot Set</h1>
        <p className={styles.modalP}>
          The <a target="_blank" href="https://en.wikipedia.org/wiki/Mandelbrot_set">Mandelbrot set</a> is a set
          of <a target="_blank" href="https://en.wikipedia.org/wiki/Complex_number">complex numbers</a> which can
          be graphed onto a 2d image. Each pixel on the image represents a number on
          the <a target="_blank" href="https://en.wikipedia.org/wiki/Complex_plane">complex plane</a>.
          To determine if a complex number <MathJax>{"\\(c\\)"}</MathJax> is part of the Mandelbrot set the equation
          <MathJax>{"\\(f_c(z) = z^2 + c\\)"}</MathJax> is iterated starting from <MathJax>{"\\(z = 0\\)"}</MathJax>.
          If <MathJax>{"\\(f_c(z)\\)"}</MathJax> remains bounded <MathJax>{"\\(c\\)"}</MathJax> is part of the set and the
          corresponding pixel is colored black. If <MathJax>{"\\(f_c(z)\\)"}</MathJax> diverges then
          <MathJax>{"\\(c\\)"}</MathJax> is not part of the set and the corresponding pixel is assigned a color.
          The boundary of the generated set is an infinite fractal curve which continues at any zoom level.
        </p>
        <img className={styles.modalImg} src="/MandelbrotModal.png" />
        <h3 className="subHeader">Project Technical Info</h3>
        <p className={styles.modalP}>
          This project primarily uses the <a target="_blank" href="https://p5js.org/">P5JS library</a>.
          You can take a look at the source code <a>here.</a>
        </p>
      </Modal>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td className={styles.image}>
              <img src={props.img} alt="Mandelbrot Set" />
            </td>
            <td className={styles.text}>
              <a><h2>{props.title}</h2></a>
              <p>{props.text}</p>
              <a>▶ Run Project</a>
              <a
                onClick={() => setModalOpen(true)}
                className={styles.moreInfo}
              >ⓘ More Info</a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ProjectMenuItem;
