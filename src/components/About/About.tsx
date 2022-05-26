import React, { useState, useEffect } from 'react';
import styles from './About.module.css';

// The projects menu/section
const About = (props): JSX.Element => {
  return (
    <>
      <div className="spacer" id="about" />
      <div className={`section ${styles.container}`}>
        <h1>About</h1>
      </div>
    </>
  );
}

export default About;
