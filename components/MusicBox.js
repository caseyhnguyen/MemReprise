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
import { ScrollView } from "react-native-gesture-handler";


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
    <View>
      

      <ImageBackground
        source={{uri: "https://i.scdn.co/image/ab67616d0000b273bb8648acba5bbab771ef0a45"}}
        resizeMode="cover"
        style={styles.bgImg}
        blurRadius={8}
      >
        <View style={styles.navContainer}>
        <BackArrow to="RecieveGift" />
        <Header1 text="Gray's Mixtape" />
      </View>
    <View style={styles.container}>

        
      <View style={styles.infoContainer}>
      <View style={styles.senderInfo}>
          <Image style={styles.profileImage} source={Gray} />
          <View>
            <Text style={styles.senderName}>Gray Wong</Text>
          </View>
        </View>
        <Text style={styles.text}>
          Remember that one incident? You know THAT incident. UGH I can’t get this out of my HEAD thinking about what happened last summer on campus!
        </Text>
        <View style={styles.senderInfo}>
          <View>
            <Text style={styles.textSm}>2/14/24</Text>
            <Text style={styles.textSm}>Wallenberg Hall</Text>
          </View>
        </View>
        <View style={styles.spotifyContainer}>
        <WebView
          source={{
            uri: "https://open.spotify.com/embed/track/3vkCueOmm7xQDoJ17W1Pm3?utm_source=generator",
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
      {/* <View style={styles.spotifyContainer}>
        <WebView
          source={{
            uri: "https://open.spotify.com/embed/track/3vkCueOmm7xQDoJ17W1Pm3?utm_source=generator",
          }}
          style={styles.spotifyEmbed}
        />
      </View> */}
      
      </View>

      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bgImg: {
    padding: 8,
    height: "103%",
    // width: 380,
  },
  container: {
    padding: 20,
    width: "100%",
    alignItems: 'center', 
    justifyContent: 'center', 
    height: "85%",

  },

  navContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 10,
    justifyContent: "flex-start",
    // flexDirection: "column",
    
  },
  infoContainer: {
    padding: 20,
    paddingBottom: 35,
    borderRadius: 10,
    backgroundColor: colors.darkGray,
    gap: 10,
  },
  senderInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  senderName: {
    color: colors.offWhite75,
    fontWeight: 'bold',
    fontSize: 16,

  },
  text: {
    color: colors.offWhite75,
    fontSize: 17,
    marginLeft: 8,
    paddingHorizontal: 15,
    borderLeftWidth: 3,
    borderLeftColor: colors.blue,
    // marginBottom: 30,
  },
  textSm: {
    color: colors.offWhite75,
    fontSize: 15,
  },
  profileImage: {
    borderRadius: 50,
    // borderWidth: 2,
    // borderColor: colors.offWhite75,
    width: 35,
    height: 35,
    marginRight: 10
  },
  spotifyContainer: {
    width: "auto",
    height: 128,
    marginTop: 20,
    paddingBottom: 48,
    marginBottom: -20,
  },
  spotifyEmbed: {
    width: "auto",
    // paddingBottom: -20,
    // height: 10,
    borderRadius: 12
  }
});

export default MusicBox;