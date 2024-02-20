import React from "react";
import {
  Text,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import images from "../assets/Images/images";
import { colors } from "../assets/Themes/colors";

const PillSelectable = (props) => {
    // let isSpotify = props.isSpotify;
    let text = "" + props.text;
    return (
        <Pressable
            style={[styles.button,
                props.isSelected ? styles.isSelected : styles.notSelected,
             ]}
            onPress={props.onPress}
            key={props.key}
        >
            <Text style={styles.buttonText}>
                {props.text}
            </Text>
        </Pressable>
    );
  };
  
  const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 8,
        marginBottom: 8,
      },
    isSelected: {
        backgroundColor: colors.black,
        borderColor: colors.blue,
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 11,
    },
    notSelected: {
        backgroundColor: colors.darkGray,
        paddingHorizontal: 10,
        paddingVertical: 11,
        borderWidth: 2,
        borderColor: colors.darkGray,

    },
    discourageddButton: {
        backgroundColor: colors.darkGray,
        paddingHorizontal: 45,
        paddingVertical: 11,
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
        // fontWeight: "bold",
        textAlign: "center",
    },
  });
  
  export default PillSelectable;
  