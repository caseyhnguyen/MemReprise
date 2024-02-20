import React from "react";
import {
  Text,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import images from "../assets/Images/images";
import { colors } from "../assets/Themes/colors";
import Icon from 'react-native-vector-icons/FontAwesome5'


// const PillPressable = ({ text, isSpotify, }) => {
const SeeMore = (props) => {
    // let isSpotify = props.isSpotify;
    let text = "" + props.text;
    return (
        <Pressable
            style={styles.seeMore}
            onPress={props.onPress}
            key={props.key}
        >
            <Text style={styles.buttonText}>See more</Text>
            <Icon name='chevron-right' style={styles.arrow} />

        </Pressable>
    );
  };
  
  const styles = StyleSheet.create({
    seeMore: {
        // backgroundColor: colors.pink,
        flexDirection: "row",
        justifyContent: "right",
        alignItems: "right",
        marginTop: 8,
      },
    buttonText: {
        // textTransform: "uppercase",
        color: colors.pink,
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'right',
        alignSelf: 'flex-end',
        marginLeft: 'auto'
    },
    arrow: {
    color: colors.pink,
    fontSize: 16,
    marginLeft: 10
    }
  });
  
  export default SeeMore;
  