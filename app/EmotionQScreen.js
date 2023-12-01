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

const windowWidth = Dimensions.get("window").width;
// dimensions for selectionGrid styling
const gap = 12;
const itemPerRow = 2;
const totalGapSize = (itemPerRow - 1) * gap;
const rowWidth = windowWidth * 0.8 + totalGapSize;

const ThemeQScreen = ({ route, navigation }) => {
  const { songData } = route.params;
  const artistNames =
    songData && songData.artists
      ? songData.artists.join(", ")
      : "Unknown Artist";
  console.log(songData);

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
            </View>
            {/* other song details */}
          </View>
        )}

        <View style={styles.questionBox}>
          <Text style={styles.boldText}>"How are you feeling?"</Text>
        </View>

        {/* First selection Row */}
        <View style={styles.selectionGrid}>
          <View style={styles.selectionRow}>
            <SingleEmotionOption
              songData={songData}
              icon={images.superHappyEmoji.pic}
              iconText={images.superHappyEmoji.label}
            ></SingleEmotionOption>
            <SingleEmotionOption
              songData={songData}
              icon={images.happyEmoji.pic}
              iconText={images.happyEmoji.label}
            ></SingleEmotionOption>
          </View>
          {/* Second selection Row */}
          <View style={styles.selectionRow}>
            <SingleEmotionOption
              songData={songData}
              icon={images.superSadEmoji.pic}
              iconText={images.superSadEmoji.label}
            ></SingleEmotionOption>
            <SingleEmotionOption
              songData={songData}
              icon={images.sadEmoji.pic}
              iconText={images.sadEmoji.label}
            ></SingleEmotionOption>
          </View>
        </View>

        <Pressable
          style={defaultStyles.button}
          onPress={() => navigation.navigate("Emotion Question", { songData })}
        >
          <Text style={defaultStyles.buttonText}>
            USER SELECTS THEME ANSWER
          </Text>
        </Pressable>
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
    backgroundColor: colors.offWhite,
    borderRadius: 10,
    width: rowWidth + 10,
    height: windowWidth * 0.3,
    gap: 5,
    paddingLeft: 10,
  },
  albumCover: {
    width: windowWidth * 0.25, // Adjust size as needed
    height: windowWidth * 0.25, // Adjust size as needed
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black", // Adjust color as needed
    marginTop: 10,
  },
  artist: {
    fontSize: 14,
    color: "black", // Adjust color as needed
    marginTop: 5,
  },
  titleAndArtist: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginRight: 20,
    width: "60%",
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
    backgroundColor: colors.offWhite,
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
});
export default ThemeQScreen;
