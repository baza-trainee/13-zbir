import React from 'react'
import styles from './Footer.module.scss'
import ReusableBtn from '../ReusableBtn/ReusableBtn'

export default function Footer() {
  return (
    <>
      <div className={styles.footer} id='collection'>
        <h1>Будемо вдячні кожному за підтримку та поширення збору!</h1>
        <h1>Слава Україні!</h1>
        <ReusableBtn text='Поділитися збором' />
      </div>
      <p>Розробка Baza Trainee Ukraine 2024. Всі права захищені.</p>
    </>
    
  )
}
