import React, { useState, useEffect } from "react";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import style from "./Search.module.css";

const Search = ({ search }) => {
  const [val, setVal] = useState("");
  const [songs, setSongs] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://qtify-backend-labs.crio.do/songs"
        );
        if (response.ok) {
          const data = await response.json();
          setSongs(data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const changeHandler = (e) => {
    setVal(e.target.value);
    if (e.target.value === "") {
      setSearchResults([]);
    } else {
      handleSearch();
    }
  };

  const handleSearch = () => {
    const searchQuery = val.toLowerCase();
    const filteredData = songs.filter((item) =>
      item.title.toLowerCase().includes(searchQuery)
    );
    setSearchResults(filteredData);
  };

  return (
    <div className={style.container}>
      <div className={style.searchBar}>
        <form className={style.wrapper} onSubmit={onSubmit}>
          <input
            className={style.search}
            placeholder={search}
            value={val}
            onChange={changeHandler}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <button className={style.searchButton} type="submit">
            <SearchIcon />
          </button>
        </form>
        <div className={`${style.resultsContainer} ${isFocused ? style.showResults : ''}`}>
          {searchResults.length > 0 ? (
            <div className={style.scrollableResults}>
              {searchResults.map((song) => (
                <div className={style.songItem} key={song.id}>
                  <p>{song.title}</p>
                  <p>
                    <span>{song.artists.join(", ")}</span>
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className={style.searchResultTitle}>
              {val.trim() === "" ? "Enter a search term" : "No results found"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
  