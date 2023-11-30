// CurrentSong.js
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
import ProgressBar from "react-native-progress/Bar";
import { colors } from "../assets/Themes/colors";

const windowWidth = Dimensions.get("window").width;

const CurrentSong = ({
  index,
  title,
  artists,
  albumName,
  imageUrl,
  duration,
  previewUrl,
  externalUrl,
  progressFraction,
  progressMs,
}) => {
  const navigation = useNavigation();

  const onSongPress = () => {
    navigation.navigate("Theme Question", {
      songData: {
        title,
        artists: Array.isArray(artists) ? artists : [artists],
        albumName,
        imageUrl,
        duration,
        previewUrl,
        externalUrl,
      },
    });
  };

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <View style={styles.outerContainer}>
      <TouchableOpacity style={styles.container} onPress={onSongPress}>
        <View style={styles.songInfo}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <View style={styles.titleAndArtist}>
            <Text style={styles.titleText} numberOfLines={1}>
              {title}
            </Text>
            <Text style={styles.artistText} numberOfLines={1}>
              {Array.isArray(artists) ? artists.join(", ") : artists}
            </Text>
          </View>
          {/* <Text style={styles.albumName} numberOfLines={1}>
            {albumName}
          </Text> */}
        </View>
      </TouchableOpacity>
      <View style={styles.progressWrapper}>
        <ProgressBar
          progress={progressFraction}
          width={windowWidth - 40} // Adjust padding as needed
          height={7}
          borderRadius={3.5}
          color={colors.spotify}
          unfilledColor="#D7D7D7"
          borderWidth={0}
          useNativeDriver={true}
          style={styles.progressBar}
        />
        <Text style={styles.progressTime}>{formatTime(progressMs)}</Text>
        <Text style={styles.durationTime}>{formatTime(duration)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: "#F3F3F3",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 10,
    width: windowWidth * 0.95,
    height: windowWidth * 0.32, // Increased height
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  songInfo: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "95%",
    alignItems: "center",
  },
  titleAndArtist: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginRight: 10,
    width: "75%",
  },
  image: {
    width: 80, // Increased size
    height: 80, // Increased size
    marginRight: 15,
  },
  albumName: {
    color: colors.black,
    flex: 3,
    fontSize: 16, // Increased font size
    marginRight: 10,
  },
  artistText: {
    color: colors.black,
    fontSize: 16, // Increased font size
    marginTop: 2,
  },
  titleText: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: 16, // Increased font size
    marginBottom: 2,
  },
  progressWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 10, // Add some space above the progress bar
  },
  progressBar: {
    width: "100%", // Subtract the space for progressTime and durationTime
    height: 7,
    borderRadius: 3.5,
    color: colors.spotify,
    unfilledColor: "#D7D7D7",
    borderWidth: 0,
  },
  progressTime: {
    fontSize: 14,
    color: colors.black,
    position: "absolute",
    left: 10, // Align with the left edge of progressWrapper
    bottom: -20, // Place below the progress bar
  },
  durationTime: {
    fontSize: 14,
    color: colors.black,
    position: "absolute",
    right: 10, // Align with the right edge of progressWrapper
    bottom: -20, // Place below the progress bar
  },
});

export default CurrentSong;
