import { FC } from 'react';
import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <>
      <footer className={`${styles.footer} container`}>
        <p className={styles.desc}>
          Розробка Baza Trainee Ukraine 2024. Всі права захищені.
        </p>
      </footer>
    </>
  );
};

export default Footer;
