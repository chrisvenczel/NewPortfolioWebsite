import React, { FC, useState, useEffect, useRef } from 'react';
import Modal from "../../../Modal/Modal.tsx";
import { Link } from "react-router-dom";

import styles from './MenuItem.module.css';

interface MenuItemProps {
  title: string,
  text: string,
  img: string,
  modalMainTxt: string,
  modalTechnicalTxt: string,
  modalImg: string,
  isMobile: boolean,
  pageUrl: string;
}

const ProjectMenuItem: FC<MenuItemProps> = (props) => {

  const [modalOpen, setModalOpen] = useState(false);
  const table = useRef<HTMLTableElement>(null);

  const resizeImage = () => {
    if (!table.current) return;
    const cells = Array.from(Array.from(table.current.rows)[0].children);
    const img = cells[0].children[0];
    const textCell = cells[1];

    // Add all heights of text content
    const textCellContentH = Array.from(textCell.children).slice(0, 3).map(e => e.clientHeight).reduce((a, b) => a + b, 0);
    (img as HTMLElement).style.height = (textCellContentH) + "px";
  };

  useEffect(() => {
    resizeImage();
    window.addEventListener('resize', resizeImage);

    return () => {
      window.removeEventListener('resize', resizeImage);
    };
  }, [table.current]);

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
      <table ref={table} className={styles.table}>
        <tbody>
          <tr>
            <td className={styles.image}>
              <div>
                <img src={props.img} alt={props.title} />
              </div>
            </td>
            <td className={styles.text}>
              <Link to={props.pageUrl}>
                <h2>{props.title}</h2>
              </Link>
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
