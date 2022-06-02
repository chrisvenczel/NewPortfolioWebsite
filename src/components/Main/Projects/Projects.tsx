import React, { FC } from 'react';
import ProjectMenuItem from './MenuItem/MenuItem.tsx';
import { MathJax } from 'better-react-mathjax';

import styles from './Projects.module.css';

interface ProjectsProps {
  isMobile: boolean
}

// The projects menu/section
const Projects: FC<ProjectsProps> = (props) => {
  return (
    <>
      <div className="spacer" id="projects" />
      <div className={`section ${styles.projectSection}`}>
        <h1>Projects</h1>
        <p>This is a collection of some of the interactive projects I have created using JavaScript and
          a variety of code libraries and APIs. You can see the source code for the projects <a>here</a> on my GitHub.</p>
        <ProjectMenuItem
          title="The Mandelbrot Set"
          text="Explore the intricate and beautiful fractal known as the Mandelbrot set. 
          This famous set is known for it’s aesthetic appeal and complexity arising from simple rules."
          img="/Mandelbrot.png"
          pageUrl="/mandelbrot-set"
          isMobile={props.isMobile}
          modalMainTxt={<>
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
          </>}
          modalTechnicalTxt={<>
            This project primarily uses the <a target="_blank" href="https://p5js.org/">P5JS library</a>.
            You can take a look at the source code <a>here.</a>
          </>}
          modalImg={"/MandelbrotModal.png"}
        />
        <ProjectMenuItem
          title="The Butterfly Effect"
          text="The butterfly effect is small differences in initial conditions leading to large differences over time. 
          See the chaos the butterfly effect generates in this project using pendulums."
          img="/ButterflyEffect.png"
          pageUrl="/butterfly-effect"
          isMobile={props.isMobile}
          modalMainTxt={<></>}
          modalTechnicalTxt={<></>}
          modalImg={""}
        />
      </div>
    </>
  );
}

export default Projects;
