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
import PillPressable from "../components/PillPressable";
import Header2 from "../components/Header2";
import Header1 from "../components/Header1";
import { StatusBar } from "react-native";
import Label from "../components/Label";

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
    };

    return emotionIconMap[iconId] || null;
  };

  // Mapping function for activity icons
  const getActivityIconSource = (iconId) => {
    const activityIconMap = {
      12: images.working.pic,
      13: images.commuting.pic,
      14: images.eating.pic,
      15: images.exercising.pic,
    };

    return activityIconMap[iconId] || null;
  };

  // Mapping function for theme icons
  const getThemeIconSource = (iconId) => {
    const themeIconMap = {
      8: images.matchaLatte.pic,
      9: images.espresso.pic,
      10: images.hotChocolate.pic,
      11: images.lemonade.pic,
    };

    return themeIconMap[iconId] || null;
  };

  const parsePosts = (fetchedPosts) => {
    return fetchedPosts.map((post) => {
      let formattedTimestamp = "Unknown Time";

      if (post.created_at) {
        const createdAt = new Date(post.created_at);
        const timeOptions = {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        };
        const dateOptions = {
          year: "2-digit",
          month: "2-digit",
          day: "2-digit",
        };

        const formattedTime = new Intl.DateTimeFormat(
          "en-US",
          timeOptions
        ).format(createdAt);
        const formattedDate = new Intl.DateTimeFormat(
          "en-US",
          dateOptions
        ).format(createdAt);

        formattedTimestamp = `${formattedTime} • ${formattedDate}`;
      }

      return {
        ...post,
        userName: post.userName || "Unknown User",
        emotionIconSrc: getEmotionIconSource(post.emotion_icon_id),
        activityIconSrc: getActivityIconSource(post.activity_icon_id),
        themeIconSrc: getThemeIconSource(post.theme_icon_id),
        songData: post.song_data ? JSON.parse(post.song_data) : null,
        caption: post.caption || "",
        themeIconLabel: post.theme_icon_text || "",
        emotionIconLabel: post.emotion_icon_text || "",
        activityIconLabel: post.activity_icon_text || "",
        formattedTimestamp,
      };
    });
  };

  useEffect(() => {
    // console.log(`postMade: ${postMade}`);
    fetchInitialPosts();
  }, [postMade]);

  const fetchInitialPosts = async () => {
    setLoading(true);
    try {
      // Fetch the most recent user's name
      let { data: users, error: userError } = await supabase
        .from("users")
        .select("user")
        .order("created_at", { ascending: false })
        .limit(1);

      if (userError) {
        throw userError;
      }

      const mostRecentUserName = users?.[0]?.user || "Unknown User";

      // Now fetch the posts
      let { data: fetchedPosts, error: postsError } = await supabase
        .from("posts")
        .select(
          `
          *,
          users:user_id (id, user)
        `
        )
        .order("created_at", { ascending: false });

      if (postsError) {
        throw postsError;
      }

      if (fetchedPosts) {
        // console.log(fetchedPosts);
        // Apply the most recent username to the most recent post
        if (fetchedPosts.length > 0) {
          fetchedPosts[0].user = { user: mostRecentUserName };
        }
        const parsedPosts = parsePosts(fetchedPosts, mostRecentUserName);
        setPosts(parsedPosts);
      }
    } catch (error) {
      console.error("Error fetching posts and users:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMorePosts = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const lastPostId = posts.length > 0 ? posts[posts.length - 1].id : null;

      if (lastPostId) {
        let { data: additionalPosts, error } = await supabase
          .from("posts")
          .select(
            `
            *,
            users:user_id (id, user)
          `
          )
          .lt("id", lastPostId)
          .order("id", { ascending: false })
          .limit(10);

        if (error) {
          throw error;
        }

        if (additionalPosts) {
          const parsedPosts = parsePosts(additionalPosts);
          setPosts((prevPosts) => [...prevPosts, ...parsedPosts]);
        }
      }
    } catch (error) {
      console.error("Error fetching more posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderPost = ({ item }) => (
    <Post
      userName={item.userName}
      formattedTimestamp={item.formattedTimestamp}
      songData={item.songData}
      caption={item.caption}
      // emotionIconSrc={item.emotionIconSrc}
      // activityIconSrc={item.activityIconSrc}
      // themeIconSrc={item.themeIconSrc}
      // themeIconLabel={item.themeIconLabel}
      // emotionIconLabel={item.emotionIconLabel}
      // activityIconLabel={item.activityIconLabel}
      dimensions={{
        windowWidth: Dimensions.get("window").width,
        gap: 12,
        totalGapSize: 12 * (2 - 1),
        itemPerRow: 2,
        rowWidth: Dimensions.get("window").width * 0.8 + 12 * (2 - 1),
      }}
    />
  );

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} translucent={true} />
      <SafeAreaView style={defaultStyles.container}>
        {/* <StatusBar barStyle = "light-content"  translucent = {true}/> */}

        {!postMade &&
          // <View style={styles.buttonContainer}>

          <View>
            {/* <Header1 text="Gift feed" /> */}

            <PillPressable
              onPress={() => navigation.navigate("Share a Music Box")}
              text="Leave a music box"
              isSpotify={false}
              disabled={false}
            />

            {/* <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("Tracks")}
          >
            <Text style={styles.postText}>Post</Text>
          </Pressable> */}
            <Label text="Recent gifts" />
          </View>
        }


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
    </>
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
  // postText: {
  //   textAlign: "center",
  //   fontWeight: "500",
  //   fontSize: 14,
  //   letterSpacing: -0.41,
  //   color: "#595959",
  // },
  // buttonSpacer: {
  //   width: 24,
  // },
  oldPostsText: {
    // marginTop: 16,
    fontSize: 20,
    color: colors.offWhite,
    alignSelf: "center",
    fontWeight: "bold",
  },
});

export default FeedScreen;
