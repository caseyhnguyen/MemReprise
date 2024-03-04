import React from "react";
import { Text, Image, Pressable, StyleSheet } from "react-native";
import images from "../assets/Images/images";
import { colors } from "../assets/Themes/colors";
import Icon from 'react-native-vector-icons/FontAwesome5'

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
      style={styles.container}
      onPress={handlePress} // Use the wrapped onPress handler
    >
      <Text style={styles.buttonText}>
        {!text
          ? "See More"
          : "View Mixtape"
        }
      </Text>
      <Icon name='chevron-right' style={styles.arrow} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: colors.pink,
    fontSize: 14,
    fontWeight: "bold"
  },
  arrow: {
    color: colors.pink,
    fontSize: 14,
    marginLeft: 5
  }
});

export default SeeMore;
