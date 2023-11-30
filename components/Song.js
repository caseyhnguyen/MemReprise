import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import millisToMinuteSeconds from "../utils/millisToMinutesAndSeconds.js";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../assets/Themes/colors";

const windowWidth = Dimensions.get("window").width;

const Song = ({
  title,
  artists,
  albumName,
  imageUrl,
  duration,
  previewUrl,
  externalUrl,
}) => {
  const navigation = useNavigation();

  // Check if artists is an array and convert it to a string
  const artistNames = Array.isArray(artists) ? artists.join(", ") : artists;

  const onSongPress = () => {
    navigation.navigate("ThemeQScreen", {
      songData: {
        title,
        artists,
        albumName,
        imageUrl,
        duration,
        previewUrl,
        externalUrl,
      },
    });
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
            {artistNames}
          </Text>
        </View>
        <Text style={styles.albumName} numberOfLines={1}>
          {albumName}
        </Text>
        <Text style={styles.durationText}>
          {millisToMinuteSeconds(duration)}
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
  durationText: {
    color: colors.gray,
    fontSize: 14,
    paddingLeft: 5,
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

export default Song;
