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
  ActivityIndicator,
} from "react-native";
import images from "../assets/Images/images";

import Post from "../components/Post";
import { colors } from "../assets/Themes/colors";
import { styles as defaultStyles } from "../assets/Themes/default_style";
import { PostContext } from "../utils/PostContext";
import Header from "../components/Header";
import { supabase } from "../utils/supabaseClient";

import { textStyles } from "../assets/Themes/Text";

const windowWidth = Dimensions.get("window").width;
const gap = 12;
const itemPerRow = 2;
const totalGapSize = (itemPerRow - 1) * gap;
const rowWidth = windowWidth * 0.8 + totalGapSize;

const FeedScreen = ({ navigation }) => {
  const { postMade } = useContext(PostContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Mapping function for emotion icons
  const getEmotionIconSource = (iconId) => {
    const emotionIconMap = {
      4: images.happyEmoji.pic,
      5: images.superHappyEmoji.pic,
      6: images.sadEmoji.pic,
      7: images.superSadEmoji.pic,
      // ... add other emotion mappings as needed
    };

    return emotionIconMap[iconId] || null;
  };

  // Mapping function for activity icons
  const getActivityIconSource = (iconId) => {
    const activityIconMap = {
      12: images.working.pic
      13: images.commuting.pic,
      14: images.eating.pic,
      15: images.exercising.pic,
      // ... add other activity mappings as needed
    };

    return activityIconMap[iconId] || null;
  };

  // Mapping function for theme icons
  const getThemeIconSource = (iconId) => {
    const themeIconMap = {
      8: images.matchaLatte.pic,
      9: images.expresso.pic,
      10: images.hotChocolate.pic,
      11: images.lemonade.pic,
      // ... add other theme mappings as needed
    };

    return themeIconMap[iconId] || null;
  };

  const parsePosts = (fetchedPosts) => {
    return fetchedPosts.map((post) => ({
      ...post,
      emotionIconSrc: getEmotionIconSource(post.emotion_icon_id),
      activityIconSrc: getActivityIconSource(post.activity_icon_id),
      themeIconSrc: getThemeIconSource(post.theme_icon_id),
      songData: post.song_data ? JSON.parse(post.song_data) : null,
      caption: post.caption,
      themeIconLabel: post.theme_icon_text,
      emotionIconLabel: post.emotion_icon_text,
      activityIconLabel: post.activity_icon_text,
    }));
  };

  useEffect(() => {
    fetchInitialPosts();
  }, [postMade]);

  const fetchInitialPosts = async () => {
    setLoading(true);
    try {
      let { data: fetchedPosts, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        throw error;
      }

      if (fetchedPosts) {
        const parsedPosts = parsePosts(fetchedPosts);
        setPosts(parsedPosts);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMorePosts = async () => {
    if (loading) return;
    setLoading(true);

    try {
      // Determine the ID of the last post currently loaded
      const lastPostId = posts.length > 0 ? posts[posts.length - 1].id : null;

      if (lastPostId) {
        let { data: additionalPosts, error } = await supabase
          .from("posts")
          .select("*")
          // Fetch posts with an ID less than the last post's ID
          .lt("id", lastPostId)
          .order("id", { ascending: false })
          .limit(10); // Limit the number of posts fetched in each call

        if (error) {
          throw error;
        }

        if (additionalPosts) {
          setPosts((prevPosts) => [...prevPosts, ...additionalPosts]);
        }
      }
    } catch (error) {
      console.error("Error fetching more posts:", error);
      // Optionally, handle the error in your UI
    } finally {
      setLoading(false);
    }
  };

  const renderPost = ({ item }) => (
    <Post
      songData={item.songData}
      caption={item.caption}
      emotionIconSrc={item.emotionIconSrc}
      activityIconSrc={item.activityIconSrc}
      themeIconSrc={item.themeIconSrc}
      themeIconLabel={item.themeIconLabel}
      emotionIconLabel={item.emotionIconLabel}
      activityIconLabel={item.activityIconLabel}
      dimensions={{
        windowWidth: Dimensions.get("window").width,
        gap: 12,
        totalGapSize: 12 * (2 - 1),
        itemPerRow: 2,
        rowWidth: Dimensions.get("window").width * 0.8 + 12 * (2 - 1),
      }}
    />
  );

  // const renderPost = ({ item }) => (
  //   <Post
  //     songData={item.songData}
  //     caption={item.caption}
  //     artistNames={item.songData.artists.join(", ")} // Assuming artists is an array
  //     imageUrl={item.songData.imageUrl}
  //     playedAt={item.songData.played_at}
  //     themeIconId={item.theme_icon_id}
  //     themeIconText={item.theme_icon_text}
  //     emotionIconId={item.emotion_icon_id}
  //     emotionIconText={item.emotion_icon_text}
  //     activityIconId={item.activity_icon_id}
  //     activityIconText={item.activity_icon_text}
  //     visibility={item.visibility}
  //     dimensions={{
  //       windowWidth,
  //       gap: 12,
  //       totalGapSize: 12 * (2 - 1),
  //       itemPerRow: 2,
  //       rowWidth: windowWidth * 0.8 + 12 * (2 - 1),
  //     }}
  //     // ... other props as needed
  //   />
  // );

  return (
    <SafeAreaView style={defaultStyles.container}>
      {!postMade && (
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("Tracks")}
          >
            <Text style={styles.postText}>Post</Text>
          </Pressable>
        </View>
      )}
      <Text style={textStyles.subHeader}>Posts</Text>
      {loading ? (
        <ActivityIndicator size="large" color={colors.white} />
      ) : (
        <FlatList
          data={posts}
          renderItem={renderPost}
          ItemSeparatorComponent={() => (
            <View style={{ height: windowWidth * 0.05 }} />
          )}
          keyExtractor={(item, index) =>
            item.id?.toString() || index.toString()
          }
          onEndReached={fetchMorePosts}
          onEndReachedThreshold={0.5}
        />
      )}
    </SafeAreaView>
  );
};

// const FeedScreen = ({ route, navigation }) => {
//   const caption = route.params?.caption || "";

//   const songData = route.params?.songData || {};

//   console.log("IN FEED");
//   console.log(songData);
//   const artistNames =
//     songData && songData.artists
//       ? songData.artists.join(", ")
//       : "Unknown Artist";
//   const { postMade } = useContext(PostContext);
//   const [posts, setPosts] = useState([]); // State to hold posts
//   const [loading, setLoading] = useState(false); // State to manage loading more posts

//   useEffect(() => {
//     if (postMade) {
//       fetchInitialPosts();
//     }
//   }, [postMade]);

//   const fetchInitialPosts = async () => {
//     // TODO: Fetch initial posts logic here
//   };

//   const fetchMorePosts = async () => {
//     if (loading) return;
//     setLoading(true);
//     // TODO: Fetch more posts logic here
//     setLoading(false);
//   };

//   const renderPost = ({ item }) => (
//     <Post
//       // Pass the necessary props to the Post component
//       songData={item}
//       dimensions={{
//         windowWidth: windowWidth,
//         gap: 12,
//         totalGapSize: 12 * (2 - 1),
//         itemPerRow: 2,
//         rowWidth: windowWidth * 0.8 + 12 * (2 - 1),
//       }}
//     />
//   );

//   return (
//     <SafeAreaView style={defaultStyles.container}>
//       {postMade ? (
//         <View>
//           <Text style={textStyles.subHeader}>Posts</Text>
//           <Post
//             dimensions={{
//               windowWidth: windowWidth,
//               gap: gap,
//               totalGapSize: totalGapSize,
//               itemPerRow: itemPerRow,
//               rowWidth: rowWidth,
//             }}
//             songData={songData}
//           ></Post>
//           <FlatList
//             data={posts}
//             renderItem={renderPost}
//             keyExtractor={(item, index) =>
//               item.id?.toString() || index.toString()
//             }
//             onEndReached={fetchMorePosts}
//             onEndReachedThreshold={0.5}
//             ListFooterComponent={
//               loading && <ActivityIndicator size="large" color={colors.white} />
//             }
//           />
//         </View>
//       ) : (
//         <>
//           <View style={styles.buttonContainer}>
//             <Pressable
//               style={styles.button}
//               onPress={() => navigation.navigate("Tracks")}
//             >
//               <Text style={styles.postText}>Post</Text>
//             </Pressable>
//           </View>
//           <Text style={textStyles.subHeader}>Posts</Text>
//           <Post
//             dimensions={{
//               windowWidth: windowWidth,
//               gap: gap,
//               totalGapSize: totalGapSize,
//               itemPerRow: itemPerRow,
//               rowWidth: rowWidth,
//             }}
//             songData={songData}
//           ></Post>
//         </>
//       )}
//     </SafeAreaView>
//   );
// };

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
