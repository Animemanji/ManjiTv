'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/Slider.module.css';

const Slider = () => {
  const [animeData, setAnimeData] = useState([]);
  const router = useRouter();
  const limit = 3;

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await fetch('/api/sildedata');
        const result = await response.json();
        if (result.success) {
          setAnimeData(result.data.slice(0, limit));
        }
      } catch (error) {
        console.error('Error fetching anime data:', error);
      }
    };

    fetchAnimeData();
  }, []);

  const handleCoverClick = (animeTitle) => {
    router.push(`/cover/${encodeURIComponent(animeTitle)}`);
  };

  return (
    <div className={styles.slider_container}>
      {animeData.length > 0 ? (
        <div className={styles.slider}>
          {animeData.map((anime, index) => (
            <div key={index} className={styles.slide}>
              <img
                src={anime.coverImage}
                alt={anime.animeTitle}
                className={styles.coverImage}
              />
              <div className={styles.description}>
                <h3 className={styles.h3}>{anime.animeTitle}</h3>
                <button
                  className={styles.watch}
                  onClick={() => handleCoverClick(anime.animeTitle)}
                >
                  Watch
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Slider;
