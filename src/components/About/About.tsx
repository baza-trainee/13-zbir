import { FC } from 'react';
import ReusableBtn from '../ReusableBtn/ReusableBtn';
import { JAR_URL } from '../../assets/data/env/env';
import styles from './About.module.scss';

const About: FC = () => {
  return (
    <section className={`${styles.wrapper} container`} id="crew">
      <h2 className={styles.title}>батальйон</h2>
      <div className={styles.contentWrapper}>
        <div className={styles.contant}>
          <div className={styles.info}>
            <p className={styles.p}>
              13-й окремий стрілецький батальйон (13 ОСБ) — це українське
              військове формування військ територіальної оборони у складі
              оперативного командування «Північ». Батальйон був сформований у
              березні 2014 року на базі Уманського військового комісаріату. Він
              складається з добровольців та мобілізованих військовослужбовців і
              підпорядковується командуванню Сухопутних військ Збройних Сил
              України.
            </p>
            <p>
              Основними завданнями 13 ОСБ є охорона та оборона об’єктів
              критичної інфраструктури, боротьба з диверсійно-розвідувальними
              силами та забезпечення операцій зі стабілізації у разі
              надзвичайних ситуацій. Територія відповідальності батальйону
              включає Черкаську, Кіровоградську та Полтавську області.
            </p>
          </div>
        </div>
        <img src="image/Soldiers-2x.png" className={styles.picture}></img>
      </div>
      <div className={styles.buttonContainer}>
        <ReusableBtn text={'Задонатити'} href={JAR_URL} />
      </div>
    </section>
  );
};

export default About;
