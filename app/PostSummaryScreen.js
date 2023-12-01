import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import images from "../assets/Images/images";
import { colors } from "../assets/Themes/colors";
import { styles as defaultStyles } from "../assets/Themes/default_style";

const windowWidth = Dimensions.get("window").width;
// dimensions for selectionGrid styling
const gap = 12;
const itemPerRow = 2;
const totalGapSize = (itemPerRow - 1) * gap;
const rowWidth = windowWidth * 0.8 + totalGapSize;

const PostSummaryScreen = ({ route, navigation }) => {
  const songData = route.params?.songData || {};
  const artistNames =
    songData && songData.artists
      ? songData.artists.join(", ")
      : "Unknown Artist";
  return (
    <SafeAreaView style={defaultStyles.container}>
      <View style={styles.postSumOuterContainer}>
        {songData && songData.title && (
          <View style={styles.PostSumSongContainer}>
            <Image
              source={{ uri: songData.imageUrl }}
              style={styles.postSumAlbumCover}
            />
            <View style={styles.titleAndArtist}>
              <Text style={styles.postSumTitle} numberOfLines={1}>
                {songData.title}
              </Text>
              <Text style={styles.postSumArtist} numberOfLines={1}>
                {Array.isArray(songData.artists)
                  ? songData.artists.join(", ")
                  : songData.artists}
              </Text>
              <View style={styles.smallSelectionRow}>
                <Image
                  source={images.matchaLatte.pic}
                  style={styles.smallImage}
                />
                <Image
                  source={images.superHappyEmoji.pic}
                  style={styles.smallImage}
                />
                <Image source={images.working.pic} style={styles.smallImage} />
              </View>
            </View>
            {/* other song details */}
          </View>
        )}
        <Text>insert drowndown here</Text>

        <Pressable
          style={defaultStyles.button}
          onPress={() =>
            navigation.navigate("FeedScreen", {
              screen: "Feed",
              params: { songData },
            })
          }
        >
          <Text style={defaultStyles.buttonText}>
            Jump to Feed (Testing Purposes)
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  postSumOuterContainer: {
    width: windowWidth,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    backgroundColor: colors.offWhite75,
    borderRadius: 10,
    width: rowWidth + 10,
    height: windowWidth * 0.8,
  },
  postSumSongContainer: {
    width: windowWidth,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderRadius: 10,
    width: rowWidth + 10,
    height: windowWidth * 0.3,
    gap: 5,
    paddingLeft: 10,
  },
  postSumAlbumCover: {
    width: windowWidth * 0.25, // Adjust size as needed
    height: windowWidth * 0.25, // Adjust size as needed
    borderRadius: 10,
  },
  postSumTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black", // Adjust color as needed
    marginTop: 10,
  },
  postSumArtist: {
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
  postSumSelectionRow: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: totalGapSize * 2,
  },
  postSumSelectionGrid: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: totalGapSize,
  },
  postSumOuterContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: totalGapSize,
  },
  postSumPostInProgress: {},
  boldText: {
    fontSize: 15,
    fontWeight: "bold",
    alignContent: "center",
  },
  smallImage: {
    marginTop: 5,
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
  },
  smallSelectionRow: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
  subHeader: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.offWhite,
  },
});

// const styles = StyleSheet.create({
//   songContainer: {
//     width: windowWidth,
//     height: 200, // Adjust height as needed
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 20,
//   },
//   albumCover: {
//     width: 120, // Adjust size as needed
//     height: 120, // Adjust size as needed
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "black", // Adjust color as needed
//     marginTop: 10,
//   },
//   artist: {
//     fontSize: 16,
//     color: "grey", // Adjust color as needed
//     marginTop: 5,
//   },
// });

export default PostSummaryScreen;
