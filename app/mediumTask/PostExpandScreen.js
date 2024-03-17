import React, { useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
  TextInput,
  ImageBackground,
} from "react-native";

import { textStyles } from "../../assets/Themes/Text";
import { styles as defaultStyles } from "../../assets/Themes/default_style";
import PostExpanded from "../../components/PostExpanded";
import { trackEvent } from "@aptabase/react-native";
import { useRoute } from "@react-navigation/native";
// import { ImageBackground } from "react-native-web";

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
    sendTo = {},
  } = route.params || {};
  // console.log("Hi from postexpandscreen");
  // console.log(songData);
  // console.log(route);

  // Combine the artist names if available
  // const artistNames = songData.artists?.join(", ") || "Unknown Artist";
  const artistNames = songData.artists;

  useEffect(() => {
    // Log the event when the screen is loaded
    trackEvent("Screen View", {
      screen: "PostExpandScreen",
      userName,
      artistNames,
      caption,
      themeIconLabel,
      emotionIconLabel,
      activityIconLabel,
      formattedTimestamp,
    });
  }, []);

  return (
    <SafeAreaView style={defaultStyles.container}>
      <ImageBackground
        source={{uri: songData.imageUrl}}
        resizeMode="cover"
        style={styles.bgImg}
        blurRadius={8}
      >
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
          sendTo={sendTo}
        />
      </ImageBackground>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bgImg: {
    padding: 20,
    height: "125%", 
    width: 380, 
    justifyContent: 'center', 
    alignItems: 'center', 
  }
});

export default PostExpandScreen;
