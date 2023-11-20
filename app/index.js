import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  Text,
  Pressable,
  Image,
  FlatList,
  View,
  Dimensions,
  TextInput,
} from "react-native";
import { useSpotifyAuth, useSpotifyTracks } from "../utils";
import { colors } from "../assets/Themes/colors";
import images from "../assets/Images/images";
import Song from "./Song";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

// Get the window width
const windowWidth = Dimensions.get("window").width;

export default function App() {
  const { token, getSpotifyAuth } = useSpotifyAuth();
  const { tracks, loading, fetchMore, clearCacheAndRefetch } =
    useSpotifyTracks(token);
  const [search, setSearch] = useState("");
  const [searchedSongs, setSearchedSongs] = useState([]);
  const [timeoutToClear, setTimeoutToClear] = useState();

  const fakeDelay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    return () => {
      clearTimeout(timeoutToClear);
    };
  }, []);

  const debounce = (callback, alwaysCall, ms) => {
    return (...args) => {
      alwaysCall(...args);
      clearTimeout(timeoutToClear);
      setTimeoutToClear(
        setTimeout(() => {
          callback(...args);
        }, ms)
      );
    };
  };

  const setSearchTextAlways = (text) => {
    setSearch(text);
  };

  const SPOTIFY_SEARCH_ENDPOINT = "https://api.spotify.com/v1/search";

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
      // If the search text is empty or only whitespace, don't attempt a search
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

  const debouncedSearchSongs = debounce(searchSongs, setSearchTextAlways, 500);

  const SpotifyAuthButton = () => (
    <Pressable style={styles.button} onPress={getSpotifyAuth}>
      <Image source={images.spotify} style={styles.spotifyIcon} />
      <Text style={styles.buttonText}>CONNECT WITH SPOTIFY</Text>
    </Pressable>
  );

  const renderSong = ({ item }) => {
    // Log the entire item to the console
    console.log("renderSong item:", item);

    return (
      <Song
        // index={index}
        title={item.songTitle}
        artists={item.songArtists.map((artist) => artist.name)}
        albumName={item.albumName}
        imageUrl={item.imageUrl}
        duration={item.duration}
        previewUrl={item.previewUrl}
        externalUrl={item.externalUrl}
      />
    );
  };

  const renderSearchSong = ({ item }) => {
    // Log the entire item to the console
    console.log("renderSearchSong item:", item);

    return (
      <Song
        // index={index}
        title={item.name}
        artists={item.artists.map((artist) => artist.name)}
        albumName={item.album.name}
        imageUrl={item.album.images[0].url}
        duration={item.duration_ms}
        previewUrl={item.previewUrl}
        externalUrl={item.externalUrl}
      />
    );
  };

  // Clear Cache Button
  const ClearCacheButton = ({ onPress }) => (
    <Pressable style={styles.clearButton} onPress={onPress}>
      <Text style={styles.clearButtonText}>Clear Cache</Text>
    </Pressable>
  );

  let contentDisplayed;
  if (token) {
    contentDisplayed = (
      <>
        <View style={styles.header}>
          <Image source={images.spotify} style={styles.logo} />
          <Text style={styles.headerTitle}>My Top Tracks</Text>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={search}
            onChangeText={(text) => debouncedSearchSongs(text)}
          />
        </View>

        <ClearCacheButton onPress={clearCacheAndRefetch} />

        {/* Check if 'search' is not empty to decide which FlatList to render */}
        {search ? (
          <FlatList
            data={searchedSongs}
            renderItem={renderSearchSong}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <FlatList
            data={tracks}
            renderItem={renderSong}
            keyExtractor={(item) => item.id?.toString()}
            onEndReached={fetchMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
              loading && <ActivityIndicator size="large" color={colors.white} />
            }
          />
        )}
        <StatusBar style="light" />
      </>
    );
  } else {
    contentDisplayed = <SpotifyAuthButton />;
  }

  return (
    <>
      <StatusBar style="light" />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <SafeAreaView style={styles.container}>{contentDisplayed}</SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 24,
    color: colors.white,
    fontWeight: "bold",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.spotify,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50%",
    margin: 2,
  },
  spotifyIcon: {
    marginRight: 10,
    width: 24,
    height: 24,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    paddingVertical: 10,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: colors.white,
    color: colors.black,
    borderRadius: 5,
  },
  clearButton: {
    marginBottom: 10,
  },
  clearButtonText: {
    color: colors.spotify,
    textAlign: "center",
    fontSize: 16,
  },
});
=======
import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  Text,
  Pressable,
  Image,
  FlatList,
  View,
  Dimensions,
  TextInput,
} from "react-native";
import { useSpotifyAuth, useSpotifyTracks } from "../utils";
import { colors } from "../assets/Themes/colors";
import images from "../assets/Images/images";
import Song from "./Song";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

