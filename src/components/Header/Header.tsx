import styles from './Header.module.scss';
import HeaderNav from './HeaderNav';

export default function Header() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.header__logo}>
            <img src='/src/assets/images/13-logo.svg'/>
        </div>
        <HeaderNav/>
      </header>
    </div>
  )
}
