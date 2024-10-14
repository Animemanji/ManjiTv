"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Trendingstyles from '@/styles/Trending.module.css'


const Trending = () => {
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

    const handleCoverClick = (animeTitle) => {
        router.push(`/allepisodes/${encodeURIComponent(animeTitle)}`);
    };


    return (
        <>
            <main>
                <section>
                    <h2 className={Trendingstyles.trand_text}>Trending</h2>
                    <div className={Trendingstyles.cards}>
                        {currentPosts.map((anime, index) => (
                            <div key={index} className={Trendingstyles.card} onClick={() => handleCoverClick(anime.animeTitle)}>
                                <div className={Trendingstyles.image}>
                                    <img src={anime.coverImage} alt={anime.animeTitle} className={Trendingstyles.img} />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}

export default Trending
