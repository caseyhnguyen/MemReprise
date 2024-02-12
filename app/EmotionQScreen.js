import React from "react";
import SingleEmotionOption from "../components/SingleEmotionOption";
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

const windowWidth = Dimensions.get("window").width;
// dimensions for selectionGrid styling
const gap = 12;
const itemPerRow = 2;
const totalGapSize = (itemPerRow - 1) * gap;
const rowWidth = windowWidth * 0.8 + totalGapSize;

const EmotionQScreen = ({ route, navigation }) => {
  const { songData, selectedThemeIcon, selectedThemeIconText } = route.params;
  const userName = route.params?.userName;
  const artistNames =
    songData && songData.artists
      ? songData.artists.join(", ")
      : "Unknown Artist";
  // console.log(songData);
  // console.log("Username in EmotionQScreen:", { userName });

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
              {selectedThemeIcon && (
                <Image source={selectedThemeIcon} style={styles.smallImage} />
              )}
            </View>
            {/* other song details */}
          </View>
        )}

        <View style={styles.questionBox}>
          <Header3 text="How are you feeling?" />
          {/* <Text style={styles.boldText}>How are you feeling?</Text> */}
        </View>

        {/* First selection Row */}
        <View style={styles.selectionGrid}>
          <View style={styles.selectionRow}>
            <SingleEmotionOption
              songData={songData}
              selectedThemeIcon={selectedThemeIcon}
              selectedThemeIconText={selectedThemeIconText}
              icon={images.superHappyEmoji.pic}
              iconText={images.superHappyEmoji.label}
              userName={userName}
            ></SingleEmotionOption>
            <SingleEmotionOption
              songData={songData}
              selectedThemeIcon={selectedThemeIcon}
              selectedThemeIconText={selectedThemeIconText}
              icon={images.happyEmoji.pic}
              iconText={images.happyEmoji.label}
              userName={userName}
            ></SingleEmotionOption>
          </View>
          {/* Second selection Row */}
          <View style={styles.selectionRow}>
            <SingleEmotionOption
              songData={songData}
              selectedThemeIcon={selectedThemeIcon}
              selectedThemeIconText={selectedThemeIconText}
              icon={images.superSadEmoji.pic}
              iconText={images.superSadEmoji.label}
              userName={userName}
            ></SingleEmotionOption>
            <SingleEmotionOption
              songData={songData}
              selectedThemeIcon={selectedThemeIcon}
              selectedThemeIconText={selectedThemeIconText}
              icon={images.sadEmoji.pic}
              iconText={images.sadEmoji.label}
              userName={userName}
            ></SingleEmotionOption>
          </View>
        </View>

        <PostProgressBar progressFraction={2 / 3} label="2 / 3" />
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
    backgroundColor: colors.offWhite75,
    borderRadius: 10,
    width: rowWidth + 10,
    height: windowWidth * 0.3,
    gap: 5,
    paddingLeft: 10
  },
  albumCover: {
    width: windowWidth * 0.25,
    height: windowWidth * 0.25,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.black,
    marginTop: 10,
  },
  artist: {
    fontSize: 14,
    color: colors.black,
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
    gap: totalGapSize
  },
  questionBox: {
    backgroundColor: colors.offWhite75,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: rowWidth + 10,
    height: windowWidth * 0.15
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
});
export default EmotionQScreen;
