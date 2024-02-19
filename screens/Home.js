import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <Image
        style={styles.layer1Icon}
        contentFit="cover"
        source={require("../assets/layer-17.png")}
      />
      <View style={[styles.homeChild, styles.homeChildLayout1]} />
      <View style={[styles.homeItem, styles.homeChildLayout1]} />
      <Image
        style={styles.song121Icon}
        contentFit="cover"
        source={require("../assets/song-12-1.png")}
      />
      <Image
        style={[styles.song111Icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/song-11-1.png")}
      />
      <Image
        style={[styles.song101Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/song-10-1.png")}
      />
      <Image
        style={styles.batteryIcon}
        contentFit="cover"
        source={require("../assets/battery-icon.png")}
      />
      <Text style={styles.batteryAmount}>92</Text>
      <Text style={styles.text}>3:25</Text>
      <Text style={[styles.newOrleans, styles.parisTypo]}>New Orleans</Text>
      <Text style={[styles.starbucks, styles.starbucksTypo]}>Starbucks</Text>
      <Text style={[styles.greenLibrary, styles.starbucksTypo]}>
        Green Library
      </Text>
      <Text style={[styles.lasVegas, styles.parisTypo]}>Las Vegas</Text>
      <Text style={[styles.shanghai, styles.osloTypo]}>Shanghai</Text>
      <Text style={[styles.oslo, styles.osloTypo]}>Oslo</Text>
      <Text style={[styles.hitsFromUs, styles.fromTypo]}>
        Hits from U.S. Cities
      </Text>
      <Text style={[styles.myPinnedLocations, styles.fromTypo]}>
        My Pinned Locations
      </Text>
      <Text style={[styles.recentGifts, styles.fromTypo]}>Recent Gifts</Text>
      <Text style={[styles.hitsWhereI, styles.hitsWhereITypo]}>
        Hits Where I Am
      </Text>
      <Text style={[styles.internationalHotSpots, styles.hitsWhereITypo]}>
        International Hot Spots
      </Text>
      <Image
        style={[styles.sendToLeftIcon, styles.sendIconLayout]}
        contentFit="cover"
        source={require("../assets/choose-song-left.png")}
      />
      <Image
        style={[styles.sendToLeftIcon1, styles.sendIconPosition4]}
        contentFit="cover"
        source={require("../assets/choose-song-left.png")}
      />
      <Image
        style={[styles.sendToLeftIcon2, styles.sendIconPosition3]}
        contentFit="cover"
        source={require("../assets/choose-song-left.png")}
      />
      <Image
        style={[styles.sendToLeftIcon3, styles.sendIconPosition2]}
        contentFit="cover"
        source={require("../assets/choose-song-left.png")}
      />
      <Image
        style={[styles.sendToLeftIcon4, styles.sendIconPosition1]}
        contentFit="cover"
        source={require("../assets/choose-song-left.png")}
      />
      <Image
        style={[styles.sendToRightIcon, styles.sendIconLayout]}
        contentFit="cover"
        source={require("../assets/choose-song-left.png")}
      />
      <Image
        style={[styles.sendToRightIcon1, styles.sendIconPosition4]}
        contentFit="cover"
        source={require("../assets/choose-song-left.png")}
      />
      <Image
        style={[styles.sendToRightIcon2, styles.sendIconPosition3]}
        contentFit="cover"
        source={require("../assets/choose-song-left.png")}
      />
      <Image
        style={[styles.sendToRightIcon3, styles.sendIconPosition2]}
        contentFit="cover"
        source={require("../assets/choose-song-left.png")}
      />
      <Image
        style={[styles.sendToRightIcon4, styles.sendIconPosition1]}
        contentFit="cover"
        source={require("../assets/choose-song-left.png")}
      />
      <Text style={[styles.whatWasI, styles.wildTypo]}>
        What Was I Made For?
      </Text>
      <Text style={[styles.lilBooThang, styles.wildTypo]}>Lil’ Boo Thang</Text>
      <Text style={[styles.wildOnes, styles.wildTypo]}>Wild Ones</Text>
      <Text style={styles.billieEilish}>Billie Eilish</Text>
      <Text style={[styles.paulRussel, styles.jessieTypo]}>Paul Russel</Text>
      <Text style={[styles.jessieMurph, styles.jessieTypo]}>Jessie Murph</Text>
      <Text style={styles.houdini}>Houdini</Text>
      <Text style={[styles.duaLupa, styles.duaLupaTypo]}>Dua Lupa</Text>
      <Text style={styles.aintNoRest}>Ain’t No Rest for the Wicked</Text>
      <Text style={[styles.cageTheElephant, styles.duaLupaTypo]}>
        Cage the Elephant
      </Text>
      <View style={[styles.homeInner, styles.homeInnerLayout]} />
      <View style={[styles.rectangleView, styles.homeInnerLayout]} />
      <View style={[styles.homeChild1, styles.homeChildLayout]} />
      <View style={[styles.homeChild2, styles.homeChildLayout]} />
      <Text style={styles.all}>All</Text>
      <Text style={[styles.recentGifts1, styles.mixtapesTypo]}>
        Recent Gifts
      </Text>
      <Text style={[styles.mixtapes, styles.mixtapesTypo]}>Mixtapes</Text>
      <Text style={[styles.hitsWhereI1, styles.mixtapesTypo]}>
        Hits Where I Am
      </Text>
      <Image
        style={[styles.layer1Icon1, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/layer-1.png")}
      />
      <Image
        style={[styles.song91Icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/song-9-2.png")}
      />
      <Text style={[styles.viewAll, styles.viewTypo]}>View All</Text>
      <Pressable
        style={[styles.viewAll1, styles.viewPosition]}
        onPress={() => navigation.navigate("HitsWhereIAm")}
      >
        <Text style={styles.viewTypo}>View All</Text>
      </Pressable>
      <Text style={[styles.viewAll3, styles.viewTypo]}>View All</Text>
      <Text style={[styles.viewAll4, styles.viewTypo]}>View All</Text>
      <Text style={[styles.viewAll5, styles.viewTypo]}>View All</Text>
      <Text style={[styles.recentGifts, styles.fromTypo]}>Recent Gifts</Text>
      <Image
        style={[styles.sendToLeftIcon2, styles.sendIconPosition3]}
        contentFit="cover"
        source={require("../assets/choose-song-left.png")}
      />
      <Image
        style={[styles.sendToRightIcon2, styles.sendIconPosition3]}
        contentFit="cover"
        source={require("../assets/choose-song-left.png")}
      />
      <Image
        style={[styles.layer1Icon2, styles.layer1Icon2Position]}
        contentFit="cover"
        source={require("../assets/layer-18.png")}
      />
      <Image
        style={[styles.location31Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/location-3-1.png")}
      />
      <Pressable
        style={styles.seatleParent}
        onPress={() => navigation.navigate("PlaylistCity1")}
      >
        <Text style={[styles.seatle, styles.parisTypo]}>Seatle</Text>
        <Image
          style={[styles.location32Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/location-3-1.png")}
        />
      </Pressable>
      <Image
        style={styles.layer1Icon3}
        contentFit="cover"
        source={require("../assets/layer-19.png")}
      />
      <View style={[styles.homeChild3, styles.homeChildLayout1]} />
      <Text style={[styles.mixtapesFromFriends, styles.fromTypo]}>
        Mixtapes from Friends
      </Text>
      <Image
        style={[styles.sendToLeftIcon6, styles.sendIconPosition]}
        contentFit="cover"
        source={require("../assets/choose-song-left.png")}
      />
      <Image
        style={[styles.sendToRightIcon6, styles.sendIconPosition]}
        contentFit="cover"
        source={require("../assets/choose-song-left.png")}
      />
      <Text style={[styles.dwayne, styles.timTypo]}>Dwayne</Text>
      <Text style={[styles.jenna, styles.timTypo]}>Jenna</Text>
      <Text style={[styles.tim, styles.timTypo]}>Tim</Text>
      <Text style={[styles.viewAll6, styles.viewTypo]}>View All</Text>
      <Pressable
        style={[styles.chrisParent, styles.chrisParentPosition]}
        onPress={() => navigation.navigate("PlaylistSample")}
      >
        <Text style={[styles.chris, styles.timTypo]}>Chris</Text>
        <Image
          style={[styles.clipPathGroup, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/clip-path-group10.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.cruelSummerParent, styles.layer1Icon2Position]}
        onPress={() => navigation.navigate("MusicBoxGiftSample3")}
      >
        <Text style={styles.cruelSummer}>Cruel Summer</Text>
        <Text style={[styles.taylorSwift, styles.taylorSwiftTypo]}>
          Taylor Swift
        </Text>
        <Image
          style={[styles.songImageIcon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/song-image3.png")}
        />
      </Pressable>
      <Image
        style={[styles.layer1Icon4, styles.chrisParentPosition]}
        contentFit="cover"
        source={require("../assets/layer-110.png")}
      />
      <Image
        style={[styles.clipPathGroup1, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/clip-path-group11.png")}
      />
      <Image
        style={[styles.clipPathGroup2, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/clip-path-group12.png")}
      />
      <Image
        style={[styles.clipPathGroup3, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/clip-path-group13.png")}
      />
      <Image
        style={[styles.clipPathGroup4, styles.clipGroupPosition1]}
        contentFit="cover"
        source={require("../assets/clip-path-group14.png")}
      />
      <Text style={[styles.stanfordAvenue, styles.escondidoMallTypo]}>
        Stanford Avenue
      </Text>
      <Text style={[styles.escondidoMall, styles.escondidoMallTypo]}>
        Escondido Mall
      </Text>
      <Image
        style={[styles.clipPathGroup5, styles.clipGroupPosition1]}
        contentFit="cover"
        source={require("../assets/clip-path-group1.png")}
      />
      <Pressable
        style={styles.sigmaNuParent}
        onPress={() => navigation.navigate("PlaylistPin1")}
      >
        <Text style={[styles.sigmaNu, styles.parisTypo]}>Sigma Nu</Text>
        <Image
          style={[styles.clipPathGroup6, styles.clipGroupPosition]}
          contentFit="cover"
          source={require("../assets/clip-path-group15.png")}
        />
        <Text style={[styles.mayfieldAvenue, styles.taylorSwiftTypo]}>
          Mayfield Avenue
        </Text>
      </Pressable>
      <Pressable
        style={styles.clipPathGroupParent}
        onPress={() => navigation.navigate("PlaylistInternationalCity")}
      >
        <Image
          style={[styles.clipPathGroup7, styles.clipGroupPosition]}
          contentFit="cover"
          source={require("../assets/clip-path-group16.png")}
        />
        <Text style={[styles.paris, styles.parisTypo]}>Paris</Text>
      </Pressable>
      <View style={[styles.discoverBtn, styles.discoverLayout]}>
        <Text style={[styles.wildOnes1, styles.wildTypo]}>Wild Ones</Text>
        <Text style={[styles.jessieMurph1, styles.jessieTypo]}>
          Jessie Murph
        </Text>
        <View style={[styles.discoverBtnChild, styles.discoverLayout]} />
        <Text style={[styles.discover, styles.discoverTypo]}>Discover</Text>
        <Image
          style={[styles.discoverIcon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/discover-icon.png")}
        />
      </View>
      <Pressable
        style={[styles.giftBtn, styles.giftLayout]}
        onPress={() => navigation.navigate("ShareMusicBox")}
      >
        <View style={[styles.giftBtnChild, styles.giftLayout]} />
        <Text style={[styles.giftMusicBox, styles.discoverTypo]}>
          Gift Music Box
        </Text>
        <Image
          style={styles.layer1Icon5}
          contentFit="cover"
          source={require("../assets/layer-111.png")}
        />
      </Pressable>
      <View style={[styles.homeBtn, styles.homeLayout]}>
        <View style={[styles.homeBtnChild, styles.homeLayout]} />
        <Text style={[styles.home1, styles.parisTypo]}>Home</Text>
        <Image
          style={styles.homeBtnItem}
          contentFit="cover"
          source={require("../assets/group-4.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeChildLayout1: {
    width: 397,
    backgroundColor: Color.colorGray_300,
    position: "absolute",
  },
  iconLayout2: {
    height: 116,
    position: "absolute",
  },
  iconLayout1: {
    height: 117,
    width: 117,
    position: "absolute",
  },
  parisTypo: {
    height: 25,
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  starbucksTypo: {
    top: 1071,
    height: 25,
    width: 109,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  osloTypo: {
    top: 1615,
    height: 25,
    width: 109,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  fromTypo: {
    height: 31,
    fontSize: FontSize.size_lg,
    left: 52,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  hitsWhereITypo: {
    height: 27,
    fontSize: FontSize.size_lg,
    left: 52,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  sendIconLayout: {
    width: 12,
    maxHeight: "100%",
    top: 1188,
    position: "absolute",
  },
  sendIconPosition4: {
    top: 911,
    width: 12,
    maxHeight: "100%",
    position: "absolute",
  },
  sendIconPosition3: {
    top: 142,
    width: 12,
    maxHeight: "100%",
    position: "absolute",
  },
  sendIconPosition2: {
    top: 637,
    width: 12,
    maxHeight: "100%",
    position: "absolute",
  },
  sendIconPosition1: {
    top: 1447,
    width: 12,
    maxHeight: "100%",
    position: "absolute",
  },
  wildTypo: {
    height: 14,
    width: 149,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    position: "absolute",
  },
  jessieTypo: {
    width: 70,
    height: 16,
    fontSize: FontSize.size_2xs,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  duaLupaTypo: {
    top: 316,
    width: 135,
    fontSize: FontSize.size_2xs,
    height: 27,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  homeInnerLayout: {
    borderRadius: Border.br_7xs,
    top: 76,
    height: 27,
    position: "absolute",
  },
  homeChildLayout: {
    width: 88,
    backgroundColor: Color.colorDarkslategray_500,
    borderRadius: Border.br_7xs,
    top: 76,
    height: 27,
    position: "absolute",
  },
  mixtapesTypo: {
    top: 82,
    height: 14,
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  viewTypo: {
    width: 66,
    color: Color.colorFuchsia,
    fontSize: FontSize.size_smi,
    height: 17,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  viewPosition: {
    left: 316,
    position: "absolute",
  },
  layer1Icon2Position: {
    left: -3,
    position: "absolute",
  },
  iconLayout: {
    height: 124,
    width: 124,
    position: "absolute",
  },
  sendIconPosition: {
    top: 407,
    width: 12,
    maxHeight: "100%",
    position: "absolute",
  },
  timTypo: {
    width: 89,
    fontSize: FontSize.size_3xl,
    height: 25,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  chrisParentPosition: {
    top: 444,
    position: "absolute",
  },
  iconGroupLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  taylorSwiftTypo: {
    width: 135,
    fontSize: FontSize.size_2xs,
    height: 27,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  clipGroupPosition1: {
    top: "52.85%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  escondidoMallTypo: {
    top: 1091,
    width: 135,
    fontSize: FontSize.size_2xs,
    height: 27,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  clipGroupPosition: {
    left: "0%",
    maxWidth: "100%",
    top: "0%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  discoverLayout: {
    height: 97,
    position: "absolute",
  },
  discoverTypo: {
    height: 32,
    width: 110,
    top: 50,
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  giftLayout: {
    width: 130,
    height: 97,
    left: "50%",
    position: "absolute",
  },
  homeLayout: {
    width: 131,
    height: 97,
    left: 0,
    position: "absolute",
  },
  layer1Icon: {
    top: 1207,
    left: 102,
    width: 241,
    height: 132,
    position: "absolute",
    overflow: "hidden",
  },
  homeChild: {
    marginLeft: -198.5,
    top: 1417,
    height: 283,
    left: "50%",
    backgroundColor: Color.colorGray_300,
  },
  homeItem: {
    marginLeft: -200.5,
    top: 881,
    height: 262,
    left: "50%",
    backgroundColor: Color.colorGray_300,
  },
  song121Icon: {
    top: 669,
    height: 115,
    width: 115,
    left: 160,
    position: "absolute",
  },
  song111Icon: {
    left: 288,
    top: 668,
    width: 115,
  },
  song101Icon: {
    left: 30,
    top: 668,
  },
  batteryIcon: {
    top: 30,
    left: 328,
    width: 29,
    height: 12,
    position: "absolute",
  },
  batteryAmount: {
    height: "1.18%",
    width: "3.31%",
    top: "1.75%",
    left: "85.24%",
    fontSize: FontSize.size_5xs,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  text: {
    height: "1.81%",
    width: "8.14%",
    top: "1.36%",
    left: "9.41%",
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  newOrleans: {
    left: 39,
    width: 109,
    height: 25,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 1343,
  },
  starbucks: {
    left: 36,
  },
  greenLibrary: {
    left: 173,
  },
  lasVegas: {
    left: 171,
    width: 109,
    height: 25,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 1343,
  },
  shanghai: {
    left: 171,
  },
  oslo: {
    left: 298,
  },
  hitsFromUs: {
    top: 1176,
    width: 174,
  },
  myPinnedLocations: {
    top: 899,
    width: 194,
  },
  recentGifts: {
    top: 129,
    width: 114,
  },
  hitsWhereI: {
    top: 625,
    width: 190,
  },
  internationalHotSpots: {
    top: 1435,
    width: 224,
  },
  sendToLeftIcon: {
    left: 34,
  },
  sendToLeftIcon1: {
    left: 34,
  },
  sendToLeftIcon2: {
    left: 34,
  },
  sendToLeftIcon3: {
    left: 34,
  },
  sendToLeftIcon4: {
    left: 34,
  },
  sendToRightIcon: {
    left: 226,
  },
  sendToRightIcon1: {
    left: 234,
  },
  sendToRightIcon2: {
    left: 163,
  },
  sendToRightIcon3: {
    left: 197,
  },
  sendToRightIcon4: {
    left: 250,
  },
  whatWasI: {
    left: 15,
    top: 798,
    width: 149,
  },
  lilBooThang: {
    left: 141,
    top: 798,
    width: 149,
  },
  wildOnes: {
    left: 282,
    top: 798,
    width: 149,
  },
  billieEilish: {
    left: 26,
    height: 16,
    width: 135,
    fontSize: FontSize.size_2xs,
    top: 816,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  paulRussel: {
    left: 181,
    top: 816,
    width: 70,
  },
  jessieMurph: {
    left: 322,
    top: 816,
    width: 70,
  },
  houdini: {
    top: 295,
    left: 269,
    height: 17,
    width: 189,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  duaLupa: {
    left: 295,
  },
  aintNoRest: {
    top: 298,
    left: 133,
    fontSize: 10,
    height: 15,
    width: 189,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  cageTheElephant: {
    left: 159,
  },
  homeInner: {
    backgroundColor: Color.colorFuchsia,
    width: 48,
    left: 36,
  },
  rectangleView: {
    left: 92,
    width: 113,
    backgroundColor: Color.colorDarkslategray_500,
  },
  homeChild1: {
    left: 213,
  },
  homeChild2: {
    left: 309,
  },
  all: {
    top: 81,
    left: 42,
    width: 34,
    height: 19,
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  recentGifts1: {
    left: 100,
    width: 98,
  },
  mixtapes: {
    left: 222,
    width: 71,
  },
  hitsWhereI1: {
    left: 315,
    width: 126,
  },
  layer1Icon1: {
    top: 168,
    left: 170,
    overflow: "hidden",
  },
  song91Icon: {
    top: 169,
    left: 306,
    width: 116,
  },
  viewAll: {
    top: 1377,
    left: 316,
    position: "absolute",
  },
  viewAll1: {
    top: 845,
  },
  viewAll3: {
    top: 1118,
    left: 316,
    position: "absolute",
  },
  viewAll4: {
    top: 1647,
    left: 316,
    position: "absolute",
  },
  viewAll5: {
    top: 346,
    left: 316,
    position: "absolute",
  },
  layer1Icon2: {
    width: 196,
    height: 123,
    top: 1211,
    left: -3,
    overflow: "hidden",
  },
  location31Icon: {
    left: 300,
    height: 124,
    top: 1211,
  },
  seatle: {
    top: 132,
    left: 8,
    width: 109,
    height: 25,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  location32Icon: {
    left: 0,
    top: 0,
  },
  seatleParent: {
    height: 157,
    width: 124,
    left: 300,
    top: 1211,
    position: "absolute",
  },
  layer1Icon3: {
    top: 1473,
    left: 106,
    width: 219,
    height: 125,
    position: "absolute",
    overflow: "hidden",
  },
  homeChild3: {
    top: 375,
    height: 230,
    left: 0,
  },
  mixtapesFromFriends: {
    top: 395,
    width: 190,
  },
  sendToLeftIcon6: {
    left: 34,
  },
  sendToRightIcon6: {
    left: 245,
  },
  dwayne: {
    left: 122,
    top: 541,
    fontSize: FontSize.size_3xl,
  },
  jenna: {
    left: 232,
    top: 541,
    fontSize: FontSize.size_3xl,
  },
  tim: {
    left: 331,
    top: 541,
    fontSize: FontSize.size_3xl,
  },
  viewAll6: {
    top: 578,
    left: 316,
    position: "absolute",
  },
  chris: {
    top: 97,
    left: 0,
  },
  clipPathGroup: {
    height: "72.13%",
    width: "97.78%",
    bottom: "27.87%",
    left: "2.22%",
    right: "0%",
    top: "0%",
    maxWidth: "100%",
  },
  chrisParent: {
    left: 20,
    width: 90,
    height: 122,
  },
  cruelSummer: {
    top: 128,
    left: 0,
    width: 189,
    fontSize: FontSize.size_sm,
    height: 14,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  taylorSwift: {
    top: 149,
    left: 27,
  },
  songImageIcon: {
    height: "66.89%",
    width: "63.65%",
    right: "18.89%",
    bottom: "33.11%",
    left: "17.46%",
    top: "0%",
    maxWidth: "100%",
  },
  cruelSummerParent: {
    top: 167,
    height: 176,
    width: 189,
  },
  layer1Icon4: {
    left: 118,
    width: 105,
    height: 105,
    overflow: "hidden",
  },
  clipPathGroup1: {
    height: "5.37%",
    width: "24.17%",
    top: "25.16%",
    right: "19.34%",
    bottom: "69.47%",
    left: "56.49%",
  },
  clipPathGroup2: {
    height: "5.75%",
    width: "25.9%",
    top: "24.83%",
    right: "-9.01%",
    bottom: "69.41%",
    left: "83.1%",
  },
  clipPathGroup3: {
    height: "6.88%",
    width: "30.81%",
    top: "83.32%",
    right: "-5.37%",
    bottom: "9.8%",
    left: "74.55%",
  },
  clipPathGroup4: {
    height: "7.01%",
    width: "31.55%",
    right: "61.32%",
    bottom: "40.14%",
    left: "7.12%",
  },
  stanfordAvenue: {
    left: 23,
  },
  escondidoMall: {
    left: 160,
  },
  clipPathGroup5: {
    height: "7.07%",
    width: "31.81%",
    right: "26.97%",
    bottom: "40.08%",
    left: "41.22%",
  },
  sigmaNu: {
    top: 136,
    left: 17,
    width: 109,
    height: 25,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  clipPathGroup6: {
    height: "68.19%",
    width: "90.18%",
    right: "9.82%",
    bottom: "31.81%",
  },
  mayfieldAvenue: {
    top: 156,
    left: 4,
  },
  sigmaNuParent: {
    top: 934,
    left: 301,
    width: 139,
    height: 183,
    position: "absolute",
  },
  clipPathGroup7: {
    height: "73.96%",
    bottom: "26.04%",
    right: "0%",
    width: "100%",
  },
  paris: {
    top: 141,
    left: 2,
    width: 109,
    height: 25,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  clipPathGroupParent: {
    height: "9.38%",
    width: "31.27%",
    top: "83.33%",
    right: "61.22%",
    bottom: "7.29%",
    left: "7.51%",
    position: "absolute",
  },
  wildOnes1: {
    top: 41,
    left: 41,
  },
  jessieMurph1: {
    top: 59,
    left: 81,
  },
  discoverBtnChild: {
    width: 134,
    left: 0,
    top: 0,
    backgroundColor: Color.colorDarkslategray_500,
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
  },
  discoverBtn: {
    left: 261,
    top: 757,
    width: 190,
  },
  giftBtnChild: {
    marginLeft: -65,
    top: 0,
    backgroundColor: Color.colorDarkslategray_500,
  },
  giftMusicBox: {
    left: 10,
  },
  layer1Icon5: {
    top: 17,
    left: 46,
    width: 38,
    height: 29,
    position: "absolute",
    overflow: "hidden",
  },
  giftBtn: {
    marginLeft: -65.5,
    top: 757,
  },
  homeBtnChild: {
    top: 0,
    backgroundColor: Color.colorDarkslategray_500,
  },
  home1: {
    top: 51,
    left: 47,
    width: 51,
    height: 25,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  homeBtnItem: {
    top: 10,
    left: 51,
    width: 46,
    height: 34,
    position: "absolute",
  },
  homeBtn: {
    top: 757,
  },
  home: {
    backgroundColor: Color.colorGray_500,
    flex: 1,
    height: 1769,
    overflow: "hidden",
    width: "100%",
  },
});

export default Home;
