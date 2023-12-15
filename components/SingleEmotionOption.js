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

const windowWidth = Dimensions.get("window").width;

const SingleEmotionOption = ({
  icon,
  iconText,
  songData,
  selectedThemeIcon,
  selectedThemeIconText,
  userName,
}) => {
  const navigation = useNavigation();

  const onSelection = () => {
    navigation.navigate("Activity Question", {
      songData,
      selectedThemeIcon: selectedThemeIcon,
      selectedThemeIconText: selectedThemeIconText,
      selectedEmotionIcon: icon,
      selectedEmotionIconText: iconText,
      userName,
    });
  };

  return (
    <View style={styles.outerContainer}>
      <TouchableOpacity onPress={onSelection}>
        <View style={styles.iconInfo}>
          <Image source={icon} style={styles.image} />
          <Text>{iconText}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: colors.offWhite50,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
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

export default SingleEmotionOption;
