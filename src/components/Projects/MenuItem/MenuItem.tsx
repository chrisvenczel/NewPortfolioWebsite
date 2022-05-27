import React, { useState, useEffect } from 'react';
import Modal from "../../Modal/Modal.tsx";

import styles from './MenuItem.module.css';

// This contains the entire website
const ProjectMenuItem = (props): JSX.Element => {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        isMobile={props.isMobile}
      >
        <h1>{props.title}</h1>
        <p className={`${styles.modalP} ${props.isMobile ? styles.mobile : ''}`}>
          {props.modalMainTxt}
        </p>
        <img
          className={`${styles.modalImg} ${props.isMobile ? styles.mobile : ''}`}
          src={props.modalImg}
          alt={props.title}
        />
        <h3 className="subHeader">Project Technical Info</h3>
        <p className={`${styles.modalP} ${props.isMobile ? styles.mobile : ''}`}>
          {props.modalTechnicalTxt}
        </p>
      </Modal>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td className={styles.image}>
              <img src={props.img} alt={props.title}/>
            </td>
            <td className={styles.text}>
              <a><h2>{props.title}</h2></a>
              <p>{props.text}</p>
              <a>▶ Run Project</a>
              <a
                onClick={() => setModalOpen(true)}
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
