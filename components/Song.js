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
  // index,
  title,
  artists,
  albumName,
  imageUrl,
  name,
  // duration,
  previewUrl,
  externalUrl,
  played_at,
  // userName,
  sender_name,
  sender_img,
  location_name,
  message,
  formattedTimestamp,
}) => {
  const navigation = useNavigation();

  const onSongPress = async () => {
    const songData = { // Define songData for Supabase
      title,
      artists: Array.isArray(artists) ? artists : [artists],
      albumName,
      imageUrl,
      externalUrl,
      sender_name,
      sender_img,
      location_name,
      message,
    formattedTimestamp,

    };
    // console.log("Inserting songData to Supabase:", songData);
    // console.log("Username in Song Component:", { userName });

    // try {
    //   // Save to Supabase
    //   const { data, error } = await supabase.from("songs").insert([songData]);

    //   if (error) {
    //     console.error("Error saving song to database:", error);
    //     return;
    //   } else {
    //     console.log("Song saved successfully:", data);
    //   }
    // } catch (err) {
    //   console.error("Supabase operation failed:", err);
    //   return;
    // }
    // imageUrl = require(imageUrl);

    // navigation.navigate("Recieve Gift", { artists: artists, city: name, imageUrl: imageUrl });
    navigation.navigate("Recieve Gift", { artists: artists, title: title, imageUrl: imageUrl, externalUrl: externalUrl, sender_name: sender_name, sender_img: sender_img, location_name: location_name, message: message, formattedTimestamp: formattedTimestamp });
    // navigation.navigate("Music Box", { artists: artists, city: name, imageUrl: imageUrl });
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
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    // marginBottom: 10,
    marginHorizontal: 12
  },
  container: {
    flexDirection: "col",
    alignItems: "center",
    width: 120,
    textAlign: "center",
    // width: windowWidth * 0.9,
    // paddingVertical: 10,
    // backgroundColor: colors.white
  },
  songInfo: {
    flexDirection: "col",
    justifyContent: "center",
    alignItems: "center",
    color: colors.white,
    gap: 10
  },
  titleAndArtist: {
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // alignItems: "flex-start",
    color: colors.white,
  },
  image: {
    width: 125,
    height: 125,
  },
  playedAtText: {
    color: colors.darkGray,
    fontSize: 14,
  },
  artistText: {
    color: colors.white,
    fontSize: 14,
    // marginTop: 2,
  },
  titleText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 2,
  },
});

export default Song;
