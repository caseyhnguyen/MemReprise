// Song.js
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
  index,
  title,
  artists,
  albumName,
  imageUrl,
  duration,
  previewUrl,
  externalUrl,
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

  return (
    <View style={styles.outerContainer}>
      <TouchableOpacity style={styles.container} onPress={onSongPress}>
        <View style={styles.songInfo}>
          <Text style={styles.index}>{index + 1}</Text>
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
          <Text style={styles.durationText}>
            {millisToMinuteSeconds(duration)}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: colors.offWhite50,
    // opacity: 0.75,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
    // marginHorizontal: 5,
    marginBottom: 10, // Spacing between each song item
    width: windowWidth * 0.95,
    height: windowWidth * 0.2,
    shadowColor: colors.darkGray,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: windowWidth * 0.9,
  },
  buttonContainer: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    marginRight: 5,
  },
  index: {
    color: colors.darkGray,
    fontSize: 14,
    width: "8%",
    textAlign: "center",
  },
  songInfo: {
    flexDirection: "row",
    justifyContent: "left",
    width: "95%",
    alignItems: "center",
  },
  titleAndArtist: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginRight: 20,
    width: "60%",
  },
  image: {
    width: 65,
    height: 65,
    marginRight: 15,
  },
  // playButton: {
  //   marginRight: 3,
  //   color: colors.spotify,
  //   alignItems: "center",
  // },
  albumName: {
    color: colors.darkGray,
    flex: 3,
    fontSize: 14,
    marginRight: 10,
    width: windowWidth * 0.15,
  },
  durationText: {
    color: colors.darkGray,
    fontSize: 14,
    paddingLeft: 5,
  },
  artistText: {
    color: colors.darkGray,
    fontSize: 14,
    marginTop: 2,
  },
  titleText: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 2,
  },
});

export default Song;
