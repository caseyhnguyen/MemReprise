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
import images from "../../assets/Images/images";
import { colors } from "../../assets/Themes/colors";
import { useSpotifyAuth } from "../../utils";
import { discoverStyles as styles } from "../../assets/Themes/discover";
import PillPressable from "../../components/PillPressable";
import Label from "../../components/Label";
import Header3 from "../../components/Header3";

const windowWidth = Dimensions.get("window").width;

const ActivityScreen = ({ route, navigation }) => {
  const { token, getSpotifyAuth } = useSpotifyAuth();

  const handlePress = async (activityTitle) => {
    let url =
      "https://open.spotify.com/playlist/2fmyOjn5kNiqMUjKRl08M3?si=b6bef14539ac468f";

    if (activityTitle === "Exercising") {
      url =
        "https://open.spotify.com/playlist/1GLBdwUL7VgrARLttuAcvU?si=4bf86eeac70a4038";
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

  const activities = [
    {
      id: 1,
      title: "Main quad",
      songsCount: 169,
      icon: images.working.pic, // Ensure 'working' is correctly referenced in your images object
      songs: [
        { title: "ONLY", artist: "LeeHi", pic: images.onlyleehi.pic },
        {
          title: "Honesty",
          artist: "Pink Sweat$",
          pic: images.honestypinksweats.pic,
        },
      ],
    },
    {
      id: 2,
      title: "Lathrop",
      songsCount: 158,
      icon: images.exercising.pic, // Ensure 'eating' is correctly referenced in your images object
      songs: [
        { title: "Makeba", artist: "jain", pic: images.makebajain.pic },
        {
          title: "INDUSTRY BABY",
          artist: "Lil Nas X, Jack Harlow",
          pic: images.industrybaby.pic,
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ paddingBottom: 50 }}>
          {/* <View style={styles.headerContainer}>
            <Header3 text="What are you doing right now?" />
          </View> */}

          {/* <View style={{ marginLeft: 16, marginBottom: 10 }}>
            <Label text="Top responses" />
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

                  {/* <Image source={activity.icon} style={styles.activityIcon} /> */}
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
                  <PillPressable text="See more" />
                  {/* <Text style={styles.seeMore}>see more {">"}</Text> */}
                </View>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ActivityScreen;
