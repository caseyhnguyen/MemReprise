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
import Song from "../components/Song";
import CurrentSong from "../components/CurrentSong";
import { StatusBar } from "expo-status-bar";

// Get the window width
const windowWidth = Dimensions.get("window").width;

const TracksScreen = ({ navigation }) => {
  const { token, getSpotifyAuth } = useSpotifyAuth();
  const { tracks, currentTrack, loading, fetchMore, clearCacheAndRefetch } =
    useSpotifyTracks(token);
  const { search, setSearch, searchedSongs, debouncedSearchSongs } =
    useSearch(token);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let interval;

    if (currentTrack && currentTrack.isPlaying) {
      interval = setInterval(() => {
        // Update the progress
        const newProgress = currentTrack.progressMs / currentTrack.duration;
        setProgress(newProgress);

        // Increment the progressMs for the next interval
        currentTrack.progressMs += 1000; // increment by 1 second
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [currentTrack]);

  // Function to handle button press
  const handleButtonPress = () => {
    if (isLoading) return;

    setIsLoading(true);
    if (token) {
      clearCacheAndRefetch(); // Clear cache if user is authenticated
    } else {
      getSpotifyAuth(); // Authenticate if user is not authenticated
    }
    setIsLoading(false);
  };

  const SpotifyAuthOrRefreshButton = () => (
    <Pressable
      style={[styles.button, isLoading && styles.disabledButton]}
      onPress={handleButtonPress}
      disabled={isLoading}
    >
      {!token && (
        <Image
          source={images.spotify}
          style={[styles.spotifyIcon, isLoading && styles.disabledIcon]}
        />
      )}
      <Text style={styles.buttonText}>
        {token ? "REFRESH" : "GET RECENT SONGS FROM SPOTIFY"}
      </Text>
    </Pressable>
  );

  // Function to render the current track with progress bar
  const renderCurrentTrack = () => {
    if (!currentTrack) return null;

    const {
      index,
      songTitle,
      songArtists,
      albumName,
      imageUrl,
      duration,
      previewUrl,
      externalUrl,
      progressMs,
    } = currentTrack;

    const progressFraction = progressMs / duration;

    return (
      <View style={styles.currentTrackContainer}>
        <Text style={styles.currentTrackTitle}>Now Playing</Text>
        <CurrentSong
          onPress={() => navigation.navigate("Theme Question", { songData })}
          index={index}
          title={songTitle}
          artists={songArtists}
          albumName={albumName}
          imageUrl={imageUrl}
          duration={duration}
          previewUrl={previewUrl}
          externalUrl={externalUrl}
          progressFraction={progressFraction}
          progressMs={progressMs}
        />
      </View>
    );
  };

  const limitedTracks = tracks.slice(0, 10);

  const renderSong = ({ item, index }) => {
    // console.log(item);
    return (
      <Song
        index={index}
        title={item.songTitle || "Unknown Title"}
        artists={item.songArtists || ["Unknown Artist"]}
        albumName={item.albumName || "Unknown Album"}
        imageUrl={item.imageUrl || "Unknown Image"}
        duration={item.duration || 0}
        previewUrl={item.previewUrl || ""}
        externalUrl={item.externalUrl || ""}
        played_at={item.played_at || ""}
      />
    );
  };

  const renderSearchSong = ({ item, index }) => {
    return (
      <Song
        index={index}
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

  let contentDisplayed = (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Search for your last song</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={search}
          onChangeText={(text) => debouncedSearchSongs(text)}
        />
      </View>

      {token && (
        <>
          {renderCurrentTrack()}
          <View style={styles.header}>
            <Text style={styles.subheaderTitle}>My Recent Tracks</Text>
          </View>
        </>
      )}

      <SpotifyAuthOrRefreshButton />

      <FlatList
        data={search ? searchedSongs : limitedTracks}
        renderItem={search ? renderSearchSong : renderSong}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        // Removed onEndReached and onEndReachedThreshold to remove infinite scroll
        // onEndReached={fetchMore}
        // onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading && <ActivityIndicator size="large" color={colors.white} />
        }
      />
    </>
  );

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.container}>{contentDisplayed}</SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: colors.background,
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  currentTrackContainer: {
    // marginTop: 0,
    marginBottom: 5,
    // padding: 5,
    borderRadius: 10,
    alignItems: "center",
    // backgroundColor: colors.background,
  },
  currentTrackTitle: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.white,
    marginBottom: 5,
  },
  headerTitle: {
    fontSize: 24,
    color: colors.white,
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 5,
  },
  subheaderTitle: {
    fontSize: 20,
    color: colors.white,
    fontWeight: "500",
    // marginBottom: 0,
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
    // height: windowWidth * 0.1,
    // width: windowWidth * 0.8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 5,
    marginBottom: 10,
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
    width: windowWidth * 0.95,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: colors.offWhite,
    color: colors.black,
    borderRadius: 10,
  },
});

export default TracksScreen;
