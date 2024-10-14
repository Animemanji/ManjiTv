"use client"

import { useState } from 'react';
import styles from "./AnimeUplod.module.css"
import Admin from '@/components/Admin';

const AnimeUploadForm = () => {
  const [animeTitle, setAnimeTitle] = useState('');
  const [episodeTitle, setEpisodeTitle] = useState('');
  const [episodeDescription, setEpisodeDescription] = useState('');
  const [coverImageTitle, setCoverImageTitle] = useState('');
  const [coverImageDescription, setCoverImageDescription] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [status, setStatus] = useState('');
  const [imagpreview, setImgpreview] = useState('');
  const [preview, setPreview] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const handleFileChangecover = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(file); // Set the cover image
      setImgpreview(URL.createObjectURL(file)); // Generate a preview URL for the video
    }
  };

  const handleFileChangeVideo = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoFile(file);
      setPreview(URL.createObjectURL(file)); // Generate a preview URL for the video
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('animeTitle', animeTitle);
    formData.append('episodeTitle', episodeTitle);
    formData.append('episodeDescription', episodeDescription);
    formData.append('coverImageTitle', coverImageTitle);
    formData.append('coverImageDescription', coverImageDescription); // Added cover image description
    formData.append('video', videoFile);
    if (coverImage) {
      formData.append('coverImage', coverImage); // Only append if coverImage is present
    }
    setIsLoading(true);
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        alert("Upload successful ")
        setStatus('Files uploaded successfully!');
      } else {
        setStatus('Error uploading files: ' + result.message);
      }
    } catch (error) {
      console.error('Error uploading files:', error);
      setStatus('Error uploading files.');
    }finally {
      setIsLoading(false); // Hide loading state
    }
  };

  return (
    <><form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputContainer}>
        <label className={styles.label}>Anime Title:</label>
        <input
          type="text"
          value={animeTitle}
          onChange={(e) => setAnimeTitle(e.target.value)}
          required
          className={styles.input} />
      </div>

      <div className={styles.inputContainer}>
        <label className={styles.label}>Episode Title:</label>
        <input
          type="text"
          value={episodeTitle}
          onChange={(e) => setEpisodeTitle(e.target.value)}
          required
          className={styles.input} />
      </div>

      <div className={styles.inputContainer}>
        <label className={styles.label}>Episode Description:</label>
        <textarea
          value={episodeDescription}
          onChange={(e) => setEpisodeDescription(e.target.value)}
          required
          className={styles.textarea} />
      </div>

      <div className={styles.inputContainer}>
        <label className={styles.label}>Cover Image Description:</label>
        <textarea
          value={coverImageDescription}
          onChange={(e) => setCoverImageDescription(e.target.value)}
          className={styles.textarea} />
      </div>

      <div className={styles.inputContainer}>
        <label className={styles.label}>Cover Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChangecover}
          className={styles.input} />
        {imagpreview && <img src={imagpreview} alt="Cover Preview" className={styles.imagePreview} />}
      </div>

      <div className={styles.inputContainer}>
        <label className={styles.label}>Video File:</label>
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChangeVideo}
          required
          className={styles.input} />
        {preview && <video src={preview} controls width={400} className={styles.video} />}
      </div>

      <button type="submit" className={styles.button} disabled={isLoading}>
      {isLoading ? 'Uploading...' : 'Upload Video'}
      </button>
      {status && <p className={styles.status}>{status}</p>}
    </form>
      <div>
        <Admin />
      </div>
    </>
  );
};

export default AnimeUploadForm;