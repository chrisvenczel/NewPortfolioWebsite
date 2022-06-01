import React, { FC, useEffect, useState } from 'react';
import Template from '../Template/Template.tsx';

import Home from './Home/Home.tsx';
import Projects from './Projects/Projects.tsx';
import About from './About/About.tsx';
import Contact from './Contact/Contact.tsx';

/* 
The main scrollable page containing the following sections:
- Home
- Projects
- About
- Contact
*/

interface MainProps {
  isMobile: boolean;
  viewToProjects: boolean;
}

const Main: FC<MainProps> = (props) => {

  const [viewToProjects, setViewToProjects] = useState(true);

  useEffect(() => {
    const content = (document.getElementById("pageContents") as HTMLDivElement);

    content.addEventListener('scroll', removeToProjects);

    return () => {
      content.removeEventListener('scroll', removeToProjects);
    };
  }, []);

  const removeToProjects = () => {
    if ((document.getElementById("pageContents") as HTMLDivElement).scrollTop > 0) {
      setViewToProjects(false);
    } else {
      setViewToProjects(true);
    }
  }

  return (
    <Template isMobile={props.isMobile}>
      <Home />
      <Projects isMobile={props.isMobile} />
      <About />
      <Contact />
      <div id="copyright">
        Copyright © 2022 Christopher Venczel.&nbsp;&nbsp;
        MIT Licence
      </div>
      {viewToProjects && (
        <div id="footerText">
          <span>to projects ⤵</span>
        </div>
      )}
      <div id="footerShadow"></div>
    </Template>
  );
}

export default Main;
