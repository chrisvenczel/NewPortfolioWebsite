import React, { FC } from 'react';

import styles from './Template.module.css';

import NavBar from '../NavBar/NavBar.tsx';

interface TemplateProps {
  children: React.ReactNode;
  isMobile: boolean;
}

// An empty page with no contents, only a nav bar
// This acts a container for web page contents
const Template: FC<TemplateProps> = (props) => {

  return (
    <div className={`main ${props.isMobile ? "mobile" : ""}`}>
      <NavBar isMobile={props.isMobile} />
      <div id="pageContents" className={styles.contents}>
        {props.children}
      </div>
    </div>
  );
}

export default Template;
