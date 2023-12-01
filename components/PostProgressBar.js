// ProgressBar.js
import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ProgressBar from "react-native-progress/Bar";
import { colors } from "../assets/Themes/colors";

const windowWidth = Dimensions.get("window").width;

const PostProgressBar = ({ progressFraction, label }) => {
  return (
    <View style={styles.progressWrapper}>
      <ProgressBar
        progress={progressFraction}
        width={windowWidth - 40} // Adjust padding as needed
        height={7}
        borderRadius={3.5}
        color={colors.verdigrisGreen}
        unfilledColor={colors.offWhite75}
        borderWidth={0}
        useNativeDriver={true}
        style={styles.progressBar}
      />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  progressWrapper: {
    paddingTop: 20, // Add padding to ensure it's not hidden by any other UI
    width: windowWidth - 40, // Set the width based on the window width
    alignItems: "center",
  },
  label: {
    marginTop: 4, // Space between the progress bar and text
    color: colors.white, // Text color
    fontWeight: "bold",
    fontSize: 16, // Text size
  },
});

export default PostProgressBar;
