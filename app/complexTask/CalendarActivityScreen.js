import React, { useState } from "react";
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
} from "react-native";
// import images from "../../assets/Images/images";
import images from "../../assets/Images/images";
import albums from "../../assets/Images/albums";

import { colors } from "../../assets/Themes/colors";
import Header from "../../components/Header";
import { Colors } from "react-native/Libraries/NewAppScreen";

// Get the window dimensions
const windowWidth = Dimensions.get("window").width;

//album images
const data = [
  { id: "1", source: albums.alb1 },
  { id: "2", source: albums.alb2 }, 
  { id: "3", source: albums.alb3 },
  { id: "4", source: albums.alb1 },
  { id: "5", source: albums.alb6 },
  { id: "6", source: albums.alb10 },
  { id: "7", source: albums.alb5 },
  { id: "8", source: albums.alb7 },
  { id: "9", source: albums.alb8 },
  { id: "10", source: albums.alb1 },
  { id: "11", source: albums.alb3 },
  { id: "12", source: albums.alb6 },
  { id: "13", source: albums.alb1 },
  { id: "14", source: albums.alb6 },
  { id: "15", source: albums.alb5 },
  { id: "16", source: albums.alb3 },
  { id: "17", source: albums.alb10 },
  { id: "18", source: albums.alb8 }
  //going to add more for each album cover
];

const renderItem = ({ item }) => (
  <View>
    <Image source={item.source} style={styles.image} />
  </View>
);

const CalendarActivityScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/*Header needs to be changed as profile pic and name */}
      <View style={styles.metaData}>
        <Image source={images.caroline.pic} style={styles.profilePic} />
        <View>
          <Text style={styles.title}>Caroline Tran</Text>
          <Text style={styles.username}>@ctran</Text>
        </View>
      </View>

      <View>
          <Text style={styles.month}>NOVEMBER</Text>
        </View>

      {/* Container for month title */}
      {/* <View style={styles.postPrompt}>
        <View>
          <Text style={styles.month}>AUGUST</Text>
        </View>
        <View>
          <Text>May</Text>
        </View>
      </View> */}

      
      <View style={styles.spacer} />
      <View style={styles.containerCalendar}>
        <FlatList
          data={data}
          numColumns={4}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      {/* <Text style={styles.oldPostsText}>Old posts</Text> */}
    </SafeAreaView>
  );
};

const imageSize = (windowWidth - 50) / 4; // Assuming 20 is the total horizontal padding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // padding: 10,
  },
  // textContainer: {
  //   alignContent: "center",
  //   marginLeft: -20,

  // },
  metaData: {
    // margin: 10,
    // paddingTop: 10,
    // paddingLeft: 5,

    flexDirection: "row",
    // alignItems: "center",
    gap: 10,
    width: "90%",

    position: "absolute",
    top: 100,
    left: 25,
    right: 0,
    bottom: 0,
    justifyContent: "flex-start", // Align content to the top
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
  month: {
    color: colors.white,
    fontSize: 24,
    fontWeight: "bold",
    position: "absolute",
    // right: 0,
    // flex: 1,
    // position: 'absolute',
    // top: -10,
    // right: 100,
    marginTop: 170,
    marginLeft: -185,

  },
  postPrompt: {
    // padding: 50,
    // alignItems: "center",
    // justifyContent: "space-between",
    // width: windowWidth * 0.9,
    // height: windowWidth * 0.70,
    // elevation: 5,
  },
  containerCalendar: {
    flex: 1,
    padding: 5,
  },
  image: {
    width: imageSize,
    height: imageSize,
    margin: 5,
    borderRadius: 15,
  },
});

export default CalendarActivityScreen;
