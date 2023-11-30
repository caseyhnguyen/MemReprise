import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import { styles as defaultStyles } from "../assets/Themes/default_style";

const windowWidth = Dimensions.get("window").width;

const FeedScreen = ({ route, navigation }) => {
  // Extract songData from route.params, it can be undefined
  const { songData } = route.params || {};

  // Optional: Function to render song details
  const renderSongDetails = () => {
    if (!songData) return null;

    const artistNames =
      typeof songData.artists === "string"
        ? songData.artists
        : "Unknown Artist";

    return (
      <View style={styles.songContainer}>
        <Image source={{ uri: songData.imageUrl }} style={styles.albumCover} />
        <Text style={styles.title}>{songData.title}</Text>
        <Text style={styles.artist}>{artistNames}</Text>
        {/* other song details */}
      </View>
    );
  };

  return (
    <SafeAreaView style={defaultStyles.container}>
      {renderSongDetails()}
      <Text>Feed</Text>

      <Pressable
        style={defaultStyles.button}
        onPress={() => navigation.navigate("DiscoverScreen")}
      >
        <Text style={defaultStyles.buttonText}>
          Jump to Discover (Testing Purposes)
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  songContainer: {
    width: windowWidth,
    height: 200, // Adjust height as needed
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  albumCover: {
    width: 120, // Adjust size as needed
    height: 120, // Adjust size as needed
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black", // Adjust color as needed
    marginTop: 10,
  },
  artist: {
    fontSize: 16,
    color: "grey", // Adjust color as needed
    marginTop: 5,
  },
});

export default FeedScreen;
