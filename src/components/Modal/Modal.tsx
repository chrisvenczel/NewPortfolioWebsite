import React, { FC } from 'react';
import ReactModal from 'react-modal';
import styles from './Modal.module.css';

interface ModalProps {
  isMobile: boolean,
  modalOpen: boolean,
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  children: React.ReactNode
}

const Modal: FC<ModalProps> = (props) => {

  return (
    <ReactModal
      isOpen={props.modalOpen}
      overlayClassName={styles.modalOverlay}
      className={props.isMobile ? styles.modalContentMobile : styles.modalContent}
      onAfterOpen={() => {
        document.documentElement.style.overflow = "hidden";
      }}
      onAfterClose={() => {
        document.documentElement.style.overflow = "auto";
      }}
      onRequestClose={() => props.setModalOpen(false)}
      appElement={document.getElementById('root') as HTMLElement}
    >
      <div
        onClick={() => props.setModalOpen(false)}
        className={styles.modalX}>✖</div>
      {props.children}
    </ReactModal>
  );
}

export default Modal;
