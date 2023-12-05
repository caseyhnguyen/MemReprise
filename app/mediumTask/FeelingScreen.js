import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
  TextInput,
} from "react-native";
import images from "../../assets/Images/images";
import { colors } from "../../assets/Themes/colors";
import { styles as defaultStyles } from "../../assets/Themes/default_style";

const windowWidth = Dimensions.get("window").width;
// dimensions for selectionGrid styling
const gap = 12;
const itemPerRow = 2;
const totalGapSize = (itemPerRow - 1) * gap;
const rowWidth = windowWidth * 0.8 + totalGapSize;



const FeelingScreen = ({ route, navigation }) => {
  const caption = route.params?.caption || "";

  const handlePress = (selection) => {
    navigation.navigate("FeelingPlaylist", {selection});
  
  };



  return (
    <SafeAreaView style={defaultStyles.container}>
      <Text>Feeling!</Text>
      <Pressable
        style={styles.postButton}
        onPress={() => handlePress(1)}
        
      >
        <Text style={styles.postButtonText}>#1 Response</Text>
      </Pressable>
      <Pressable
        style={styles.postButton}
        onPress={() => handlePress(2)}
        
      >
        <Text style={styles.postButtonText}>#2 Response</Text>
      </Pressable>

      <Pressable
        style={styles.postButton}
        onPress={() => handlePress(3)}
        
      >
        <Text style={styles.postButtonText}>#3 Response</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  postButton: {
    // Adjust the post button styles
    backgroundColor:  "rgba(256, 256, 256, 0.5)", // Replace with your button color
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "40%", // Adjust the width as needed
    paddingVertical: 12, // Adjust the padding as needed
  },
  postButtonText: {
    // Adjust the post button text styles
    color: colors.darkGray,
    fontSize: 16,
    fontWeight: "bold",
  },
});



export default FeelingScreen;
