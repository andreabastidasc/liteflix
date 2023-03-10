import React from 'react'
import Modal from 'react-bootstrap/Modal'
import styles from './Modal.module.scss'
import Icon from '../icons'
import CustomForm from '../Form'
import useMobileScreenSize from '@/hooks/useMobileScreenSize'
import NavbarMobile from '../NavbarMobile'

const FormModal = props => {
  const { showModal, setShowModal, movies, setMovies, setOpenDrawer } = props
  const isMobile = useMobileScreenSize()

  const handleClose = () => setShowModal(false)

  return (
    <>
      <Modal fullscreen={isMobile} backdrop="static" dialogClassName="customModal" show={showModal} onHide={handleClose} animation centered>
        {isMobile
          ? (
          <NavbarMobile setShowModal={setShowModal} setOpenDrawer={setOpenDrawer} />
            )
          : (
          <button className={styles['modal-close']} onClick={() => setShowModal(false)}>
            <Icon name="close" />
          </button>
            )}
        <CustomForm movies={movies} setMovies={setMovies} setShowModal={setShowModal} />
      </Modal>
    </>
  )
}

export default FormModal
