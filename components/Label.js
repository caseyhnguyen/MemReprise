import React from "react";
import {
  Text,
  StyleSheet,
} from "react-native";
import { colors } from "../assets/Themes/colors";

const Label = (props) => {
    let text = "" + props.text;
    let color = props.black ? colors.black : colors.white;
    return (
        <Text style={[styles.header3, {color: color}]}>
            {text}
        </Text>
    );
  };
  
  const styles = StyleSheet.create({
    header3: {
        fontWeight: "bold",
        fontSize: 18,
        alignItems: "center",
        justifyContent: "center",
        // alignSelf: "center",
        textTransform: "uppercase"
    },
  });
  
  export default Label;
  