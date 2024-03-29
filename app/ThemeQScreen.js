import React from "react";
import SingleThemeOption from "../components/SingleThemeOption";
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

const ThemeQScreen = ({ route, navigation }) => {
  const { songData } = route.params;
  const userName = route.params?.userName;
  // console.log("Username in ThemeQScreen:", { userName });
  const artistNames =
    songData && songData.artists
      ? songData.artists.join(", ")
      : "Unknown Artist";

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
              <Text style={styles.spacer}></Text>
            </View>
            {/* other song details */}
          </View>
        )}

        <View style={styles.questionBox}>
          <Header3 text="What cafe drink would your song be?" />
          {/* <Text style={styles.boldText}>
            What cafe drink would your song be?
          </Text> */}
        </View>

        {/* First selection Row */}
        <View style={styles.selectionGrid}>
          <View style={styles.selectionRow}>
            <SingleThemeOption
              songData={songData}
              icon={images.lemonade.pic}
              iconText={images.lemonade.label}
              userName={userName}
            ></SingleThemeOption>
            <SingleThemeOption
              songData={songData}
              icon={images.matchaLatte.pic}
              iconText={images.matchaLatte.label}
              userName={userName}
            ></SingleThemeOption>
          </View>
          {/* Second selection Row */}
          <View style={styles.selectionRow}>
            <SingleThemeOption
              songData={songData}
              icon={images.hotChocolate.pic}
              iconText={images.hotChocolate.label}
              userName={userName}
            ></SingleThemeOption>
            <SingleThemeOption
              songData={songData}
              icon={images.espresso.pic}
              iconText={images.espresso.label}
              userName={userName}
            ></SingleThemeOption>
          </View>
        </View>

        <PostProgressBar progressFraction={1 / 3} label="1 / 3" />
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
    color: colors.white,
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
  spacer: {
    marginTop: 5,
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
  },
});

export default ThemeQScreen;
