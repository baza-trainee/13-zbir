import { FC } from 'react';
import logo from '../../assets/images/img/13-logo.svg';
import HeaderNav from './HeaderNav';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className={`${styles.header} container`}>
      <div className={styles.header__logo}>
        <img src={logo} />
      </div>
      <HeaderNav />
    </header>
  );
};

export default Header;
