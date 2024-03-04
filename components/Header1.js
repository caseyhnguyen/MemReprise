import React from "react";
import {
  Text,
  StyleSheet,
} from "react-native";
import { colors } from "../assets/Themes/colors";

const Header1 = (props) => {
  let text = "" + props.text;
  let color = props.black ? colors.black : colors.white;
  return (
    <Text style={[styles.header1, { color: color }]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  header1: {
    // fontWeight: "500",
    fontSize: 24,
    // alignItems: "center",
    // justifyContent: "center",
    // marginTop: -30,
    // alignSelf: "center",
  },
});

export default Header1;
