import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // make sure to install this package

import millisToMinuteSeconds from "../utils/millisToMinutesAndSeconds.js";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../assets/Themes/colors";

const windowWidth = Dimensions.get("window").width;

const CurrentSong = ({
  title,
  artists,
  albumName,
  imageUrl,
  duration,
  previewUrl,
  externalUrl,
}) => {
  const navigation = useNavigation(); // Hook to handle navigation

  // Function to handle press on the entire song row
  const onSongPress = () => {
    // Navigate to ThemeQScreen with parameters if needed
    navigation.navigate("ThemeQScreen", { previewUrl, externalUrl });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onSongPress}>
      <View style={styles.buttonContainer}>
        <Ionicons
          name="play-circle"
          size={32}
          color={colors.spotify}
          style={styles.playButton}
        />
      </View>
      <View style={styles.songInfo}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.titleAndArtist}>
          <Text style={styles.titleText} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.artistText} numberOfLines={1}>
            {artists.join(", ")}
          </Text>
        </View>
        <Text style={styles.albumName} numberOfLines={1}>
          {albumName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    minWidth: windowWidth * 0.95,
    maxWidth: windowWidth * 0.95,
    paddingBottom: 10,
  },
  buttonContainer: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    marginRight: 5,
  },
  songInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "88%",
    alignItems: "center",
  },
  titleAndArtist: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginRight: 10,
    width: "36%",
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  playButton: {
    marginRight: 3,
    color: colors.spotify,
    alignItems: "center",
  },
  albumName: {
    color: "white",
    flex: 3,
    fontSize: 14,
    marginRight: 10,
    width: windowWidth * 0.15,
  },
  artistText: {
    color: colors.gray,
    fontSize: 14,
    marginTop: 2,
  },
  titleText: {
    color: colors.white,
    fontSize: 14,
    marginBottom: 2,
  },
});

export default CurrentSong;
