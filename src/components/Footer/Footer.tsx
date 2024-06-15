import styles from './Footer.module.scss'
import ReusableBtn from '../ReusableBtn/ReusableBtn'

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <h1 className={styles.footer__title}>Будемо вдячні кожному за підтримку та поширення збору!</h1>
        <h1 className={styles.footer__title}>Слава Україні!</h1>
        <ReusableBtn text='Поділитися збором' />
      </div>
      <p className={styles.desc}>Розробка Baza Trainee Ukraine 2024. Всі права захищені.</p>
    </>
    
  )
}
