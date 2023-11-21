import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import getEnv from "./env";
import { getMyRecentTracks } from "./apiOptions";

const { ALBUM_ID } = getEnv();

const useSpotifyTracks = (token) => {
  const [tracks, setTracks] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  // Helper function to fetch tracks
  const fetchTracks = async (offset) => {
    if (loading) return;

    setLoading(true);
    try {
      const fetchedTracks = await getMyRecentTracks(token, offset);
      if (fetchedTracks) {
        setTracks((prevTracks) => {
          const updatedTracks = [...prevTracks, ...fetchedTracks];
          AsyncStorage.setItem(
            "@SpotifyTracks",
            JSON.stringify(updatedTracks)
          ).catch((error) => console.error("Failed to save tracks:", error));
          return updatedTracks;
        });
        setOffset((prevOffset) => prevOffset + fetchedTracks.length);
      } else {
        console.error("Unexpected response structure:", fetchedTracks);
      }
    } catch (error) {
      console.error("Failed to fetch recent tracks:", error);
    }
    setLoading(false);
  };

  // Load cached tracks on startup
  useEffect(() => {
    if (!token) {
      setTracks([]);
      return;
    }

    AsyncStorage.getItem("@SpotifyTracks")
      .then((storedTracks) => {
        if (storedTracks) {
          setTracks(JSON.parse(storedTracks));
        } else {
          fetchTracks(0);
        }
      })
      .catch((error) => console.error("Failed to load tracks:", error));
  }, [token]);

  // Function to clear cache and refetch tracks
  const clearCacheAndRefetch = async () => {
    try {
      await AsyncStorage.removeItem("@SpotifyTracks");
      console.log("Cache cleared.");
      setTracks([]); // Reset the tracks state
      fetchTracks(0); // Fetch tracks again
    } catch (error) {
      console.error("Failed to clear cache:", error);
    }
  };

  return {
    tracks,
    loading,
    fetchMore: () => fetchTracks(offset),
    clearCacheAndRefetch,
  };
};

export default useSpotifyTracks;
