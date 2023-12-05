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
import formatPlayedAt from "../utils/formatPlayedAt.js";

import { textStyles } from "../assets/Themes/Text";

const windowWidth = Dimensions.get("window").width;

const gap = 12;
const itemPerRow = 2;
const totalGapSize = (itemPerRow - 1) * gap;
const rowWidth = windowWidth * 0.8 + totalGapSize;

const FeedScreen = ({ route, navigation }) => {
  const caption = route.params?.caption || "";

  const {
    songData,
    selectedThemeIcon,
    selectedThemeIconText,
    selectedEmotionIcon,
    selectedEmotionIconText,
    selectedActivityIcon,
    selectedActivityIconText,
  } = route.params;
  const artistNames =
    songData && songData.artists
      ? songData.artists.join(", ")
      : "Unknown Artist";

  return (
    <SafeAreaView style={defaultStyles.container}>
      <Text style={styles.subHeader}>Posts</Text>
      <View style={styles.outerContainer}>
        {songData && songData.title && (
          <View style={styles.songContainer}>
            <Image
              source={{ uri: songData.imageUrl }}
              style={styles.albumCover}
            />

            <View style={styles.smallSelectionCol}>
              {selectedThemeIcon && (
                <Image source={selectedThemeIcon} style={styles.smallImage} />
              )}
              <Text style={styles.smallText}>{selectedThemeIconText}</Text>
              {selectedEmotionIcon && (
                <Image source={selectedEmotionIcon} style={styles.smallImage} />
              )}
              <Text style={styles.smallText}>{selectedEmotionIconText}</Text>

              {selectedActivityIcon && (
                <Image
                  source={selectedActivityIcon}
                  style={styles.smallImage}
                />
              )}
              <Text style={styles.smallText}>{selectedActivityIconText}</Text>
            </View>
            {/* other song details */}
          </View>
        )}
        <View style={styles.titleAndArtist}>
          <Text style={styles.title} numberOfLines={2}>
            {songData.title}
          </Text>
          <Text style={styles.artist} numberOfLines={1}>
            {Array.isArray(songData.artists)
              ? songData.artists.join(", ")
              : songData.artists}
          </Text>
          <Text style={styles.playedAt} numberOfLines={1}>
            {formatPlayedAt(songData.played_at)}
          </Text>
        </View>
        <Text style={styles.caption}>Wow this is so cool!</Text>
      </View>
    </SafeAreaView>
  );
};
const layout = StyleSheet.create({})


export default FeedScreen;
