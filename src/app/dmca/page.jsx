import Footer from '@/components/Footer'
import SideBar from '@/components/Sidebar'
import styles from '@/styles/main.module.css'
import React from 'react'

const page = () => {
    return (
        <>
            <header>
                <SideBar />
            </header>
            <main>
                <div className={styles.container1}>
                    <h1 className={styles.h1}>DMCA Copyright Infringement Notice</h1>
                    <p className={styles.p}>Last Updated: <strong className={styles.strong}>2 October 2024</strong></p>

                    <h2 className={styles.h2}>Reporting Copyright Infringement</h2>
                    <p className={styles.p}>We respect the intellectual property rights of anime creators, studios, and distributors. If you believe that any content on our website infringes upon your copyrights, you may notify us by following the DMCA notice procedure outlined below.</p>

                    <h3 className={styles.h3}>How to Submit a DMCA Notice</h3>
                    <p className={styles.p}>If you are a copyright owner or authorized to act on behalf of one, and believe that content on our website infringes your copyright, please send a written DMCA notice that includes the following information:</p>

                    <ul className={styles.ul}>
                        <li><strong className={styles.strong}>Identification of the Copyrighted Work:</strong> A detailed description of the copyrighted work that you believe has been infringed, or a representative list if multiple works are affected.</li>
                        <li><strong className={styles.strong}>Identification of the Infringing Material:</strong> Provide the URL(s) or specific location(s) where the allegedly infringing material is located.</li>
                        <li><strong className={styles.strong}>Your Contact Information:</strong> Full name, mailing address, phone number, and email address for communication purposes.</li>
                        <li><strong className={styles.strong}>A Statement of Good Faith:</strong> A statement that you believe in good faith that the use of the material is unauthorized.</li>
                        <li><strong className={styles.strong}>A Statement of Accuracy:</strong> A statement, under penalty of perjury, that the information in the notice is accurate and you are authorized to act on behalf of the copyright owner.</li>
                        <li><strong className={styles.strong}>Signature:</strong> Your physical or electronic signature.</li>
                    </ul>

                    <h3 className={styles.h3}>DMCA Agent Contact Information</h3>
                    <p className={styles.p}>Please send your DMCA notice to:</p>
                    <p className={styles.p}>
                        <strong className={styles.strong}>DMCA Agent:</strong>animemanji80@gmail.com<br />
                        <strong className={styles.strong}>Email:</strong>animemanji80@gmail.com<br />
                        <strong className={styles.strong}>Mailing Address:</strong>animemanji80@gmail.com<br />
                        <strong className={styles.strong}>Phone:</strong>Temporary Unavailable
                    </p>

                    <h3 className={styles.h3}>Counter-Notice Procedure</h3>
                    <p className={styles.p}>If you believe that content you uploaded to our site was mistakenly removed or disabled, you may file a counter-notice. To file a counter-notice, please provide the following:</p>

                    <ul className={styles.ul}>
                        <li><strong className={styles.strong}>Identification of the Removed Material:</strong> A description of the material and its location before removal.</li>
                        <li><strong className={styles.strong}>A Statement of Good Faith:</strong> A statement, under penalty of perjury, that the material was removed as a result of a mistake or misidentification.</li>
                        <li><strong className={styles.strong}>Your Contact Information:</strong> Name, address, phone number, and email address.</li>
                        <li><strong className={styles.strong}>Consent to Jurisdiction:</strong> A statement consenting to the jurisdiction of the federal court in your district.</li>
                        <li><strong className={styles.strong}>Signature:</strong> Your physical or electronic signature.</li>
                    </ul>

                    <p className={styles.p}>Please submit the counter-notice to our DMCA Agent at the contact information provided above.</p>

                    <h3 className={styles.h3}>Disclaimer</h3>
                    <p className={styles.p}>The content on this website is provided by third-party sources, and we do not host or upload any video files. All the video content found on this website is hosted by third-party servers and is freely available on the internet. We are not responsible for the copyright compliance of any content linked or referred to from this site. If you believe any content is infringing, please follow the procedures outlined above to notify us so that we can take appropriate action.</p>

                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default page
