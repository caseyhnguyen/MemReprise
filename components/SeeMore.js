import React from "react";
import { Text, Image, Pressable, StyleSheet } from "react-native";
import images from "../assets/Images/images";
import { colors } from "../assets/Themes/colors";
import { trackEvent } from "@aptabase/react-native";

// const PillPressable = ({ text, isSpotify, }) => {
const SeeMore = ({ text, onPress }) => {
  const handlePress = () => {
    // Log the see more event
    trackEvent("See More Pressed", {
      text: text, // Log the text to understand what "See more" is related to
    });

    // Call the original onPress function if it exists
    if (onPress) {
      onPress();
    }
  };

  return (
    <Pressable
      style={styles.seeMore}
      onPress={handlePress} // Use the wrapped onPress handler
    >
      <Text style={styles.buttonText}>See more</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  seeMore: {
    // backgroundColor: colors.pink,
    flexDirection: "row",
    justifyContent: "right",
    alignItems: "right",
    marginTop: 8,
  },
  buttonText: {
    // textTransform: "uppercase",
    color: colors.pink,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
    alignSelf: "flex-end",
    marginLeft: "auto",
  },
});

export default SeeMore;
