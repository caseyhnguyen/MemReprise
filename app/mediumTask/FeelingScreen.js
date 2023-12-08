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
  // Dummy data for activities
  const activities = [
    {
      id: 1,
      title: "Happy",
      songsCount: 149,
      icon: images.happyEmoji.pic, // Ensure 'working' is correctly referenced in your images object
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
      icon: images.sadEmoji.pic, // Ensure 'eating' is correctly referenced in your images object
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 75,
    // backgroundColor: colors.offWhite50,
  },
  scrollView: {
    width: "100%",
  },
  headerContainer: {
    backgroundColor: colors.offWhite75,
    borderRadius: 16,
    margin: 16,
    padding: 16,
    alignItems: "center",
    shadowColor: colors.darkGray,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  activitiesContainer: {
    paddingBottom: 20,
    paddingHorizontal: 16,
    shadowColor: colors.darkGray,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  activityCard: {
    backgroundColor: colors.offWhite50,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: colors.darkGray,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  activityHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  activityNumber: {
    fontSize: 50,
    fontWeight: "bold",
    color: colors.primary, // Adjust with your primary color
    marginRight: 10,
  },
  activityIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  activityTitle: {
    fontSize: 25,
    fontWeight: "bold",
    flex: 1,
  },
  songsCount: {
    fontSize: 16,
  },
  songsContainer: {
    backgroundColor: colors.offWhite50,
    borderRadius: 16,
    padding: 16,
  },
  songRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    paddingVertical: 5,
  },
  songTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  songArtist: {
    fontSize: 18,
    color: colors.mediumGray,
  },
  songInfo: {
    flexDirection: "column",
    marginRight: "auto",
  },

  album: {
    width: 100,
    height: 100,
  },

  seeMore: {
    fontSize: 18,
    color: colors.primary, // Adjust with your primary color
    marginTop: 10,
    alignSelf: "flex-end",
  },
  // ... other styles you may need
});

export default FeelingScreen;
