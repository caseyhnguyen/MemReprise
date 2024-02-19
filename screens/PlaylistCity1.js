import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PlaylistCity1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.playlistCity}>
      <Text style={[styles.letGo, styles.letGoLayout]}>Let Go</Text>
      <Text style={[styles.cee, styles.ceeTypo]}>Cee</Text>
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
        style={[styles.playlistCityChild, styles.playlistPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-19.png")}
      />
      <Text style={[styles.intoDust, styles.intoDustLayout]}>Into Dust</Text>
      <Text style={[styles.loseControl, styles.letGoTypo]}>Lose Control</Text>
      <Text style={[styles.agoraHills, styles.intoDustTypo]}>Agora Hills</Text>
      <Text style={[styles.selfish, styles.letGoLayout]}>Selfish</Text>
      <Text style={[styles.getHimBack, styles.letGoLayout]}>Get Him Back</Text>
      <Text style={[styles.mazzyStar, styles.intoDustLayout]}>Mazzy Star</Text>
      <Text style={[styles.teddySwims, styles.ceeTypo]}>Teddy Swims</Text>
      <Text style={[styles.dojaCat, styles.ceeTypo]}>Doja Cat</Text>
      <Text style={[styles.justinTimberlake, styles.ceeTypo]}>
        Justin Timberlake
      </Text>
      <Text style={[styles.oliviaRodrigo, styles.ceeTypo]}>Olivia Rodrigo</Text>
      <View style={[styles.layer1, styles.layer1Layout]} />
      <Image
        style={[styles.image2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
      <Image
        style={styles.image3Icon}
        contentFit="cover"
        source={require("../assets/image-3.png")}
      />
      <Image
        style={[styles.image4Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-4.png")}
      />
      <Image
        style={[styles.image5Icon, styles.layer1Layout]}
        contentFit="cover"
        source={require("../assets/image-5.png")}
      />
      <Image
        style={[styles.image6Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <View style={[styles.playlistCityItem, styles.playlistPosition]} />
      <View style={styles.playlistCityInner} />
      <View style={[styles.rectangleView, styles.playlistChildLayout]} />
      <View style={[styles.playlistCityChild1, styles.playlistChildLayout]} />
      <View style={[styles.playlistCityChild2, styles.playlistChildLayout]} />
      <Text style={[styles.top, styles.topFlexBox]}>Top</Text>
      <Text style={[styles.personalized, styles.rockLayout]}>Personalized</Text>
      <Text style={[styles.rock, styles.rockLayout]}>Rock</Text>
      <Text style={[styles.hipHop, styles.rockLayout]}>Hip Hop</Text>
      <View style={[styles.playlistCityChild3, styles.playlistChildLayout]} />
      <Text style={[styles.classics, styles.rockLayout]}>Classics</Text>
      <Text style={[styles.seatles, styles.seatlesLayout]}>Seatle’s</Text>
      <Text style={[styles.mixtapeFor, styles.seatlesLayout]}>mixtape for</Text>
      <Text style={[styles.gray, styles.topFlexBox]}>Gray</Text>
      <Image
        style={styles.batteryIcon}
        contentFit="cover"
        source={require("../assets/battery-icon.png")}
      />
      <Text style={[styles.batteryAmount, styles.topFlexBox]}>92</Text>
      <Text style={[styles.text, styles.textTypo]}>3:25</Text>
      <Image
        style={styles.location31Icon}
        contentFit="cover"
        source={require("../assets/location-3-1.png")}
      />
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
          style={[styles.layer1Icon, styles.seatlesLayout]}
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
          source={require("../assets/discover-icon3.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  letGoLayout: {
    height: 28,
    width: 208,
    textAlign: "left",
    color: Color.colorWhite,
    left: 113,
    position: "absolute",
  },
  ceeTypo: {
    height: 25,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
  },
  playlistPosition: {
    width: 393,
    left: 0,
    position: "absolute",
  },
  intoDustLayout: {
    width: 155,
    height: 25,
    textAlign: "left",
    color: Color.colorWhite,
    left: 113,
    position: "absolute",
  },
  letGoTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  intoDustTypo: {
    fontSize: FontSize.size_lgi,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  layer1Layout: {
    height: 63,
    width: 63,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconPosition: {
    width: 64,
    left: 35,
    position: "absolute",
  },
  playlistChildLayout: {
    backgroundColor: Color.colorDarkslategray_500,
    height: 27,
    borderRadius: Border.br_7xs,
    top: 239,
    position: "absolute",
  },
  topFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  rockLayout: {
    height: 14,
    textAlign: "center",
  },
  seatlesLayout: {
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
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
  },
  cee: {
    top: 776,
    width: 203,
    height: 25,
    textAlign: "left",
    left: 113,
    position: "absolute",
  },
  song81Icon: {
    top: 736,
    width: 67,
    height: 67,
    left: 36,
    position: "absolute",
  },
  playlistCityChild: {
    top: 755,
    height: 160,
  },
  intoDust: {
    top: 332,
    fontSize: FontSize.size_lgi,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  loseControl: {
    top: 418,
    width: 217,
    height: 18,
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    left: 113,
    fontWeight: "700",
    position: "absolute",
  },
  agoraHills: {
    top: 499,
    height: 28,
    width: 208,
    textAlign: "left",
    color: Color.colorWhite,
    left: 113,
    position: "absolute",
  },
  selfish: {
    top: 579,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  getHimBack: {
    top: 664,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  mazzyStar: {
    top: 357,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_mini,
  },
  teddySwims: {
    top: 440,
    width: 203,
    height: 25,
    textAlign: "left",
    left: 113,
    position: "absolute",
  },
  dojaCat: {
    top: 523,
    width: 203,
    height: 25,
    textAlign: "left",
    left: 113,
    position: "absolute",
  },
  justinTimberlake: {
    top: 609,
    width: 203,
    height: 25,
    textAlign: "left",
    left: 113,
    position: "absolute",
  },
  oliviaRodrigo: {
    top: 690,
    width: 203,
    height: 25,
    textAlign: "left",
    left: 113,
    position: "absolute",
  },
  layer1: {
    top: 399,
    left: 35,
    height: 63,
    overflow: "hidden",
  },
  image2Icon: {
    height: "6.47%",
    width: "16.03%",
    top: "32.65%",
    right: "75.06%",
    bottom: "60.88%",
    left: "8.91%",
    position: "absolute",
  },
  image3Icon: {
    top: 405,
    width: 62,
    height: 62,
    left: 36,
    position: "absolute",
  },
  image4Icon: {
    top: 483,
    height: 65,
  },
  image5Icon: {
    top: 571,
    left: 36,
  },
  image6Icon: {
    top: 650,
    height: 62,
  },
  playlistCityItem: {
    top: 49,
    height: 237,
    backgroundColor: Color.colorGray_500,
  },
  playlistCityInner: {
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
  playlistCityChild1: {
    left: 202,
    width: 63,
    backgroundColor: Color.colorDarkslategray_500,
  },
  playlistCityChild2: {
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
  playlistCityChild3: {
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
  seatles: {
    top: 94,
    fontSize: FontSize.size_10xl,
    width: 182,
    left: 193,
    height: 29,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  mixtapeFor: {
    top: 131,
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
  location31Icon: {
    top: 85,
    left: 73,
    width: 124,
    height: 124,
    position: "absolute",
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
    width: 190,
    top: 757,
  },
  playlistCity: {
    flex: 1,
    height: 974,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray_500,
  },
});

export default PlaylistCity1;
