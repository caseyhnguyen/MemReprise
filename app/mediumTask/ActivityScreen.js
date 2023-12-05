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

// const ActivityScreen = ({ route, navigation }) => {
//   const caption = route.params?.caption || "";

//   const handlePress = () => {
//     // Pass songData and captionText to the next screen
//     navigation.navigate("ActivityPlaylist");
//   };

//   const songData = route.params?.songData || {};
//   const artistNames =
//     songData && songData.artists
//       ? songData.artists.join(", ")
//       : "Unknown Artist";

//   return (
//     <SafeAreaView style={defaultStyles.container}>
//       <Text>Activity!</Text>
//       <Pressable style={styles.postButton} onPress={handlePress}>
//         <Text style={styles.postButtonText}>Activity Playlist</Text>
//       </Pressable>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   postButton: {
//     // Adjust the post button styles
//     backgroundColor: "rgba(256, 256, 256, 0.5)", // Replace with your button color
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

// export default ActivityScreen;

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

const ActivityScreen = ({ route, navigation }) => {
  const { token, getSpotifyAuth } = useSpotifyAuth();
  // const navigation = useNavigation();
  const handlePress = (activityTitle) => {
    if (activityTitle === "Studying") {
      if (!token) {
        getSpotifyAuth(); // Authenticate if user is not authenticated
      } else {
        // Navigate to the external URL upon successful authentication
        const url =
          "https://open.spotify.com/playlist/37i9dQZF1EIfMdgv54LYV9?si=a6031566958f41a8&nd=1&dlsi=60faff0fead342e4"; // Replace with actual URL
        navigation.navigate("PlaylistDetails", { url });
      }
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
      title: "Studying",
      songsCount: 111,
      icon: images.working, // Ensure 'working' is correctly referenced in your images object
      songs: [
        { title: "Wildest Dreams", artist: "Taylor Swift" },
        { title: "Wildest Dreams", artist: "Taylor Swift" },
      ],
    },
    {
      id: 2,
      title: "Eating",
      songsCount: 75,
      icon: images.eating, // Ensure 'eating' is correctly referenced in your images object
      songs: [
        { title: "Hello Future", artist: "NCT DREAM" },
        { title: "INVITATION", artist: "JUNNY" },
      ],
    },
  ];
  //   return (
  //     <SafeAreaView style={styles.container}>
  //       <ScrollView style={styles.scrollView}>
  //         <View style={styles.headerContainer}>
  //           <Text style={styles.headerText}>What are you doing right now?</Text>
  //         </View>
  //         <View style={styles.activitiesContainer}>
  //           {activities.map((activity, index) =>
  //             activity.title === "Studying" ? (
  //               <Pressable
  //                 key={activity.id}
  //                 style={styles.activityCard}
  //                 onPress={() => handlePress(activity.title)}
  //               >
  //                 <View style={styles.activityHeader}>
  //                   <Text style={styles.activityNumber}>{index + 1}</Text>
  //                   <Image source={activity.icon} style={styles.activityIcon} />
  //                   <Text style={styles.activityTitle}>{activity.title}</Text>
  //                   <Text style={styles.songsCount}>
  //                     {activity.songsCount} Songs
  //                   </Text>
  //                 </View>
  //                 <View style={styles.songsContainer}>
  //                   {activity.songs.map((song, idx) => (
  //                     <View key={idx} style={styles.songRow}>
  //                       <Text style={styles.songTitle}>{song.title}</Text>
  //                       <Text style={styles.songArtist}>{song.artist}</Text>
  //                     </View>
  //                   ))}
  //                   <Text style={styles.seeMore}>see more ></Text>
  //                 </View>
  //               </Pressable>
  //             ) : (
  //               <View key={activity.id} style={styles.activityCard}>
  //                 <View style={styles.activityHeader}>
  //                   <Text style={styles.activityNumber}>{index + 1}</Text>
  //                   <Image source={activity.icon} style={styles.activityIcon} />
  //                   <Text style={styles.activityTitle}>{activity.title}</Text>
  //                   <Text style={styles.songsCount}>
  //                     {activity.songsCount} Songs
  //                   </Text>
  //                 </View>
  //                 <View style={styles.songsContainer}>
  //                   {activity.songs.map((song, idx) => (
  //                     <View key={idx} style={styles.songRow}>
  //                       <Text style={styles.songTitle}>{song.title}</Text>
  //                       <Text style={styles.songArtist}>{song.artist}</Text>
  //                     </View>
  //                   ))}
  //                   <Text style={styles.seeMore}>see more ></Text>
  //                 </View>
  //               </View>
  //             )
  //           )}
  //         </View>
  //       </ScrollView>
  //     </SafeAreaView>
  //   );
  // };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>What are you doing right now?</Text>
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
                    <Text style={styles.songTitle}>{song.title}</Text>
                    <Text style={styles.songArtist}>{song.artist}</Text>
                  </View>
                ))}
                <Text style={styles.seeMore}>see more ></Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.offWhite50,
  },
  scrollView: {
    width: "100%",
  },
  headerContainer: {
    backgroundColor: colors.offWhite50,
    borderRadius: 16,
    marginTop: "20%",
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
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary, // Adjust with your primary color
    marginRight: 10,
  },
  activityIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  activityTitle: {
    fontSize: 18,
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
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  songTitle: {
    fontSize: 16,
  },
  songArtist: {
    fontSize: 14,
    color: colors.mediumGray,
  },
  seeMore: {
    fontSize: 14,
    color: colors.primary, // Adjust with your primary color
    marginTop: 10,
    alignSelf: "flex-end",
  },
  // ... other styles you may need
});

export default ActivityScreen;
