import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import { colors } from "../assets/Themes/colors";
import { trackEvent } from "@aptabase/react-native";

const PillSelectableDouble = (props) => {
  const handlePress = () => {
    // Log the selection event with details about the selected option
    trackEvent("Double Selection Made", {
      topText: props.topText,
      bottomText: props.bottomText,
      isSelected: props.isSelected,
    });

    // If there's an onPress prop provided, call it
    if (props.onPress) {
      props.onPress();
    }
  };

  return (
    <Pressable
      style={[
        styles.button,
        styles.pressableContainer,
        props.isSelected ? styles.isSelected : styles.notSelected,
      ]}
      onPress={handlePress}
      key={props.key}
    >
      <Text numberOfLines={1} style={styles.topText}>
        {props.topText}
      </Text>
      <Text numberOfLines={1} style={styles.bottomText}>
        {props.bottomText}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "left",
    borderRadius: 10,
    marginTop: 8,
    marginBottom: 8,
  },
  isSelected: {
    backgroundColor: colors.black,
    borderColor: colors.blue,
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  notSelected: {
    backgroundColor: colors.darkGray,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 2,
    borderColor: colors.darkGray,
  },
  discourageddButton: {
    backgroundColor: colors.darkGray,
    paddingHorizontal: 45,
    paddingVertical: 11,
  },
  topText: {
    color: colors.white,
    fontSize: 16,
    textAlign: "left",
    fontSize: 14,
  },
  bottomText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 14,
  },
  pressableContainer: {
    display: "flex",
    flexDirection: "column",
    width: 100,
    marginRight: 5,
  },
});

export default PillSelectableDouble;
