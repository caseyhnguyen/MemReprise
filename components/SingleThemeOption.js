import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../assets/Themes/colors";
// import { useTheme } from "../utils/ThemeContext";

const windowWidth = Dimensions.get("window").width;

const SingleThemeOption = ({ icon, iconText, songData, userName }) => {
  const navigation = useNavigation();

  const onSelection = () => {
    // Navigate to the next screen with the selected icon and icon text
    navigation.navigate("Emotion Question", {
      songData,
      selectedThemeIcon: icon,
      selectedThemeIconText: iconText,
      userName,
    });
  };

  return (
    <View style={styles.outerContainer}>
      <TouchableOpacity onPress={onSelection}>
        <View style={styles.iconInfo}>
          <Image source={icon} style={styles.image} />
          <Text style={{color: colors.white}}>{iconText}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: colors.darkGray,
    color: colors.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10, // Spacing between each song item
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: windowWidth * 0.9,
  },
  buttonContainer: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    marginRight: 5,
    color: colors.white,

  },
  iconInfo: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  image: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
  },
});

export default SingleThemeOption;
