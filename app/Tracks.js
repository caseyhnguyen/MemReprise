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
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useSpotifyAuth, useSpotifyTracks, useSearch } from "../utils";
import { colors } from "../assets/Themes/colors";
import images from "../assets/Images/images";
import Song from "../components/Song";
import Track from "../components/Track";
import CurrentSong from "../components/CurrentSong";
import { StatusBar } from "expo-status-bar";
import PillPressable from "../components/PillPressable";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import ShareMusicBox from "./complexTask/ShareMusicBox";
import MusicBox from "../components/MusicBox";

// Get the window width
const windowWidth = Dimensions.get("window").width;

const TracksScreen = ({ route, navigation }) => {
  const userName = route.params?.userName;
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
    <PillPressable
      // style={[styles.button, isLoading && styles.disabledButton]}
      onPress={handleButtonPress}
      disabled={isLoading}
      token={token}
      isSpotify={true}
    />
  );

  // Function to render the current track with progress bar
  const renderCurrentTrack = () => {
    console.log(currentTrack);
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
        <Header2 text="Now playing" />
        <MusicBox
          onPress={() => navigation.navigate("Share a Music Box")}
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
          userName={userName}
        />
        <CurrentSong
          onPress={() => navigation.navigate("Share a Music Box")}
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
          userName={userName}
        />
      </View>
    );
  };

  const limitedTracks = tracks.slice(0, 10);
  // console.log(limitedTracks);

  const renderSong = ({ item, index }) => {
    return (
      <Track
        index={index}
        title={item.songTitle || "Unknown Title"}
        artists={item.songArtists || ["Unknown Artist"]}
        albumName={item.albumName || "Unknown Album"}
        imageUrl={item.imageUrl || "Unknown Image"}
        duration={item.duration || 0}
        previewUrl={item.previewUrl || ""}
        externalUrl={item.externalUrl || ""}
        played_at={item.played_at || ""}
        userName={userName}
      />
    );
  };

  const renderSearchSong = ({ item, index }) => {
    return (
      <Track
        index={index}
        title={item.name || "Unknown Title"}
        artists={item.artists.map((artist) => artist.name)}
        albumName={item.album.name || "Unknown Album"}
        imageUrl={item.album.images[0].url}
        duration={item.duration_ms || 0}
        previewUrl={item.previewUrl || ""}
        externalUrl={item.externalUrl || ""}
        userName={userName}
      />
    );
  };

  let contentDisplayed = (
    <>
      <View style={styles.header}>
        <Header2 text="Search for a song" />
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={search}
          onChangeText={(text) => debouncedSearchSongs(text)}
        />
      </View>

      {token && (
        <>
          {renderCurrentTrack()}
          <View style={styles.header}>
            <Header2 text="My recent tracks" />
          </View>
        </>
      )}

      <SpotifyAuthOrRefreshButton />

      <FlatList
        horizontal={false}
        data={search ? searchedSongs : limitedTracks}
        renderItem={search ? renderSearchSong : renderSong}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        ListFooterComponent={
          loading && <ActivityIndicator size="large" color={colors.white} />
        }
      />
    </>
  );

  return (
    <>
      <StatusBar
      // style="dark" 
      barStyle="light-content"/>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>{contentDisplayed}</SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    color: colors.white,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 50,
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
    fontSize: 15,
    paddingVertical: 11,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.offWhite75,
    borderRadius: 4,
    color: colors.black,
    backgroundColor: colors.offWhite75,
    margin: windowWidth * 0.005,
    fontWeight: "bold",
  },
});

export default TracksScreen;
