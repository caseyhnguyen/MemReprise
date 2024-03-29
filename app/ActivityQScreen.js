import React, { useEffect } from "react";
import SingleActivityOption from "../components/SingleActivityOption";
import images from "../assets/Images/images";
import { colors } from "../assets/Themes/colors";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import { styles as defaultStyles } from "../assets/Themes/default_style";
import PostProgressBar from "../components/PostProgressBar";
import formatPlayedAt from "../utils/formatPlayedAt.js";
import Header3 from "../components/Header3.js";
import { trackEvent } from "@aptabase/react-native";

const windowWidth = Dimensions.get("window").width;
// dimensions for selectionGrid styling
const gap = 12;
const itemPerRow = 2;
const totalGapSize = (itemPerRow - 1) * gap;
const rowWidth = windowWidth * 0.8 + totalGapSize;

const ActivityQScreen = ({ route, navigation }) => {
  const {
    songData,
    selectedThemeIcon,
    selectedThemeIconText,
    selectedEmotionIcon,
    selectedEmotionIconText,
  } = route.params;
  const userName = route.params?.userName;
  const artistNames =
    songData && songData.artists
      ? songData.artists.join(", ")
      : "Unknown Artist";

  // Function to handle activity option selection
  // Function to handle activity option selection
  const handleActivitySelection = (activityText) => {
    trackEvent("Activity Option Selected", {
      activity: activityText,
      songTitle: songData?.title || "Unknown Song",
      artistNames,
      selectedThemeIconText,
      selectedEmotionIconText,
      userName,
    });
  };
  // console.log(songData);
  // console.log("Username in ActivityQScreen:", { userName });

  return (
    <SafeAreaView style={defaultStyles.container}>
      <View style={styles.outerContainer}>
        {songData && songData.title && (
          <View style={styles.songContainer}>
            <Image
              source={{ uri: songData.imageUrl }}
              style={styles.albumCover}
            />
            <View style={styles.titleAndArtist}>
              <Text style={styles.title} numberOfLines={1}>
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
              <View style={styles.smallSelectionRow}>
                {selectedThemeIcon && (
                  <Image source={selectedThemeIcon} style={styles.smallImage} />
                )}
                {selectedThemeIcon && (
                  <Image
                    source={selectedEmotionIcon}
                    style={styles.smallImage}
                  />
                )}
              </View>
            </View>
          </View>
        )}

        <View style={styles.questionBox}>
          {/* <Text style={styles.boldText}>What are you doing?</Text> */}
          <Header3 text="What are you doing?" />
        </View>
        {/* First selection Row */}
        <View style={styles.selectionGrid}>
          <View style={styles.selectionRow}>
            <SingleActivityOption
              songData={songData}
              selectedThemeIcon={selectedThemeIcon}
              selectedThemeIconText={selectedThemeIconText}
              selectedEmotionIcon={selectedEmotionIcon}
              selectedEmotionIconText={selectedEmotionIconText}
              icon={images.exercising.pic}
              iconText={images.exercising.label}
              userName={userName}
            ></SingleActivityOption>
            <SingleActivityOption
              songData={songData}
              selectedThemeIcon={selectedThemeIcon}
              selectedThemeIconText={selectedThemeIconText}
              selectedEmotionIcon={selectedEmotionIcon}
              selectedEmotionIconText={selectedEmotionIconText}
              icon={images.eating.pic}
              iconText={images.eating.label}
              userName={userName}
            ></SingleActivityOption>
          </View>
          {/* Second selection Row */}
          <View style={styles.selectionRow}>
            <SingleActivityOption
              songData={songData}
              selectedThemeIcon={selectedThemeIcon}
              selectedThemeIconText={selectedThemeIconText}
              selectedEmotionIcon={selectedEmotionIcon}
              selectedEmotionIconText={selectedEmotionIconText}
              icon={images.working.pic}
              iconText={images.working.label}
              userName={userName}
            ></SingleActivityOption>
            <SingleActivityOption
              songData={songData}
              selectedThemeIcon={selectedThemeIcon}
              selectedThemeIconText={selectedThemeIconText}
              selectedEmotionIcon={selectedEmotionIcon}
              selectedEmotionIconText={selectedEmotionIconText}
              icon={images.commuting.pic}
              iconText={images.commuting.label}
              userName={userName}
            ></SingleActivityOption>
          </View>
        </View>

        <PostProgressBar progressFraction={1} label="3 / 3" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  songContainer: {
    width: windowWidth,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    backgroundColor: colors.darkGray,
    borderRadius: 10,
    width: rowWidth + 10,
    height: windowWidth * 0.3,
    gap: 5,
    paddingLeft: 10,
  },
  albumCover: {
    width: windowWidth * 0.25,
    height: windowWidth * 0.25,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.white,
    marginTop: 10,
  },
  artist: {
    fontSize: 14,
    color: colors.white,
    marginTop: 5,
  },
  titleAndArtist: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 5,
    marginRight: 20,
    width: "60%",
    marginTop: "5%",
  },
  selectionRow: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: totalGapSize * 2,
  },
  selectionGrid: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: totalGapSize,
  },
  outerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: totalGapSize,
  },
  questionBox: {
    backgroundColor: colors.darkGray,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: rowWidth + 10,
    height: windowWidth * 0.15,
  },
  postInProgress: {},
  boldText: {
    fontSize: 15,
    fontWeight: "bold",
    alignContent: "center",
  },
  smallImage: {
    // marginTop: 5,
    marginBottom: "5%",
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
  },
  smallSelectionRow: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
});

export default ActivityQScreen;
