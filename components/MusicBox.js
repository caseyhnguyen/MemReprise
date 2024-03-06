import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProgressBar from "react-native-progress/Bar";
import { colors } from "../assets/Themes/colors";
import { trackEvent } from "@aptabase/react-native";
import SeeMore from "./SeeMore";
import Header1 from "./Header1";
import AlbumImg from "../assets/mamma-mia.jpg";
import BackArrow from "./BackArrow";
import { WebView } from "react-native-webview";
import { useSpotifyAuth, useSpotifyTracks, useSearch } from "../utils";
import { getTrack } from "../utils/apiOptions";
import Gray from "../assets/gray.png"
import Icon from "react-native-vector-icons/FontAwesome5";
import PillPressable from "./PillPressable";


const windowWidth = Dimensions.get("window").width;

const MusicBox = ({
  route,
  title,
  artists,
  albumName,
  imageUrl,
  duration,
  previewUrl,
  externalUrl,
  progressFraction,
  progressMs,
  userName,
}) => {
  const { token, getSpotifyAuth } = useSpotifyAuth();
  // const { tracks, currentTrack, loading, fetchMore, clearCacheAndRefetch } = useSpotifyTracks(token);

  const fetchTrack = async () => {
    console.log("lets's try");
    try {
      const fetchedCurrentTrack = await getTrack("https://api.spotify.com/track/51c94ac31swyDQj9B3Lzs3", token);
      // setCurrentTrack(fetchedCurrentTrack);
    } catch (error) {
      console.error("Failed to fetch current track:", error);
    }
  };

  console.log(fetchTrack);

  const navigation = useNavigation();
  // const name = route.params?.name;
  // const city = route.params?.city;
  // const image = route.params?.image;
  const onSongPress = () => {
    // Log the song selection event before navigation
    trackEvent("Song Selected", {
      songTitle: title,
      artistNames: Array.isArray(artists) ? artists.join(", ") : artists,
      userName: userName,
    });

    navigation.navigate("Theme Question", {
      songData: {
        title,
        artists: Array.isArray(artists) ? artists : [artists],
        albumName,
        imageUrl,
        duration,
        previewUrl,
        externalUrl,
      },
      userName,
    });
  };

  return (
    <View style={styles.wholeBg}>
      {/* <ImageBackground source={AlbumImg} resizeMode="cover" style={styles.bgImage}></ImageBackground> */}
      <View style={styles.row}>
        {/* <View style={styles.col}> */}
        <BackArrow to="Receive Gift" />
        {/* </View> */}
        <View style={styles.col}>
          <Header1 text="Gray's Mixtape" />
        </View>
      </View>
      <View style={styles.outerContainer}>
        {/* <TouchableOpacity style={styles.container} onPress={onSongPress}> */}
        <Text style={styles.titleText}>
          Remember that one incident? You know THAT incident. UGH I can’t get this out of my HEAD thinking about what happened last summer on campus!
        </Text>
        <View style={styles.row}>
          <View style={styles.postDetails}>
            <View style={styles.postLeftCol}>
              <Image style={styles.image} source={Gray} />
            </View>
            <View style={styles.postLeftCol}>
              <Text style={styles.artistText}>Gray Wong</Text>
              <Text style={styles.artistText}>2/14/24</Text>
            </View>
          </View>

          <View style={styles.postDetails}>
            <View style={styles.postLeftCol}>
              <Icon name="map-marker-alt" style={styles.icon} />
            </View>
            <View style={styles.postLeftCol}>
              <Text style={styles.artistText}>Wallenberg Hall, 450 Jane Stanford Way</Text>
            </View>
          </View>

        </View>
      </View>

      <View style={styles.spotifyContainer}>
        <WebView
        source={{
          uri: "https://open.spotify.com/embed/track/7wCmS9TTVUcIhRalDYFgPy?utm_source=generator",
        }}
        style={styles.spotifyEmbed}
      />
        
      </View>
      <PillPressable
      onPress={() => navigation.navigate("Share a Music Box")}
      text="Gift back"
      isSpotify={false}
      disabled={false}
    />
      <SeeMore text="View" />

    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: colors.darkGray,
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 20,
    width: windowWidth,
    // height: windowWidth * 0.35,
    height: "auto",
    gap: 20,
    textAlign: "center",
    color: colors.white,
    marginVertical: 20,

  },
  spotifyContainer: {
    flexDirection: "col",
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 10,
    width: "100%",
    height: "15.8%",
    textAlign: "center",
    color: colors.white,
    // backgroundColor: colors.darkGray,
  },
  spotifyEmbed: {
    // marginHorizontal: 10,
    width: "auto",
    backgroundColor: colors.black,
    borderRadius: 12

  },
  songInfo: {
    flexDirection: "col",
    marginTop: 50,
    gap: 10,
    justifyContent: "flex-start",
    // width: "95%",
    textAlign: "center",
    alignItems: "center",
  },
  titleAndArtist: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginRight: 10,
    // width: "75%",
    textAlign: "center",
    color: colors.white,
  },
  image: {
    width: 200,
    height: 200,
  },
  albumName: {
    color: colors.white,
    flex: 3,
    fontSize: 16,
    // marginRight: 10,
  },
  artistText: {
    color: colors.white,
    fontSize: 15,
    // textAlign: "center",
    textAlign: "left",
    marginTop: 2,
  },
  titleText: {
    // fontWeight: "bold",
    fontSize: 17,
    marginBottom: 2,
    color: colors.white,
    textAlign: "left",
  },
  progressWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  progressTime: {
    fontSize: 14,
    color: colors.white,
    position: "absolute",
    left: 10,
    bottom: -20,
  },
  durationTime: {
    fontSize: 14,
    color: colors.darkGray,
    position: "absolute",
    right: 10,
    bottom: -20,
  },
  row: {
    width: "100%",
    // backgroundColor: colors.white,
    // flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    // marginTop: 10,
  },
  col: {
    marginTop: 8,
  },
  postDetails: {
    textAlign: "left",
    marginBottom: 2,
    width: "49%",
    flexDirection: "row",

  },
  postLeftCol: {
    textAlign: "left",
    marginBottom: 2,
    marginRight: 8,
    
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  icon: {
    color: colors.gray,
    fontSize: 30,
    marginRight: 8,
    marginTop: 3
  },
  wholeBg: {
    width: "100%",
    height: "100%",
    // backgroundColor: colors.pink
    flex: 1,
    flexDirection: 'column',
  },
  bgImage: {
    // flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    blurRadius: 100
  }
});

export default MusicBox;
