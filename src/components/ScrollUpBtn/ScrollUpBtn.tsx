import { FC, useEffect, useState } from 'react';
import styles from './ScrollUpBtn.module.scss';

const ScrollUpBtn: FC = () => {
  const [showBtn, setShowBtn] = useState(false);

  const onScroll = () => {
    window.scrollY > 1200 ? setShowBtn(true) : setShowBtn(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button
      className={showBtn ? `${styles.scrollBtn}` : `${styles.hidden}`}
      onClick={scrollToTop}
    >
      <svg className={styles.svgScrollArrow}>
        <use href="image/sprite.svg#icon-arrow-up"></use>
      </svg>
    </button>
  );
};

export default ScrollUpBtn;
