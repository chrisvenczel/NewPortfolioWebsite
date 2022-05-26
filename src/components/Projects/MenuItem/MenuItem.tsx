import React, { useState, useEffect } from 'react';
import styles from './MenuItem.module.css';

// This contains the entire website
const ProjectMenuItem = (props): JSX.Element => {

  const openModal = () => {
    
  }

  return (
    <>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td className={styles.image}>
              <img src={props.img} alt="Mandelbrot Set" />
            </td>
            <td className={styles.text}>
              <a><h2>{props.title}</h2></a>
              <p>{props.text}</p>
              <a>▶ Run Project</a>
              <a 
              onClick={() => openModal()} 
              className={styles.moreInfo}
              >ⓘ More Info</a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ProjectMenuItem;
