import React from 'react'
import useMobileScreenSize from '@/hooks/useMobileScreenSize'
import styles from './layout.module.scss'
import NavbarDesktop from '../NavbarDesktop'
import NavbarMobile from '../NavbarMobile'
import Drawer from '../Drawer'

const Layout = ({ children, ...props }) => {
  const { setShowModal, setOpenDrawer, openDrawer } = props
  const isMobile = useMobileScreenSize()

  return (
        <div className={styles.wrapper}>
          <Drawer id="drawer" openDrawer={openDrawer} setShowModal={setShowModal} setOpenDrawer={setOpenDrawer} />
          <div className={styles.containerLayout}>
            {isMobile
              ? <NavbarMobile setShowModal={setShowModal} setOpenDrawer={setOpenDrawer} />
              : <NavbarDesktop setShowModal={setShowModal} setOpenDrawer={setOpenDrawer} />}
            <main className={styles.main}>{children}</main>
          </div>
        </div>

  )
}

export default Layout
