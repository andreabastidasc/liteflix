import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './Modal.module.scss'
import Icon from '../icons';
import CustomForm from '../Form';
import useMobileScreenSize from '@/hooks/useMobileScreenSize';
import NavbarMobile from '../NavbarMobile';

const FormModal = props => {
  const {showModal, setShowModal, movies, setMovies, success, setOpenDrawer} = props;
  const isMobile = useMobileScreenSize()

  const handleClose = () => setShowModal(false);

  return (
    <>
      <Modal fullscreen={isMobile} backdrop="static" dialogClassName="customModal" show={showModal} onHide={handleClose} animation centered>
        {isMobile ? (
          <NavbarMobile setShowModal={setShowModal} setOpenDrawer={setOpenDrawer} />
        ) : (
          <button className={styles['modal-close']} onClick={() => setShowModal(false)}>
            <Icon name="close" />
          </button>
        )}
        <CustomForm movies={movies} setMovies={setMovies} setShowModal={setShowModal} />
      </Modal>
    </>
  );
}

export default FormModal
