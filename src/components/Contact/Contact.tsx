import React, { useState, useEffect } from 'react';
import styles from './Contact.module.css';

// The projects menu/section
const Contact = (props): JSX.Element => {
  return (
    <>
      <div className="spacer" id="contact" />
      <div className={`section ${styles.container}`}>
        <h1>Contact Info</h1>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.img}>
                <a href="mailto:christopher.venczel@outlook.com">
                  <img src="/Contact/email.png" />
                </a>
              </td>
              <td className={styles.link}>
                <a href="mailto:christopher.venczel@outlook.com">
                  christopher.venczel<p>@outlook.com</p>
                </a>
              </td>
            </tr>
            <tr>
              <td className={styles.img}>
                <a target="blank_" href="https://www.github.com/chrisvenczel">
                  <img src="/Contact/github.png" />
                </a>
              </td>
              <td className={styles.link}>
                <a target="blank_" href="https://www.github.com/chrisvenczel">
                  github.com/<p>chrisvenczel</p>
                </a>
              </td>
            </tr>
            <tr>
              <td className={styles.img}>
                <a target="blank_" href="https://www.linkedin.com/in/christopher-venczel">
                  <img src="/Contact/linkedin.png" />
                </a>
              </td>
              <td className={styles.link}>
                <a target="blank_" href="https://www.linkedin.com/in/christopher-venczel">
                  linkedin.com/in/<p>christopher-venczel</p>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Contact;
