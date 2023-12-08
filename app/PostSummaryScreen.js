import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import images from "../assets/Images/images";
import { colors } from "../assets/Themes/colors";
import { styles as defaultStyles } from "../assets/Themes/default_style";
import RNPickerSelect from "react-native-picker-select";
import formatPlayedAt from "../utils/formatPlayedAt.js";
import { supabase } from "../utils/supabaseClient";

const windowWidth = Dimensions.get("window").width;
// dimensions for selectionGrid styling
const gap = 12;
const itemPerRow = 2;
const totalGapSize = (itemPerRow - 1) * gap;
const rowWidth = windowWidth * 0.8 + totalGapSize;

const PostSummaryScreen = ({ route, navigation }) => {
  const [caption, setCaption] = React.useState("");
  const [selectedValue, setSelectedValue] = useState(null); // Visibility

  const options = [
    { label: "Public", value: "option1" },
    { label: "Friends", value: "option2" },
    { label: "Only Me", value: "option3" },
    // Add more options as needed
  ];

  const {
    songData,
    selectedThemeIcon,
    selectedThemeIconText,
    selectedEmotionIcon,
    selectedEmotionIconText,
    selectedActivityIcon,
    selectedActivityIconText,
  } = route.params;

  const postData = {
    song_data: JSON.stringify({
      index: songData.index,
      title: songData.title,
      artists: Array.isArray(songData.artists)
        ? songData.artists
        : [songData.artists],
      albumName: songData.albumName,
      imageUrl: songData.imageUrl,
      duration: songData.duration,
      previewUrl: songData.previewUrl,
      externalUrl: songData.externalUrl,
      played_at: songData.played_at,
      id: songData.id, // Include songId if available
    }),
    theme_icon_id: selectedThemeIcon,
    theme_icon_text: selectedThemeIconText,
    emotion_icon_id: selectedEmotionIcon,
    emotion_icon_text: selectedEmotionIconText,
    activity_icon_id: selectedActivityIcon,
    activity_icon_text: selectedActivityIconText,
    caption: caption, // Added caption
    visibility: selectedValue, // Added visibility
  };

  const artistNames =
    songData && songData.artists
      ? songData.artists.join(", ")
      : "Unknown Artist";

  const savePostToSupabase = async () => {
    try {
      const { data, error } = await supabase
        .from("posts") // Replace 'posts' with your actual table name
        .insert([postData]);

      if (error) {
        console.error("Error saving post to database:", error);
      } else {
        console.log("Post saved successfully:", data);
        // Optionally navigate to another screen or show a success message
      }
    } catch (err) {
      console.error("Error saving post:", err);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={defaultStyles.container}>
        <Text style={styles.subHeader}>Your Post Draft</Text>
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
                  <Image
                    source={selectedEmotionIcon}
                    style={styles.smallImage}
                  />
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
          <TextInput
            style={styles.input}
            multiline={true}
            onChangeText={setCaption}
            value={caption}
            placeholder="Write a caption..."
            keyboardType="ascii-capable"
          ></TextInput>

          <View style={styles.footer}>
            <RNPickerSelect
              onValueChange={(value) => setSelectedValue(value)}
              items={[
                { label: "Public", value: "public" },
                { label: "Friends", value: "friends" },
                { label: "Only Me", value: "onlyMe" },
                // ... more options
              ]}
              style={pickerSelectStyles}
              placeholder={{ label: "Select visibility...", value: null }}
            />
            <Pressable
              style={styles.postButton}
              onPress={async () => {
                // Make sure the function is marked as async
                try {
                  await savePostToSupabase(); // Use await inside the async function
                  navigation.navigate("FeedTabs", {
                    screen: "FeedStackScreen",
                    params: {
                      screen: "FeedInnerScreen",
                      params: {
                        songData,
                        selectedThemeIcon,
                        selectedThemeIconText,
                        selectedEmotionIcon,
                        selectedEmotionIconText,
                        selectedActivityIcon,
                        selectedActivityIconText,
                      },
                    },
                  });
                } catch (error) {
                  console.error(error);
                }
              }}
            >
              <Text style={styles.postButtonText}>Post</Text>
            </Pressable>
          </View>
        </View>
        {/* </View> */}
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
    height: windowWidth * 1.25,
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
  playedAt: {
    fontSize: 12,
    color: colors.darkGray,
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
  // buttonRow: {
  //   alignItems: "center",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   width: "96%",
  //   paddingLeft: 20,
  // },
  subHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.offWhite,
    paddingBottom: 5,
  },
  input: {
    width: "90%",
    height: "5%",
    // padding: "2.5%",
    maxHeight: "25%",
    marginTop: "5%",
    marginHorizontal: "5%",
    marginBottom: "35%",
    borderTopColor: colors.darkGray,
    // backgroundColor: colors.offWhite50,
    borderRadius: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
    paddingBottom: "5%",
    // paddingTop: "5%",
    // borderTopWidth: 1,
    // borderTopColor: colors.darkGray, // Or another color that fits your design
    // backgroundColor: colors.offWhite50, // Make sure this matches the container background
  },
  postButton: {
    // Adjust the post button styles
    backgroundColor: colors.offWhite75, // Replace with your button color
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "20%", // Adjust the width as needed
    paddingVertical: 12, // Adjust the padding as needed
  },
  postButtonText: {
    // Adjust the post button text styles
    color: colors.darkGray,
    fontSize: 16,
    fontWeight: "bold",
  },
});

const pickerSelectStyles = {
  // Adjust the dropdown styles
  inputIOS: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.offWhite75,
    borderRadius: 4,
    color: "black",
    backgroundColor: colors.offWhite75, // Adjust background color as needed
    // Other styling as needed for iOS
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    backgroundColor: "white", // Adjust background color as needed
    // Other styling as needed for Android
  },
  // You can add placeholder style if needed
};

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
