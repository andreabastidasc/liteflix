import React from 'react'
import Icon from '../icons'
import Logo from '../Logo'
import styles from './NavbarMobile.module.scss'

const NavbarMobile = props => {
  const { setOpenDrawer, setShowModal } = props

  const handleOpen = (e) => {
    e.preventDefault()
    setOpenDrawer(true)
    setShowModal(false)
  }

  return (
    <nav className={styles.navbar}>
        <button className={styles['navbar-button']} onClick={(e) => handleOpen(e)}>
            <Icon name="menu" />
        </button>
        <Logo />
        <button className={styles['navbar-button']}>
            <img src='/img/userIcon.png' />
        </button>
    </nav>
  )
}

export default NavbarMobile
