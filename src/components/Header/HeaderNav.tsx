import React, { useState } from 'react'
import styles from './Header.module.scss';
import MenuIcon from '../img/menu.svg'

interface IHeader  {
    id: number
    title: string,
    route: string
}

const itemsHeader: IHeader[] = [
 {
    id: 1,
    title: 'Мета',
    route: '/goal'
 },
 {
    id: 2,
    title: 'Батальйон',
    route: '/crew'
 },
 {
    id: 3,
    title: 'Як це працює',
    route: '/how-it-works'
 },
 {
    id: 4,
    title: 'Збір',
    route: '/collection'
 }
]

export default function HeaderNav() {
    const [items, setItems] = useState(itemsHeader);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((isOpen) => !isOpen)
    }
  return (
    <div className={`${styles.header__nav} ${isOpen ? 'is-open' : ''}`}>
        {isOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
        <nav>
            {items.map((item) => (
                <li key={item.id}>
                    <a href={item.route} >
                        {item.title}
                    </a>
                </li> 

            ))}
        </nav>

            <div className={styles.header__nav_mobile}>
                 <a onClick={toggleMenu}>
                    <img src={MenuIcon} />
                </a>
            </div>
            <hr />

            <ul className={`${styles.header__mobile_nav} ${isOpen ? styles.is_open : ''}`}>
                {items.map((item) => {
                return (
                    <li key={item.id}>
                    <a href={item.route} >
                        {item.title}
                    </a>
                    </li>
                );
                })}
            
            </ul>
    </div>
  )
}
