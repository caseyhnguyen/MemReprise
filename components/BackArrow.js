import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { colors } from "../assets/Themes/colors";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { trackEvent } from "@aptabase/react-native";

const BackArrow = ({ to }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    // Log the back navigation event
    trackEvent("Navigation", {
      action: "Back Navigation",
      destination: to,
    });

    navigation.navigate(to);
  };

  return (
    <Pressable onPress={handlePress}>
      <Icon name="chevron-left" style={styles.arrow} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  arrow: {
    color: colors.pink,
    fontSize: 24,
    margin: 10,
  },
});

export default BackArrow;
