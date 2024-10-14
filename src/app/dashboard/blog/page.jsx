"use client"

import { useState } from 'react';
import styles from "@/app/ui/dashboard/uploadblog.module.css"
import { FaInstagram } from 'react-icons/fa';

export default function BlogUpload() {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [instagramLink, setInstagramLink] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result); // Base64 encoded image
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogData = { image, description, instagramLink };

    const res = await fetch('/api/uploadBlog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blogData),
    });

    if (res.ok) {
      alert('Blog uploaded successfully!');
      // Clear the form
      setImage(null);
      setDescription('');
      setInstagramLink('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} >
      <input type="file" accept="image/*" onChange={handleImageUpload} required className={styles.input} />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Enter blog description" 
        required 
        className={styles.description}
      />
        <FaInstagram className={styles.insta}/>
      <div>
      <input 
        type="text" 
        value={instagramLink} 
        onChange={(e) => setInstagramLink(e.target.value)} 
        placeholder="Instagram Link Add me" 
        required
        className={styles.description1}
      />
      </div>
      <button type="submit" className={styles.button}>Upload Blog</button>
    </form>
  );
}
