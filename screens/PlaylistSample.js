import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const PlaylistSample = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.playlistSample}>
      <Text style={[styles.letGo, styles.letGoLayout]}>Let Go</Text>
      <Text style={[styles.cee, styles.ceeTypo]}>Cee</Text>
      <Image
        style={[styles.song81Icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/song-8-1.png")}
      />
      <Image
        style={[styles.song81Icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/song-8-1.png")}
      />
      <Image
        style={[styles.playlistSampleChild, styles.playlistPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-19.png")}
      />
      <View style={styles.aintNoRestForTheWickedParent}>
        <Text style={[styles.aintNoRest, styles.stromaePosition]}>
          Ain’t No Rest for the Wicked
        </Text>
        <Text style={[styles.cageTheElephant, styles.stromaePosition]}>
          Cage the Elephant
        </Text>
        <Image
          style={[styles.layer1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/layer-13.png")}
        />
      </View>
      <View style={[styles.lovinOnMeParent, styles.parentPosition1]}>
        <Text style={[styles.lovinOnMe, styles.lovinOnMeLayout]}>
          Lovin’ on Me
        </Text>
        <Text style={[styles.jackHarlow, styles.lovinOnMeLayout]}>
          Jack Harlow
        </Text>
        <Image
          style={[styles.song61Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/song-6-1.png")}
        />
      </View>
      <View style={[styles.tousLesMemesParent, styles.parentPosition]}>
        <Text style={[styles.tousLesMemes, styles.stromaePosition]}>
          Tous Les Memes
        </Text>
        <Text style={[styles.stromae, styles.stromaePosition]}>Stromae</Text>
        <Image
          style={[styles.song71Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/song-7-1.png")}
        />
      </View>
      <Pressable
        style={[styles.rosesImanbekRemixParent, styles.parentPosition]}
        onPress={() => navigation.navigate("MusicBoxGiftSample4")}
      >
        <Text style={[styles.rosesImanbek, styles.homeBtnItemPosition]}>
          Roses - Imanbek Remix
        </Text>
        <Text style={[styles.saintJhn, styles.stromaePosition]}>SAINt JHN</Text>
        <Image
          style={[styles.song71Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/song-5-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.recklessParent, styles.parentPosition]}
        onPress={() => navigation.navigate("MusicBoxGiftSample5")}
      >
        <Text style={[styles.reckless, styles.recklessTypo]}>Reckless</Text>
        <Text style={[styles.stromae, styles.stromaePosition]}>Lund</Text>
        <Image
          style={[styles.song41Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/song-4-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.cruelSummerParent, styles.parentPosition1]}
        onPress={() => navigation.navigate("MusicBoxGiftSample3")}
      >
        <Text style={[styles.cruelSummer, styles.lovinOnMeLayout]}>
          Cruel Summer
        </Text>
        <Text style={[styles.taylorSwift, styles.lovinOnMeLayout]}>
          Taylor Swift
        </Text>
        <Image
          style={[styles.songImageIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/song-image1.png")}
        />
      </Pressable>
      <View style={[styles.playlistSampleItem, styles.playlistPosition]} />
      <Text style={[styles.chriss, styles.chrissLayout]}>Chris’s</Text>
      <Text style={[styles.playlistFor, styles.chrissLayout]}>
        playlist for
      </Text>
      <Text style={styles.gray}>Gray</Text>
      <Image
        style={styles.batteryIcon}
        contentFit="cover"
        source={require("../assets/battery-icon.png")}
      />
      <Text style={[styles.batteryAmount, styles.textTypo1]}>92</Text>
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
      <Image
        style={[styles.clipPathGroup, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/clip-path-group18.png")}
      />
      <Pressable
        style={[styles.giftBtn, styles.giftLayout]}
        onPress={() => navigation.navigate("ShareMusicBox")}
      >
        <View style={[styles.giftBtnChild, styles.btnChildBg]} />
        <Text style={[styles.giftMusicBox, styles.discoverTypo]}>
          Gift Music Box
        </Text>
        <Image
          style={[styles.layer1Icon1, styles.chrissLayout]}
          contentFit="cover"
          source={require("../assets/layer-118.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.homeBtn, styles.homeLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={[styles.homeBtnChild, styles.homeLayout]} />
        <Text style={[styles.home, styles.ceeTypo]}>Home</Text>
        <Image
          style={[styles.homeBtnItem, styles.homeBtnItemPosition]}
          contentFit="cover"
          source={require("../assets/group-43.png")}
        />
      </Pressable>
      <View style={[styles.discoverBtn, styles.giftLayout]}>
        <Text style={[styles.wildOnes, styles.textTypo]}>Wild Ones</Text>
        <Text style={[styles.jessieMurph, styles.textTypo1]}>Jessie Murph</Text>
        <View style={[styles.homeBtnChild, styles.homeLayout]} />
        <Text style={[styles.discover, styles.discoverTypo]}>Discover</Text>
        <Image
          style={[styles.discoverIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/discover-icon.png")}
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
  ceeTypo: {
    height: 25,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  iconLayout2: {
    width: 67,
    height: 67,
  },
  playlistPosition: {
    width: 393,
    left: 0,
    position: "absolute",
  },
  stromaePosition: {
    left: 78,
    textAlign: "left",
    color: Color.colorWhite,
  },
  iconPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  parentPosition1: {
    width: 233,
    left: 35,
    position: "absolute",
  },
  lovinOnMeLayout: {
    width: 155,
    left: 78,
    height: 25,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  parentPosition: {
    width: 286,
    left: 35,
    position: "absolute",
  },
  homeBtnItemPosition: {
    top: 10,
    position: "absolute",
  },
  recklessTypo: {
    fontSize: FontSize.size_lgi,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  chrissLayout: {
    height: 29,
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
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
  btnChildBg: {
    backgroundColor: Color.colorDarkslategray_500,
    top: 0,
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
    width: 203,
    height: 25,
    textAlign: "left",
    color: Color.colorWhite,
    left: 113,
  },
  song81Icon: {
    top: 736,
    left: 36,
    height: 67,
    position: "absolute",
  },
  playlistSampleChild: {
    top: 755,
    height: 160,
  },
  aintNoRest: {
    top: 15,
    width: 217,
    height: 18,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  cageTheElephant: {
    top: 37,
    height: 25,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_mini,
    position: "absolute",
    width: 203,
  },
  layer1Icon: {
    width: 63,
    height: 63,
    overflow: "hidden",
  },
  aintNoRestForTheWickedParent: {
    top: 399,
    width: 295,
    height: 63,
    left: 35,
    position: "absolute",
  },
  lovinOnMe: {
    top: 16,
    fontSize: FontSize.size_lgi,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  jackHarlow: {
    top: 41,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_mini,
  },
  song61Icon: {
    width: 64,
    height: 64,
  },
  lovinOnMeParent: {
    top: 316,
    height: 66,
  },
  tousLesMemes: {
    top: 12,
    fontSize: FontSize.size_lg,
    height: 28,
    width: 208,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  stromae: {
    top: 38,
    height: 25,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_mini,
    position: "absolute",
    width: 203,
  },
  song71Icon: {
    height: 67,
    width: 67,
  },
  tousLesMemesParent: {
    top: 652,
    height: 67,
  },
  rosesImanbek: {
    fontSize: FontSize.size_mid,
    left: 78,
    textAlign: "left",
    color: Color.colorWhite,
    height: 28,
    width: 208,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  saintJhn: {
    top: 40,
    height: 25,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_mini,
    position: "absolute",
    width: 203,
  },
  rosesImanbekRemixParent: {
    top: 566,
    height: 67,
  },
  reckless: {
    top: 14,
    left: 78,
    textAlign: "left",
    color: Color.colorWhite,
    height: 28,
    width: 208,
    position: "absolute",
  },
  song41Icon: {
    width: 66,
    height: 66,
  },
  recklessParent: {
    top: 481,
    height: 66,
  },
  cruelSummer: {
    top: 9,
    fontSize: FontSize.size_lgi,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  taylorSwift: {
    top: 34,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_mini,
  },
  songImageIcon: {
    width: "27.04%",
    top: "0%",
    right: "72.96%",
    bottom: "0%",
    left: "0%",
    height: "100%",
    maxWidth: "100%",
    position: "absolute",
  },
  cruelSummerParent: {
    top: 235,
    height: 62,
  },
  playlistSampleItem: {
    top: 45,
    height: 170,
    backgroundColor: Color.colorGray_500,
  },
  chriss: {
    top: 90,
    fontSize: FontSize.size_10xl,
    width: 182,
    left: 177,
    height: 29,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  playlistFor: {
    top: 127,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    width: 182,
    left: 177,
    height: 29,
    textAlign: "center",
    color: Color.colorWhite,
  },
  gray: {
    top: 151,
    left: 197,
    fontSize: FontSize.size_18xl,
    fontFamily: FontFamily.leagueScript,
    width: 142,
    height: 54,
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
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
    textAlign: "center",
    position: "absolute",
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
    maxWidth: "100%",
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
  clipPathGroup: {
    height: "10.68%",
    width: "26.46%",
    top: "9.38%",
    right: "56.49%",
    bottom: "79.94%",
    left: "17.05%",
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
  layer1Icon1: {
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
    backgroundColor: Color.colorDarkslategray_500,
    top: 0,
    left: 0,
    width: 131,
  },
  home: {
    top: 51,
    left: 47,
    width: 51,
    textAlign: "center",
    color: Color.colorWhite,
  },
  homeBtnItem: {
    left: 51,
    width: 46,
    height: 34,
  },
  homeBtn: {
    left: 1,
    top: 757,
  },
  wildOnes: {
    left: 41,
    width: 149,
    height: 14,
    textAlign: "center",
    top: 41,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  jessieMurph: {
    top: 59,
    left: 81,
    fontSize: FontSize.size_2xs,
    width: 70,
    height: 16,
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
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
  playlistSample: {
    flex: 1,
    height: 974,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray_500,
  },
});

export default PlaylistSample;
