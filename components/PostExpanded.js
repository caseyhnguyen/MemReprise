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
  sendTo
}) => {
  const [captionText, setCaptionText] = useState("");
  const [number, onChangeNumber] = React.useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const { setPostMade } = useContext(PostContext);
  const navigation = useNavigation();

  const onPress = () => {
    navigation.goBack();
  };

  let songId = songData.externalUrl.substring(31);
  let embedUrl = "https://open.spotify.com/embed/track/" + songId;

  let locationShort = sendTo.location_name;
  if (sendTo.location_name.length > 25) {
    locationShort = sendTo.location_name.substring(0, 25);
    locationShort += "...";
  }
  return (
    <View style={styles.container}>
      {/* <Pressable style={styles.postButton} onPress={onPress}>
        <Text style={styles.postButtonText}>back</Text>
      </Pressable> */}
      {songData && songData.title && (
        <Pressable style={styles.expandedOuterContainer}>
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
              source={sendTo.recipient_img}
              style={styles.profilePic}
            />
            <View name="userTag">
              <Text style={styles.title}>{sendTo.recipient_name}</Text>
              {/* <Text style={styles.artist}>Username</Text> */}
              <Text name="time" style={styles.smallText}>
                {sendTo.formattedTimestamp}
              </Text>
              <Text name="time" style={styles.smallText}>
                {locationShort}
              </Text>
          </View>

        </View>

          
          {sendTo.message && (
            <View style={styles.captionContainer}>
              <Text style={styles.caption}>{sendTo.message}</Text>
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
    marginBottom: 20,

  },
  spotifyEmbed: {
    width: "auto",
    borderRadius: 14,
  },
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
