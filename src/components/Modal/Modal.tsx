import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import styles from './Modal.module.css';

// This contains the entire website
const Modal = ({modalOpen, setModalOpen, isMobile, children}): JSX.Element => {

  return (
    <ReactModal
      isOpen={modalOpen}
      overlayClassName={styles.modalOverlay}
      className={isMobile ? styles.modalContentMobile : styles.modalContent}
      onAfterOpen={() => {
        document.documentElement.style.overflow = "hidden";
      }}
      onAfterClose={() => {
        document.documentElement.style.overflow = "auto";
      }}
      onRequestClose={() => setModalOpen(false)}
      appElement={document.getElementById('root')}
    >
      <div onClick={() => setModalOpen(false)} className={styles.modalX}>✖</div>
      {children}
    </ReactModal>
  );
}

export default Modal;
