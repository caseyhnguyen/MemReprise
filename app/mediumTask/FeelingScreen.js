import React, { useEffect } from "react";
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
import Header3 from "../../components/Header3";
import { trackEvent } from "@aptabase/react-native";

const windowWidth = Dimensions.get("window").width;

const FeelingScreen = ({ route, navigation }) => {
  const { token, getSpotifyAuth } = useSpotifyAuth();

  const handlePress = async (activityTitle) => {
    // Log the feeling selection event
    trackEvent("Feeling Selected", { feeling: activityTitle });

    let url =
      "https://open.spotify.com/playlist/6mU2pFNqVKKU46tZpai50x?si=d76059e306a14255";

    if (activityTitle === "Sad") {
      url =
        "https://open.spotify.com/playlist/4MJGpdcOOJwUAm1gyq97Rh?si=5c578a41ba534e56";
    }

    if (!token) {
      try {
        await getSpotifyAuth(); // Authenticate if user is not authenticated
        // Log navigation to PlaylistDetails after authentication
        trackEvent("Navigation", {
          action: "Navigate to PlaylistDetails",
          result: "Authenticated",
        });
        navigation.navigate("PlaylistDetails", { url });
      } catch (error) {
        console.error("Authentication failed", error);
        // Log the authentication failure event
        trackEvent("Error", {
          action: "Authentication Failed",
          error: error.message,
        });
      }
    } else {
      // Log navigation to PlaylistDetails if already authenticated
      trackEvent("Navigation", {
        action: "Navigate to PlaylistDetails",
        result: "Already Authenticated",
      });
      navigation.navigate("PlaylistDetails", { url });
    }
  };

  const activities = [
    {
      id: 1,
      title: "Happy",
      songsCount: 149,
      icon: images.happyEmoji.pic,
      songs: [
        { title: "Words", artist: "Zara Larsson", pic: images.wordszara.pic },
        {
          title: "Weekends",
          artist: "Jonas Blue, Felix Jaehn",
          pic: images.weekendsjonas.pic,
        },
      ],
    },
    {
      id: 2,
      title: "Sad",
      songsCount: 134,
      icon: images.sadEmoji.pic,
      songs: [
        {
          title: "Your Power",
          artist: "Billie Eilish",
          pic: images.yourpowerbillie.pic,
        },
        {
          title: "Bruises",
          artist: "Lewis Capaldi",
          pic: images.bruisescapaldi.pic,
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ paddingBottom: 50 }}>
          <View style={styles.headerContainer}>
            <Header3 text="How are you feeling right now?" />
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
                  <PillPressable
                    onPress={() => {
                      // Log the 'See more' button press event
                      trackEvent("Interaction", {
                        action: "See More Pressed",
                        feeling: activity.title,
                      });
                      // Additional logic for the 'See more' button if necessary
                    }}
                    text="See more"
                  />
                </View>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeelingScreen;
