import React from 'react'
import Icon from '../icons';
import styles from './AddButton.module.scss'

const AddButton = props => {
  const {action} = props;
  return (
    <button className={styles.button} onClick={action}>
      <Icon name="plus" />
      Agregar a mis peliculas
    </button>
  )
}

export default AddButton;
