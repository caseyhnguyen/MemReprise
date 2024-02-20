import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
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
  const navigation = useNavigation();
  const name = route.params?.name;
  const city = route.params?.city;
  const image = route.params?.image;
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
    <>
      <View style={styles.row}>
        {/* <View style={styles.col}> */}
        <BackArrow to="Receive Gift" />
        {/* </View> */}
        <View style={styles.col}>
          <Header1 text="Gray's Musicbox" />
        </View>
      </View>
      <View style={styles.outerContainer}>
        {/* <TouchableOpacity style={styles.container} onPress={onSongPress}> */}
        <Text style={styles.titleText}>We first met here, remember?</Text>
        <Text style={styles.artistText}>Feb 14, 2023</Text>

        <View style={styles.songInfo}>
          <Image source={AlbumImg} style={styles.image} />
          <View style={styles.titleAndArtist}>
            <Text style={styles.titleText} numberOfLines={1}>
              Mamma Mia
            </Text>
            <Text style={styles.artistText} numberOfLines={1}>
              {/* {Array.isArray(artists) ? artists.join(", ") : artists} */}
              ABBA
            </Text>
          </View>
          {/* <Text style={styles.albumName} numberOfLines={1}>
            {albumName}
          </Text> */}
        </View>
        {/* </TouchableOpacity> */}
        <View style={styles.progressWrapper}>
          <ProgressBar
            // progress={progressFraction}
            progress={1 / 3}
            width={windowWidth - 40}
            height={7}
            borderRadius={3.5}
            color={colors.blue}
            unfilledColor={colors.offWhite75}
            borderWidth={0}
            useNativeDriver={true}
            style={styles.progressBar}
          />
          {/* <Text style={styles.progressTime}>{formatTime(progressMs)}</Text>
        <Text style={styles.durationTime}>{formatTime(duration)}</Text> */}
        </View>
        <SeeMore text="View" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    // backgroundColor: colors.darkGray,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 10,
    width: windowWidth * 0.95,
    height: windowWidth * 0.35,
    gap: 10,
    textAlign: "center",
    color: colors.white,
    marginTop: 20,
  },
  container: {
    flexDirection: "col",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
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
    fontSize: 18,
    textAlign: "center",
    marginTop: 2,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 2,
    color: colors.white,
    textAlign: "center",
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
    marginTop: 10,
  },
  col: {
    marginTop: 8,
  },
});

export default MusicBox;
