import React, { useContext, useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import images from "../assets/Images/images";
import { colors } from "../assets/Themes/colors";
import Header from "../components/Header";
import PillPressable from "../components/PillPressable";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import { trackEvent } from "@aptabase/react-native";
import PillSelectable from "../components/PillSelectable.js";
import ProfilePressable2 from "../components/ProfilePressable2";
import SeeMore from "../components/SeeMore.js";
import Song from "../components/Song.js";
import Location from "../components/Location.js";
import { useSpotifyAuth, useSpotifyTracks, useSearch } from "../utils";
import ExImage from "../assets/caroline.png";
import { tracks, locations, profiles } from './_data.js'
import Hero from "../components/Hero.js";

// Get the window dimensions
const windowWidth = Dimensions.get("window").width;

const HomeScreen = ({ navigation }) => {
  const [currTracks, setCurrTracks] = useState([]);
  const [currLocations, setCurrLocations] = useState([]);
  const [currProfiles, setCurrProfiles] = useState([]);

  useEffect(() => {
    setCurrTracks(tracks);
    setCurrLocations(locations);
    setCurrProfiles(profiles);
  }, []);

  const renderSong = ({ item }) => {
    return (
      <Song
        title={item.songTitle || "Unknown Title"}
        artists={item.songArtists || ["Unknown Artist"]}
        imageUrl={item.imageUrl || "Unknown Image"}
        previewUrl={item.previewUrl || ""}
        externalUrl={item.externalUrl || ""}
        name={item.songTitle || ""}
      />
    );
  };

  const renderLocation = ({ item }) => {
    return (
      <Location
        title={item.songTitle || "Unknown Title"}
        artists={item.songArtists || ["Unknown Artist"]}
        imageUrl={item.imageUrl || "Unknown Image"}
        previewUrl={item.previewUrl || ""}
        externalUrl={item.externalUrl || ""}
        name={item.songTitle || ""}
      />
    );
  };

  const renderProfile = ({ item }) => {
    return <ProfilePressable2 image={item.image} name={item.name} />;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView>
        <ScrollView style={styles.container}>
          <Hero />
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Header1 text="Your Mixtapes"></Header1>
              <SeeMore
                onPress={() => {
                  trackEvent("View More Pressed", {
                    context: "Recent Musicboxes",
                  });
                }}
              />
            </View>
            <View style={styles.sectionBody}>
              <FlatList
                horizontal={true}
                data={currTracks}
                renderItem={renderSong}
                keyExtractor={(item, index) =>
                  item.id?.toString() || index.toString()
                }
              />
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Header1 text="Mixtapes by Friends"></Header1>
              <SeeMore />
            </View>
            <View style={styles.sectionBody}>
              <FlatList
                horizontal={true}
                data={currProfiles}
                renderItem={renderProfile}
                keyExtractor={(item, index) =>
                  item.id?.toString() || index.toString()
                }
              />
            </View>
          </View>
          {/* <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Header1 text="My Locations"></Header1>
              <SeeMore />
            </View>
            <View style={styles.sectionBody}>
              <FlatList
                horizontal={true}
                data={currLocations}
                renderItem={renderLocation}
                keyExtractor={(item, index) =>
                  item.id?.toString() || index.toString()
                }
              />
            </View>
          </View> */}
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: "100%"
  },
  section: {
    display: "flex",
    flexDirection: "column",
  },
  sectionHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  sectionBody: {
    paddingVertical: 10,
  },
  row: {
    width: "100%",
    // backgroundColor: colors.white,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginTop: 10,
  },
  rowLast: {
    width: "100%",
    // backgroundColor: colors.white,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginTop: 0,
  },
  col: {
    width: "70%",
    // width: "auto",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  colR: {
    // width: "50%",
    width: "30%",
    paddingHorizontal: 10,
    paddingVertical: 10,
    // backgroundColor: colors.white,
    alignItems: "flex-start",
    textAlign: "right",
    // alignSelf: 'flex-end'
    marginLeft: "auto",
    right: 0,
  },
});

export default HomeScreen;
