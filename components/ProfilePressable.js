import React from "react";
import { Text, Image, Pressable, StyleSheet } from "react-native";
import { colors } from "../assets/Themes/colors";
import { trackEvent } from "@aptabase/react-native";

const ProfilePressable = ({ image, name, isSelected, onPress }) => {
  const handlePress = () => {
    // Log the profile selection event
    trackEvent("Profile Selected", {
      profileName: name,
      isSelected: isSelected,
    });

    // If there's an onPress prop provided, call it
    if (onPress) {
      onPress();
    }
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Image
        source={image}
        style={[
          styles.image,
          isSelected ? styles.isSelected : styles.notSelected,
        ]}
      />
      <Text style={styles.name}>{name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 8,
    marginRight: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 1000,
  },
  isSelected: {
    borderWidth: 2,
    borderColor: colors.white,
  },
  name: {
    color: colors.white,
    marginTop: 10,
  },
});

export default ProfilePressable;
