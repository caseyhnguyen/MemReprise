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
import Header1 from "../../components/Header1";
import Header2 from "../../components/Header2";
import Label from "../../components/Label";
// import { StatusBar } from "expo-status-bar";
import { StatusBar } from "react-native";
import { trackEvent } from "@aptabase/react-native";

// Get the window dimensions
const windowWidth = Dimensions.get("window").width;
const imageSize = (windowWidth - 50) / 3.5;

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

    // Log the filter change event
    trackEvent("filter_change", {
      filterType: "main",
      selectedValue: value,
    });

    switch (value) {
      case "time":
        setFilterOptions([
          { label: "Days", value: "days" },
          { label: "Weeks", value: "weeks" },
          { label: "Months", value: "months" },
          { label: "Years", value: "years" },
        ]);
        break;
      default:
        setFilterOptions([]);
        setTimeNumber("");
    }
  };

  const parsePosts = (fetchedPosts) => {
    // console.log(fetchedPosts);
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
      // console.log("post.song_data:");
      // console.log(post.song_data);
      if (post.song_data) {
        try {
          songDataParsed = JSON.parse(post.song_data);
        } catch (error) {
          console.error("Error parsing song_data:", error);
        }
      }

      // console.log(post.imageUrl);
      // console.log("songDataParsed:");
      // console.log(songDataParsed);
      return {
        ...post,
        userName: post.userName || "Unknown User",
        // songData: songDataParsed,
        songData: {
          title: post.songTitle,
          artists: post.artists,
          albumName: post.albumName,
          imageUrl: post.imageUrl,
          previewUrl: post.previewUrl,
          externalUrl: post.externalUrl,
        },
        // source: songDataParsed.imageUrl || "",
        source: post.imageUrl || "",
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
        .from("mixtapes")
        .select("*")
        .order("created_at", { ascending: false }); // Ensure default ordering is from most recent to oldest

      // console.log(query);
      // Apply filters only if both filters are selected
      if (selectedValue) {
        query = query.order("created_at", { ascending: false });

        // Time filtering logic
        if (
          selectedValue === "month" ||
          selectedValue === "quarter" ||
          selectedValue === "year"
        ) {
          const unitToMs = {
            days: 86400000,
            weeks: 604800000,
            month: 2629800000,
            quarter: 6048000000,
            year: 31557600000,
          };
          const timeAgo = Date.now() - unitToMs[selectedValue];
          query = query.gte("created_at", new Date(timeAgo).toISOString());
          // console.log(query);
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
  }, [selectedValue, timeNumber]);

  useEffect(() => {
    filterPosts();
  }, [filterPosts]);

  const renderItem = ({ item }) => {
    // console.log("item contents");
    // console.log(item);
    const onPress = () => {
      navigation.navigate("PostExpandScreen", {
        userName: item.userName,
        formattedTimestamp: item.formattedTimestamp,
        songData: {
          title: item.songTitle,
          artists: item.artists,
          albumName: item.albumName,
          imageUrl: item.imageUrl,
          previewUrl: item.previewUrl,
          externalUrl: item.externalUrl,
        },
        sendTo: {
          message: item.message,
          formattedTimestamp: item.formattedTimestamp,
          location_name: item.location_name,
          recipient_img: item.recipient_img,
          recipient_name: item.recipient_name,
        },
        caption: item.caption,
      });
    };

    const imageSource =
      typeof item.source === "string" ? { uri: item.source } : item.source;
    // console.log(item.source);
    // console.log(imageSource);
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
        date = createdAt.getDate() + 1;
        date = date.toString();
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

  // Conditional rendering based on the number of results
  const renderFlatList = () => {
    if (dataSource && dataSource.length > 0) {
      return (
        <FlatList
          data={dataSource}
          numColumns={3}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item.id}-${index}`}
        />
      );
    }
    return null; // Render nothing if there are no results
  };
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.black}
        translucent={true}
      />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Image source={images.caroline.pic} style={styles.profilePic} />
            <View>
              <Text style={styles.title}>Caroline Tran</Text>
              <Text style={styles.userHandle}>@cntran</Text>
            </View>
            <View style={styles.dropDown}>
              <RNPickerSelect
                onValueChange={onMainSelectionChange}
                items={[
                  { label: "Last month", value: "month" },
                  { label: "Last quarter", value: "quarter" },
                  { label: "Last year", value: "year" },
                ]}
                style={pickerSelectStyles}
                placeholder={{ label: "Filter by", value: "reprise" }}
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
                </>
              )}
            </View>
          </View>

          <View style={styles.monthContainer}>
            <Label text="Mixtapes sent" />
            {/* <Text style={styles.month}>DECEMBER</Text> */}
          </View>

          <View style={styles.containerCalendar}>{renderFlatList()}</View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
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
    marginTop: "40%",
    marginLeft: "15%",
    width: "100%",
    alignItems: "flex-start",
    marginHorizontal: "10%",
    // paddingBottom: "2%",
    zIndex: 1,
  },
  month: {
    color: colors.white,
    fontSize: 24,
    fontWeight: "bold",
  },
  containerCalendar: {
    flex: 1,
    padding: 5,
  },
  image: {
    width: imageSize,
    height: imageSize,
    margin: 12,
    // borderRadius: 150,
  },
  textBox: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: colors.blue,
    padding: 3,
    borderRadius: 5,
  },
  monthText: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: 13,
  },
  dateText: {
    color: colors.black,
    textAlign: "center",
    fontSize: 13,
  },
  dropDown: {
    // width: windowWidth * 0.3,
    marginHorizontal: "5%",
    textTransform: "uppercase",
  },
  numberInput: {
    fontSize: 15,
    paddingVertical: 11,
    // paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.offWhite75,
    borderRadius: 4,
    color: colors.black,
    backgroundColor: colors.offWhite75,
    textAlign: "center",
    margin: windowWidth * 0.005,
    width: windowWidth * 0.3,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  timeFilterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  userHandle: {
    color: colors.white,
    fontWeight: "500",
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    // alignSelf: "center",
  },
});

const pickerSelectStyles = {
  inputIOS: {
    width: windowWidth * 0.3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: colors.pink,
    paddingVertical: 11,
    textTransform: "uppercase",
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  placeholder: {
    color: colors.white,
    textTransform: "uppercase",
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
