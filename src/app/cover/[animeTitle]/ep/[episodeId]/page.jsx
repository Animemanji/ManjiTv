"use client";

import Footer from "@/components/Footer";
import SideBar from "@/components/Sidebar";
import { useEffect, useRef, useState } from "react";

export default function EpisodeView({ params }) {
  const { animeTitle, episodetitle } = params;
  const [episode, setEpisode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const fetchEpisode = async () => {
      try {
        const res = await fetch(`/api/sildedata`);
        const data = await res.json();
        if (data.success) {
          const anime = data.data.find(
            (a) => a.animeTitle === decodeURIComponent(animeTitle)
          );
          const selectedEpisode = anime?.episodes.find(
            (e) => e.id === episodetitle
          );
          setEpisode(selectedEpisode || null);
        } else {
          setError("Episode not found");
        }
      } catch (err) {
        setError("An error occurred while fetching episode data");
      } finally {
        setLoading(false);
      }
    };

    fetchEpisode();
  }, [animeTitle, episodetitle]);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const handleSkip = (seconds) => {
    videoRef.current.currentTime += seconds;
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  const handleProgressClick = (event) => {
    const progressBar = event.target;
    const rect = progressBar.getBoundingClientRect();
    const clickPosition = event.clientX - rect.left;
    const clickRatio = clickPosition / progressBar.offsetWidth;
    videoRef.current.currentTime = clickRatio * duration;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!episode) {
    return <div>Episode not found</div>;
  }

  return (
    <>
    <nav>
      <SideBar/>
    </nav>
    <div style={{ textAlign: "center" }}>
      <video
        ref={videoRef}
        src={episode.url}
        type="video/mp4"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        style={{ width: "80%" }}
      >
        Your browser does not support the video tag.
      </video>
      <div style={{ marginTop: "10px" }}>
        {!isPlaying ? (
          <button onClick={handlePlay}>Play</button>
        ) : (
          <button onClick={handlePause}>Pause</button>
        )}
        <button onClick={() => handleSkip(-10)} style={{ marginLeft: "10px" }}>
          Skip Back 10s
        </button>
        <button onClick={() => handleSkip(10)} style={{ marginLeft: "10px" }}>
          Skip Forward 10s
        </button>
      </div>
      <div
        style={{
          marginTop: "10px",
          width: "100%",
          backgroundColor: "#ccc",
          height: "10px",
          position: "relative",
          cursor: "pointer"
        }}
        onClick={handleProgressClick}
      >
        <div
          style={{
            backgroundColor: "#f00",
            height: "100%",
            width: `${(currentTime / duration) * 100}%`
          }}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>
    </div>
    <footer>
      <Footer/>
    </footer>
    </>
    );
}
