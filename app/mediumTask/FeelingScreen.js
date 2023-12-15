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

const windowWidth = Dimensions.get("window").width;

const FeelingScreen = ({ route, navigation }) => {
  const { token, getSpotifyAuth } = useSpotifyAuth();
  // const navigation = useNavigation();
  const handlePress = (activityTitle) => {
    let url =
      "https://open.spotify.com/playlist/6mU2pFNqVKKU46tZpai50x?si=d76059e306a14255";

    if (activityTitle === "Sad") {
      url =
        "https://open.spotify.com/playlist/4MJGpdcOOJwUAm1gyq97Rh?si=5c578a41ba534e56";
    }

    if (!token) {
      getSpotifyAuth(); // Authenticate if user is not authenticated
    } else {
      // Navigate to the external URL upon successful authentication
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
            <Text style={styles.headerText}>
              How are you feeling right now?
            </Text>
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

export default FeelingScreen;
