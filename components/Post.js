import React, { useContext, useState, useEffect } from "react";
import {
  SafeAreaView,
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
import { postStyles as styling } from "../assets/Themes/postStyle";
import { PostContext } from "../utils/PostContext";
import { colors } from "../assets/Themes/colors";

const windowWidth = Dimensions.get("window").width;
const gap = 12;
const itemPerRow = 2;
const totalGapSize = (itemPerRow - 1) * gap;
const rowWidth = windowWidth * 0.8 + totalGapSize;

const Post = ({
  userName,
  formattedTimestamp,
  songData,
  caption,
  emotionIconSrc,
  activityIconSrc,
  themeIconSrc,
  themeIconLabel,
  emotionIconLabel,
  activityIconLabel,
}) => {
  const styles = styling({
    windowWidth,
    gap,
    totalGapSize,
    itemPerRow,
    rowWidth,
  });
  const navigation = useNavigation();
  const { setPostMade } = useContext(PostContext);

  const onPress = () => {
    navigation.navigate("PostExpandScreen", {
      userName,
      formattedTimestamp,
      songData,
      caption,
      themeIconSrc,
      emotionIconSrc,
      activityIconSrc,
      themeIconLabel,
      emotionIconLabel,
      activityIconLabel,
    });
  };

  return (
    <View style={styles.outerContainer}>
      {songData && songData.title && (
        <Pressable onPress={onPress}>
          <View style={styles.metaData}>
            <Image
              source={{
                uri: songData.imageUrl || images.defaultProfilePic.pic,
              }}
              style={styles.profilePic}
            />
            <View>
              <Text style={styles.title}>{userName}</Text>
              <Text style={styles.artist}>Username</Text>
            </View>
            <View style={styles.time}>
              <Text style={styles.smallText}>{formattedTimestamp}</Text>
            </View>
          </View>

          <View style={styles.postContainer}>
            <View style={styles.songInfo}>
              <Image
                source={{
                  uri: songData.imageUrl || images.defaultAlbumCover.pic,
                }}
                style={styles.albumCover}
              />
              <Text style={styles.title} numberOfLines={2}>
                {songData.title}
              </Text>
              <Text style={styles.artist} numberOfLines={1}>
                {songData.artists?.join(", ") || "Unknown Artist"}
              </Text>
              <Text style={styles.caption}>{caption}</Text>
            </View>

            <View style={styles.smallSelectionCol}>
              <Image source={themeIconSrc} style={styles.smallImage} />
              <Text style={styles.smallText}>{themeIconLabel}</Text>
              <Image source={emotionIconSrc} style={styles.smallImage} />
              <Text style={styles.smallText}>{emotionIconLabel}</Text>
              <Image source={activityIconSrc} style={styles.smallImage} />
              <Text style={styles.smallText}>{activityIconLabel}</Text>
            </View>
          </View>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: colors.offWhite75,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 10,
    width: windowWidth * 0.95,
    height: windowWidth * 0.32,
    shadowColor: colors.darkGray,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  postContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    shadowColor: colors.darkGray,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});

export default Post;
