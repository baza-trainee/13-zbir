import styles from './Hero.module.scss'
import MainImg from '../img/REB.svg'
import ReusableBtn from '../ReusableBtn/ReusableBtn'
import heroImg from '../../assets/images/importantInfoSection/soldierDesktop.png'

export default function Hero() {
  return (
    <div className={styles.hero_section} id='goal'>
      <h1 className={styles.hero_section__title}>ЗБІР НА РЕБ ДЛЯ 13-ГО ОКРЕМОГО  СТРІЛЕЦЬКОГО БАТАЛЬЙОНУ</h1>
      <div className={styles.hero_section__main}>
          <img src={heroImg} className={styles.hero_section__main_img}/>
          <div className={styles.hero_section__main_text}>
            <h1 className={styles.hero_section__main_text__title}>Наша мета забезпечити 13 ОСБ системою РЕБ</h1>
            <h3 className={styles.hero_section__main_text__subtitle}>90 000 грн</h3>
            <ReusableBtn text='Задонатити' href="reuseLinkBtn"/>
          </div>
      </div>
    </div>
  )
}
