import React from 'react'
import styles from './navbar.module.scss'
import Icon from '../icons'
import AddButton from '../AddButton'
import Logo from '../Logo'

const NavbarDesktop = props => {
  const { setOpenDrawer, setShowModal } = props

  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-row']}>
        <Logo />
        <AddButton action={() => setShowModal(true)} />
      </div>
      <div className={styles['navbar-icons']}>
        <button className={styles['navbar-button']} onClick={() => setOpenDrawer(true)}>
          <Icon name="menu" />
        </button>
        <button className={styles['navbar-button']}>
          <Icon name="notifications" />
        </button>
        <button className={styles['navbar-button']}>
          <img src='/img/userIcon.png' />
        </button>
      </div>
    </nav>
  )
}

export default NavbarDesktop