// Get the window width
const windowWidth = Dimensions.get("window").width;

export default function App() {
  const { token, getSpotifyAuth } = useSpotifyAuth();
  const { tracks, loading, fetchMore, clearCacheAndRefetch } =
    useSpotifyTracks(token);
  const [search, setSearch] = useState("");
  const [searchedSongs, setSearchedSongs] = useState([]);
  const [timeoutToClear, setTimeoutToClear] = useState();

  const fakeDelay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    return () => {
      clearTimeout(timeoutToClear);
    };
  }, []);

  const debounce = (callback, alwaysCall, ms) => {
    return (...args) => {
      alwaysCall(...args);
      clearTimeout(timeoutToClear);
      setTimeoutToClear(
        setTimeout(() => {
          callback(...args);
        }, ms)
      );
    };
  };

  const setSearchTextAlways = (text) => {
    setSearch(text);
  };

  const SPOTIFY_SEARCH_ENDPOINT = "https://api.spotify.com/v1/search";

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
      // If the search text is empty or only whitespace, don't attempt a search
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

  const debouncedSearchSongs = debounce(searchSongs, setSearchTextAlways, 500);

  const SpotifyAuthButton = () => (
    <Pressable style={styles.button} onPress={getSpotifyAuth}>
      <Image source={images.spotify} style={styles.spotifyIcon} />
      <Text style={styles.buttonText}>CONNECT WITH SPOTIFY</Text>
    </Pressable>
  );

  const renderSong = ({ item }) => {
    // Log the entire item to the console
    console.log("renderSong item:", item);

    return (
      <Song
        // index={index}
        title={item.songTitle}
        artists={item.songArtists.map((artist) => artist.name)}
        albumName={item.albumName}
        imageUrl={item.imageUrl}
        duration={item.duration}
        previewUrl={item.previewUrl}
        externalUrl={item.externalUrl}
      />
    );
  };

  const renderSearchSong = ({ item }) => {
    // Log the entire item to the console
    console.log("renderSearchSong item:", item);

    return (
      <Song
        // index={index}
        title={item.name}
        artists={item.artists.map((artist) => artist.name)}
        albumName={item.album.name}
        imageUrl={item.album.images[0].url}
        duration={item.duration_ms}
        previewUrl={item.previewUrl}
        externalUrl={item.externalUrl}
      />
    );
  };

  // Clear Cache Button
  const ClearCacheButton = ({ onPress }) => (
    <Pressable style={styles.clearButton} onPress={onPress}>
      <Text style={styles.clearButtonText}>Clear Cache</Text>
    </Pressable>
  );

  let contentDisplayed;
  if (token) {
    contentDisplayed = (
      <>
        <View style={styles.header}>
          <Image source={images.spotify} style={styles.logo} />
          <Text style={styles.headerTitle}>My Top Tracks</Text>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={search}
            onChangeText={(text) => debouncedSearchSongs(text)}
          />
        </View>

        <ClearCacheButton onPress={clearCacheAndRefetch} />

        {/* Check if 'search' is not empty to decide which FlatList to render */}
        {search ? (
          <FlatList
            data={searchedSongs}
            renderItem={renderSearchSong}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <FlatList
            data={tracks}
            renderItem={renderSong}
            keyExtractor={(item) => item.id?.toString()}
            onEndReached={fetchMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
              loading && <ActivityIndicator size="large" color={colors.white} />
            }
          />
        )}
        <StatusBar style="light" />
      </>
    );
  } else {
    contentDisplayed = <SpotifyAuthButton />;
  }

  return (
    <>
      <StatusBar style="light" />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <SafeAreaView style={styles.container}>{contentDisplayed}</SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 24,
    color: colors.white,
    fontWeight: "bold",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.spotify,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50%",
    margin: 2,
  },
  spotifyIcon: {
    marginRight: 10,
    width: 24,
    height: 24,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    paddingVertical: 10,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: colors.white,
    color: colors.black,
    borderRadius: 5,
  },
  clearButton: {
    marginBottom: 10,
  },
  clearButtonText: {
    color: colors.spotify,
    textAlign: "center",
    fontSize: 16,
  },
});