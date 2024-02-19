import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const V3PlaylistSample = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.v3PlaylistSample}>
      <Text style={[styles.cee, styles.ceeLayout]}>Cee</Text>
      <Image
        style={[styles.song81Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/song-8-1.png")}
      />
      <Image
        style={[styles.song81Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/song-8-1.png")}
      />
      <Image
        style={styles.v3PlaylistSampleChild}
        contentFit="cover"
        source={require("../assets/rectangle-19.png")}
      />
      <View
        style={[styles.aintNoRestForTheWickedParent, styles.layer1IconLayout]}
      >
        <Text style={[styles.aintNoRest, styles.sophiaTypo]}>
          Ain’t No Rest for the Wicked
        </Text>
        <Text style={[styles.cageTheElephant, styles.stromaePosition]}>
          Cage the Elephant
        </Text>
        <Image
          style={[styles.layer1Icon, styles.layer1IconLayout]}
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
          style={styles.song61Icon}
          contentFit="cover"
          source={require("../assets/song-6-1.png")}
        />
      </View>
      <View style={[styles.tousLesMemesParent, styles.parentPosition]}>
        <Text style={[styles.tousLesMemes, styles.recklessTypo]}>
          Tous Les Memes
        </Text>
        <Text style={[styles.stromae, styles.stromaePosition]}>Stromae</Text>
        <Image
          style={[styles.song71Icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/song-7-1.png")}
        />
      </View>
      <Pressable
        style={[styles.rosesImanbekRemixParent, styles.parentPosition]}
        onPress={() => navigation.navigate("MusicBoxGiftSample4")}
      >
        <Text style={[styles.rosesImanbek, styles.recklessTypo]}>
          Roses - Imanbek Remix
        </Text>
        <Text style={[styles.saintJhn, styles.stromaePosition]}>SAINt JHN</Text>
        <Image
          style={[styles.song71Icon, styles.iconLayout1]}
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
          style={styles.song41Icon}
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
          style={[styles.songImageIcon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/song-image1.png")}
        />
      </Pressable>
      <Image
        style={styles.v3PlaylistSampleItem}
        contentFit="cover"
        source={require("../assets/group-22.png")}
      />
      <View style={[styles.homeBtn, styles.homeLayout]}>
        <Text style={[styles.home, styles.mixFlexBox]}>{`Home `}</Text>
        <Image
          style={[styles.homeIcon, styles.homeLayout]}
          contentFit="cover"
          source={require("../assets/home.png")}
        />
      </View>
      <Image
        style={styles.v3PlaylistSampleInner}
        contentFit="cover"
        source={require("../assets/vector-342.png")}
      />
      <Image
        style={[styles.clipPathGroup, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/clip-path-group6.png")}
      />
      <Text style={[styles.sophiasPlaylistForContainer, styles.ceeFlexBox]}>
        <Text style={styles.sophiaTypo}>Sophia</Text>
        <Text style={styles.sPlaylistFor}>{`’s playlist for `}</Text>
      </Text>
      <Text style={[styles.gray, styles.mixFlexBox]}>Gray</Text>
      <View style={styles.discoverBtn}>
        <Image
          style={styles.discoverBtnChild}
          contentFit="cover"
          source={require("../assets/group-241.png")}
        />
        <Text style={[styles.discover, styles.mixFlexBox]}>Discover</Text>
      </View>
      <View style={[styles.mixtapeBtn, styles.mixtapeLayout]}>
        <Text style={[styles.mix, styles.mixFlexBox]}>Mix</Text>
        <Image
          style={[styles.mixtapeBtnChild, styles.mixtapeLayout]}
          contentFit="cover"
          source={require("../assets/group-231.png")}
        />
      </View>
      <Image
        style={[styles.clipPathGroup1, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/clip-path-group7.png")}
      />
      <Image
        style={styles.batteryIcon}
        contentFit="cover"
        source={require("../assets/battery-icon.png")}
      />
      <Text style={[styles.batteryAmount, styles.mixFlexBox]}>92</Text>
      <Text style={[styles.text, styles.ceeFlexBox]}>3:25</Text>
      <Pressable
        style={styles.backArrow}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/back-arrow1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ceeLayout: {
    height: 25,
    width: 203,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  iconLayout1: {
    width: 67,
    height: 67,
    position: "absolute",
  },
  layer1IconLayout: {
    height: 63,
    position: "absolute",
  },
  sophiaTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  stromaePosition: {
    left: 78,
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
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
  recklessTypo: {
    height: 28,
    width: 208,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 78,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  homeLayout: {
    width: 62,
    position: "absolute",
  },
  mixFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  ceeFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  mixtapeLayout: {
    width: 53,
    position: "absolute",
  },
  cee: {
    top: 776,
    left: 113,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
    fontSize: FontSize.size_mini,
  },
  song81Icon: {
    top: 736,
    left: 36,
    height: 67,
  },
  v3PlaylistSampleChild: {
    top: 755,
    height: 160,
    left: 0,
    position: "absolute",
    width: 393,
  },
  aintNoRest: {
    top: 15,
    width: 217,
    height: 18,
    left: 78,
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  cageTheElephant: {
    top: 37,
    height: 25,
    width: 203,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  layer1Icon: {
    width: 63,
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  aintNoRestForTheWickedParent: {
    top: 399,
    width: 295,
    left: 35,
    height: 63,
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
    top: 0,
    left: 0,
    position: "absolute",
  },
  lovinOnMeParent: {
    top: 316,
    height: 66,
  },
  tousLesMemes: {
    top: 12,
    fontSize: FontSize.size_lg,
  },
  stromae: {
    top: 38,
    height: 25,
    width: 203,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  song71Icon: {
    top: 0,
    left: 0,
    height: 67,
  },
  tousLesMemesParent: {
    top: 652,
    height: 67,
  },
  rosesImanbek: {
    top: 10,
    fontSize: FontSize.size_mid,
  },
  saintJhn: {
    top: 40,
    height: 25,
    width: 203,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  rosesImanbekRemixParent: {
    top: 566,
    height: 67,
  },
  reckless: {
    top: 14,
    fontSize: FontSize.size_lgi,
  },
  song41Icon: {
    width: 66,
    height: 66,
    top: 0,
    left: 0,
    position: "absolute",
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
  v3PlaylistSampleItem: {
    top: 741,
    left: -1,
    width: 394,
    height: 97,
    position: "absolute",
  },
  home: {
    top: 62,
    left: 13,
    fontSize: FontSize.size_2xs,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  homeIcon: {
    height: 62,
    top: 0,
    left: 0,
  },
  homeBtn: {
    top: 748,
    left: 47,
    height: 75,
  },
  v3PlaylistSampleInner: {
    top: 767,
    left: 312,
    width: 18,
    height: 35,
    position: "absolute",
  },
  clipPathGroup: {
    height: "11.19%",
    width: "27.74%",
    top: "9.34%",
    right: "58.78%",
    bottom: "79.47%",
    left: "13.49%",
    display: "none",
    position: "absolute",
  },
  sPlaylistFor: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  sophiasPlaylistForContainer: {
    top: 123,
    left: 187,
    fontSize: FontSize.size_base,
    width: 175,
    height: 83,
  },
  gray: {
    top: 146,
    left: 217,
    fontSize: 32,
    fontFamily: FontFamily.nerkoOneRegular,
    color: Color.colorFuchsia,
    width: 89,
    height: 54,
  },
  discoverBtnChild: {
    left: 1,
    width: 46,
    height: 46,
    top: 0,
    position: "absolute",
  },
  discover: {
    top: 52,
    fontSize: FontSize.size_2xs,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 0,
  },
  discoverBtn: {
    top: 758,
    left: 289,
    width: 47,
    height: 65,
    position: "absolute",
  },
  mix: {
    top: 47,
    left: 14,
    fontSize: FontSize.size_2xs,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  mixtapeBtnChild: {
    height: 38,
    top: 0,
    left: 0,
  },
  mixtapeBtn: {
    top: 763,
    left: 170,
    height: 60,
  },
  clipPathGroup1: {
    height: "11.4%",
    width: "28.24%",
    top: "9.24%",
    right: "59.8%",
    bottom: "79.36%",
    left: "11.96%",
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
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  text: {
    height: "1.82%",
    width: "8.14%",
    top: "2.44%",
    left: "9.41%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  icon: {
    width: "100%",
    height: "100%",
    maxWidth: "100%",
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
  v3PlaylistSample: {
    backgroundColor: Color.colorGray_500,
    height: 974,
    overflow: "hidden",
    width: 393,
  },
});

export default V3PlaylistSample;
