import React, { useContext, useState, useEffect } from "react";
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
import { PostContext } from "../utils/PostContext";
import RNPickerSelect from "react-native-picker-select";
import { useTheme } from "../utils/ThemeContext";

const windowWidth = Dimensions.get("window").width;
// dimensions for selectionGrid styling
const gap = 12;
const itemPerRow = 2;
const totalGapSize = (itemPerRow - 1) * gap;
const rowWidth = windowWidth * 0.8 + totalGapSize;

const PostSummaryScreen = ({ route, navigation }) => {
  const [captionText, setCaptionText] = useState("");
  const [number, onChangeNumber] = React.useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const { setPostMade } = useContext(PostContext);
  const {
    songData,
    selectedThemeIcon,
    selectedThemeIconText,
    selectedEmotionIcon,
    selectedEmotionIconText,
    selectedActivityIcon,
    selectedActivityIconText,
  } = route.params;

  console.log(
    selectedThemeIcon,
    selectedThemeIconText,
    selectedEmotionIcon,
    selectedEmotionIconText
  );

  const handlePostPress = () => {
    // Update the state to true when the post is made
    setPostMade(true);

    // Reset the navigation stack and navigate to FeedScreen with parameters
    navigation.reset({
      index: 1, // This should be set to the index of the FeedScreen in the stack
      routes: [
        { name: "HomeScreen" }, // The first route in your tab navigator
        {
          // The route to navigate to, with the proper structure for a stack within a tab
          name: "FeedScreen",
          state: {
            routes: [
              { name: "Feed", params: { songData, caption: captionText } },
            ],
          },
        },
      ],
    });
  };

  // const handlePostPress = () => {
  //   setPostMade(true);
  //   // Pass songData and captionText to the next screen
  //   navigation.navigate("FeedScreen", {
  //     screen: "Feed",
  //     params: { songData, caption: captionText },
  //   });
  // };

  // const songData = route.params?.songData || {};
  const artistNames =
    songData && songData.artists
      ? songData.artists.join(", ")
      : "Unknown Artist";

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
                {selectedThemeIconText && (
                  <Text style={styles.smallText}>{selectedThemeIconText}</Text>
                )}

                {/* Displaying the selected Emotion and Activity Icons and Texts */}
                {selectedActivityIcon && (
                  <Image
                    source={selectedEmotionIcon}
                    style={styles.smallImage}
                  />
                )}
                {selectedActivityIconText && (
                  <Text style={styles.smallText}>
                    {selectedEmotionIconText}
                  </Text>
                )}

                {selectedActivityIcon && (
                  <Image
                    source={selectedActivityIcon}
                    style={styles.smallImage}
                  />
                )}
                {selectedActivityIconText && (
                  <Text style={styles.smallText}>
                    {selectedActivityIconText}
                  </Text>
                )}
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
          <TextInput
            style={styles.input}
            multiline={true}
            onChangeText={setCaptionText} // Set the state with the new text
            value={captionText} // The value of the text input is the state
            placeholder="Write a caption..."
            keyboardType="ascii-capable"
            returnKeyType="done" // Adds a "done" button to the keyboard
            onSubmitEditing={Keyboard.dismiss} // Dismiss the keyboard when "done" is pressed
          />
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
              placeholder={{ label: "Select Visbility", value: null }}
            />
            <Pressable
              style={styles.postButton}
              onPress={handlePostPress} // Use the handler function on button press
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
    height: 40,
    marginTop: 12,
    marginBottom: 50,
    borderTopColor: colors.darkGray,
    paddingLeft: 20,
    width: "70%",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2.5%",
    paddingTop: "10.5%",
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
    color: colors.darkGray,
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
  placeholder: {
    color: colors.darkGray,
    // fontWeight: "bold",
  },
};

export default PostSummaryScreen;
