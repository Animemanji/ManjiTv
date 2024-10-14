"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Use Next.js router
import styles from "@/styles/AllEpisodes.module.css";
import SideBar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default function AllEpisodes({ params }) {
  const { animeTitle } = params;
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter(); // Initialize router

  useEffect(() => {
    if (animeTitle) {
      const fetchAnime = async () => {
        try {
          const res = await fetch("/api/getAnimeData");
          const data = await res.json();

          if (data.success) {
            const selectedAnime = data.data.find(
              (a) => a.animeTitle === decodeURIComponent(animeTitle)
            );
            setAnime(selectedAnime || null);
          } else {
            setError("Anime not found");
          }
        } catch (err) {
          setError("An error occurred while fetching data");
        } finally {
          setLoading(false);
        }
      };

      fetchAnime();
    }
  }, [animeTitle]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!anime) {
    return <div>Anime not found</div>;
  }

  const handleEpisodeClick = (title) => {
    // Navigate to the episode page
    router.push(`/allepisodes/${encodeURIComponent(animeTitle)}/ep/${title}`);
  };

  return (
    <>
    <nav>

    <SideBar/>
    </nav>
    <div>
      {anime.episodes.length > 0 ? (
        <>
          <div className={styles.coverSection}>
            {/* Cover and description section */}
            <div className={styles.backimage}>
              <img
                src={anime.coverImage}
                alt={animeTitle}
                className={styles.backgroundimg}
              />
            </div>
            <div className={styles.frontimage}>
              <img
                src={anime.coverImage}
                alt={animeTitle}
                className={styles.coverImage}
              />
              <p className={styles.coverDescription}>{anime.animeTitle}</p>
            </div>
            <div className={styles.ep_length}>
              {anime.episodes.length} ▽ Sub | Dub
            </div>
            <p className={styles.more_info}>{anime.coverImageDescription}</p>
          </div>

          <div className={styles.episodesList}>
            {anime.episodes.map((episode, index) => (
              <div
                key={index}
                className={styles.episodeCard}
                onClick={() => handleEpisodeClick(episode.title)} // Click handler
              >
                {episode.description && (
                  <p className={styles.episodeDescription}>
                    {episode.description}
                  </p>
                )}
                <video className={styles.videoPlayer}>
                  <source src={episode.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <h2 className={styles.episodeTitle}>{episode.title}</h2>
                <p className={styles.ep_length}>Sub | Dub</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>No episodes available</p>
      )}
    </div>
    <footer>
    <Footer/>
    </footer>
    </>

  );
}
