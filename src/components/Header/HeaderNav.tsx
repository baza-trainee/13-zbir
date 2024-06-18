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

    const toogleMenu = () => {
        setIsOpen((isOpen) => !isOpen)
    }
  return (
    <div className={`${styles.header__nav} ${isOpen ? 'is-open' : ''}`}>
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
                 <a onClick={toogleMenu}>
                    <img src={MenuIcon} />
                </a>
            </div>
            <hr />

            <ul className={isOpen ? styles.header__mobile_nav : styles.header__mobile_nav_hiden}>
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
