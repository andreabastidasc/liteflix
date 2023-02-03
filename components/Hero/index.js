import React from 'react'
import { motion } from 'framer-motion'
import Icon from '../icons'
import styles from './Hero.module.scss'

const Hero = props => {
  const { movieTitle } = props
  return (
    <div className={styles.hero}>
        <motion.h3
           initial={{ y: -200 }}
           animate={{ y: 0 }}
           transition={{ ease: 'easeOut', duration: 4 }}
          className={styles['hero-subtitle']}>Original de <span>Liteflix</span>
        </motion.h3>
        <motion.h1
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ ease: 'easeOut', duration: 4 }}
          className={styles['hero-title']}>{movieTitle}
        </motion.h1>
        <div className={styles['hero-buttons']}>
            <motion.button
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              className={styles['hero-button']}
              transition={{ ease: 'easeOut', duration: 4 }}
            >
                <Icon name="play" />
                Reproducir
            </motion.button>
            <motion.button
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ ease: 'easeOut', duration: 4 }}
              className={`${styles['hero-button']} ${styles['hero-button-outlined']}`}
            >
                <Icon name="plus" />
                Mi lista
            </motion.button>
        </div>
    </div>
  )
}

export default Hero
