import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const MusicBoxGiftSample5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.musicBoxGiftSample3}>
      <View style={styles.musicBoxGiftSample3Child} />
      <View style={styles.messageTextBox} />
      <Image
        style={[styles.sarcasticIcon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/08sarcastic2.png")}
      />
      <View style={[styles.messageTextBox1, styles.messageLayout]} />
      <View style={[styles.messageTextBox2, styles.messageLayout]} />
      <Image
        style={styles.musicBoxGiftSample3Item}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <Image
        style={[styles.loveIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/-13love2.png")}
      />
      <Image
        style={[styles.smileIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/-01smile1.png")}
      />
      <Image
        style={[styles.feelingIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/-07feeling.png")}
      />
      <Image
        style={[styles.kissLoveIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/-15kiss-love2.png")}
      />
      <Image
        style={[styles.wowIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/-11wow1.png")}
      />
      <Image
        style={[styles.pukeIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/-26puke2.png")}
      />
      <Text style={[styles.reckless, styles.lundLayout]}>Reckless</Text>
      <Text style={[styles.lund, styles.lundTypo]}>Lund</Text>
      <Pressable
        style={styles.viewPlaylist}
        onPress={() => navigation.navigate("PlaylistSample")}
      >
        <Text style={styles.viewPlaylist1}>View Playlist</Text>
      </Pressable>
      <Text
        style={[styles.rememberWhenWe, styles.lundTypo]}
      >{`Remember when we danced to this song at that party?  `}</Text>
      <Text style={[styles.chris, styles.chrisTypo]}>Chris</Text>
      <Text style={[styles.dec28th2021, styles.lundTypo]}>Dec. 28th, 2021</Text>
      <Image
        style={styles.batteryIcon}
        contentFit="cover"
        source={require("../assets/battery-icon.png")}
      />
      <Text style={[styles.batteryAmount, styles.lundTypo]}>92</Text>
      <Text style={[styles.text, styles.lundTypo]}>3:25</Text>
      <View style={[styles.musicBoxGiftSample3Inner, styles.lyricsTransform]} />
      <Text style={[styles.lyrics, styles.lyricsTransform]}>Lyrics</Text>
      <Text style={[styles.react, styles.reactTypo]}>React</Text>
      <Text style={[styles.comment, styles.reactTypo]}>Comment</Text>
      <Text style={[styles.comment, styles.reactTypo]}>Comment</Text>
      <Text style={[styles.share, styles.reactTypo]}>Share</Text>
      <View style={styles.rectangleView} />
      <View style={styles.messageTextBox3} />
      <Text style={[styles.comment2, styles.lundTypo]}>Comment...</Text>
      <Image
        style={[styles.microphoneIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/microphone-icon5.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.giftBackToContainer, styles.chrisTypo]}>
          <Text style={styles.lundTypo}>{`Gift Back to `}</Text>
          <Text style={styles.chris1Typo}>Chris</Text>
        </Text>
        <Image
          style={styles.layer1Icon}
          contentFit="cover"
          source={require("../assets/layer-117.png")}
        />
      </View>
      <Pressable
        style={styles.backArrow}
        onPress={() => navigation.navigate("ShareMusicBox")}
      >
        <Image
          style={[styles.icon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/back-arrow1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.backArrow}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/back-arrow1.png")}
        />
      </Pressable>
      <Image
        style={[styles.clipPathGroup, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/clip-path-group9.png")}
      />
      <Pressable
        style={[styles.layer1, styles.layerLayout]}
        onPress={() => navigation.navigate("MusicBoxGiftSample4")}
      >
        <Image
          style={[styles.icon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/layer-115.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.layer11, styles.layerLayout]}
        onPress={() => navigation.navigate("MusicBoxGiftSample3")}
      >
        <Image
          style={[styles.icon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/layer-116.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.layerLayout]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={styles.song41Icon}
        contentFit="cover"
        source={require("../assets/song-4-11.png")}
      />
      <Image
        style={[styles.musicBoxGiftSample3Child1, styles.musicChildPosition]}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <Image
        style={[styles.musicBoxGiftSample3Child2, styles.musicChildPosition]}
        contentFit="cover"
        source={require("../assets/vector-3.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  messageLayout: {
    height: 29,
    width: 67,
    borderRadius: Border.br_7xs,
    left: 38,
    backgroundColor: Color.colorGray_200,
    position: "absolute",
  },
  iconLayout1: {
    height: 40,
    width: 40,
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    top: 795,
    height: 40,
    width: 40,
    position: "absolute",
    overflow: "hidden",
  },
  lundLayout: {
    width: 182,
    height: 29,
  },
  lundTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  chrisTypo: {
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
  },
  lyricsTransform: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    position: "absolute",
  },
  reactTypo: {
    height: 18,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorWhite,
    position: "absolute",
  },
  iconLayout: {
    width: 12,
    position: "absolute",
  },
  groupChildLayout: {
    height: 49,
    width: 309,
    position: "absolute",
  },
  layerLayout: {
    width: "7.63%",
    position: "absolute",
  },
  musicChildPosition: {
    top: 563,
    marginLeft: -165.5,
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  musicBoxGiftSample3Child: {
    marginLeft: -176.5,
    top: 737,
    borderTopLeftRadius: Border.br_12xl,
    borderTopRightRadius: Border.br_12xl,
    backgroundColor: Color.colorDarkslategray_500,
    height: 414,
    width: 353,
    left: "50%",
    position: "absolute",
  },
  messageTextBox: {
    top: 858,
    left: 20,
    height: 121,
    backgroundColor: Color.colorGray_200,
    width: 353,
    position: "absolute",
  },
  sarcasticIcon: {
    width: "10.18%",
    top: "68.93%",
    right: "1.27%",
    bottom: "27.59%",
    left: "88.55%",
    height: "3.48%",
    position: "absolute",
  },
  messageTextBox1: {
    top: 755,
  },
  messageTextBox2: {
    top: 994,
  },
  musicBoxGiftSample3Item: {
    top: 921,
    width: 34,
    height: 34,
    left: 38,
    position: "absolute",
  },
  loveIcon: {
    left: 104,
    top: 794,
    width: 40,
  },
  smileIcon: {
    left: 55,
    top: 794,
    width: 40,
  },
  feelingIcon: {
    left: 153,
  },
  kissLoveIcon: {
    left: 202,
  },
  wowIcon: {
    left: 251,
  },
  pukeIcon: {
    top: 793,
    left: 300,
  },
  reckless: {
    top: 474,
    left: 41,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  lund: {
    top: 508,
    fontSize: FontSize.size_mid,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
    left: 46,
    width: 182,
    height: 29,
  },
  viewPlaylist1: {
    color: Color.colorFuchsia,
    width: 103,
    height: 17,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
  },
  viewPlaylist: {
    left: 274,
    top: 689,
    position: "absolute",
  },
  rememberWhenWe: {
    top: 103,
    left: 50,
    width: 286,
    height: 48,
    fontSize: FontSize.size_mid,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  chris: {
    top: 194,
    left: 120,
    width: 66,
    height: 27,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    position: "absolute",
  },
  dec28th2021: {
    top: 160,
    left: 67,
    fontSize: FontSize.size_smi,
    width: 106,
    height: 20,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  batteryIcon: {
    top: 21,
    left: 336,
    width: 29,
    height: 12,
    position: "absolute",
  },
  batteryAmount: {
    height: "1.17%",
    width: "3.31%",
    top: "1.91%",
    left: "87.28%",
    fontSize: FontSize.size_5xs,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    position: "absolute",
  },
  text: {
    height: "1.82%",
    width: "8.14%",
    top: "1.74%",
    left: "9.41%",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  musicBoxGiftSample3Inner: {
    top: 415,
    left: 367,
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    backgroundColor: Color.colorGray_100,
    width: 131,
    height: 26,
  },
  lyrics: {
    top: 388,
    left: 368,
    fontFamily: FontFamily.interRegular,
    width: 75,
    height: 28,
    textAlign: "center",
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
  },
  react: {
    top: 760,
    width: 49,
    height: 18,
    left: 49,
    textAlign: "left",
  },
  comment: {
    top: 875,
    width: 76,
    textAlign: "center",
    left: 46,
  },
  share: {
    top: 1000,
    left: 47,
    width: 49,
    height: 18,
    textAlign: "center",
  },
  rectangleView: {
    top: 792,
    left: 373,
    width: 23,
    height: 51,
    position: "absolute",
    backgroundColor: Color.colorGray_500,
  },
  messageTextBox3: {
    top: 919,
    left: 82,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorSilver,
    width: 267,
    height: 38,
    position: "absolute",
  },
  comment2: {
    top: 927,
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    width: 225,
    height: 22,
    left: 93,
    textAlign: "left",
    position: "absolute",
  },
  microphoneIcon: {
    top: 928,
    height: 21,
    left: 49,
    overflow: "hidden",
  },
  groupChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorDarkslategray_300,
  },
  chris1Typo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  giftBackToContainer: {
    top: 13,
    left: 33,
    width: 179,
    height: 31,
    textAlign: "left",
    position: "absolute",
  },
  layer1Icon: {
    top: 9,
    left: 223,
    width: 46,
    height: 35,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 1040,
    left: 40,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backArrow: {
    left: "5.09%",
    top: "5.04%",
    right: "92.11%",
    bottom: "93.1%",
    width: "2.8%",
    height: "1.86%",
    position: "absolute",
  },
  clipPathGroup: {
    height: "3.74%",
    width: "10.94%",
    top: "16.16%",
    right: "71.76%",
    bottom: "80.1%",
    left: "17.3%",
    position: "absolute",
  },
  layer1: {
    left: "65.14%",
    top: "52.82%",
    right: "27.23%",
    bottom: "43.7%",
    height: "3.48%",
  },
  layer11: {
    left: "28.75%",
    top: "52.79%",
    right: "63.61%",
    bottom: "43.74%",
    height: "3.48%",
  },
  vectorIcon: {
    height: "5.91%",
    width: "17.3%",
    top: "51.69%",
    right: "40.71%",
    bottom: "42.4%",
    left: "41.98%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "3.13%",
    top: "53.05%",
    right: "44.53%",
    bottom: "43.82%",
    left: "47.84%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  song41Icon: {
    marginLeft: -96.5,
    top: 256,
    width: 194,
    height: 194,
    left: "50%",
    position: "absolute",
  },
  musicBoxGiftSample3Child1: {
    width: 332,
  },
  musicBoxGiftSample3Child2: {
    width: 68,
  },
  ellipseIcon: {
    top: 556,
    left: 93,
    height: 12,
  },
  musicBoxGiftSample3: {
    flex: 1,
    height: 1151,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray_500,
  },
});

export default MusicBoxGiftSample5;
