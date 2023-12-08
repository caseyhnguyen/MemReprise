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
import { discoverStyles as styles} from "../../assets/Themes/discover";

const windowWidth = Dimensions.get("window").width;

const ActivityScreen = ({ route, navigation }) => {
  const { token, getSpotifyAuth } = useSpotifyAuth();
  // const navigation = useNavigation();
  const handlePress = (activityTitle) => {
    let url =
      "https://open.spotify.com/playlist/2fmyOjn5kNiqMUjKRl08M3?si=b6bef14539ac468f";

    if (activityTitle === "Exercising") {
      url =
        "https://open.spotify.com/playlist/1GLBdwUL7VgrARLttuAcvU?si=4bf86eeac70a4038";
    }

    if (!token) {
      getSpotifyAuth(); // Authenticate if user is not authenticated
    } else {
      // Navigate to the external URL upon successful authentication
      navigation.navigate("PlaylistDetails", { url });
    }
  };
  // const handlePress = () => {
  //   // Pass songData and captionText to the next screen
  //   navigation.navigate("ActivityPlaylist");
  // };
  // Dummy data for activities

  const activities = [
    {
      id: 1,
      title: "Working",
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
      title: "Exercising",
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
        <View style={{paddingBottom:50}}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>What are you doing right now?</Text>
          </View>

          <View style={{ marginLeft: 16, marginBottom: 10 }}>
            <Text style={styles.headerText}>Top Responses</Text>
          </View>
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
                  <Text style={styles.seeMore}>see more {">"}</Text>
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
