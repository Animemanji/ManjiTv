"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from "@/styles/AllPost.module.css";
import Trending from './Trending';
import Latest from './Latest';

const AnimePost = () => {
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

    // Get the current posts for the page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = animeData.slice(indexOfFirstPost, indexOfLastPost);

    const handleCoverClick = (animeTitle) => {
        router.push(`/allepisodes/${encodeURIComponent(animeTitle)}`);
    };

    // Pagination controls
    const totalPages = Math.ceil(animeData.length / postsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <main>
                <section>
                    <h1 className={styles.popular_title}>Popular</h1>
                    <div className={styles.popular}>
                        {currentPosts.map((anime, index) => (
                                <>
                            <div key={index} className={styles.post_con} onClick={() => handleCoverClick(anime.animeTitle)}>
                                <img src={anime.coverImage} alt={anime.animeTitle} className={styles.img} />
                            <div className={styles.title}>
                                <p>{anime.animeTitle}</p>
                                <span className={styles.public}>EP-{anime.episodes.length} | Ongoing</span>
                            </div>
                            </div>
                            </>
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    <div className={styles.pagination}>
                        <button
                            className={styles.page_button}
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            &laquo;
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                className={`${styles.page_button} ${currentPage === page ? styles.active : ''}`}
                                onClick={() => handlePageChange(page)}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            className={styles.page_button}
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            &raquo;
                        </button>
                    </div>
                    <div>
                        <Trending/>
                    </div>
                    <div>
                        <Latest/>
                    </div>
                </section>
            </main>
        </>
    );
};

export default AnimePost;