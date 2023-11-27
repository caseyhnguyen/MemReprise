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
import { useSpotifyAuth, useSpotifyTracks, useSearch } from "../utils";
import { colors } from "../assets/Themes/colors";
import images from "../assets/Images/images";
import Song from "./Song";
import { StatusBar } from "expo-status-bar";

// Get the window width
const windowWidth = Dimensions.get("window").width;

const TracksScreen = ({ navigation }) => {
  const { token, getSpotifyAuth } = useSpotifyAuth();
  const { tracks, currentTrack, loading, fetchMore, clearCacheAndRefetch } =
    useSpotifyTracks(token);
  const { search, setSearch, searchedSongs, debouncedSearchSongs } =
    useSearch(token);

  const SpotifyAuthButton = () => (
    <Pressable style={styles.button} onPress={getSpotifyAuth}>
      <Image source={images.spotify} style={styles.spotifyIcon} />
      <Text style={styles.buttonText}>CONNECT WITH SPOTIFY</Text>
    </Pressable>
  );

  // Function to render the current track
  const renderCurrentTrack = () => {
    if (!currentTrack) return null; // Do not render if there is no current track

    console.log("Props being passed to Song component:", {
      title: currentTrack.songTitle,
      artists: currentTrack.songArtists,
      albumName: currentTrack.albumName,
      imageUrl: currentTrack.imageUrl,
      duration: currentTrack.duration,
      previewUrl: currentTrack.previewUrl,
      externalUrl: currentTrack.externalUrl,
    });

    return (
      <View style={styles.currentTrackContainer}>
        <Text style={styles.currentTrackTitle}>Now Playing:</Text>
        <Song
          title={currentTrack.songTitle}
          artists={currentTrack.songArtists}
          albumName={currentTrack.albumName}
          imageUrl={currentTrack.imageUrl}
          duration={currentTrack.duration}
          previewUrl={currentTrack.previewUrl}
          externalUrl={currentTrack.externalUrl}
        />
      </View>
    );
  };

  const renderSong = ({ item }) => {
    // Log the entire item to the console
    console.log("renderSong item:", item);

    // Use properties directly from the item, as they've been formatted already
    return (
      <Song
        title={item.songTitle || "Unknown Title"}
        artists={
          Array.isArray(item.songArtists)
            ? item.songArtists.map((artist) => artist.name)
            : ["Unknown Artist"] // Fallback to an array with a single string if item.songArtists is not an array
        }
        albumName={item.albumName || "Unknown Album"}
        imageUrl={item.imageUrl || "https://example.com/default-image.png"} // Replace with a valid URL for default image
        duration={item.duration || 0}
        previewUrl={item.previewUrl || ""}
        externalUrl={item.externalUrl || ""}
      />
    );
  };

  const renderSearchSong = ({ item }) => {
    // Log the entire item to the console
    console.log("renderSearchSong item:", item);

    return (
      <Song
        // index={index}
        title={item.name || "Unknown Title"}
        artists={item.artists.map((artist) => artist.name)}
        albumName={item.album.name || "Unknown Album"}
        imageUrl={item.album.images[0].url}
        duration={item.duration_ms || 0}
        previewUrl={item.previewUrl || ""}
        externalUrl={item.externalUrl || ""}
      />
    );
  };

  // Clear Cache Button
  const ClearCacheButton = ({ onPress }) => (
    <Pressable style={styles.clearButton} onPress={onPress}>
      <Text style={styles.clearButtonText}>Refresh</Text>
    </Pressable>
  );

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        {token ? (
          <>
            <View style={styles.header}>
              <Image source={images.spotify} style={styles.logo} />
              <Text style={styles.headerTitle}>My Recent Tracks</Text>
            </View>

            {/* Render the currently playing track */}
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Currently Playing</Text>
            </View>
            {renderCurrentTrack()}

            {/* Search bar for authenticated users */}
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search"
                value={search}
                onChangeText={(text) => debouncedSearchSongs(text)}
              />
            </View>

            <SpotifyAuthButton />
            <ClearCacheButton onPress={clearCacheAndRefetch} />

            {/* Recently Played Tracks */}
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Recently Played</Text>
            </View>
            <FlatList
              data={search ? searchedSongs : tracks}
              renderItem={search ? renderSearchSong : renderSong}
              keyExtractor={(item, index) =>
                item.id?.toString() || index.toString()
              }
              onEndReached={fetchMore}
              onEndReachedThreshold={0.5}
              ListFooterComponent={
                loading && (
                  <ActivityIndicator size="large" color={colors.white} />
                )
              }
            />
          </>
        ) : (
          <>
            {/* Search bar for unauthenticated users */}
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search"
                value={search}
                onChangeText={(text) => debouncedSearchSongs(text)}
              />
            </View>

            <SpotifyAuthButton />
          </>
        )}
      </SafeAreaView>
    </>
  );
};

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
  currentTrackContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.background, // example background color
  },
  currentTrackTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
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

  clearButton: {
    marginBottom: 10,
  },
  clearButtonText: {
    color: colors.spotify,
    textAlign: "center",
    fontSize: 16,
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
});

export default TracksScreen;
