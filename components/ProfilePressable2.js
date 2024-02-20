import React from "react"
import {
  Text,
  Image,
  Pressable,
  StyleSheet
} from "react-native"
import { colors } from '../assets/Themes/colors'

const ProfilePressable2 = (props) => {
  console.log(props.image);
  let imageUrl = "" + props.image;
  return (
    <Pressable
      style={styles.container}
      key={props.key}
    >
      <Image source={props.image} style={[styles.image, props.isSelected ? styles.isSelected : styles.notSelected]} />
      <Text style={styles.name}>{props.name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  image: {
    width: 88,
    height: 88,
    borderRadius: 100
  },
  name: {
    color: colors.white,
    marginTop: 10,
  }
});

export default ProfilePressable2;