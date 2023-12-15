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
          width={windowWidth - 40}
          height={7}
          borderRadius={3.5}
          color={colors.verdigrisGreen}
          unfilledColor={colors.offWhite75}
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
    backgroundColor: colors.offWhite75,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 10,
    width: windowWidth * 0.95,
    height: windowWidth * 0.35,
    shadowColor: colors.darkGray,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
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
    width: 80,
    height: 80,
    marginRight: 15,
  },
  albumName: {
    color: colors.darkGray,
    flex: 3,
    fontSize: 16,
    marginRight: 10,
  },
  artistText: {
    color: colors.darkGray,
    fontSize: 16,
    marginTop: 2,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 2,
  },
  progressWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  progressTime: {
    fontSize: 14,
    color: colors.darkGray,
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
