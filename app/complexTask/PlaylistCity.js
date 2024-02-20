import React, { useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../assets/Themes/colors";
import { trackEvent } from "@aptabase/react-native";

const PlaylistCity = ({ route }) => {
  const navigation = useNavigation();
  const name = route.params?.name;
  const city = route.params?.city;
  const image = route.params?.image;

  // Use useEffect to track when the component is rendered
  useEffect(() => {
    // Track the 'playlist_viewed' event
    trackEvent("playlist_viewed", {
      name,
      city,
    });
  }, [name, city]);

  return (
    <>
      <View style={styles.topContainer}>
        <View style={styles.innerContainer}>
          <Image style={styles.image} source={image} />
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.boldText}>{city}'s</Text>
          <Text style={styles.text}>mixtape for</Text>
          <Text style={styles.boldText}>{name}</Text>
        </View>
      </View>
      <ScrollView></ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  boldText: {
    fontWeight: "bold",
    fontSize: 24,
    color: colors.white,
    marginVertical: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
  },
  topContainer: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 40,
    marginVertical: 20,
  },
  text: {
    color: colors.white,
  },
});

export default PlaylistCity;
