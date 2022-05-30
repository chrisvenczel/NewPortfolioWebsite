import React, { useState, useEffect, useRef } from 'react';
import styles from './Contact.module.css';

// The projects menu/section
const Contact = (props): JSX.Element => {

  const section = useRef<HTMLDivElement>();

  // Make the contact section have padding so it is centered vertically at max scroll
  /*const resizeSection = () => {
    const s = section.current;
    const contentH = s.querySelector("table").clientHeight + s.querySelector("h1").clientHeight;
    const paddingH = (window.screen.height-contentH)/6;
    s.style.paddingBottom = paddingH + "px";
  };*/

  useEffect(() => {
    /*resizeSection();
    window.addEventListener('resize', resizeSection);

    return () => {
      window.removeEventListener('resize', resizeSection);
    };*/
  }, []);

  const openInNewTab = (url) => {
    console.log(url);
    window.open(url, '_blank').focus();
  }

  return (
    <>
      <div className="spacer" id="contact" />
      <div ref={section} className={`section ${styles.container}`}>
        <h1>Contact Info</h1>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.img}>
                <a href="mailto:christopher.venczel@outlook.com">
                  <img src="/Contact/email.png" />
                </a>
              </td>
              <td
                onClick={() => {
                  window.location.href = "mailto:christopher.venczel@outlook.com";
                }}
                className={styles.link}>
                <a>
                  christopher.venczel<span>@outlook.com</span>
                </a>
              </td>
            </tr>
            <tr>
              <td className={styles.img}>
                <a target="blank_" href="https://www.github.com/chrisvenczel">
                  <img src="/Contact/github.png" />
                </a>
              </td>
              <td onClick={() => {
                openInNewTab("https://www.github.com/chrisvenczel");
              }}
                className={styles.link}>
                <a>
                  github.com/<span>chrisvenczel</span>
                </a>
              </td>
            </tr>
            <tr>
              <td className={styles.img}>
                <a target="blank_" href="https://www.linkedin.com/in/christopher-venczel">
                  <img src="/Contact/linkedin.png" />
                </a>
              </td>
              <td onClick={() => {
                openInNewTab("https://www.linkedin.com/in/christopher-venczel");
              }}
                className={styles.link}>
                <a>
                  linkedin.com/in/<span>christopher-venczel</span>
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
