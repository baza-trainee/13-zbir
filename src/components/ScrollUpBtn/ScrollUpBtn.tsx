import sprite from '../../assets/images/sprite.svg';
import styles from './ScrollUpBtn.module.scss';

const ScrollUpBtn = () => {
  return (
    <button className={styles.scrollBtn}>
      <svg className={styles.svgScrollArrow}>
        <use href={sprite + '#icon-arrow-up'}></use>
      </svg>
    </button>
  );
};

export default ScrollUpBtn;
