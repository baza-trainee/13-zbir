import { FC } from 'react';
import MainImg from '../../assets/images/img/REB.svg';
import ReusableBtn from '../ReusableBtn/ReusableBtn';
import styles from './Hero.module.scss';

const Hero: FC = () => {
  return (
    <section className={`${styles.heroSection} container`}>
      <h1 className={styles.title}>
        ЗБІР НА РЕБ ДЛЯ 13-ГО ОКРЕМОГО СТРІЛЕЦЬКОГО БАТАЛЬЙОНУ
      </h1>
      <div className={styles.main}>
        <img src={MainImg} className={styles.img} id="goal" />
        <div className={styles.text}>
          <p>Наша мета забезпечити 13 ОСБ системою РЕБ</p>
          <h3 className={styles.subtitle}>90 000 грн</h3>
          <ReusableBtn text="Задонатити" href="reuseLinkBtn" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
