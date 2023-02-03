import React from 'react'
import {motion} from 'framer-motion'
import styles from './MovieCard.module.scss'
import Icon from '../icons'

const MovieCard = props => {
  const {image, title, votes, date} = props;

  const parseDate = () => {
    const objectDate = new Date(date);

    const year = objectDate.getFullYear()

    return year;
  }

  const movieYear = parseDate();

  return (
    <motion.div className={styles.card}>
        <img src={image} width="100%" height="100%" />
        <div className={styles['card-wrapper']}>
            <Icon name="playRounded" width="40px" height="40px" />
            <p className={styles['card-title']}>{title}</p>
        </div>
        <div className={styles['card-overlay']}>
            <div className={styles['card-overlay-body']}>
                <Icon name="playRounded" width="24px" height="24px" />
                <p className={styles['card-title']}>{title}</p>
            </div>
            <div className={styles['card-overlay-footer']}>
                <div className={styles['card-overlay-footer-review']}>
                    <Icon name="star" />
                    <p>{votes}</p>
                </div>
                <p>{movieYear}</p>
            </div>
        </div>
    </motion.div>
  )
}

export default MovieCard;