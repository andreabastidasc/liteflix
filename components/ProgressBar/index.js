import React from 'react'
import styles from './Bar.module.scss'

const CustomProgressBar = props => {
    const { bgcolor, completed, action, text, reset, running, textCompleted } = props;
    return (
        <div className={styles['bar-wrapper']}>
            {completed === 100 && running ? (
                <p className={styles['bar-percentage']}>{textCompleted}</p>
            ) : (
                <p className={styles['bar-percentage']}>{text}</p>
            )}       
            <div className={styles.bar}>
                <div style={{width: `${completed}%`, backgroundColor: bgcolor }} className={styles['bar-filler']} />
            </div>
            {running ? (
                <button onClick={action} style={{color: completed === 100 ? '#64EEBC' : '#FFFFFF'}}>{completed < 100 ? 'CANCELAR' : '¡LISTO!'}</button>
            ) : (
                <button onClick={reset}>REINTENTAR</button>
            )} 
        </div>
      
    );
}

export default CustomProgressBar
