import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  Pressable,
} from "react-native";
import images from "../../assets/Images/images"; // Make sure the paths match your project structure
import { colors } from "../../assets/Themes/colors"; // Make sure the paths match your project structure
import { useSpotifyAuth } from "../../utils";
import { discoverStyles as styles } from "../../assets/Themes/discover";
import PillPressable from "../../components/PillPressable";
import Header3 from "../../components/Header3";

const windowWidth = Dimensions.get("window").width;

const ThemeScreen = ({ route, navigation }) => {
  const { token, getSpotifyAuth } = useSpotifyAuth();

  const handlePress = async (activityTitle) => {
    let url =
      "https://open.spotify.com/playlist/6Kd9TIj3OMSJlzmDZGA84e?si=37290f3b74d94b2e";

    if (activityTitle === "Lemonade") {
      url =
        "https://open.spotify.com/playlist/5Nxzrza415rNTV9a0Lke0Y?si=d4c1e7afb51b4d3d";
    }

    if (!token) {
      try {
        await getSpotifyAuth(); // Authenticate if user is not authenticated
        navigation.navigate("PlaylistDetails", { url }); // Navigate after authentication
      } catch (error) {
        console.error("Authentication failed", error);
      }
    } else {
      navigation.navigate("PlaylistDetails", { url }); // Navigate if already authenticated
    }
  };

  // Dummy data for activities
  const activities = [
    {
      id: 1,
      title: "Matcha Latte",
      songsCount: 175,
      icon: images.matchaLatte.pic, // Ensure 'working' is correctly referenced in your images object
      songs: [
        {
          title: "Tribulation",
          artist: "Matt Maeson",
          pic: images.tribulation.pic,
        },
        {
          title: "Pink + White",
          artist: "Frank Ocean",
          pic: images.pinkwhite.pic,
        },
      ],
    },
    {
      id: 2,
      title: "Lemonade",
      songsCount: 50,
      icon: images.lemonade.pic, // Ensure 'eating' is correctly referenced in your images object
      songs: [
        {
          title: "From The Start",
          artist: "Laufey",
          pic: images.fromthestart.pic,
        },
        { title: "Bad Habit", artist: "Steve Lacy", pic: images.badhabit.pic },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ paddingBottom: 50 }}>
          <View style={styles.headerContainer}>
            <Header3 text="What cafe drink would your song be?" />
          </View>

          {/* <View style={{ marginLeft: 16, marginBottom: 10 }}>
            <Text style={styles.headerText}>Top Responses</Text>
          </View> */}
          <View style={styles.activitiesContainer}>
            {activities.map((activity, index) => (
              <Pressable
                key={activity.id}
                style={styles.activityCard}
                onPress={() => handlePress(activity.title)}
              >
                <View style={styles.activityHeader}>
                  <Text style={styles.activityNumber}>{index + 1}</Text>
                  <Image source={activity.icon} style={styles.activityIcon} />
                  <Text style={styles.activityTitle}>{activity.title}</Text>
                  <Text style={styles.songsCount}>
                    {activity.songsCount} Songs
                  </Text>
                </View>
                <View style={styles.songsContainer}>
                  {activity.songs.map((song, idx) => (
                    <View key={idx} style={styles.songRow}>
                      <Image source={song.pic} style={styles.album} />
                      <View style={styles.songInfo}>
                        <Text style={styles.songTitle}>{song.title}</Text>
                        <Text style={styles.songArtist}>{song.artist}</Text>
                      </View>
                    </View>
                  ))}
                  {/* <Text style={styles.seeMore}>see more {">"}</Text> */}
                  <PillPressable text="See more" />
                </View>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ThemeScreen;
