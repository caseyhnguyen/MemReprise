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

// const windowWidth = Dimensions.get("window").width;
// // dimensions for selectionGrid styling
// const gap = 12;
// const itemPerRow = 2;
// const totalGapSize = (itemPerRow - 1) * gap;
// const rowWidth = windowWidth * 0.8 + totalGapSize;

const PostExpanded = ({ dimensions, songData }) => {
  const [captionText, setCaptionText] = useState("");
  const [number, onChangeNumber] = React.useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const { setPostMade } = useContext(PostContext);
  const options = [
    { label: "Public", value: "option1" },
    { label: "Friends", value: "option2" },
    { label: "Only Me", value: "option3" },
    // Add more options as needed
  ];

  const styles = styling(dimensions);

  const navigation = useNavigation();

  console.log("In POST");
  console.log(songData);

  const onPress = () => {
    navigation.goBack();
  };

  return (
    <View>
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
              <Text style={styles.title}>Display Name</Text>
              <Text style={styles.artist}>Username</Text>
            </View>

            <View style={styles.time}>
              <Text name="time" style={styles.smallText}>
                10:21 AM • 12/01/23
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
              <Image
                source={images.matchaLatte.pic}
                style={styles.smallImage}
              />
              <Text style={styles.smallText}>{images.matchaLatte.label}</Text>
              <Image
                source={images.superHappyEmoji.pic}
                style={styles.smallImage}
              />
              <Text style={styles.smallText}>
                {images.superHappyEmoji.label}
              </Text>

              <Image source={images.working.pic} style={styles.smallImage} />
              <Text style={styles.smallText}>{images.working.label}</Text>
            </View>
          </View>

          {/* Why is this rendered outside the parent pressable? It's nested inside it? */}
          <View style={styles.captionContainer}>
            <Text style={styles.caption}>Caption</Text>
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default PostExpanded;
