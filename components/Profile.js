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
import Sample from "../assets/album-1.png";

const windowWidth = Dimensions.get("window").width;

const Profile = ({ userName, icon, firstName, lastName }) => {
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

  // do some first name processing in case it's a long name

  return (
    <View style={styles.profileContainer}>
      <TouchableOpacity onPress={onSelection}>
        <View style={styles.profileInfo}>
          <Image source={Sample} style={styles.icon} />
          <Text style={styles.profileText}>First name</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: "center",
    height: 200,
  },
  icon: {
    width: 88,
    height: 88,
    borderRadius: 100,
  },
  profileText: {
    color: colors.white,
  },
  profileInfo: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
});

export default Profile;
