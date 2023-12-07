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

const windowWidth = Dimensions.get("window").width;

const ThemeScreen = ({ route, navigation }) => {
  const { token, getSpotifyAuth } = useSpotifyAuth();
  // const navigation = useNavigation();
  const handlePress = (activityTitle) => {
    let url =
      "https://open.spotify.com/playlist/6Kd9TIj3OMSJlzmDZGA84e?si=37290f3b74d94b2e";

    if (activityTitle === "Lemonade") {
      url =
        "https://open.spotify.com/playlist/5Nxzrza415rNTV9a0Lke0Y?si=d4c1e7afb51b4d3d";
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
            <Text style={styles.headerText}>
              What cafe drink would your song be?
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
    backgroundColor: colors.offWhite50,
    borderRadius: 16,
    margin: 16,
    padding: 16,
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  activitiesContainer: {
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  activityCard: {
    backgroundColor: colors.offWhite50,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
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

export default ThemeScreen;

// import React from "react";
// import {
//   SafeAreaView,
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   Dimensions,
//   Pressable,
//   TextInput,
// } from "react-native";
// import images from "../../assets/Images/images";
// import { colors } from "../../assets/Themes/colors";
// import { styles as defaultStyles } from "../../assets/Themes/default_style";

// const windowWidth = Dimensions.get("window").width;
// // dimensions for selectionGrid styling
// const gap = 12;
// const itemPerRow = 2;
// const totalGapSize = (itemPerRow - 1) * gap;
// const rowWidth = windowWidth * 0.8 + totalGapSize;

// const ThemeScreen = ({ route, navigation }) => {
//   const caption = route.params?.caption || "";

//   const handlePress = () => {
//     // Pass songData and captionText to the next screen
//     navigation.navigate("ThemePlaylist");

//   };

//   const songData = route.params?.songData || {};
//   const artistNames =
//     songData && songData.artists
//       ? songData.artists.join(", ")
//       : "Unknown Artist";

//   return (
//     <SafeAreaView style={defaultStyles.container}>
//       <Text>Theme!</Text>
//       <Pressable
//         style={styles.postButton}
//         onPress={handlePress}

//       >
//         <Text style={styles.postButtonText}>Theme Playlist</Text>
//       </Pressable>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   postButton: {
//     // Adjust the post button styles
//     backgroundColor:  "rgba(256, 256, 256, 0.5)", // Replace with your button color
//     borderRadius: 5,
//     justifyContent: "center",
//     alignItems: "center",
//     width: "40%", // Adjust the width as needed
//     paddingVertical: 12, // Adjust the padding as needed
//   },
//   postButtonText: {
//     // Adjust the post button text styles
//     color: colors.darkGray,
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default ThemeScreen;
