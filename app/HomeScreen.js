import React, { useContext, useState, useEffect, useCallback } from "react";
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
import { supabase } from "../utils/supabaseClient";


// Get the window dimensions
const windowWidth = Dimensions.get("window").width;

const HomeScreen = ({ navigation }) => {
  const [currTracks, setCurrTracks] = useState([]);
  const [currLocations, setCurrLocations] = useState([]);
  const [currProfiles, setCurrProfiles] = useState([]);

  let numSent;

  useEffect(() => {
    setCurrTracks(tracks);
    setCurrLocations(locations);
    setCurrProfiles(profiles);
  }, []);


  const getCount = useCallback(async () => {
    let numHero;
    try {
      let query = supabase
        .from("mixtapes")
        .select("*")
        .order("created_at", { ascending: false }); // Ensure default ordering is from most recent to oldest
      
      query = query.order("created_at", { ascending: false });
      // console.log(query);
      
      const { data, error } = await query;
      if (error) throw error;

      let processedPosts = parsePosts(data || []).filter((post) => post.source);
      numHero = processedPosts.length;

    } catch (error) {
      console.error("Error filtering posts:", error);
    } finally {
    }
    return numHero;
  }, []);
  


  const parsePosts = (fetchedPosts) => {
    // console.log(fetchedPosts);
    return fetchedPosts.map((post) => {
      let formattedTimestamp = "Unknown Time";

      if (post.created_at) {
        const createdAt = new Date(post.created_at);
        const timeOptions = {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        };
        const dateOptions = {
          year: "2-digit",
          month: "2-digit",
          day: "2-digit",
        };

        const formattedTime = new Intl.DateTimeFormat(
          "en-US",
          timeOptions
        ).format(createdAt);
        const formattedDate = new Intl.DateTimeFormat(
          "en-US",
          dateOptions
        ).format(createdAt);

        formattedTimestamp = `${formattedTime} • ${formattedDate}`;
      }

      // Parsing song_data to extract necessary details
      let songDataParsed = {};
      // console.log("post.song_data:");
      // console.log(post.song_data);
      if (post.song_data) {
        try {
          songDataParsed = JSON.parse(post.song_data);
        } catch (error) {
          console.error("Error parsing song_data:", error);
        }
      }
      
      // console.log(post.imageUrl);
      // console.log("songDataParsed:");
      // console.log(songDataParsed);
      return {
        ...post,
        userName: post.userName || "Unknown User",
        // songData: songDataParsed,
        songData: {
          title: post.songTitle,
          artists: post.artists,
          albumName: post.albumName,
          imageUrl: post.imageUrl,
          previewUrl: post.previewUrl,
          externalUrl: post.externalUrl,
        },
        // source: songDataParsed.imageUrl || "",
        source: post.imageUrl || "",
        caption: post.caption || "",
        themeIconLabel: post.theme_icon_text || "",
        emotionIconLabel: post.emotion_icon_text || "",
        activityIconLabel: post.activity_icon_text || "",
        formattedTimestamp,
      };
    });
  };

  const filterPosts = useCallback(async () => {
    try {
      let query = supabase
        .from("mixtapes_received")
        .select("*")
        .order("created_at", { ascending: false }); // Ensure default ordering is from most recent to oldest
      
      query = query.order("created_at", { ascending: false });
      // console.log(query);
      
      const { data, error } = await query;
      if (error) throw error;

      let processedPosts = parsePosts(data || []).filter((post) => post.source);
      // console.log(processedPosts);
      setCurrTracks(processedPosts);

    } catch (error) {
      console.error("Error filtering posts:", error);
    } finally {
    }
  }, []);





  const renderSong = ({ item }) => {
    console.log(item.formattedTimestamp);
    return (
      <Song
        title={item.songTitle || "Unknown Title"}
        artists={item.artists || ["Unknown Artist"]}
        imageUrl={item.imageUrl || "Unknown Image"}
        previewUrl={item.previewUrl || ""}
        externalUrl={item.externalUrl || ""}
        name={item.songTitle || ""}
        sender_name={item.sender_name || ""}
        sender_img={item.sender_img || ""}
        location_name={item.location_name || ""}
        message={item.message || ""}
        formattedTimestamp={item.formattedTimestamp || ""}
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
    return <ProfilePressable2 image={item.image} name={item.name} mixtape={item.mixtape} />;
  };

  useEffect(() => {
    numSent = getCount();
    filterPosts();
  }, [filterPosts]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView>
        <ScrollView style={styles.container}>
          <Hero sent={numSent} />
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
                showsHorizontalScrollIndicator={false}
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
                showsHorizontalScrollIndicator={false}
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
    height: "100%",
    marginTop: 25
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
