import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
  TextInput,
} from "react-native";
import images from "../assets/Images/images";

import Post from "../components/Post";
import { colors } from "../assets/Themes/colors";
import { styles as defaultStyles } from "../assets/Themes/default_style";

import { textStyles } from "../assets/Themes/Text";

const windowWidth = Dimensions.get("window").width;

const gap = 12;
const itemPerRow = 2;
const totalGapSize = (itemPerRow - 1) * gap;
const rowWidth = windowWidth * 0.8 + totalGapSize;

const FeedScreen = ({ route, navigation }) => {
  const caption = route.params?.caption || "";

  const songData = route.params?.songData || {};

  console.log("IN FEED");
  console.log(songData);
  const artistNames =
    songData && songData.artists
      ? songData.artists.join(", ")
      : "Unknown Artist";

  return (
    <SafeAreaView style={defaultStyles.container}>
      <Text style={textStyles.subHeader}>Posts</Text>

      <Post
        dimensions={{
          windowWidth: windowWidth,
          gap: gap,
          totalGapSize: totalGapSize,
          itemPerRow: itemPerRow,
          rowWidth: rowWidth,
        }}
        songData={songData}
      ></Post>
    </SafeAreaView>
  );
};
const layout = StyleSheet.create({});

export default FeedScreen;
