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
import { postStyles as styling } from "../assets/Themes/postStyle";
import { PostContext } from "../utils/PostContext";

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

  const styles = styling(dimensions);

  const navigation = useNavigation();

  const onPress = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1 }}>
      <Pressable style={styles.postButton} onPress={onPress}>
        <Text style={styles.postButtonText}>back</Text>
      </Pressable>
      {songData && songData.title && (
        <Pressable onPress={onPress} style={styles.expandedOuterContainer}>
          <View style={styles.metaData}>
            <Image
              source={{ uri: songData.imageUrl }}
              style={styles.profilePic}
            />

            <View name="userTag">
              <Text style={styles.title}>{userName}</Text>
              <Text style={styles.artist}>Username</Text>
            </View>

            <View style={styles.time}>
              <Text name="time" style={styles.smallText}>
                {formattedTimestamp}
              </Text>
            </View>
          </View>

          <View style={styles.postContainer}>
            <View style={styles.songInfo}>
              <Image
                source={{ uri: songData.imageUrl }}
                style={styles.albumCover}
              />

              <Text style={styles.title} numberOfLines={2}>
                {songData.title}
              </Text>
              <Text style={styles.artist} numberOfLines={1}>
                {Array.isArray(songData.artists)
                  ? songData.artists.join(", ")
                  : songData.artists}
              </Text>
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

          <View style={styles.captionContainer}>
            <Text style={styles.caption}>{caption}</Text>
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default PostExpanded;
