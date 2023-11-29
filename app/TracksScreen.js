import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  spotifyStylesheet,
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
import {spotifyStyles} from "../assets/Themes/spotify_style";
import {styles} from "../assets/Themes/default_style";

// Get the window width
const windowWidth = Dimensions.get("window").width;

const TracksScreen = ({ navigation }) => {
  const { token, getSpotifyAuth } = useSpotifyAuth();
  const { tracks, currentTrack, loading, fetchMore, clearCacheAndRefetch } =
    useSpotifyTracks(token);
  const { search, setSearch, searchedSongs, debouncedSearchSongs } =
    useSearch(token);

  const SpotifyAuthButton = () => (
    <Pressable style={spotifyStyles.button} onPress={getSpotifyAuth}>
      <Image source={images.spotify} style={spotifyStyles.spotifyIcon} />
      <Text style={spotifyStyles.buttonText}>CONNECT WITH SPOTIFY</Text>
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
      <View style={spotifyStyles.currentTrackContainer}>
        <Text style={spotifyStyles.currentTrackTitle}>Now Playing:</Text>
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
    <Pressable style={spotifyStyles.clearButton} onPress={onPress}>
      <Text style={spotifyStyles.clearButtonText}>Refresh</Text>
    </Pressable>
  );

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={spotifyStyles.container}>
        {token ? (
          <>
            <View style={spotifyStyles.header}>
              <Image source={images.spotify} style={spotifyStyles.logo} />
              <Text style={spotifyStyles.headerTitle}>My Recent Tracks</Text>
            </View>

            {/* Render the currently playing track */}
            <View style={spotifyStyles.header}>
              <Text style={spotifyStyles.headerTitle}>Currently Playing</Text>
            </View>
            {renderCurrentTrack()}

            {/* Search bar for authenticated users */}
            <View style={spotifyStyles.searchContainer}>
              <TextInput
                style={spotifyStyles.searchInput}
                placeholder="Search"
                value={search}
                onChangeText={(text) => debouncedSearchSongs(text)}
              />
            </View>

            <SpotifyAuthButton />
            <ClearCacheButton onPress={clearCacheAndRefetch} />

            {/* Recently Played Tracks */}
            <View style={spotifyStyles.header}>
              <Text style={spotifyStyles.headerTitle}>Recently Played</Text>
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
            <View style={spotifyStyles.searchContainer}>
              <TextInput
                style={spotifyStyles.searchInput}
                placeholder="Search"
                value={search}
                onChangeText={(text) => debouncedSearchSongs(text)}
              />
            </View>

            <SpotifyAuthButton />
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("ThemeQScreen")} // Updated route name
            >
              <Text style={styles.buttonText}>Theme Questions</Text>
            </Pressable>
          </>
        )}
      </SafeAreaView>
    </>
  );
};


export default TracksScreen;
