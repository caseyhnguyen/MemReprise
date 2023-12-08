import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";
import images from "../assets/Images/images";
import { colors } from "../assets/Themes/colors";
import Header from "../components/Header";

// Get the window dimensions
const windowWidth = Dimensions.get("window").width;

const HomeScreen = ({ route, navigation }) => {
  const userName = route.params?.userName;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header title="memreprise" />
      </View>
      <Text style={styles.greetingText}>
        {userName ? `Hello, ${userName}!` : "Welcome to memreprise!"}
      </Text>
      <View style={styles.postPrompt}>
        <Image
          source={images.lock.pic}
          style={styles.lockIcon}
          resizeMode="contain"
        />
        <View style={styles.spacer} />
        <View style={styles.titleContainer}>
          <Text style={styles.postASongText}>
            Post a song to unlock new posts
          </Text>
        </View>
        <View style={styles.spacer} />
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("FeedScreen")}
          >
            <Text style={styles.maybeLaterText}>Maybe later</Text>
          </Pressable>
          <View style={styles.buttonSpacer} />
          <Pressable
            style={styles.button}
            onPress={() =>
              navigation.navigate("Tracks", { userName: userName })
            }
          >
            <Text style={styles.postText}>Post</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: windowWidth,
  },
  postPrompt: {
    borderRadius: 15,
    padding: 50,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.offWhite,
    width: windowWidth * 0.9,
    height: windowWidth * 0.75,
    shadowColor: colors.darkGray,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: colors.offWhite50,
  },
  lockIcon: {
    width: windowWidth * 0.25,
    height: windowWidth * 0.25,
    tintColor: colors.offwhite75,
  },
  titleContainer: {
    alignItems: "center",
    width: "50%",
  },
  postASongText: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 18,
    letterSpacing: -0.41,
    color: colors.darkGray,
  },
  spacer: {
    height: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    borderRadius: 15,
    padding: 7,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.offWhite75,
    shadowColor: colors.darkGray,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  maybeLaterText: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 14,
    letterSpacing: -0.41,
    color: colors.darkGray,
  },
  postText: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 14,
    letterSpacing: -0.41,
    color: colors.darkGray,
  },
  buttonSpacer: {
    width: 24,
  },
  oldPostsText: {
    marginTop: 16,
    fontSize: 16,
    color: colors.offWhite,
  },
  greetingText: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 26,
    letterSpacing: -0.41,
    color: colors.offWhite,
    marginTop: "5%",
    marginBottom: "5%",
  },
});

export default HomeScreen;
