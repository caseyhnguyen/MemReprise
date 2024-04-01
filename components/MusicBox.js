import React, { useEffect, useState } from "react";
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
import { profiles } from '../app/_data.js'


const windowWidth = Dimensions.get("window").width;

const MusicBox = ({
  route,
  // artists,
  // albumName,
  // imageUrl,
  // duration,
  // previewUrl,
  // externalUrl,
  // sender_name,
  // sender_img,
  // location_name,
  // message,
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

  console.log(route);
    const [currProfiles, setCurrProfiles] = useState([]);
    let mixtape = "";
    useEffect(() => {
      setCurrProfiles(profiles);
    }, []);
    


  const navigation = useNavigation();
  // console.log(route);
  const artists = route.params?.artists;
  const externalUrl = route.params?.externalUrl;
  const imageUrl = route.params?.imageUrl;
  const location_name = route.params?.location_name;
  const message = route.params?.message;
  const sender_img = route.params?.sender_img;
  const sender_name = route.params?.sender_name;
  const title = route.params?.title;
  const formattedTimestamp = route.params?.formattedTimestamp

  let songId = externalUrl.substring(31);
  let embedUrl = "https://open.spotify.com/embed/track/" + songId;
  let headerText = sender_name + "'s Tape";

  for(let i=0; i < profiles.length; i++) {
    if(profiles[i].name === sender_name) {
      mixtape = profiles[i].mixtape;
    }
  }
  const onSongPress = () => {
    // Log the song selection event before navigation
    trackEvent("Song Selected", {
      songTitle: title,
      artistNames: Array.isArray(artists) ? artists.join(", ") : artists,
    });



    // navigation.navigate("Theme Question", {
    //   songData: {
    //     title,
    //     artists: Array.isArray(artists) ? artists : [artists],
    //     albumName,
    //     imageUrl,
    //     duration,
    //     previewUrl,
    //     externalUrl,
    //   },
    //   userName,
    // });
  };


  // route,
  // artists,
  // albumName,
  // imageUrl,
  // duration,
  // previewUrl,
  // externalUrl,
  // sender_name,
  // sender_img,
  // location_name,
  // message,



  return (
    <View>
      

      <ImageBackground
        source={{uri: imageUrl}}
        resizeMode="cover"
        style={styles.bgImg}
        blurRadius={8}
      >
        {/* <View style={styles.navContainer}>
        <BackArrow to="RecieveGift" />
        <Header1 text={headerText} />
      </View> */}
    <View style={styles.container}>

        
      <View style={styles.infoContainer}>
      <View style={styles.senderInfo}>
          <Image style={styles.profileImage} source={sender_img} />
          <View>
            <Text style={styles.senderName}>{sender_name}</Text>
          </View>
        </View>
        <View style={styles.messageCont}>
          <Text style={styles.text}>{message}</Text>

        </View>
        <View style={styles.senderInfo}>
          <View>
            <Text style={styles.textSm}>{formattedTimestamp}</Text>
            <Text style={styles.textSm}>{location_name}</Text>
          </View>
        </View>
        <View style={styles.spotifyContainer}>
        <WebView
          source={{
            uri: embedUrl,
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
      <SeeMore text="View"
      onPress={() => navigation.navigate("City Playlist", {name: sender_name, image: { uri: sender_img }, mixtape: mixtape})}

       />
      </View>
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
    // backgroundColor: colors.black,
    alignItems: 'center', 
    justifyContent: 'center', 
    height: "78%",
    marginTop: 30

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
    width: "100%",
    // backgroundColor: colors.black,
  },
  messageCont: {
    marginLeft: 8,
    paddingHorizontal: 15,
    borderLeftWidth: 3,
    borderLeftColor: colors.blue,
    marginTop: 10,
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