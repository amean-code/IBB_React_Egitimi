import React from 'react'
import styles from './Banner.module.css';
import logo from '../../logo.svg'

function Banner() {
  return (
    <div className={styles.App}>

        <img src={logo} className={styles.Applogo} alt="logo" />
            <p>
                AMEAN Danışmanlık React Eğitimi
            </p>
            <a
                className={styles.Applink}
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
            Learn React
            </a>

    </div>
  )
}

export default Banner