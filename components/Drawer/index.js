import React, { useRef } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import styles from './Drawer.module.scss'
import Icon from '../icons'
import useOutsideClick from '@/hooks/useOutsideClick'
import useMobileScreenSize from '@/hooks/useMobileScreenSize'
import Logo from '../Logo'
import AddButton from '../AddButton'

const Drawer = props => {
  const { openDrawer, setOpenDrawer, setShowModal } = props
  const isMobile = useMobileScreenSize()
  const drawerRef = useRef()

  useOutsideClick(drawerRef, () => {
    setOpenDrawer(false)
  })

  const handleClose = () => {
    setOpenDrawer(false)
  }

  const handleModal = (e) => {
    e.preventDefault()
    setShowModal(true)
    setOpenDrawer(false)
  }

  return (
    <div ref={drawerRef}>
      <Offcanvas backdrop="true" show={openDrawer} className="customDrawer" placement="end" onHide={handleClose}>
        <div className={styles['drawer-header']}>
          <button className={styles['drawer-close']} onClick={() => setOpenDrawer(false)}>
            <Icon name="close" />
          </button>
          {isMobile
            ? (
            <Logo />
              )
            : (
            <div className={styles['drawer-header-icons']}>
              <Icon name="notifications" />
              <img src='/img/userIcon.png' />
            </div>
              )}
          {isMobile
            ? (
            <img src='/img/userIcon.png' />
              )
            : null}
        </div>
        <div className={styles['drawer-body']}>
            <a href='#'>
                INICIO
            </a>
            <a href='#'>
                SERIES
            </a>
            <a href='#'>
                PELÍCULAS
            </a>
            <a href='#'>
                AGREGADAS RECIENTEMENTE
            </a>
            <a href='#'>
                POPULARES
            </a>
            <a href='#'>
                MIS PELÍCULAS
            </a>
            <a href='#'>
                MI LISTA
            </a>
            <AddButton action={(e) => handleModal(e)} />
            <a href='#'>
                CERRAR SESIÓN
            </a>
        </div>
      </Offcanvas>
    </div>
  )
}

export default Drawer
