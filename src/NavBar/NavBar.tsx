import React, { useEffect } from 'react';
import './NavBar.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// This contains the entire website
const NavBar = (): React.ReactNode => {
  return (
    <div className="main">
      <canvas id="bg" />
    </div>
  );
}

export default NavBar;
