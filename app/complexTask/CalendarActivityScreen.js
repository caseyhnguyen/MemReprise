import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
  FlatList,
  ActivityIndicator,
} from "react-native";
// import images from "../../assets/Images/images";
import images from "../../assets/Images/images";
import albums from "../../assets/Images/albums";

import { colors } from "../../assets/Themes/colors";
import Header from "../../components/Header";
import { Colors } from "react-native/Libraries/NewAppScreen";
import RNPickerSelect from "react-native-picker-select";
import { supabase } from "../../utils/supabaseClient";

// Get the window dimensions
const windowWidth = Dimensions.get("window").width;
const imageSize = (windowWidth - 50) / 4;

const allData = [
  { id: "1", source: albums.alb1, month: "NOV", date: "2" },
  { id: "2", source: albums.alb2, month: "NOV", date: "3" },
  { id: "3", source: albums.alb3, month: "NOV", date: "5" },
  { id: "4", source: albums.alb1, month: "NOV", date: "6" },
  { id: "5", source: albums.alb6, month: "NOV", date: "7" },
  { id: "6", source: albums.alb10, month: "NOV", date: "8" },
  { id: "7", source: albums.alb5, month: "NOV", date: "9" },
  { id: "8", source: albums.alb7, month: "NOV", date: "11" },
  { id: "9", source: albums.alb8, month: "NOV", date: "12" },
  { id: "10", source: albums.alb1, month: "NOV", date: "14" },
  { id: "11", source: albums.alb3, month: "NOV", date: "15" },
  { id: "12", source: albums.alb6, month: "NOV", date: "16" },
  { id: "13", source: albums.alb1, month: "NOV", date: "18" },
  { id: "14", source: albums.alb6, month: "NOV", date: "19" },
  { id: "15", source: albums.alb5, month: "NOV", date: "20" },
  { id: "16", source: albums.alb3, month: "NOV", date: "21" },
  { id: "17", source: albums.alb10, month: "NOV", date: "22" },
  { id: "18", source: albums.alb8, month: "NOV", date: "23" },
];
const staticData = {
  reprise: allData,
  activity: [
    { id: "1", source: albums.alb1, month: "NOV", date: "2" },
    { id: "2", source: albums.alb2, month: "NOV", date: "3" },
    { id: "4", source: albums.alb1, month: "NOV", date: "6" },
    { id: "5", source: albums.alb6, month: "NOV", date: "7" },
    { id: "6", source: albums.alb10, month: "NOV", date: "8" },
    { id: "7", source: albums.alb5, month: "NOV", date: "9" },
  ],
  time: [
    { id: "8", source: albums.alb7, month: "NOV", date: "11" },
    { id: "9", source: albums.alb8, month: "NOV", date: "12" },
    { id: "10", source: albums.alb1, month: "NOV", date: "14" },
    { id: "11", source: albums.alb3, month: "NOV", date: "15" },
    { id: "12", source: albums.alb6, month: "NOV", date: "16" },
    { id: "13", source: albums.alb1, month: "NOV", date: "18" },
    { id: "14", source: albums.alb6, month: "NOV", date: "19" },
    { id: "15", source: albums.alb5, month: "NOV", date: "20" },
    { id: "16", source: albums.alb3, month: "NOV", date: "21" },
  ],
  feeling: [
    { id: "14", source: albums.alb6, month: "NOV", date: "19" },
    { id: "16", source: albums.alb3, month: "NOV", date: "21" },
    { id: "17", source: albums.alb10, month: "NOV", date: "22" },
    { id: "18", source: albums.alb8, month: "NOV", date: "23" },
  ],
};

const CalendarActivityScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedValue, setSelectedValue] = useState(null);

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

      // Parsing song_data to extract necessary details
      let songDataParsed = {};
      if (post.song_data) {
        try {
          songDataParsed = JSON.parse(post.song_data);
        } catch (error) {
          console.error("Error parsing song_data:", error);
        }
      }

      return {
        ...post,
        userName: post.userName || "Unknown User",
        emotionIconSrc: getEmotionIconSource(post.emotion_icon_id),
        activityIconSrc: getActivityIconSource(post.activity_icon_id),
        themeIconSrc: getThemeIconSource(post.theme_icon_id),
        songData: songDataParsed,
        source: songDataParsed.imageUrl || "",
        caption: post.caption || "",
        themeIconLabel: post.theme_icon_text || "",
        emotionIconLabel: post.emotion_icon_text || "",
        activityIconLabel: post.activity_icon_text || "",
        formattedTimestamp,
      };
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("posts")
        .select("*") // Select all fields from posts
        .order("created_at", { ascending: false })
        .limit(Object.keys(staticData.reprise).length);

      if (error) {
        throw error;
      }

      // Process each post using parsePosts function
      const processedPosts = parsePosts(data);

      // Merge image URLs into staticData
      const mergedData = Object.keys(staticData).reduce((acc, key) => {
        acc[key] = staticData[key].map((item, index) => {
          const processedItem = processedPosts[index] || {};
          return {
            ...item,
            ...processedItem,
            source: processedItem.source || item.source, // Ensure image source is correctly assigned
          };
        });
        return acc;
      }, {});

      // console.log("Merged Data:", mergedData);

      setPosts(mergedData);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => {
    const onPress = () => {
      navigation.navigate("PostExpandScreen", {
        userName: item.userName,
        formattedTimestamp: item.formattedTimestamp,
        songData: item.songData,
        caption: item.caption,
        themeIconSrc: item.themeIconSrc,
        emotionIconSrc: item.emotionIconSrc,
        activityIconSrc: item.activityIconSrc,
        themeIconLabel: item.themeIconLabel,
        emotionIconLabel: item.emotionIconLabel,
        activityIconLabel: item.activityIconLabel,
      });
    };

    console.log("Item in renderItem:", item);
    const imageSource =
      typeof item.source === "string" ? { uri: item.source } : item.source;

    // console.log("imageSource in renderItem:", { imageSource });

    return (
      <Pressable onPress={onPress} style={styles.itemContainer}>
        <Image source={{ uri: item.source }} style={styles.image} />
        <View style={styles.textBox}>
          <Text style={styles.monthText}>{item.month}</Text>
          <Text style={styles.dateText}>{item.date}</Text>
        </View>
      </Pressable>
    );
  };

  const dataSource = selectedValue ? posts[selectedValue] : posts["reprise"];

  console.log("DataSource for FlatList:", dataSource);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={images.caroline.pic} style={styles.profilePic} />
        <View>
          <Text style={styles.title}>Caroline Tran</Text>
          <Text style={styles.username}>@ctran</Text>
        </View>
        <View style={styles.dropDown}>
          <RNPickerSelect
            onValueChange={(value) => setSelectedValue(value)}
            items={[
              { label: "Time", value: "time" },
              { label: "Activity", value: "activity" },
              { label: "Feeling", value: "feeling" },
            ]}
            style={pickerSelectStyles}
            placeholder={{ label: "Reprise", value: "reprise" }}
          />
        </View>
      </View>

      <View style={styles.monthContainer}>
        <Text style={styles.month}>NOVEMBER</Text>
      </View>

      <View style={styles.spacer} />
      <View style={styles.containerCalendar}>
        <FlatList
          data={dataSource}
          numColumns={4}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item.id}-${index}`}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    gap: 10,
    width: "90%",
    position: "absolute",
    top: 100,
    left: 25,
    right: 0,
    bottom: 0,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    shadowColor: colors.darkGray,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  title: {
    fontSize: 25,
    color: colors.white,
  },
  username: {
    fontSize: 20,
    color: colors.white,
  },
  profilePic: {
    width: windowWidth * 0.15,
    height: windowWidth * 0.15,
    borderRadius: (windowWidth * 0.15) / 2,
  },
  spacer: {
    height: 200,
  },
  monthContainer: {
    position: "absolute",
    top: "29%",
    width: "100%",
    alignItems: "flex-start",
    marginHorizontal: "10%",
    paddingBottom: "5%",
    zIndex: 1,
    shadowColor: colors.darkGray,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  month: {
    color: colors.white,
    fontSize: 24,
    fontWeight: "bold",
  },
  containerCalendar: {
    flex: 1,
    padding: 5,
    shadowColor: colors.darkGray,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  image: {
    width: imageSize,
    height: imageSize,
    margin: 5,
    borderRadius: 15,
  },
  textBox: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: colors.yellow,
    padding: 2,
    borderRadius: 5,
  },
  monthText: {
    color: colors.black,
    fontWeight: "bold",
  },
  dateText: {
    color: colors.black,
    textAlign: "center",
  },
  dropDown: {
    paddingLeft: 30,
  },
});

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.offWhite75,
    borderRadius: 4,
    color: colors.black,
    backgroundColor: colors.offWhite75,
  },
  placeholder: {
    color: colors.darkGray,
    fontWeight: "bold",
    shadowColor: colors.darkGray,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: colors.offWhite75,
    borderRadius: 4,
    color: colors.black,
    backgroundColor: colors.offWhite75,
  },
};

export default CalendarActivityScreen;
