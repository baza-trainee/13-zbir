import { FC } from 'react';
import styles from './HowItWorks.module.scss';

const HowItWorks: FC = () => {
  return (
    <section className={`${styles.wrapper} container`} id="how-it-works">
      <h2 className={styles.title}>як це працюЄ</h2>
      <div className={styles.infoContainer}>
        <div className={styles.step + ' ' + styles.step1}>
          <span className={styles.stepNumber}>1</span>
          <span className={styles.stepText1}>Твій донат</span>
        </div>

        <div className={styles.arrowContainer}>
          <svg className={styles.arrow}>
            <use href="image/sprite.svg#icon-arrow_first"></use>
          </svg>
        </div>

        <div className={styles.step + ' ' + styles.step2}>
          <span className={styles.stepNumber}>2</span>
          <span className={styles.stepText2}>Система РЕБ</span>
        </div>

        <div className={styles.arrowContainer}>
          <svg className={styles.arrow}>
            <use href="image/sprite.svg#icon-arrow_second"></use>
          </svg>
        </div>

        <div className={styles.step + ' ' + styles.step3}>
          <span className={styles.stepNumber}>3</span>
          <span className={styles.stepText3}>Захист на фронті</span>
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
