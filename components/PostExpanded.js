import React, { useContext, useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import images from "../assets/Images/images";
// import { postStyles as styling } from "../assets/Themes/postStyle";
import { PostContext } from "../utils/PostContext";
import PillPressable from "./PillPressable";
import { profiles } from '../app/_data.js'
import Label from "../components/Label";
import { WebView } from "react-native-webview";
import { colors } from "../assets/Themes/colors";



const PostExpanded = ({
  dimensions,
  songData,
  caption,
  themeIconSrc,
  emotionIconSrc,
  activityIconSrc,
  themeIconLabel,
  emotionIconLabel,
  activityIconLabel,
  userName,
  formattedTimestamp,
}) => {
  const [captionText, setCaptionText] = useState("");
  const [number, onChangeNumber] = React.useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const { setPostMade } = useContext(PostContext);

  // const styles = styling(dimensions);

  const navigation = useNavigation();

  const onPress = () => {
    navigation.goBack();
  };

  let recipient = profiles[Math.floor(Math.random() * profiles.length)];

  let songId = songData.externalUrl.substring(31);
  let embedUrl = "https://open.spotify.com/embed/track/" + songId;
  console.log(songData.externalUrl);
  return (
    <View style={styles.container}>
      {/* <Pressable style={styles.postButton} onPress={onPress}>
        <Text style={styles.postButtonText}>back</Text>
      </Pressable> */}
      {songData && songData.title && (
        <Pressable onPress={onPress} style={styles.expandedOuterContainer}>
          <View style={styles.spotifyContainer}>
            <WebView
              source={{
                uri: embedUrl,
              }}
              style={styles.spotifyEmbed}
            />
          </View>
          <Label text="Sent to"/>

          <View style={styles.metaData}>

            <Image
              source={recipient.image}
              style={styles.profilePic}
            />
            <View name="userTag">
              <Text style={styles.title}>{recipient.name}</Text>
              {/* <Text style={styles.artist}>Username</Text> */}
              <Text name="time" style={styles.smallText}>
                {formattedTimestamp}
              </Text>
          </View>

            {/* <View style={styles.time}>
              <Text name="time" style={styles.smallText}>
                {formattedTimestamp}
              </Text>
            </View> */}
          </View>

          
          {caption && (
            <View style={styles.captionContainer}>
              <Text style={styles.caption}>{caption}</Text>
            </View>
          )}
          

        <PillPressable onPress={onPress} text="Back" />
        </Pressable>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
  spotifyContainer: {
    flexDirection: "col",
    paddingVertical: 15,
    // marginBottom: 10,
    width: "100%",
    textAlign: "center",
    color: colors.white,
    height: 110,
  },
  spotifyEmbed: {
    width: "auto",
    borderRadius: 14,
  },
  // outerContainer: {
  //   justifyContent: "flex-start",
  //   flexDirection: "column",
  //   backgroundColor: colors.darkGray,
  //   borderRadius: 10,
  //   width: "90%",
  //   // height: dimensions.rowWidth * 1.25,
  //   paddingVertical: 25
  // },
  expandedOuterContainer: {
    justifyContent: "flex-start",
    flexDirection: "column",
    backgroundColor: colors.darkGray,
    borderRadius: 10,
    width: "100%",
    height: "auto",
    padding: 20,
    paddingBottom: 35,
  },
  captionContainer: {
    marginLeft: 8,
    paddingHorizontal: 15,
    borderLeftWidth: 3,
    borderLeftColor: colors.blue,
    marginBottom: 30,
  },
  metaData: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    color: colors.white,
    marginTop: 10,
    marginBottom: 30,
  },

  profilePic: {
    width: 65,
    height: 65,
    borderRadius: 200,
    marginLeft: -8
  },

  postContainer: {
    paddingHorizontal: 15,
    width: "100%"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
    marginBottom: 5
  },
  artist: {
    fontSize: 16,
    color: colors.white,
  },

  caption: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: 10,
    paddingBottom: 10,
    width: "100%",
    color: colors.white,
    fontSize: 16,
  },

  songInfo: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    // paddingLeft: "7.5%",
    paddingTop: "5%",
    width: "75%",
  },
  selectionGrid: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 10,
  },
  postInProgress: {},
  boldText: {
    fontSize: 15,
    fontWeight: "bold",
    alignContent: "center",
  },
  time: {
    fontSize: 12,
    color: colors.white,
  },
  smallSelectionCol: {
    alignItems: "center",
    flexDirection: "column",
  },
  smallText: {
    color: colors.white
  }
});



export default PostExpanded;
