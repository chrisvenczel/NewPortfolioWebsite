import React, { FC } from 'react';
import EmptyPage from '../EmptyPage/EmptyPage.tsx';

import Home from '../HomePage/Home.tsx';
import Projects from '../ProjectsPage/Projects.tsx';
import About from '../AboutPage/About.tsx';
import Contact from '../ContactPage/Contact.tsx';

/* 
The main scrollable page containing:
- Home
- Projects
- About
- Contact
*/

interface MainProps {
  isMobile: boolean;
  viewToProjects: boolean;
}

const Main:FC<MainProps> = (props) => {
  return (
    <EmptyPage>
        <Home />
        <Projects isMobile={props.isMobile} />
        <About />
        <Contact />
        <div id="copyright">
          Copyright © 2022 Christopher Venczel.&nbsp;&nbsp;
          MIT Licence
        </div>
        {props.viewToProjects && (
          <div id="footerText">
            <span>to projects ⤵</span>
          </div>
        )}
        <div id="footerShadow"></div>
    </EmptyPage>
  );
}

export default Main;
