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
import { useSpotifyAuth, useSpotifyTracks, useSearch } from "../../utils";
import { colors } from "../../assets/Themes/colors";
import images from "../../assets/Images/images";
import Song from "../../components/Song";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { getPlaylist } from "../../utils/apiOptions";

// Get the window width
const windowWidth = Dimensions.get("window").width;

const ActivityPlaylistScreen = () => {
  const { token, getSpotifyAuth } = useSpotifyAuth();
  const [playlistDetails, setPlaylistDetails] = useState({});
  const playlistId = "37i9dQZF1EIfMdgv54LYV9"; // Replace with your playlist ID
  const navigation = useNavigation();

  useEffect(() => {
    const fetchPlaylistDetails = async () => {
      if (token) {
        try {
          const details = await getPlaylist(playlistId, token);
          console.log("Playlist Details:", details.externalUrl); // Log the fetched playlist details
          setPlaylistDetails(details);

          // Navigate with playlist details
          navigation.navigate("PlaylistDetails", {
            url: details.externalUrl,
          });
        } catch (error) {
          console.error("Error fetching playlist details:", error);
        }
      }
    };

    fetchPlaylistDetails();
  }, [token, playlistId, navigation]);

  // Function to handle button press
  const handleButtonPress = () => {
    if (!token) {
      getSpotifyAuth(); // Authenticate if user is not authenticated
    }
  };

  const SpotifyAuthOrRefreshButton = () => (
    <Pressable
      style={[styles.button, !token && styles.disabledButton]}
      onPress={handleButtonPress}
    >
      {!token && (
        <Image
          source={images.spotify}
          style={[styles.spotifyIcon, !token && styles.disabledIcon]}
        />
      )}
    </Pressable>
  );

  const navigateToExternalUrl = (url) => {
    if (url) {
      navigation.navigate("WebViewScreen", { url }); // Replace 'WebViewScreen' with your web view screen name
    }
  };

  const renderPlaylistItem = ({ item }) => {
    if (item && item.track) {
      console.log("Track Item:", item); // Log each track item
      const externalUrl = item.track.external_urls.spotify; // Assuming this is the correct path
      console.log("External URL:", externalUrl); // Log the external URL

      return (
        <Pressable onPress={() => navigateToExternalUrl(externalUrl)}>
          <View style={styles.songItem}>
            <Text style={styles.songTitle}>{item.track.name}</Text>
            {/* Additional song details */}
          </View>
        </Pressable>
      );
    } else {
      console.log("Invalid track item:", item); // Log if the item or item.track is undefined
      return null; // Or a placeholder component
    }
  };

  let contentDisplayed = (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Playlist</Text>
      </View>

      <SpotifyAuthOrRefreshButton />

      <FlatList
        data={playlistDetails?.tracks?.items || []}
        renderItem={renderPlaylistItem}
        keyExtractor={(item, index) => item?.track?.id || index.toString()}
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

export default ActivityPlaylistScreen;
