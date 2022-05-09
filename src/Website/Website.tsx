import React from 'react';
import './Website.css';
// @ts-ignore
import Earth from '../Earth/Earth.tsx';
// @ts-ignore
import NavBar from '../NavBar/NavBar.tsx';

// This contains the entire website
const Website = (): JSX.Element => {
  return (
    <div className="main">
      <NavBar/>
      <Earth />
    </div>
  );
}

export default Website;
