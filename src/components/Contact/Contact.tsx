import React, { useState, useEffect } from 'react';
import styles from './Contact.module.css';

// The projects menu/section
const Contact = (props): JSX.Element => {
  return (
    <>
      <div className="spacer" id="contact" />
      <div className={`section ${styles.container}`}>
        <h1>Contact</h1>
      </div>
    </>
  );
}

export default Contact;
