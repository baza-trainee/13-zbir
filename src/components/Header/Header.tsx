import React from 'react'
import styles from './Header.module.scss';
import logo from '../img/13-logo.svg';
import HeaderNav from './HeaderNav';



export default function Header() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.header__logo}>
            <img src={logo}/>
        </div>
        <HeaderNav/>
      </header>
    </div>
  )
}
