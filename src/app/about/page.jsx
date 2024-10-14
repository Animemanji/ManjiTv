import Footer from '@/components/Footer'
import SideBar from '@/components/Sidebar'
import styles from '@/styles/About.module.css'
import React from 'react'

const page = () => {
    return (
        <>
            <header>
                <SideBar />
            </header>
            <div className={styles.fontFamily}>
                <div className={styles.container}>
                    <h2 className={styles.h2}>Welcome to Manji TV</h2>
                    <p className={styles.p}>
                        At Manji TV, we offer a vast library of Hindi-dubbed anime, bringing your favorite shows closer to home. We are dedicated to delivering top-quality anime content for free, ensuring a seamless viewing experience with safe and secure streaming for all users.
                    </p>

                    <h2 className={styles.h2}>Our Vision</h2>
                    <p className={styles.p}>
                        Manji TV was created to make anime accessible to everyone, especially those who enjoy anime in Hindi. Our mission is to build a vibrant community of anime lovers by providing a secure platform where fans can enjoy their favorite anime without worry.
                    </p>

                    <h2 className={styles.h2}>What We Offer</h2>
                    <div className={styles.highlights}>
                        <ul>
                            <li>
                                <strong>Free Hindi Dubbed Anime:</strong> Enjoy a wide range of anime dubbed in Hindi, all for free!
                            </li>
                            <li>
                                <strong>High-Quality Streaming:</strong> Watch your favorite series in HD with no buffering.
                            </li>
                            <li>
                                <strong>Safe and Secure Platform:</strong> We ensure a safe streaming environment for all our users.
                            </li>
                            <li>
                                <strong>Huge Anime Collection:</strong> From action-packed series to heartwarming stories, explore our ever-growing anime library.
                            </li>
                            <li>
                                <strong>Easy-to-Use Interface:</strong> Navigate through our website effortlessly, finding your next anime binge with ease.
                            </li>
                        </ul>
                    </div>

                    <h2 className={styles.h2}>Why Choose Manji TV?</h2>
                    <p className={styles.p}>
                        At Manji TV, we are more than just an anime streaming site – we are a community. We provide a platform where anime fans can enjoy their favorite content without ads, pop-ups, or security concerns. With a vast library of Hindi-dubbed shows and a commitment to quality, we aim to be the go-to source for free, high-quality anime in Hindi.
                    </p>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default page
