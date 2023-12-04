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


import { textStyles } from "../../assets/Themes/Text";

const windowWidth = Dimensions.get("window").width;

const gap = 12;
const itemPerRow = 2;
const totalGapSize = (itemPerRow - 1) * gap;
const rowWidth = windowWidth * 0.8 + totalGapSize;

const PostExpandScreen = ({ route, navigation }) => {
  const caption = route.params?.caption || "";

  const songData = route.params?.songData || {};
  const artistNames =
    songData && songData.artists
      ? songData.artists.join(", ")
      : "Unknown Artist";

  return (
    <SafeAreaView style={defaultStyles.container}>
      <Text style={textStyles.subHeader}>Expanded Post</Text>

    </SafeAreaView>
  );
};
const layout = StyleSheet.create({})


export default PostExpandScreen;
