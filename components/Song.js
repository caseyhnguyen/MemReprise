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
import formatPlayedAt from "../utils/formatPlayedAt.js";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../assets/Themes/colors";
import { supabase } from "../utils/supabaseClient";

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
  played_at,
  userName,
}) => {
  const navigation = useNavigation();

  const onSongPress = async () => {
    // Define songData for Supabase
    const songData = {
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

    // console.log("Inserting songData to Supabase:", songData);
    // console.log("Username in Song Component:", { userName });

    try {
      // Save to Supabase
      const { data, error } = await supabase.from("songs").insert([songData]);

      if (error) {
        console.error("Error saving song to database:", error);
        return;
      } else {
        console.log("Song saved successfully:", data);
      }
    } catch (err) {
      console.error("Supabase operation failed:", err);
      return;
    }

    // Navigate to "Theme Question" with songData
    console.log("Navigating to Theme Question with songData:", songData);
    navigation.navigate("Theme Question", {
      songData,
      userName,
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
            {/* Display the formatted date and time */}
            <Text style={styles.playedAtText}>{formatPlayedAt(played_at)}</Text>
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
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginBottom: 10,
    width: windowWidth * 0.95,
    height: windowWidth * 0.2,
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
  playedAtText: {
    color: colors.darkGray,
    fontSize: 14,
  },
  artistText: {
    color: colors.black,
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
