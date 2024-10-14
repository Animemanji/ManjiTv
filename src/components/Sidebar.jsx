"use client"

import styles from '@/styles/SideBar.module.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SideBar = () => {
    const router = useRouter();

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handelePush = () => {
        router.push("/seach")
    };

    return (
        <>
        <header  className={styles.navbar}>
            <nav>
                <div className={styles.hamburger} onClick={toggleMenu}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>

                <div className={`${styles.menu} ${menuOpen ? styles.active : ''}`}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/dmca">DMCA</a></li>
                        <li><a href="/genre">Genre</a></li>
                        <li className={styles.dropdown}>
                            Dropdown <span>▼</span>
                            <ul className={styles.submenu}>
                                <li><a href="/option1">Option 1</a></li>
                                <li><a href="/option2">Option 2</a></li>
                                <li><a href="/option3">Option 3</a></li>
                            </ul>
                        </li>
                    </ul>
                    <button className={styles.closeMenu} onClick={toggleMenu}>✕</button>
                </div>
            </nav>

            <div>
                <button className={styles.btn} onClick={handelePush}>
                <FaSearch className={styles.search}/>
                </button>
            </div>
        </header>
        </>
    );
};


export default SideBar;
