import React, { useState, useEffect, useRef } from 'react';
import styles from './NavBar.module.css';

// This contains the entire website
const NavBar = (props): JSX.Element => {

  const logo = useRef();
  const projects = useRef();
  const about = useRef();
  const contact = useRef();

  // Highlight menu item based on page position
  const highlightMenuItem = () => {
    // Sections - 1. Home, 2. Projects, 3. About, 4. Contact
    const sectionHeights = Array.from(document.getElementsByClassName("section")).map(section => {
      const rect = section.getBoundingClientRect();
      return rect.bottom < window.innerHeight * 0.3;
    });
    const sectionIn = sectionHeights.indexOf(false);
    const sections : any[] = [
      logo.current, 
      projects.current,
      about.current,
      contact.current
    ];

    const currentSection = sections[sectionIn];
    if (currentSection === projects.current) {
      document.title = "Chris Venczel - Projects";
    } else if (currentSection === about.current) {
      document.title = "Chris Venczel - About";
    } else if (currentSection === contact.current) {
      document.title = "Chris Venczel - Contact";
    } else {
      document.title = "Chris Venczel";
    }
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      if (section) {
        if (i != 0 && sections[i] === currentSection) {
          section.classList.add("aHover");
        } else {
          section.classList.remove("aHover");
        }
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', highlightMenuItem);

    return () => {
      window.removeEventListener('scroll', highlightMenuItem);
    };
  }, []);

  return (
    <>
      {/* Desktop Nav */}
      {!props.isMobile && (
        <div className={styles.desktopNav}>
          <div className={styles.container}>
            <a href="#home" ref={logo} className={styles.logo}><h1>Chris Venczel</h1></a>
            <a href="#projects" ref={projects} className={styles.navlink}>projects</a>
            <a href="#about" ref={about} className={styles.navlink}>about</a>
            <a href="#contact" ref={contact} className={styles.navlink} style={{ marginRight: 0 }}>contact</a>
          </div>
        </div>
      )}
      {/* Mobile Nav */}
      {props.isMobile && (
        <div className={styles.mobileNav}>
          <div className={styles.container}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a 
                    href="#home" 
                    className={styles.logo}
                    ref={logo}>
                      <h1>Chris Venczel</h1>
                    </a>
                  </td>
                  <td>
                    <a 
                    href="#projects" 
                    className={styles.navlink}
                    ref={projects}>
                      projects
                    </a>
                  </td>
                  <td>
                    <a 
                    href="#about" 
                    className={styles.navlink}
                    ref={about}>
                      about
                    </a>
                  </td>
                  <td>
                    <a
                      href="#contact" className={styles.navlink}
                      style={{ marginRight: 0 }}
                      ref={contact}>
                      contact
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      <div className={styles.spacer}></div>
    </>
  );
}

export default NavBar;
