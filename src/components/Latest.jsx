"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/Latest.module.css'

const Latest = () => {
    const [animeData, setAnimeData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(15); // Number of posts per page
    const router = useRouter();

    useEffect(() => {
        const fetchAnimeData = async () => {
            try {
                const response = await fetch('/api/getAnimeData');
                const result = await response.json();
                if (result.success) {
                    setAnimeData(result.data);
                }
            } catch (error) {
                console.error('Error fetching anime data:', error);
            }
        };

        fetchAnimeData();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = animeData.slice(indexOfFirstPost, indexOfLastPost);

    const handleCoverClick = (folderId) => {
        router.push(`/allepisodes/${encodeURIComponent(folderId)}`);
    };


    return (
        <>
            <main>
                <section className={styles.most_viewed_section}>
                    <h2>Latest</h2>
                    <ul>
                        {currentPosts.map((anime, index) => (
                            <li key={index}  onClick={() => handleCoverClick(anime.folderId)}>
                                <div >
                                    <img src={anime.coverImage} alt={anime.animeTitle} height={150} style={{objectFit:"cover"}} />
                                </div>
                                    <div className={styles.content}>
                                        <h3>{anime.animeTitle}</h3>
                                        <p> {anime.coverImageDescription}</p>
                                    </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </>
    )
}

export default Latest
