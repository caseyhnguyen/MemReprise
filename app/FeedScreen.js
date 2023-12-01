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
import { colors } from "../assets/Themes/colors";
import { styles as defaultStyles } from "../assets/Themes/default_style";

const windowWidth = Dimensions.get("window").width;
// dimensions for selectionGrid styling
const gap = 12;
const itemPerRow = 2;
const totalGapSize = (itemPerRow - 1) * gap;
const rowWidth = windowWidth * 0.8 + totalGapSize;

const FeedScreen = ({ route, navigation }) => {
  const caption = route.params?.caption || "";

  const songData = route.params?.songData || {};
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
              <Image
                source={images.matchaLatte.pic}
                style={styles.smallImage}
              />
              <Text style={styles.smallText}>{images.matchaLatte.label}</Text>
              <Image
                source={images.superHappyEmoji.pic}
                style={styles.smallImage}
              />
              <Text style={styles.smallText}>
                {images.superHappyEmoji.label}
              </Text>

              <Image source={images.working.pic} style={styles.smallImage} />
              <Text style={styles.smallText}>{images.working.label}</Text>
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
        </View>
        <Text style={styles.caption}>Wow this is so cool!</Text>
        {/* Display the caption */}
        {/* <TextInput
          style={styles.input}
          multiline={true}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Write a caption..."
          keyboardType="numeric"
        ></TextInput> */}
        {/* <View style={styles.buttonRow}>
          <Text>drop</Text>

          <Pressable
            style={defaultStyles.button}
            onPress={() =>
              navigation.navigate("FeedScreen", {
                screen: "Feed",
                params: { songData },
              })
            }
          >
            <Text style={defaultStyles.buttonText}>Post</Text>
          </Pressable>
        </View> */}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  outerContainer: {
    width: windowWidth,
    // alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    backgroundColor: colors.offWhite50,
    borderRadius: 10,
    width: rowWidth + 10,
    height: windowWidth * 1.1,
  },
  songContainer: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 10,
    width: "95%",
    height: windowWidth * 0.5,
    gap: 5,
    paddingLeft: 20,
    paddingTop: 20,
  },
  albumCover: {
    width: windowWidth * 0.5, // Adjust size as needed
    height: windowWidth * 0.5, // Adjust size as needed
    // borderRadius: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black", // Adjust color as needed
    marginTop: 10,
  },
  artist: {
    fontSize: 12,
    color: "black", // Adjust color as needed
    marginTop: 5,
  },
  titleAndArtist: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 20,
    paddingTop: 20,
    width: "75%",
  },
  selectionGrid: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: totalGapSize,
  },
  postInProgress: {},
  boldText: {
    fontSize: 15,
    fontWeight: "bold",
    alignContent: "center",
  },
  smallImage: {
    marginTop: 5,
    width: windowWidth * 0.115,
    height: windowWidth * 0.115,
  },
  smallText: {
    fontSize: 10,
    color: colors.darkGray,
    paddingBottom: "2%",
  },
  smallSelectionCol: {
    alignItems: "center",
    flexDirection: "col",
  },
  buttonRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "96%",
    paddingLeft: 20,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.offWhite,
    paddingBottom: 5,
  },
  caption: {
    height: 40,
    marginTop: 12,
    marginBottom: 50,
    borderTopColor: colors.darkGray,
    paddingLeft: 20,
    width: "70%",
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

export default FeedScreen;
