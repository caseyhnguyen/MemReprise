import React, { useEffect, useState, useCallback } from "react";
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
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
// import images from "../../assets/Images/images";
import images from "../../assets/Images/images";
import albums from "../../assets/Images/albums";

import { colors } from "../../assets/Themes/colors";
import Header from "../../components/Header";
import { Colors } from "react-native/Libraries/NewAppScreen";
import RNPickerSelect from "react-native-picker-select";
import { supabase } from "../../utils/supabaseClient";
import { formatCurrentTrack } from "../../utils/apiOptions";

// Get the window dimensions
const windowWidth = Dimensions.get("window").width;
const imageSize = (windowWidth - 50) / 4;

const CalendarActivityScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedValue, setSelectedValue] = useState(null);
  const [filterOptions, setFilterOptions] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [timeNumber, setTimeNumber] = useState("");

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // Call the function to refetch posts from the database
      filterPosts();
    });

    return unsubscribe;
  }, [navigation]);

  const onMainSelectionChange = (value) => {
    setSelectedValue(value);
    setSelectedFilter(null);

    switch (value) {
      case "time":
        setFilterOptions([
          { label: "Days", value: "days" },
          { label: "Weeks", value: "weeks" },
          { label: "Months", value: "months" },
          { label: "Years", value: "years" },
        ]);
        break;
      case "activity":
        setFilterOptions([
          { label: "Exercising", value: "exercising" },
          { label: "Eating", value: "eating" },
          { label: "Working", value: "working" },
          { label: "Commuting", value: "commuting" },
        ]);
        break;
      case "feeling":
        setFilterOptions([
          { label: "Super Happy", value: "super happy" },
          { label: "Happy", value: "happy" },
          { label: "Super Sad", value: "super sad" },
          { label: "Sad", value: "sad" },
        ]);
        break;
      default:
        setFilterOptions([]);
        setTimeNumber("");
    }
  };

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
    filterPosts();
  }, []);

  const filterPosts = useCallback(async () => {
    try {
      setLoading(true);

      let query = supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false }); // Ensure default ordering is from most recent to oldest

      // Apply filters only if both filters are selected
      if (selectedValue && selectedFilter) {
        query = query.order("created_at", { ascending: false });

        // Time filtering logic
        if (selectedValue === "time" && timeNumber) {
          const unitToMs = {
            days: 86400000,
            weeks: 604800000,
            months: 2629800000,
            years: 31557600000,
          };
          const timeAgo = Date.now() - timeNumber * unitToMs[selectedFilter];
          query = query.gte("created_at", new Date(timeAgo).toISOString());
        }

        // Activity and Feeling filtering logic
        if (selectedValue === "activity" || selectedValue === "feeling") {
          const filterColumn =
            selectedValue === "activity"
              ? "activity_icon_text"
              : "emotion_icon_text";
          query = query.ilike(filterColumn, `%${selectedFilter}%`);
        }
      }

      const { data, error } = await query;

      if (error) throw error;

      let processedPosts = parsePosts(data || []).filter((post) => post.source);

      setPosts(processedPosts);
    } catch (error) {
      console.error("Error filtering posts:", error);
    } finally {
      setLoading(false);
    }
  }, [selectedValue, selectedFilter, timeNumber]);

  useEffect(() => {
    filterPosts();
  }, [filterPosts]);

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

    // console.log("Item in renderItem:", item);
    const imageSource =
      typeof item.source === "string" ? { uri: item.source } : item.source;

    // console.log("imageSource in renderItem:", { imageSource });

    // Extract and format the month and date
    let month = "";
    let date = "";
    if (item.formattedTimestamp && item.formattedTimestamp !== "Unknown Time") {
      // Split the timestamp into time and date parts
      const parts = item.formattedTimestamp.split(" • ");
      if (parts.length === 2) {
        // Reformat the date from 'MM/DD/YY' to 'YYYY-MM-DD'
        const dateParts = parts[1].split("/");
        const reformattedDate = `20${dateParts[2]}-${dateParts[0]}-${dateParts[1]}`;

        // Parse the reformatted date
        const createdAt = new Date(reformattedDate);
        month = createdAt
          .toLocaleString("en-US", { month: "short" })
          .toUpperCase();
        date = createdAt.getDate().toString();
      }
    }

    return (
      <Pressable onPress={onPress}>
        <Image source={{ uri: item.source }} style={styles.image} />
        <View style={styles.textBox}>
          <Text style={styles.monthText}>{month}</Text>
          <Text style={styles.dateText}>{date}</Text>
        </View>
      </Pressable>
    );
  };

  // Use the filtered posts as the data source for the FlatList
  const dataSource = posts;

  // console.log("DataSource for FlatList:", dataSource);

  // Conditional rendering based on the number of results
  const renderFlatList = () => {
    if (dataSource && dataSource.length > 0) {
      return (
        <FlatList
          data={dataSource}
          numColumns={4}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item.id}-${index}`}
        />
      );
    }
    return null; // Render nothing if there are no results
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image source={images.caroline.pic} style={styles.profilePic} />
          <View>
            <Text style={styles.title}>Caroline Tran</Text>
            <Text style={styles.username}>@cntran</Text>
          </View>
          <View style={styles.dropDown}>
            <RNPickerSelect
              onValueChange={onMainSelectionChange}
              items={[
                { label: "Time", value: "time" },
                { label: "Activity", value: "activity" },
                { label: "Feeling", value: "feeling" },
              ]}
              style={pickerSelectStyles}
              placeholder={{ label: "Reprise", value: "reprise" }}
            />
            {/* Time Number Input and Unit Selection */}
            {selectedValue === "time" && (
              <>
                <TextInput
                  style={styles.numberInput}
                  keyboardType="numeric"
                  onChangeText={setTimeNumber}
                  value={timeNumber}
                  placeholder="Enter number"
                />
                <RNPickerSelect
                  onValueChange={(value) => setSelectedFilter(value)}
                  items={filterOptions}
                  style={pickerSelectStyles}
                  placeholder={{ label: "Select unit", value: dataSource }}
                />
              </>
            )}

            {/* Secondary Dropdown for Activity or Feeling */}
            {(selectedValue === "activity" || selectedValue === "feeling") && (
              <RNPickerSelect
                onValueChange={(value) => setSelectedFilter(value)}
                items={filterOptions}
                style={pickerSelectStyles}
                placeholder={{ label: "Select", value: "reprise" }}
              />
            )}
          </View>
        </View>

        {/* <View style={styles.monthContainer}>
        <Text style={styles.month}>DECEMBER</Text>
      </View>

      <View style={styles.spacer} />
      <View style={styles.containerCalendar}>{renderFlatList()}</View>
    </SafeAreaView> */}

        <View style={styles.monthContainer}>
          <Text style={styles.month}>DECEMBER</Text>
        </View>

        <View style={styles.containerCalendar}>{renderFlatList()}</View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
  // monthContainer: {
  //   position: "absolute",
  //   top: "29%",
  //   width: "100%",
  //   alignItems: "flex-start",
  //   marginHorizontal: "10%",
  //   paddingBottom: "5%",
  //   zIndex: 1,
  //   shadowColor: colors.darkGray,
  //   shadowOffset: { width: 4, height: 4 },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4,
  // },
  monthContainer: {
    marginTop: "45%",
    marginLeft: "15%",
    width: "100%",
    alignItems: "flex-start",
    marginHorizontal: "10%",
    paddingBottom: "2.5%",
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
    // width: windowWidth * 0.3,
    marginHorizontal: "5%",
  },
  numberInput: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.offWhite75,
    borderRadius: 4,
    color: colors.black,
    backgroundColor: colors.offWhite75,
    textAlign: "center",
    margin: windowWidth * 0.005,
    width: windowWidth * 0.3,
    fontWeight: "bold",
  },
  timeFilterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
    textAlign: "center",
    margin: windowWidth * 0.005,
    width: windowWidth * 0.3,
    fontWeight: "bold",
  },
  placeholder: {
    color: colors.darkGray,
    // fontWeight: "bold",
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
    textAlign: "center",
    margin: windowWidth * 0.01,
    width: windowWidth * 0.25,
    fontWeight: "bold",
  },
};

export default CalendarActivityScreen;
