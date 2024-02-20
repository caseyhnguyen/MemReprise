import React, { useEffect } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  Text,
  Pressable,
  Image,
  FlatList,
  View,
  Dimensions,
  TextInput,
} from "react-native";

import { styles } from "../assets/Themes/default_style";
import { trackEvent } from "@aptabase/react-native";

// Get the window width
const windowWidth = Dimensions.get("window").width;

const ProfileScreen = ({ navigation }) => {
  useEffect(() => {
    // Log the screen view event
    trackEvent("Screen View", { screen: "Profile" });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
    </SafeAreaView>
  );
};

export default ProfileScreen;
