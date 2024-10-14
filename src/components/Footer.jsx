"use client"; // Ensures the component is a client-side component

import React from "react";
import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io";
import styles from "@/styles/Footer.module.css"; // Assuming you store your CSS in Footer.module.css

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.waves}>
        <div className={styles.wave} id={styles.wave1}></div>
        <div className={styles.wave} id={styles.wave2}></div>
        <div className={styles.wave} id={styles.wave3}></div>
        <div className={styles.wave} id={styles.wave4}></div>
      </div>

      <ul className={styles.socialIcon}>
        <li className={styles.socialIconItem}>
          <a className={styles.socialIconLink} href="#">
            <IoLogoFacebook />
          </a>
        </li>
        <li className={styles.socialIconItem}>
          <a className={styles.socialIconLink} href="#">
            <IoLogoTwitter />
          </a>
        </li>
        <li className={styles.socialIconItem}>
          <a className={styles.socialIconLink} href="#">
            <IoLogoLinkedin />
          </a>
        </li>
        <li className={styles.socialIconItem}>
          <a className={styles.socialIconLink} href="#">
            <IoLogoInstagram />
          </a>
        </li>
      </ul>

      <ul className={styles.menu}>
        <li className={styles.menuItem}><a className={styles.menuLink} href="#">Home</a></li>
        <li className={styles.menuItem}><a className={styles.menuLink} href="#">About</a></li>
        <li className={styles.menuItem}><a className={styles.menuLink} href="#">DMCA</a></li>
        <li className={styles.menuItem}><a className={styles.menuLink} href="#">Contact</a></li>
      </ul>

      <p>© 2024 Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
