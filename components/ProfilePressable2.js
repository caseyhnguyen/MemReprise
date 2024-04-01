import React from "react";
import { Text, Image, Pressable, StyleSheet } from "react-native";
import { colors } from "../assets/Themes/colors";
import { trackEvent } from "@aptabase/react-native";
import { useNavigation } from "@react-navigation/native";

const ProfilePressable2 = ({ image, name, mixtape, isSelected, onPress }) => {
  const navigation = useNavigation();

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
    navigation.navigate("City Playlist", { name: name, city: name, image: { uri: image }, mixtape: mixtape });

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
    width: 85,
    height: 85,
    borderRadius: 100,
  },
  name: {
    color: colors.white,
    marginTop: 10,
  },
});

export default ProfilePressable2;
