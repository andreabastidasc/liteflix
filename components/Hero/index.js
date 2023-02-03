import React from 'react'
import Icon from '../icons';
import styles from './Hero.module.scss'

const Hero = props => {
  const {movieTitle} = props;
  return (
    <div className={styles.hero}>
        <h3 className={styles['hero-subtitle']}>Original de <span>Liteflix</span></h3>
        <h1 className={styles['hero-title']}>{movieTitle}</h1>
        <div className={styles['hero-buttons']}>
            <button className={styles['hero-button']}>
                <Icon name="play" />
                Reproducir
            </button>
            <button className={`${styles['hero-button']} ${styles['hero-button-outlined']}`}>
                <Icon name="plus" />
                Mi lista
            </button>
        </div>
    </div>
  )
}

export default Hero;
