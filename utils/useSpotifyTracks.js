import { useState, useEffect, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import getEnv from "./env";
import { getMyRecentTracks, getMyCurrentTrack } from "./apiOptions";

const { ALBUM_ID } = getEnv();

const useSpotifyTracks = (token) => {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const timeoutToClear = useRef(null);
  const intervalToClear = useRef(null);

  const fetchCurrentTrack = async () => {
    try {
      const fetchedCurrentTrack = await getMyCurrentTrack(token);
      setCurrentTrack(fetchedCurrentTrack);
    } catch (error) {
      console.error("Failed to fetch current track:", error);
    }
  };

  const debounce = (callback, alwaysCall, ms) => {
    return (...args) => {
      alwaysCall(...args);
      clearTimeout(timeoutToClear.current);
      timeoutToClear.current = setTimeout(() => {
        callback(...args);
      }, ms);
    };
  };

  // Helper function to fetch tracks
  const fetchTracks = async (offset) => {
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
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetchTracks = debounce(fetchTracks, () => {}, 300);

  useEffect(() => {
    if (!token) {
      setTracks([]);
      setCurrentTrack(null);
      return;
    }

    AsyncStorage.getItem("@SpotifyTracks")
      .then((storedTracks) => {
        if (storedTracks) {
          setTracks(JSON.parse(storedTracks));
        } else {
          debouncedFetchTracks(0);
        }
      })
      .catch((error) => console.error("Failed to load tracks:", error));

    // Fetch current track immediately
    fetchCurrentTrack();

    // Fetch recent tracks immediately
    debouncedFetchTracks(0);

    // Set an interval to fetch the current track after initial fetch
    intervalToClear.current = setInterval(fetchCurrentTrack, 5000); // Fetch every 5 seconds

    return () => {
      clearInterval(intervalToClear.current);
    };
  }, [token]);

  const clearCacheAndRefetch = async () => {
    try {
      await AsyncStorage.removeItem("@SpotifyTracks");
      console.log("Cache cleared.");
      setTracks([]);
      debouncedFetchTracks(0); // Fetch tracks again
    } catch (error) {
      console.error("Failed to clear cache:", error);
    }
  };

  return {
    tracks,
    currentTrack,
    loading,
    fetchMore: () => debouncedFetchTracks(offset),
    clearCacheAndRefetch,
  };
};

export default useSpotifyTracks;
