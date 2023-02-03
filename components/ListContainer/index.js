import React from 'react'
import styles from './ListContainer.module.scss'

const ListContainer = ({ children }) => {
  return (
    <div className={styles.list}>
        {children}
    </div>
  )
}

export default ListContainer
