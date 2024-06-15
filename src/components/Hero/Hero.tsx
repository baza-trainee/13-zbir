import React from 'react'
import styles from './Hero.module.scss'
import MainImg from '../img/REB.svg'

export default function Hero() {
  return (
    <div className={styles.hero_section}>
      <h1>ЗБІР НА РЕБ ДЛЯ 13-ГО ОКРЕМОГО  СТРІЛЕЦЬКОГО БАТАЛЬЙОНУ</h1>
      <div className={styles.hero_section__main}>
          <img src={MainImg} className={styles.hero_section__main_img}/>
          <div className={styles.hero_section__main_text}>
            <h1>Наша мета забезпечити 13 ОСБ системою РЕБ</h1>
            <h3>90 000 грн</h3>
          </div>
      </div>
    </div>
  )
}