import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const PlaylistPin = () => {
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
      <View style={[styles.playlistPinInner, styles.playlistChildLayout]} />
      <View style={[styles.rectangleView, styles.playlistChildLayout]} />
      <Image
        style={[styles.clipPathGroup, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/clip-path-group8.png")}
      />
      <View style={[styles.playlistPinChild1, styles.playlistChildLayout]} />
      <View style={[styles.playlistPinChild2, styles.playlistChildLayout]} />
      <Text style={[styles.top, styles.topFlexBox]}>Top</Text>
      <Text style={[styles.personalized, styles.rockLayout]}>Personalized</Text>
      <Text style={[styles.rock, styles.mixtapeLayout]}>Rock</Text>
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
        <View style={[styles.giftBtnChild, styles.giftLayout]} />
      </Pressable>
      <Pressable
        style={[styles.homeBtn, styles.homeLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={[styles.homeBtnChild, styles.homeLayout]} />
      </Pressable>
      <View style={[styles.discoverBtn, styles.giftLayout]}>
        <Text style={[styles.wildOnes, styles.textTypo]}>Wild Ones</Text>
        <Text style={[styles.jessieMurph, styles.mixTypo]}>Jessie Murph</Text>
        <View style={[styles.homeBtnChild, styles.homeLayout]} />
      </View>
      <View style={styles.homeBtn1}>
        <Text style={[styles.home, styles.mixTypo]}>{`Home `}</Text>
        <Image
          style={styles.homeIcon}
          contentFit="cover"
          source={require("../assets/home.png")}
        />
      </View>
      <View style={styles.discoverBtn1}>
        <Image
          style={styles.discoverBtnItem}
          contentFit="cover"
          source={require("../assets/group-242.png")}
        />
        <Image
          style={styles.discoverBtnItem}
          contentFit="cover"
          source={require("../assets/group-24.png")}
        />
        <Text style={[styles.discover, styles.mixTypo]}>Discover</Text>
      </View>
      <View style={[styles.mixtapeBtn, styles.mixtapeLayout]}>
        <Text style={[styles.mix, styles.mixTypo]}>Mix</Text>
        <Image
          style={[styles.mixtapeBtnChild, styles.mixtapeLayout]}
          contentFit="cover"
          source={require("../assets/group-232.png")}
        />
        <Image
          style={[styles.mixtapeBtnChild, styles.mixtapeLayout]}
          contentFit="cover"
          source={require("../assets/group-243.png")}
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
  mixtapeLayout: {
    width: 53,
    position: "absolute",
  },
  sigmaNusLayout: {
    height: 29,
    width: 182,
    left: 193,
    textAlign: "center",
    color: Color.colorWhite,
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
  homeLayout: {
    width: 131,
    height: 97,
    position: "absolute",
  },
  mixTypo: {
    fontSize: FontSize.size_2xs,
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorWhite,
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
    height: 25,
    top: 776,
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
    left: 0,
    position: "absolute",
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
  },
  image11Icon: {
    top: 655,
    width: 62,
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
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorGray_500,
    width: 393,
  },
  playlistPinInner: {
    left: 28,
    backgroundColor: Color.colorGray_400,
    borderStyle: "solid",
    borderColor: Color.colorFuchsia,
    borderWidth: 1,
    width: 48,
  },
  rectangleView: {
    left: 84,
    width: 113,
    backgroundColor: Color.colorDarkslategray_500,
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
    backgroundColor: Color.colorDarkslategray_500,
    width: 63,
  },
  playlistPinChild2: {
    left: 273,
    width: 76,
    backgroundColor: Color.colorDarkslategray_500,
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
    height: 14,
    textAlign: "center",
    top: 245,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
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
    backgroundColor: Color.colorDarkslategray_500,
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
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  mixtapeFor: {
    top: 130,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
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
    top: 0,
    width: 130,
    left: "50%",
    height: 97,
    backgroundColor: Color.colorDarkslategray_500,
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
    width: 70,
    height: 16,
  },
  discoverBtn: {
    left: 262,
    top: 757,
    width: 190,
  },
  home: {
    top: 62,
    left: 13,
  },
  homeIcon: {
    height: 62,
    top: 0,
    width: 62,
    left: 0,
    position: "absolute",
  },
  homeBtn1: {
    top: 766,
    left: 51,
    height: 75,
    width: 62,
    position: "absolute",
  },
  discoverBtnItem: {
    width: 46,
    height: 46,
    left: 1,
    top: 0,
    position: "absolute",
  },
  discover: {
    top: 52,
    left: 0,
  },
  discoverBtn1: {
    left: 293,
    width: 47,
    height: 65,
    top: 776,
    position: "absolute",
  },
  mix: {
    top: 47,
    left: 14,
  },
  mixtapeBtnChild: {
    height: 38,
    top: 0,
    left: 0,
  },
  mixtapeBtn: {
    top: 781,
    left: 174,
    height: 60,
  },
  playlistPin: {
    height: 974,
    overflow: "hidden",
    width: 393,
    backgroundColor: Color.colorGray_500,
  },
});

export default PlaylistPin;
