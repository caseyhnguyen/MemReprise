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
import ProgressBar from "react-native-progress/Bar";

// Get the window width
const windowWidth = Dimensions.get("window").width;

const TracksScreen = ({ navigation }) => {
  const { token, getSpotifyAuth } = useSpotifyAuth();
  const { tracks, currentTrack, loading, fetchMore, clearCacheAndRefetch } =
    useSpotifyTracks(token);
  const { search, setSearch, searchedSongs, debouncedSearchSongs } =
    useSearch(token);
  const [progress, setProgress] = useState(0);

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
    if (token) {
      clearCacheAndRefetch(); // Clear cache if user is authenticated
    } else {
      getSpotifyAuth(); // Authenticate if user is not authenticated
    }
  };

  const SpotifyAuthOrRefreshButton = () => (
    <Pressable style={styles.button} onPress={handleButtonPress}>
      <Image source={images.spotify} style={styles.spotifyIcon} />
      <Text style={styles.buttonText}>
        {token ? "REFRESH" : "GET RECENT SONGS FROM SPOTIFY"}
      </Text>
    </Pressable>
  );

  // Function to render the current track with progress bar
  const renderCurrentTrack = () => {
    if (!currentTrack) return null;

    const {
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
    const progressBarWidth = windowWidth - 40; // Adjust padding as needed
    const circleDiameter = 14;
    const circleOffset =
      progressFraction * progressBarWidth - circleDiameter / 2;

    return (
      <View style={styles.currentTrackContainer}>
        <Text style={styles.currentTrackTitle}>Now Playing:</Text>
        <CurrentSong
          onPress={() => navigation.navigate("ThemeQScreen", { songData })}
          title={songTitle}
          artists={songArtists}
          albumName={albumName}
          imageUrl={imageUrl}
          duration={duration}
          previewUrl={previewUrl}
          externalUrl={externalUrl}
        />
        <View style={styles.progressWrapper}>
          <ProgressBar
            progress={progressFraction}
            width={progressBarWidth}
            height={7}
            borderRadius={3.5}
            color={colors.spotify}
            unfilledColor="#D7D7D7"
            borderWidth={0}
            useNativeDriver={true}
            style={styles.progressBar}
          />
          <View style={[styles.progressCircle, { left: circleOffset }]} />
          <Text style={styles.progressTime}>{formatTime(progressMs)}</Text>
          <Text style={styles.durationTime}>{formatTime(duration)}</Text>
        </View>
      </View>
    );
  };

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const renderSong = ({ item }) => {
    // Use properties directly from the item, as they've been formatted already
    return (
      <Song
        onPress={() => navigation.navigate("ThemeQScreen", { songData })}
        title={item.songTitle || "Unknown Title"}
        artists={
          Array.isArray(item.songArtists)
            ? item.songArtists.map((artist) => artist.name)
            : ["Unknown Artist"]
        }
        albumName={item.albumName || "Unknown Album"}
        imageUrl={item.imageUrl || "https://example.com/default-image.png"}
        duration={item.duration || 0}
        previewUrl={item.previewUrl || ""}
        externalUrl={item.externalUrl || ""}
      />
    );
  };

  const renderSearchSong = ({ item }) => {
    return (
      <Song
        onPress={() => navigation.navigate("ThemeQScreen")}
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

      <SpotifyAuthOrRefreshButton />

      {token && (
        <>
          {renderCurrentTrack()}
          <View style={styles.header}>
            <Image source={images.spotify} style={styles.logo} />
            <Text style={styles.headerTitle}>My Recent Tracks</Text>
          </View>
        </>
      )}

      <FlatList
        data={search ? searchedSongs : tracks}
        renderItem={search ? renderSearchSong : renderSong}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        onEndReached={fetchMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading && <ActivityIndicator size="large" color={colors.white} />
        }
      />
    </>
  );

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>{contentDisplayed}</SafeAreaView>
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
    alignItems: "center",
    backgroundColor: colors.background, // example background color
  },
  currentTrackTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.white,
    marginBottom: 5,
  },
  progressWrapper: {
    position: "relative",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  progressBar: {
    // Style for your progress bar
  },
  progressCircle: {
    position: "absolute",
    top: -3.5, // Half of the circle's diameter to position it centered vertically
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.spotify,
    borderColor: colors.white,
    borderWidth: 2,
  },
  progressTime: {
    position: "absolute",
    bottom: -20, // Adjust as needed
    left: 0,
    fontSize: 14,
    color: colors.gray,
  },
  durationTime: {
    position: "absolute",
    bottom: -20, // Adjust as needed
    right: 0,
    fontSize: 14,
    color: colors.gray,
  },
  headerTitle: {
    fontSize: 24,
    color: colors.white,
    fontWeight: "bold",
    paddingBottom: 10,
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
