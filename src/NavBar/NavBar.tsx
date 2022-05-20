import React, { useState, useEffect } from 'react';
import './NavBar.css';

// This contains the entire website
const NavBar = (): JSX.Element => {

  const [isMobile, setIsMobile] = useState(false);

  window.addEventListener('resize', function (event) {
    // Check if on mobile
    let mobileCheck = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      window.innerWidth < 700) {
      mobileCheck = true;
      console.log("here");
    }
    if (!isMobile && mobileCheck) {
      setIsMobile(true);
    } else if (isMobile && !mobileCheck) {
      setIsMobile(false);
    }
  }, true);



  return (
    <>
      {/* Desktop Nav */}
      {!isMobile && (
        <div className="desktopNav">
          <div className="container">
            <a className="logo"><h1>Chris Venczel</h1></a>
            <a className="navlink">projects</a>
            <a className="navlink">about</a>
            <a className="navlink" style={{ marginRight: 0 }}>contact</a>
          </div>
        </div>
      )}
      {/* Mobile Nav */}
      {isMobile && (
        <div className="mobileNav">
          <div className="container">
            <table>
              <tbody>
                <tr>
                  <td>
                    <a className="logo"><h1>Chris Venczel</h1></a>
                  </td>
                  <td>
                    <a className="navlink">projects</a>
                  </td>
                  <td>
                    <a className="navlink">about</a>
                  </td>
                  <td>
                    <a className="navlink" style={{ marginRight: 0 }}>contact</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      <div className="spacer"></div>
    </>
  );
}

export default NavBar;
