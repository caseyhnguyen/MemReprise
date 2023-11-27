import { useState, useEffect } from "react";

const SPOTIFY_SEARCH_ENDPOINT = "https://api.spotify.com/v1/search";

const useSearch = (token) => {
  const [search, setSearch] = useState("");
  const [searchedSongs, setSearchedSongs] = useState([]);
  const [timeoutToClear, setTimeoutToClear] = useState();

  const fakeDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    return () => {
      clearTimeout(timeoutToClear);
    };
  }, [timeoutToClear]);

  const debounce = (callback, alwaysCall, ms) => {
    return (...args) => {
      alwaysCall(...args);
      clearTimeout(timeoutToClear);
      setTimeoutToClear(setTimeout(() => callback(...args), ms));
    };
  };

  const searchSpotifyItems = async (
    searchQuery,
    types,
    market,
    limit,
    offset,
    includeExternal
  ) => {
    try {
      const params = new URLSearchParams({
        q: searchQuery,
        type: types.join(","),
        market,
        limit,
        offset,
        include_external: includeExternal ? "audio" : undefined,
      });

      const response = await fetch(`${SPOTIFY_SEARCH_ENDPOINT}?${params}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Spotify API responded with ${response.status}: ${errorData.error.message}`
        );
      }

      return response.json();
    } catch (error) {
      console.error("Error searching Spotify:", error);
      throw error;
    }
  };

  const searchSongs = async (text) => {
    setSearch(text);
    if (!text.trim()) {
      setSearchedSongs([]);
      return;
    }
    try {
      await fakeDelay(150);
      const response = await searchSpotifyItems(
        text,
        ["track"],
        "US",
        20,
        0,
        true
      );
      setSearchedSongs(response.tracks.items);
    } catch (error) {
      console.error("Error occurred while searching for songs:", error);
    }
  };

  const debouncedSearchSongs = debounce(searchSongs, setSearch, 500);

  return { search, setSearch, searchedSongs, debouncedSearchSongs };
};

export default useSearch;
