import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const PlaylistPin1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.playlistPin}>
      <Text style={[styles.letGo, styles.letGoLayout]}>Let Go</Text>
      <Text style={[styles.cee, styles.katyTypo]}>Cee</Text>
      <Image
        style={styles.song81Icon}
        contentFit="cover"
        source={require("../assets/song-8-1.png")}
      />
      <Image
        style={styles.song81Icon}
        contentFit="cover"
        source={require("../assets/song-8-1.png")}
      />
      <Image
        style={[styles.playlistPinChild, styles.playlistPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-19.png")}
      />
      <Text style={[styles.lastFridayNight, styles.darkHorseTypo]}>
        Last Friday Night
      </Text>
      <Text style={[styles.hotNCold, styles.letGoTypo]}>Hot N Cold</Text>
      <Text style={[styles.darkHorse, styles.darkHorseTypo]}>Dark Horse</Text>
      <Text style={[styles.iKissedA, styles.letGoLayout]}>I Kissed a Girl</Text>
      <Text style={[styles.californiaGirls, styles.letGoLayout]}>
        California Girls
      </Text>
      <Text style={[styles.katyPerry, styles.topTypo]}>Katy Perry</Text>
      <Text style={[styles.katyPerry1, styles.katyTypo]}>Katy Perry</Text>
      <Text style={[styles.katyPerry2, styles.katyTypo]}>Katy Perry</Text>
      <Text style={[styles.katyPerry3, styles.katyTypo]}>Katy Perry</Text>
      <Text style={[styles.katyPerry4, styles.katyTypo]}>Katy Perry</Text>
      <Image
        style={[styles.image7Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
      <Image
        style={[styles.image11Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
      <Image
        style={[styles.image8Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-8.png")}
      />
      <Image
        style={[styles.image10Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-8.png")}
      />
      <Image
        style={styles.image9Icon}
        contentFit="cover"
        source={require("../assets/image-9.png")}
      />
      <View style={[styles.playlistPinItem, styles.playlistPosition]} />
      <View style={styles.playlistPinInner} />
      <View style={[styles.rectangleView, styles.playlistChildLayout]} />
      <Image
        style={[styles.clipPathGroup, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/clip-path-group15.png")}
      />
      <View style={[styles.playlistPinChild1, styles.playlistChildLayout]} />
      <View style={[styles.playlistPinChild2, styles.playlistChildLayout]} />
      <Text style={[styles.top, styles.topFlexBox]}>Top</Text>
      <Text style={[styles.personalized, styles.rockLayout]}>Personalized</Text>
      <Text style={[styles.rock, styles.rockLayout]}>Rock</Text>
      <Text style={[styles.hipHop, styles.rockLayout]}>Hip Hop</Text>
      <View style={[styles.playlistPinChild3, styles.playlistChildLayout]} />
      <Text style={[styles.classics, styles.rockLayout]}>Classics</Text>
      <Text style={[styles.sigmaNus, styles.sigmaNusLayout]}>Sigma Nu’s</Text>
      <Text
        style={[styles.mixtapeFor, styles.sigmaNusLayout]}
      >{`mixtape for `}</Text>
      <Text style={[styles.gray, styles.topFlexBox]}>Gray</Text>
      <Image
        style={styles.batteryIcon}
        contentFit="cover"
        source={require("../assets/battery-icon.png")}
      />
      <Text style={[styles.batteryAmount, styles.topFlexBox]}>92</Text>
      <Text style={[styles.text, styles.textTypo]}>3:25</Text>
      <Pressable
        style={styles.backArrow}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/back-arrow1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.giftBtn, styles.giftLayout]}
        onPress={() => navigation.navigate("ShareMusicBox")}
      >
        <View style={[styles.giftBtnChild, styles.btnChildPosition]} />
        <Text style={[styles.giftMusicBox, styles.discoverTypo]}>
          Gift Music Box
        </Text>
        <Image
          style={[styles.layer1Icon, styles.sigmaNusLayout]}
          contentFit="cover"
          source={require("../assets/layer-113.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.homeBtn, styles.homeLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={[styles.homeBtnChild, styles.homeLayout]} />
        <Text style={[styles.home, styles.topFlexBox]}>Home</Text>
        <Image
          style={styles.homeBtnItem}
          contentFit="cover"
          source={require("../assets/group-42.png")}
        />
      </Pressable>
      <View style={[styles.discoverBtn, styles.giftLayout]}>
        <Text style={[styles.wildOnes, styles.textTypo]}>Wild Ones</Text>
        <Text style={[styles.jessieMurph, styles.topFlexBox]}>
          Jessie Murph
        </Text>
        <View style={[styles.homeBtnChild, styles.homeLayout]} />
        <Text style={[styles.discover, styles.discoverTypo]}>Discover</Text>
        <Image
          style={[styles.discoverIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/discover-icon2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  letGoLayout: {
    height: 28,
    width: 208,
  },
  katyTypo: {
    width: 203,
    height: 25,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    left: 113,
    position: "absolute",
  },
  playlistPosition: {
    width: 393,
    left: 0,
    position: "absolute",
  },
  darkHorseTypo: {
    fontSize: FontSize.size_lgi,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 113,
    position: "absolute",
  },
  letGoTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  topTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  iconPosition: {
    height: 63,
    left: 36,
    position: "absolute",
  },
  playlistChildLayout: {
    backgroundColor: Color.colorDarkslategray_500,
    height: 27,
    borderRadius: Border.br_7xs,
    top: 239,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  topFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  rockLayout: {
    height: 14,
    textAlign: "center",
  },
  sigmaNusLayout: {
    height: 29,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
    position: "absolute",
  },
  giftLayout: {
    height: 97,
    position: "absolute",
  },
  btnChildPosition: {
    top: 0,
    backgroundColor: Color.colorDarkslategray_500,
  },
  discoverTypo: {
    height: 32,
    width: 110,
    top: 50,
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  homeLayout: {
    width: 131,
    height: 97,
    position: "absolute",
  },
  letGo: {
    top: 752,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    left: 113,
    position: "absolute",
  },
  cee: {
    top: 776,
    height: 25,
  },
  song81Icon: {
    top: 736,
    width: 67,
    height: 67,
    left: 36,
    position: "absolute",
  },
  playlistPinChild: {
    top: 755,
    height: 160,
  },
  lastFridayNight: {
    top: 332,
    width: 190,
    height: 25,
  },
  hotNCold: {
    top: 418,
    width: 217,
    height: 18,
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    left: 113,
    position: "absolute",
  },
  darkHorse: {
    top: 499,
    height: 28,
    width: 208,
  },
  iKissedA: {
    top: 579,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 113,
    position: "absolute",
  },
  californiaGirls: {
    top: 664,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 113,
    position: "absolute",
  },
  katyPerry: {
    top: 357,
    width: 155,
    height: 25,
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    left: 113,
    position: "absolute",
  },
  katyPerry1: {
    top: 440,
    height: 25,
  },
  katyPerry2: {
    top: 523,
    height: 25,
  },
  katyPerry3: {
    top: 609,
    height: 25,
  },
  katyPerry4: {
    top: 690,
    height: 25,
  },
  image7Icon: {
    top: 325,
    width: 62,
    height: 63,
  },
  image11Icon: {
    top: 655,
    width: 62,
    height: 63,
  },
  image8Icon: {
    top: 408,
    width: 63,
  },
  image10Icon: {
    top: 575,
    width: 63,
  },
  image9Icon: {
    top: 489,
    left: 35,
    height: 66,
    width: 63,
    position: "absolute",
  },
  playlistPinItem: {
    top: 49,
    height: 237,
    backgroundColor: Color.colorGray_500,
  },
  playlistPinInner: {
    left: 28,
    backgroundColor: Color.colorFuchsia,
    width: 48,
    height: 27,
    borderRadius: Border.br_7xs,
    top: 239,
    position: "absolute",
  },
  rectangleView: {
    left: 84,
    width: 113,
  },
  clipPathGroup: {
    height: "12.83%",
    width: "31.78%",
    top: "8.21%",
    right: "47.86%",
    bottom: "78.95%",
    left: "20.36%",
    position: "absolute",
  },
  playlistPinChild1: {
    left: 202,
    width: 63,
  },
  playlistPinChild2: {
    left: 273,
    width: 76,
  },
  top: {
    top: 244,
    left: 34,
    width: 34,
    height: 19,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
  },
  personalized: {
    left: 92,
    width: 98,
    top: 245,
    height: 14,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  rock: {
    left: 206,
    width: 53,
    top: 245,
    height: 14,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  hipHop: {
    left: 277,
    width: 68,
    top: 245,
    height: 14,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  playlistPinChild3: {
    left: 355,
    width: 90,
  },
  classics: {
    left: 361,
    width: 80,
    top: 245,
    height: 14,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  sigmaNus: {
    top: 93,
    fontSize: FontSize.size_5xl,
    width: 182,
    left: 193,
    height: 29,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  mixtapeFor: {
    top: 130,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    width: 182,
    left: 193,
    height: 29,
    textAlign: "center",
    color: Color.colorWhite,
  },
  gray: {
    top: 155,
    left: 213,
    fontSize: FontSize.size_18xl,
    fontFamily: FontFamily.leagueScript,
    width: 142,
    height: 54,
    color: Color.colorWhite,
  },
  batteryIcon: {
    top: 28,
    left: 346,
    width: 29,
    height: 12,
    position: "absolute",
  },
  batteryAmount: {
    height: "1.17%",
    width: "3.31%",
    top: "3.01%",
    left: "89.82%",
    fontSize: FontSize.size_5xs,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  text: {
    height: "1.82%",
    width: "8.14%",
    top: "2.44%",
    left: "9.41%",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backArrow: {
    left: "5.34%",
    top: "6.06%",
    right: "91.86%",
    bottom: "91.75%",
    width: "2.8%",
    height: "2.2%",
    position: "absolute",
  },
  giftBtnChild: {
    marginLeft: -65,
    height: 97,
    position: "absolute",
    width: 130,
    left: "50%",
  },
  giftMusicBox: {
    left: 10,
  },
  layer1Icon: {
    top: 17,
    left: 46,
    width: 38,
    overflow: "hidden",
  },
  giftBtn: {
    marginLeft: -64.5,
    width: 130,
    left: "50%",
    height: 97,
    top: 757,
  },
  homeBtnChild: {
    top: 0,
    backgroundColor: Color.colorDarkslategray_500,
    left: 0,
    width: 131,
  },
  home: {
    top: 51,
    left: 47,
    width: 51,
    height: 25,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
  },
  homeBtnItem: {
    top: 10,
    left: 51,
    width: 46,
    height: 34,
    position: "absolute",
  },
  homeBtn: {
    left: 1,
    top: 757,
  },
  wildOnes: {
    top: 41,
    left: 41,
    width: 149,
    height: 14,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  jessieMurph: {
    top: 59,
    left: 81,
    fontSize: FontSize.size_2xs,
    width: 70,
    height: 16,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorWhite,
  },
  discover: {
    left: 14,
  },
  discoverIcon: {
    height: "36.08%",
    width: "18.42%",
    top: "13.4%",
    right: "53.16%",
    bottom: "50.52%",
    left: "28.42%",
    position: "absolute",
  },
  discoverBtn: {
    left: 262,
    top: 757,
    width: 190,
  },
  playlistPin: {
    flex: 1,
    height: 974,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray_500,
  },
});

export default PlaylistPin1;
