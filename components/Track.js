import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import millisToMinuteSeconds from "../utils/millisToMinutesAndSeconds.js";
import formatPlayedAt from "../utils/formatPlayedAt.js";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../assets/Themes/colors";
import { supabase } from "../utils/supabaseClient";

const windowWidth = Dimensions.get("window").width;

const Track = ({
  index,
  title,
  artists,
  albumName,
  imageUrl,
  duration,
  previewUrl,
  externalUrl,
  played_at,
  userName,
}) => {
  const navigation = useNavigation();

  const onSongPress = () => {
    // Assuming all the necessary track details are included in the component's props
    const selectedSongData = {
      index,
      title,
      artists: Array.isArray(artists) ? artists : [artists],
      albumName,
      imageUrl,
      duration,
      previewUrl,
      externalUrl,
      played_at,
      userName,
    };

    // Navigate to "Share a Music Box" with trackDetails
    // This assumes "Share a Music Box" is prepared to handle the trackDetails structure as provided
    // In your Tracks.js or similar component
    navigation.navigate("Share a Music Box", {
      selectedSong: selectedSongData,
    });
  };

  const cutoffTitle = 25;
  let songTitle = title;
  if (songTitle.length > cutoffTitle) {
    songTitle = songTitle.substring(0, cutoffTitle) + "...";
  }

  // const cutoffArtist = 27;
  // let songArtists = artists?.join(", ") || "Unknown Artist";
  // if (songArtists.length > cutoffArtist) {
  //   songArtists = songArtists.substring(0, cutoffArtist) + "...";
  // }

  return (
    <View style={styles.outerContainer}>
      <TouchableOpacity style={styles.container} onPress={onSongPress}>

        <View style={styles.songInfo}>
          {/* <Text style={styles.index}>{index + 1 ? `${index + 1}.` : ""}</Text> */}
          <ImageBackground source={{ uri: imageUrl }} style={styles.image} resizeMode="cover"  />

          <View style={styles.titleAndArtist}>
            <Text style={styles.titleText} numberOfLines={1}>
              {songTitle}
            </Text>
            <Text style={styles.artistText} numberOfLines={1}>
              {Array.isArray(artists) ? artists.join(", ") : artists}
            </Text>
          </View>
        </View>

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: colors.darkGray,
    color: colors.white,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 10,
    width: windowWidth * .95,
    // height: windowWidth * 0.2,
    height: "auto",
  },
  container: {
    flexDirection: "row",
    alignItems: "left",
    width: windowWidth * 0.9,
    height: "auto",
  },
  songInfo: {
    flexDirection: "row",
    justifyContent: "left",
    // width: "95%",
    alignItems: "center",
    flex: 1,
  },
  titleAndArtist: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    // marginRight: 20,
    // width: "60%",
  },
  image: {
    height: 75,
    width: 75,
    // flex: 1,
    justifyContent: 'center',
    marginRight: 15
  },
  artistText: {
    fontSize: 14,
    marginTop: 2,
    color: colors.white,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 2,
    color: colors.white,
    height: "auto"
  },
});

export default Track;
