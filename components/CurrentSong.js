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
import ProgressBar from "react-native-progress/Bar";
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
  progressFraction,
  progressMs,
  userName,
}) => {
  const navigation = useNavigation();

  const onSongPress = () => {
    navigation.navigate("Share a Music Box", {
      selectedSong: {
        title,
        artists: Array.isArray(artists) ? artists : [artists],
        albumName,
        imageUrl,
        duration,
        previewUrl,
        externalUrl,
      },
      userName,
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
          width={windowWidth - 60}
          height={7}
          borderRadius={3.5}
          color={colors.blue}
          unfilledColor={colors.midGray}
          borderWidth={0}
          useNativeDriver={true}
          style={styles.progressBar}
        />
        {/* <Text style={styles.progressTime}>{formatTime(progressMs)}</Text>
        <Text style={styles.durationTime}>{formatTime(duration)}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: colors.darkGray,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 10,
    width: windowWidth * 0.95,
    height: windowWidth * 0.35,
    color: colors.white,
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
    color: colors.white,
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 15,
    borderRadius: 200,
  },
  albumName: {
    color: colors.white,
    flex: 3,
    fontSize: 16,
    marginRight: 10,
  },
  artistText: {
    color: colors.white,
    fontSize: 16,
    marginTop: 2,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 2,
    color: colors.white,
  },
  progressWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 18,
  },
  progressTime: {
    fontSize: 14,
    color: colors.white,
    position: "absolute",
    left: 10,
    bottom: -20,
  },
  durationTime: {
    fontSize: 14,
    color: colors.darkGray,
    position: "absolute",
    right: 10,
    bottom: -20,
  },
});

export default CurrentSong;
