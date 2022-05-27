import React, { useState, useEffect } from 'react';
import ProjectMenuItem from './MenuItem/MenuItem.tsx';
import styles from './Projects.module.css';

// The projects menu/section
const Projects = (props): JSX.Element => {
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
          isMobile={props.isMobile}
        />
        <ProjectMenuItem
          title="The Butterfly Effect"
          text="The butterfly effect is small differences in initial conditions leading to large differences over time. 
          See the chaos the butterfly effect generates in this project using pendulums."
          img="/ButterflyEffect.png"
          isMobile={props.isMobile}
        />
      </div>
    </>
  );
}

export default Projects;
