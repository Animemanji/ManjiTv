"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from "@/styles/Search.module.css";
import AnimePost from '@/components/AnimePost';
import SideBar from '@/components/Sidebar';
import Footer from '@/components/Footer';

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setIsLoading(true);

    try {
      const response = await fetch(`/api/searchAnime?search=${encodeURIComponent(searchTerm)}`);
      const result = await response.json();

      if (result.success) {
        setSearchResults(result.data);
      } else {
        setSearchResults([]); // Clear if no results found
      }
    } catch (error) {
      console.error('Error searching anime data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCoverClick = (animeTitle) => {
    router.push(`/allepisodes/${encodeURIComponent(animeTitle)}`);
  };

  return (
    <>
      <nav>
        <SideBar />
      </nav>


      {/* Search Results */}
      <div className={styles.results}>
        <div>
          <AnimePost />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Page;
