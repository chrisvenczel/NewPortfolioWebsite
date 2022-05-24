import React, { useState, useEffect } from 'react';
import './NavBar.css';

// This contains the entire website
const NavBar = (props): JSX.Element => {
  return (
    <>
      {/* Desktop Nav */}
      {!props.isMobile && (
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
      {props.isMobile && (
        <div className="mobileNav">
          <div className="container">
            <table>
              <tbody>
                <tr>
                  <td>
                    <a href="page.html#homeA" className="logo"><h1>Chris Venczel</h1></a>
                  </td>
                  <td>
                    <a href="page.html#projectsA" className="navlink">projects</a>
                  </td>
                  <td>
                    <a href="page.html#aboutA" className="navlink">about</a>
                  </td>
                  <td>
                    <a href="page.html#contactA" className="navlink" style={{ marginRight: 0 }}>contact</a>
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
