import React from "react";
import { Text, Image, Pressable, StyleSheet } from "react-native";
import images from "../assets/Images/images";
import { colors } from "../assets/Themes/colors";
import { trackEvent } from "@aptabase/react-native";
import { useNavigation } from "@react-navigation/native";

// Assume navigation prop is passed to PillPressable
const SpotifyButton = ({ text, isSpotify, token, isLoading, muted }) => {
  const navigation = useNavigation(); // Use the hook to access navigation

  const handlePress = () => {
    trackEvent("Button Pressed", {
      text: text,
      isSpotify: isSpotify,
      tokenPresent: !!token,
      isLoading: isLoading,
    });

    navigation.navigate("Tracks"); // Now navigation should be defined
  };

  return (
    <Pressable
      style={[
        styles.button,
        isSpotify ? styles.buttonSpotifyColor : styles.buttonNormalColor,
        muted && styles.discouragedButton, // Corrected use of destructured prop
      ]}
      onPress={handlePress}
      disabled={isSpotify && isLoading} // Use destructured prop
    >
      {isSpotify && !token && (
        <Image
          source={images.spotify}
          style={[styles.spotifyIcon, isLoading && styles.disabledIcon]} // Use destructured prop
        />
      )}
      <Text style={styles.buttonText}>
        {isSpotify ? "Select a song from Spotify" : text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 8,
    marginBottom: 8,
  },
  buttonSpotifyColor: {
    backgroundColor: colors.spotify,
    paddingHorizontal: 20,
    paddingVertical: 11,
  },
  buttonNormalColor: {
    backgroundColor: colors.pink,
    paddingHorizontal: 45,
    paddingVertical: 11,
  },
  discouragedButton: {
    backgroundColor: colors.darkGray,
    paddingHorizontal: 45,
    paddingVertical: 11,
  },
  buttonText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  spotifyIcon: {
    marginRight: 10,
    width: 24,
    height: 24,
  },
});

export default SpotifyButton;
