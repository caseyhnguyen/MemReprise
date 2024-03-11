import React, { useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../assets/Themes/colors";
import { trackEvent } from "@aptabase/react-native";
import { WebView } from "react-native-webview";
import BackArrow from "../../components/BackArrow";
import Header1 from "../../components/Header1";

const PlaylistCity = ({ route }) => {
  const navigation = useNavigation();
  const name = route.params?.name;
  const city = route.params?.city;
  const image = route.params?.image;
  const mixtape = route.params?.mixtape;

  // Use useEffect to track when the component is rendered
  useEffect(() => {
    // Track the 'playlist_viewed' event
    trackEvent("playlist_viewed", {
      name,
      city,
    });
  }, [name, city]);
  console.log(name);
  let mixtapeText = name + "'s Mixtape";
  return (
    <>
      <View style={styles.topContainer}>
        <BackArrow to="FeedScreen" />
        <View  style={styles.headArrow}>
        <Header1 text={mixtapeText}/>
        </View>
      </View>
      <WebView
        // source={{
        //   uri: "https://open.spotify.com/playlist/1XjcbwYnkGT87SoAXdp607?si=7aaa5300cbfb4462",
        // }}
        source={{
          uri: mixtape,
        }}
        style={styles.spotifyContainer}
      />
    </>
  );
};

const styles = StyleSheet.create({
  headArrow: {
    marginTop: 8,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 24,
    color: colors.white,
    marginVertical: 5,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
  },
  spotifyContainer: {
    marginHorizontal: 20,
  },
  topContainer: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 10,
    marginTop: 45,
    marginBottom: 10
  },
  text: {
    color: colors.white,
  },
});

export default PlaylistCity;
