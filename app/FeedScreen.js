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
  FlatList,
} from "react-native";
import images from "../assets/Images/images";

import Post from "../components/Post";
import { colors } from "../assets/Themes/colors";
import { styles as defaultStyles } from "../assets/Themes/default_style";
import { PostContext } from "../utils/PostContext";
import Header from "../components/Header";

import { textStyles } from "../assets/Themes/Text";

const windowWidth = Dimensions.get("window").width;

const gap = 12;
const itemPerRow = 2;
const totalGapSize = (itemPerRow - 1) * gap;
const rowWidth = windowWidth * 0.8 + totalGapSize;

const FeedScreen = ({ route, navigation }) => {
  const caption = route.params?.caption || "";

  const songData = route.params?.songData || {};

  console.log("IN FEED");
  console.log(songData);
  const artistNames =
    songData && songData.artists
      ? songData.artists.join(", ")
      : "Unknown Artist";
  const { postMade } = useContext(PostContext);
  const [posts, setPosts] = useState([]); // State to hold posts
  const [loading, setLoading] = useState(false); // State to manage loading more posts

  useEffect(() => {
    if (postMade) {
      fetchInitialPosts();
    }
  }, [postMade]);

  const fetchInitialPosts = async () => {
    // TODO: Fetch initial posts logic here
  };

  const fetchMorePosts = async () => {
    if (loading) return;
    setLoading(true);
    // TODO: Fetch more posts logic here
    setLoading(false);
  };

  const renderPost = ({ item }) => (
    <Post
      // Pass the necessary props to the Post component
      songData={item}
      dimensions={{
        windowWidth: windowWidth,
        gap: 12,
        totalGapSize: 12 * (2 - 1),
        itemPerRow: 2,
        rowWidth: windowWidth * 0.8 + 12 * (2 - 1),
      }}
    />
  );

  return (
<SafeAreaView style={defaultStyles.container}>
  {postMade ? (
    <View>
      <Text style={textStyles.subHeader}>Posts</Text>
      <Post
        dimensions={{
          windowWidth: windowWidth,
          gap: gap,
          totalGapSize: totalGapSize,
          itemPerRow: itemPerRow,
          rowWidth: rowWidth,
        }}
        songData={songData}
      ></Post>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item, index) =>
          item.id?.toString() || index.toString()
        }
        onEndReached={fetchMorePosts}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading && <ActivityIndicator size="large" color={colors.white} />
        }
      />
    </View>
  ) : (
    <>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Tracks")}
        >
          <Text style={styles.postText}>Post</Text>
        </Pressable>
      </View>
      <Text style={textStyles.subHeader}>Posts</Text>
      <Post
        dimensions={{
          windowWidth: windowWidth,
          gap: gap,
          totalGapSize: totalGapSize,
          itemPerRow: itemPerRow,
          rowWidth: rowWidth,
        }}
        songData={songData}
      ></Post>
    </>
  )}
</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: windowWidth,
    height: windowWidth * 0.2,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: "5%",
    // justifyContent: "space-between",
    width: windowWidth * 0.4,
    height: windowWidth * 0.1,
  },
  button: {
    borderRadius: 15,
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.offWhite75,
    shadowColor: colors.darkGray,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
  postText: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 14,
    letterSpacing: -0.41,
    color: "#595959",
  },
  buttonSpacer: {
    width: 24,
  },
  oldPostsText: {
    // marginTop: 16,
    fontSize: 20,
    color: colors.offWhite,
    alignSelf: "center",
    fontWeight: "bold",
  },
});

export default FeedScreen;
