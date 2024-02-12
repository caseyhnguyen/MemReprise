import React from "react";
import {
  Text,
  StyleSheet,
} from "react-native";
import { colors } from "../assets/Themes/colors";

const Header2 = (props) => {
    let text = "" + props.text;
    let color = props.black ? colors.black : colors.white;
    return (
        <Text style={[styles.header2, {color: color}]}>
            {text}
        </Text>
    );
  };
  
  const styles = StyleSheet.create({
    header2: {
        fontWeight: "500",
        fontSize: 20,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
        alignSelf: "center",
    },
  });
  
  export default Header2;
  