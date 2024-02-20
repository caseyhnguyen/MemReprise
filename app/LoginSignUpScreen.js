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
import { useSpotifyAuth, useSpotifyTracks, useSearch } from "../utils";
import ExImage from "../assets/caroline.png";

// Get the window dimensions
const windowWidth = Dimensions.get("window").width;

const LoginSignUpScreen = ({ navigation }) => {
  const [limitedTracks, setTracks] = useState([
    {
      albumName: "Heaven To A Tortured Mind",
      deviceName: null,
      duration: 106102,
      externalUrl: "https://open.spotify.com/track/3nRhH5u3TE6HtvBH6mNwzY",
      imageUrl:
        "https://i.scdn.co/image/ab67616d0000b273bb8648acba5bbab771ef0a45",
      isPlaying: true,
      previewUrl:
        "https://p.scdn.co/mp3-preview/b35c3416325d4d652808e70ed1491498ca65c44a?cid=280999f8a28245e293e00323bcb896b4",
      progressMs: 67452,
      songArtists: ["Yves Tumor"],
      songTitle: "Romanticist",
    },
    {
      albumName: "Fe3O4: BREAK",
      deviceName: null,
      duration: 215293,
      externalUrl: "https://open.spotify.com/track/4byr9TsXs4qtm8rG2FfwRW",
      imageUrl:
        "https://i.scdn.co/image/ab67616d0000b27381d97a31253b898bc4149195",
      isPlaying: true,
      previewUrl:
        "https://p.scdn.co/mp3-preview/8faeb7836ac0c8c7739ff63de35a75bbe9c7d0b8?cid=280999f8a28245e293e00323bcb896b4",
      progressMs: 3913,
      songArtists: ["NMIXX"],
      songTitle: "Run For Roses",
    },
    {
      albumName: "Mercurial World",
      deviceName: null,
      duration: 207391,
      externalUrl: "https://open.spotify.com/track/07ZJYwSX32GOYOk3tybj2T",
      imageUrl:
        "https://i.scdn.co/image/ab67616d0000b2730ecbdac77e72dc16719a3e89",
      isPlaying: true,
      previewUrl:
        "https://p.scdn.co/mp3-preview/71c5f137e9c3dfce39318975c5c018359f78cb12?cid=280999f8a28245e293e00323bcb896b4",
      progressMs: 1569,
      songArtists: ["Magdalena Bay"],
      songTitle: "Dreamcatching",
    },
    {
      albumName: "killer",
      deviceName: null,
      duration: 176876,
      externalUrl: "https://open.spotify.com/track/4QUzLCXrpHO4c6dGyZlpO2",
      imageUrl:
        "https://i.scdn.co/image/ab67616d0000b27314aee4f383a0e9f4ec5d90c8",
      isPlaying: true,
      previewUrl:
        "https://p.scdn.co/mp3-preview/032f32f63aba2b1fe95500266ef47385bbf41aec?cid=280999f8a28245e293e00323bcb896b4",
      progressMs: 2488,
      songArtists: ["FKA twigs"],
      songTitle: "killer",
    },
    {
      albumName: "<K>",
      deviceName: null,
      duration: 188320,
      externalUrl: "https://open.spotify.com/track/0i8K9oyDQSg5tPZUTHPwhX",
      imageUrl:
        "https://i.scdn.co/image/ab67616d0000b2732e1aa1db726272029b1268a7",
      isPlaying: true,
      previewUrl:
        "https://p.scdn.co/mp3-preview/8fae903dac2a5fabe1ed968607903e789c8219e1?cid=280999f8a28245e293e00323bcb896b4",
      progressMs: 2922,
      songArtists: ["HeeJin"],
      songTitle: "Algorithm",
    },
    {
      albumName: "Abba",
      deviceName: null,
      duration: 213266,
      externalUrl: "https://open.spotify.com/track/2TxCwUlqaOH3TIyJqGgR91",
      imageUrl:
        "https://i.scdn.co/image/ab67616d0000b27392d0747a634fcc351c6ac3c2",
      isPlaying: true,
      previewUrl: null,
      progressMs: 2194,
      songArtists: ["ABBA"],
      songTitle: "Mamma Mia",
    },
    {
      albumName: "Unreal Unearth",
      deviceName: null,
      duration: 149880,
      externalUrl: "https://open.spotify.com/track/38U4hYYzUbydvJ4J5YZEy6",
      imageUrl:
        "https://i.scdn.co/image/ab67616d0000b273a63bdfd4a6e9b3c9f4f2e91d",
      isPlaying: true,
      previewUrl:
        "https://p.scdn.co/mp3-preview/1c87520067304bf49fbce1dd68346aae52c4c036?cid=280999f8a28245e293e00323bcb896b4",
      progressMs: 1384,
      songArtists: ["Hozier"],
      songTitle: "Butchered Tongue",
    },
    {
      albumName: "Modal Soul",
      deviceName: null,
      duration: 175360,
      externalUrl: "https://open.spotify.com/track/2ej1A2Ze6P2EOW7KfIosZR",
      imageUrl:
        "https://i.scdn.co/image/ab67616d0000b273912cc8fe2e9a53d328757a41",
      isPlaying: true,
      previewUrl:
        "https://p.scdn.co/mp3-preview/5f938f411df9e22a60ff286f91964fb7e586bdca?cid=280999f8a28245e293e00323bcb896b4",
      progressMs: 5109,
      songArtists: ["Nujabes", "Cise Starr & Akin from CYNE"],
      songTitle: "Feather (feat. Cise Starr & Akin from CYNE)",
    },
    {
      albumName: "ODD EYE CIRCLE <Version Up>",
      deviceName: null,
      duration: 174400,
      externalUrl: "https://open.spotify.com/track/1qlusFEI25LWMQNXcxfL7a",
      imageUrl:
        "https://i.scdn.co/image/ab67616d0000b2730ea7adccb30f8de275ef1676",
      isPlaying: true,
      previewUrl:
        "https://p.scdn.co/mp3-preview/30d48ebc680724031448ce9cd6d59254cd893e63?cid=280999f8a28245e293e00323bcb896b4",
      progressMs: 2797,
      songArtists: ["ODD EYE CIRCLE (ARTMS)"],
      songTitle: "Je Ne Sais Quoi",
    },
    {
      albumName: "Preachers Daughter",
      deviceName: null,
      duration: 365000,
      externalUrl: "https://open.spotify.com/track/0CMlcNJpLFaQxMTLFYpFdg",
      imageUrl:
        "https://i.scdn.co/image/ab67616d0000b273ccd1887cc78b0bd55f54bbe1",
      isPlaying: true,
      previewUrl:
        "https://p.scdn.co/mp3-preview/48c7f571c49fbdb6adf58974803effd50f3b375f?cid=280999f8a28245e293e00323bcb896b4",
      progressMs: 3339,
      songArtists: ["Ethel Cain"],
      songTitle: "Western Nights",
    },
    {
      albumName: "Heaven knows",
      deviceName: null,
      duration: 131013,
      externalUrl: "https://open.spotify.com/track/5CCr8msaN3MhgqBoa9yWhH",
      imageUrl:
        "https://i.scdn.co/image/ab67616d0000b27312e36c27d935e955b44c6581",
      isPlaying: true,
      previewUrl:
        "https://p.scdn.co/mp3-preview/543d8d09a5530a1ab94dd0c6f83fc4ee3e0d7f96?cid=280999f8a28245e293e00323bcb896b4",
      progressMs: 1000,
      songArtists: ["PinkPantheress", "Ice Spice"],
      songTitle: "Boy's a liar Pt. 2",
    },
  ]);

  const [limitedLocations, setLocations] = useState([
    {
      albumName: "Heaven To A Tortured Mind",
      deviceName: null,
      duration: 106102,
      externalUrl: "https://open.spotify.com/track/3nRhH5u3TE6HtvBH6mNwzY",
      imageUrl:
        "https://lh3.googleusercontent.com/p/AF1QipOq60ViLRwScKpbhthgi1e2Ee5U0YzvGEpzeCiR=s1360-w1360-h1020",
      isPlaying: true,
      previewUrl:
        "https://p.scdn.co/mp3-preview/b35c3416325d4d652808e70ed1491498ca65c44a?cid=280999f8a28245e293e00323bcb896b4",
      progressMs: 67452,
      songArtists: ["Lagunita Drive"],
      songTitle: "White Plaza",
    },
    {
      albumName: "Fe3O4: BREAK",
      deviceName: null,
      duration: 215293,
      externalUrl: "https://open.spotify.com/track/4byr9TsXs4qtm8rG2FfwRW",
      imageUrl:
        "https://lh3.googleusercontent.com/p/AF1QipPTKXCTWcHqDXMFicTcIw6ZuyEd-yszOhUxRzeH=s1360-w1360-h1020",
      isPlaying: true,
      previewUrl:
        "https://p.scdn.co/mp3-preview/8faeb7836ac0c8c7739ff63de35a75bbe9c7d0b8?cid=280999f8a28245e293e00323bcb896b4",
      progressMs: 3913,
      songArtists: ["El Camino Real"],
      songTitle: "Town & Country Village",
    },
    {
      albumName: "Mercurial World",
      deviceName: null,
      duration: 207391,
      externalUrl: "https://open.spotify.com/track/07ZJYwSX32GOYOk3tybj2T",
      imageUrl:
        "https://lh3.googleusercontent.com/p/AF1QipMC5qO7M4GbfZVRKYYlNLUVolxdJ40MU12mL4y6=s1360-w1360-h1020",
      isPlaying: true,
      previewUrl:
        "https://p.scdn.co/mp3-preview/71c5f137e9c3dfce39318975c5c018359f78cb12?cid=280999f8a28245e293e00323bcb896b4",
      progressMs: 1569,
      songArtists: ["Hamilton Ave"],
      songTitle: "Nobu",
    },
    {
      albumName: "killer",
      deviceName: null,
      duration: 176876,
      externalUrl: "https://open.spotify.com/track/4QUzLCXrpHO4c6dGyZlpO2",
      imageUrl:
        "https://lh3.googleusercontent.com/p/AF1QipMhcIPPu6Io-APXPe4wewn-qFKHHEVKNRhnwRZB=s1360-w1360-h1020",
      isPlaying: true,
      previewUrl:
        "https://p.scdn.co/mp3-preview/032f32f63aba2b1fe95500266ef47385bbf41aec?cid=280999f8a28245e293e00323bcb896b4",
      progressMs: 2488,
      songArtists: ["Escondido Mall"],
      songTitle: "Cecil H. Green Library",
    },
    {
      albumName: "<K>",
      deviceName: null,
      duration: 188320,
      externalUrl: "https://open.spotify.com/track/0i8K9oyDQSg5tPZUTHPwhX",
      imageUrl:
        "https://lh3.googleusercontent.com/p/AF1QipNc--7nh7jFN08T41CDgqGLUj515Dz_jc_YXeDQ=s1360-w1360-h1020",
      isPlaying: true,
      previewUrl:
        "https://p.scdn.co/mp3-preview/8fae903dac2a5fabe1ed968607903e789c8219e1?cid=280999f8a28245e293e00323bcb896b4",
      progressMs: 2922,
      songArtists: ["Jane Stanford Way"],
      songTitle: "Memorial Church",
    },
  ]);

  const [limitedProfiles, setProfiles] = useState([
    { image: require("../assets/casey.png"), name: "Casey" },
    { image: require("../assets/gray.png"), name: "Gray" },
    { image: require("../assets/brent.png"), name: "Brent" },
    { image: require("../assets/emily.png"), name: "Emily" },
    { image: require("../assets/tristan.png"), name: "Tristan" },
    { image: require("../assets/caroline.png"), name: "Caroline" },
  ]);

  const renderSong = ({ item }) => {
    return (
      <Song
        title={item.songTitle || "Unknown Title"}
        artists={item.songArtists || ["Unknown Artist"]}
        imageUrl={item.imageUrl || "Unknown Image"}
        previewUrl={item.previewUrl || ""}
        externalUrl={item.externalUrl || ""}
      />
    );
  };

  const renderProfile = ({ item }) => {
    return <ProfilePressable2 image={item.image} name={item.name} />;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <View style={styles.col}>
            <Header1 text="Recent Musicboxes"></Header1>
          </View>
          <View style={styles.colR}>
            <SeeMore />
          </View>
          <View>
            <FlatList
              horizontal={true}
              data={limitedTracks}
              renderItem={renderSong}
              keyExtractor={(item, index) =>
                item.id?.toString() || index.toString()
              }
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Header1 text="Mixtapes by friends"></Header1>
          </View>
          <View style={styles.colR}>
            <SeeMore />
          </View>
          <View style={styles.friends}>
            <FlatList
              horizontal={true}
              data={limitedProfiles}
              renderItem={renderProfile}
              keyExtractor={(item, index) =>
                item.id?.toString() || index.toString()
              }
            />
          </View>
        </View>

        <View style={styles.rowLast}>
          <View style={styles.col}>
            <Header1 text="My pinned locations"></Header1>
          </View>
          <View style={styles.colR}>
            <SeeMore />
          </View>

          <View>
            <FlatList
              horizontal={true}
              data={limitedLocations}
              renderItem={renderSong}
              keyExtractor={(item, index) =>
                item.id?.toString() || index.toString()
              }
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // alignItems: 'flex-start',
    // justifyContent: "center",
    width: windowWidth,
    // backgroundColor: colors.white,
    marginBottom: 10,
  },
  friends: {
    marginTop: -90,
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
    marginTop: -30,
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

export default LoginSignUpScreen;
