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
import RNPickerSelect from "react-native-picker-select";

// Get the window dimensions
const windowWidth = Dimensions.get("window").width;

//album images
const data = [
  { id: "1", source: albums.alb1, month: "NOV", date: "2" },
  { id: "2", source: albums.alb2, month: "NOV", date: "3" },
  { id: "3", source: albums.alb3, month: "NOV", date: "5" },
  { id: "4", source: albums.alb1, month: "NOV", date: "6" },
  { id: "5", source: albums.alb6, month: "NOV", date: "7" },
  { id: "6", source: albums.alb10, month: "NOV", date: "8" },
  { id: "7", source: albums.alb5, month: "NOV", date: "9" },
  { id: "8", source: albums.alb7, month: "NOV", date: "11" },
  { id: "9", source: albums.alb8, month: "NOV", date: "12" },
  { id: "10", source: albums.alb1, month: "NOV", date: "14" },
  { id: "11", source: albums.alb3, month: "NOV", date: "15" },
  { id: "12", source: albums.alb6, month: "NOV", date: "16" },
  { id: "13", source: albums.alb1, month: "NOV", date: "18" },
  { id: "14", source: albums.alb6, month: "NOV", date: "19" },
  { id: "15", source: albums.alb5, month: "NOV", date: "20" },
  { id: "16", source: albums.alb3, month: "NOV", date: "21" },
  { id: "17", source: albums.alb10, month: "NOV", date: "22" },
  { id: "18", source: albums.alb8, month: "NOV", date: "23" },
  //going to add more for each album cover
];

const renderItem = ({ item }) => (
  <View>
    <Image source={item.source} style={styles.image} />
    <View style={styles.textBox}>
      <Text style={styles.monthText}>{item.month}</Text>
      <Text style={styles.dateText}>{item.date}</Text>
    </View>
  </View>
);

const CalendarActivityScreen = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      {/*Header needs to be changed as profile pic and name */}
      <View style={styles.header}>
        <Image source={images.caroline.pic} style={styles.profilePic} />
        <View>
          <Text style={styles.title}>Caroline Tran</Text>
          <Text style={styles.username}>@ctran</Text>
        </View>
        <View style={styles.dropDown}>
          <RNPickerSelect
            onValueChange={(value) => setSelectedValue(value)}
            items={[
              { label: "Activity", value: "activity" },
              { label: "Theme", value: "theme" },
              { label: "Feeling", value: "feeling" },
            ]}
            style={pickerSelectStyles}
            placeholder={{ label: "Reprise", value: "reprise" }}
          />
        </View>
      </View>

      <View>
        <Text style={styles.month}>NOVEMBER</Text>
      </View>

      <View style={styles.spacer} />
      <View style={styles.containerCalendar}>
        <FlatList
          data={data}
          numColumns={4}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const imageSize = (windowWidth - 50) / 4; // Assuming 20 is the total horizontal padding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    gap: 10,
    width: "90%",
    position: "absolute",
    top: 100,
    left: 25,
    right: 0,
    bottom: 0,
    justifyContent: "flex-start",
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
    marginTop: 170,
    marginLeft: -185,
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
  textBox: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: colors.yellow, // Set the background color to yellow
    padding: 2,
    borderRadius: 5,
  },
  monthText: {
    color: colors.black,
    fontWeight: "bold",
  },
  dateText: {
    color: colors.black,
    textAlign: "center",
  },
  dropDown: {
    paddingLeft: 30,
  },
});

const pickerSelectStyles = {
  // Adjust the dropdown styles
  inputIOS: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.offWhite75,
    borderRadius: 4,
    color: colors.black,
    backgroundColor: colors.offWhite75, // Adjust background color as needed
    // Other styling as needed for iOS
  },
  placeholder: {
    color: colors.darkGray,
    fontWeight: "bold",
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: colors.black,
    backgroundColor: colors.offWhite75, // Adjust background color as needed
    // Other styling as needed for Android
  },
  // You can add placeholder style if needed
};

export default CalendarActivityScreen;
