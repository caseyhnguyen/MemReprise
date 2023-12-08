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
import { styles as defaultStyles } from "../../assets/Themes/default_style";
import PostExpanded from "../../components/PostExpanded";

const windowWidth = Dimensions.get("window").width;

const gap = 12;
const itemPerRow = 2;
const totalGapSize = (itemPerRow - 1) * gap;
const rowWidth = windowWidth;

const PostExpandScreen = ({ route, navigation }) => {
  // Destructure with default values
  const {
    caption = "",
    songData = {},
    themeIconSrc = "",
    emotionIconSrc = "",
    activityIconSrc = "",
    themeIconLabel = "",
    emotionIconLabel = "",
    activityIconLabel = "",
    userName = "",
    formattedTimestamp = "",
  } = route.params || {};

  // Combine the artist names if available
  const artistNames = songData.artists?.join(", ") || "Unknown Artist";

  return (
    <SafeAreaView style={defaultStyles.container}>
      <PostExpanded
        dimensions={{
          windowWidth,
          gap,
          totalGapSize,
          itemPerRow,
          rowWidth,
        }}
        songData={songData}
        caption={caption}
        themeIconSrc={themeIconSrc}
        emotionIconSrc={emotionIconSrc}
        activityIconSrc={activityIconSrc}
        themeIconLabel={themeIconLabel}
        emotionIconLabel={emotionIconLabel}
        activityIconLabel={activityIconLabel}
        userName={userName}
        formattedTimestamp={formattedTimestamp}
      />
    </SafeAreaView>
  );
};

const layout = StyleSheet.create({});

export default PostExpandScreen;
