// Header.js
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import images from "../assets/Images/images";
import { useNavigation } from "@react-navigation/native";
import millisToMinuteSeconds from "../utils/millisToMinutesAndSeconds.js";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../assets/Themes/colors";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Image
        source={images.plane.pic}
        style={styles.paperPlanIcon}
        resizeMode="contain"
      />
      <Image
        source={images.clouds.pic}
        style={styles.cloudsIcon}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    // padding: 15,
    justifyContent: "flex-start",
    marginTop: -190,
    marginLeft: -20,
    // alignItems: 'center',
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    margin: 5,
  },
  paperPlanIcon: {
    width: 40,
    height: 40,
  },
  cloudsIcon: {
    width: 70,
    height: 70,
    marginLeft: 50,
    alignItems: "center",
  },
});

export default Header;
