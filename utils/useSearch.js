import { useState, useEffect } from "react";
import base64 from "react-native-base64";
import getEnv from "./env";

const SPOTIFY_SEARCH_ENDPOINT = "https://api.spotify.com/v1/search";
const SPOTIFY_TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const useSearch = () => {
  const [search, setSearch] = useState("");
  const [searchedSongs, setSearchedSongs] = useState([]);
  const [token, setToken] = useState("");
  const [timeoutToClear, setTimeoutToClear] = useState(null); // Initialize the timeoutToClear state

  const { CLIENT_ID, CLIENT_SECRET } = getEnv(); // Destructuring to get CLIENT_ID and CLIENT_SECRET

  useEffect(() => {
    getAccessToken();
  }, []);

  const getAccessToken = async () => {
    try {
      const credentials = base64.encode(`${CLIENT_ID}:${CLIENT_SECRET}`);
      const response = await fetch(SPOTIFY_TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${credentials}`,
        },
        body: "grant_type=client_credentials",
      });

      const data = await response.json();
      setToken(data.access_token);
    } catch (error) {
      console.error("Error getting access token:", error);
    }
  };

  const fakeDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const debounce = (callback, alwaysCall, ms) => {
    return (...args) => {
      alwaysCall(...args);
      if (timeoutToClear) {
        clearTimeout(timeoutToClear);
      }
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
        false
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
