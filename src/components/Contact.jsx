"use client";

import { useState } from 'react';
import Footer from '@/components/Footer'
import SideBar from '@/components/Sidebar'
import styles from '@/styles/contact.module.css'
import React from 'react'
import { MdEmail } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    const [tooltipVisible, setTooltipVisible] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("animemanji80@gmail.com");
        setTooltipVisible(true);
        setTimeout(() => {
            setTooltipVisible(false);
        alert("successfully Copy Email")

        }, 2000);
    };
    return (
        <>
            <header>
                <SideBar />
            </header>
            <div className={styles.container}>
                <h1>Contact Us</h1>
                <p>
                    If you have any questions or want to get in touch, feel free to contact us via email or follow us on our social media platforms.
                </p>

                <div className={styles.contactInfo}>
                    <h2>Email</h2>
                    <div className={styles.email} id="email" onClick={copyEmail}>
                        <span id="email-text">animemanji80@gmail.com</span>
                        <MdEmail/>
                        {tooltipVisible && <div className={styles.tooltip} id="tooltip">Copied!</div>}
                    </div>
                </div>

                <div className={styles.socialMedia}>
                    <div className={styles.iconTextBg}>
                        <div className={styles.xIcon}>
                            <FaTwitter className={styles.i}/>
                        </div>
                        <p>Twitter</p>
                    </div>

                    <div className={styles.iconTextBg}>
                        <div className={styles.insIcon}>
                            <FaInstagram className={styles.i}/>
                        </div>
                        <p>Instagram</p>
                    </div>

                    <div className={styles.iconTextBg}>
                        <div className={styles.fbIcon}>
                            <FaFacebook className={styles.i}/>
                        </div>
                        <p>Facebook</p>
                    </div>

                    <div className={styles.iconTextBg}>
                        <div className={styles.tgIcon}>
                            <FaTelegram className={styles.i}/>
                        </div>
                        <p>Telegram</p>
                    </div>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Contact
