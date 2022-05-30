import React, { useState, useEffect } from 'react';
import styles from './About.module.css';

// The projects menu/section
const About = (props): JSX.Element => {
  return (
    <>
      <div className="spacer" id="about" />
      <div className={`section ${styles.container}`}>
        <h1>About</h1>
        <img
          className={styles.img}
          src={"/Mountains.png"}
          alt={"About Image"}
        />
        <h3 className="subHeader">Christopher Venczel</h3>
        <p>
          Hello and welcome to my portfolio website!
          I am a software developer with an interest in simulation, visualization and data science.
          I have worked as a full stack developer on several websites, with both small and large teams,
          using a wide variety of technologies and methodologies. The projects you’ll find on this website
          are related to some of my interests including math, design and music.
          To learn more about my past work click <a>here</a>.
        </p>
        <h3 className="subHeader">The Website</h3>
        <p>
          This website is open source under the MIT licence and all the code can be 
          found <a target="blank_" href="https://www.github.com/chrisvenczel">here</a> on my GitHub. 
          The website was designed in Figma and implemented using React, TypeScript and HTML/CSS.
          The projects are made using various code libraries.
          To learn more about a specific project’s technical specs, click the (i) on the project’s page.
        </p>
      </div>
    </>
  );
}

export default About;
