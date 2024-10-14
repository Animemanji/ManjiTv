"use client";

import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { useState } from "react";

const Search = ({ placeholder, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        value={query}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default Search;
