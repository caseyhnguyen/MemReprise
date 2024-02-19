import React, { useContext, useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import images from "../assets/Images/images";
import { postStyles as styling } from "../assets/Themes/postStyle";
import { PostContext } from "../utils/PostContext";
import { colors } from "../assets/Themes/colors";
import Header2 from "./Header2";

const windowWidth = Dimensions.get("window").width;
const gap = 12;
const itemPerRow = 2;
const totalGapSize = (itemPerRow - 1) * gap;
const rowWidth = windowWidth * 0.8 + totalGapSize;

const Post = ({
  userName,
  formattedTimestamp,
  songData,
  caption,
  emotionIconSrc,
  activityIconSrc,
  themeIconSrc,
  themeIconLabel,
  emotionIconLabel,
  activityIconLabel,
}) => {
  const styles = styling({
    windowWidth,
    gap,
    totalGapSize,
    itemPerRow,
    rowWidth,
  });
  const navigation = useNavigation();
  const { setPostMade } = useContext(PostContext);

  const onPress = () => {
    navigation.navigate("PostExpandScreen", {
      userName,
      formattedTimestamp,
      songData,
      caption,
      themeIconSrc,
      emotionIconSrc,
      activityIconSrc,
      themeIconLabel,
      emotionIconLabel,
      activityIconLabel,
    });
  };

  const cutoffTitle = 23;
  let songTitle = songData.title;
  if (songTitle.length > cutoffTitle) {
    songTitle = songTitle.substring(0, cutoffTitle) + "...";
  }

  const cutoffArtist = 27;
  let artists = songData.artists?.join(", ") || "Unknown Artist";
  if (artists.length > cutoffArtist) {
    artists = artists.substring(0, cutoffArtist) + "...";
  }

  const cutoffCaption = 180;
  if (userName == "Unknown User") userName = "Anonymous user";
  let postCaption = "\"" + caption;
  if (postCaption.length > cutoffCaption) {
    postCaption = postCaption.substring(0, cutoffCaption) + "...\"";
  } else {
    if (postCaption.charAt(postCaption.length - 1) == "\n") {
      postCaption = postCaption.substring(0, postCaption.length - 2) + "\"";
    } else {
      postCaption += "\"";
    }
  }
  

  return (
    <View style={styles.outerContainer}>
      {songData && songData.title && (
        <Pressable onPress={onPress}>
          <View style={styles.metaData}>
            <Image
              source={{
                uri: songData.imageUrl || images.defaultProfilePic.pic,
              }}
              style={styles.profilePic}
            />
            <View style={styles.info}>
              <Text style={styles.title}>{songTitle}</Text>
              <Text style={styles.artist}>{artists}</Text>
              <Text style={styles.time}>{formattedTimestamp}</Text>
            </View>
          </View>

          <View style={styles.postContainer}>
            {/* <View style={styles.songInfo}> */}
              {caption && <Text style={styles.caption}>{postCaption}</Text>}
              <Text style={styles.title}>{userName}</Text>
            {/* </View> */}
          </View>
        </Pressable>
      )}
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
    height: windowWidth * 0.32,
  },
  postContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
});

export default Post;
