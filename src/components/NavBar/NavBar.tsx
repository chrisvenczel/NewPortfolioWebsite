import React, { FC, useEffect, useRef } from 'react';
import { HashLink } from "react-router-hash-link";

import styles from './NavBar.module.css';

interface NavBarProps {
  isMobile: boolean
}

const NavBar: FC<NavBarProps> = (props) => {

  const logo = useRef(null);
  const projects = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);

  // Highlight menu item based on page position
  const highlightMenuItem = () => {
    // Sections - 1. Home, 2. Projects, 3. About, 4. Contact
    const sectionHeights = Array.from(document.getElementsByClassName("section")).map(section => {
      const rect = section.getBoundingClientRect();
      return rect.bottom < window.innerHeight * 0.3;
    });
    const sectionIn = sectionHeights.indexOf(false);
    const sections: any[] = [
      logo.current,
      projects.current,
      about.current,
      contact.current
    ];

    const currentSection = sections[sectionIn];
    if (currentSection === projects.current) {
      document.title = "Projects | Chris Venczel";
    } else if (currentSection === about.current) {
      document.title = "About | Chris Venczel";
    } else if (currentSection === contact.current) {
      document.title = "Contact | Chris Venczel";
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
    const content = document.getElementById("pageContents") as HTMLDivElement;
    content.addEventListener('scroll', highlightMenuItem);

    return () => {
      content.removeEventListener('scroll', highlightMenuItem);
    };
  }, []);

  return (
    <>
      {/* Desktop Nav */}
      {!props.isMobile && (
        <div className={styles.desktopNav}>
          <div className={styles.container}>
            <HashLink ref={logo} to="/#home" className={styles.logo}><h1>Chris Venczel</h1></HashLink>
            <HashLink ref={projects} to="/#projects" className={styles.navlink}>projects</HashLink>
            <HashLink ref={about} to="/#about" className={styles.navlink}>about</HashLink>
            <HashLink ref={contact} to="/#contact" className={styles.navlink} style={{ marginRight: 0 }}>contact</HashLink>
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
