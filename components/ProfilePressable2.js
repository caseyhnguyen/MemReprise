import React from "react";
import { Text, Image, Pressable, StyleSheet } from "react-native";
import { colors } from "../assets/Themes/colors";
import { trackEvent } from "@aptabase/react-native";

const ProfilePressable2 = ({ image, name, isSelected, onPress }) => {
  const handlePress = () => {
    // Log the profile interaction event
    trackEvent("Profile Interaction", {
      profileName: name,
      isSelected: isSelected,
    });

    // Execute any additional onPress logic passed to the component
    if (onPress) {
      onPress();
    }
  };

  return (
    <Pressable
      style={styles.container}
      onPress={handlePress} // Add the logging and interaction handling here
    >
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
    paddingHorizontal: 10,
  },
  image: {
    width: 88,
    height: 88,
    borderRadius: 100,
  },
  name: {
    color: colors.white,
    marginTop: 10,
  },
});

export default ProfilePressable2;
