import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const V3Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.v3Home}>
      <View style={[styles.starbucksParent, styles.parentLayout]}>
        <Text style={[styles.starbucks, styles.sigmaNuTypo]}>Starbucks</Text>
        <Image
          style={[styles.clipPathGroup, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/clip-path-group.png")}
        />
        <Text style={[styles.stanfordAvenue, styles.avenueTypo]}>
          Stanford Avenue
        </Text>
      </View>
      <View style={[styles.greenLibraryParent, styles.parentLayout]}>
        <Text style={[styles.starbucks, styles.sigmaNuTypo]}>
          Green Library
        </Text>
        <Text style={[styles.stanfordAvenue, styles.avenueTypo]}>
          Escondido Mall
        </Text>
        <Image
          style={[styles.clipPathGroup1, styles.clipGroupPosition]}
          contentFit="cover"
          source={require("../assets/clip-path-group1.png")}
        />
      </View>
      <Pressable
        style={[styles.sigmaNuParent, styles.allPosition]}
        onPress={() => navigation.navigate("PlaylistPin1")}
      >
        <Text style={[styles.sigmaNu, styles.sigmaNuTypo]}>Sigma Nu</Text>
        <Image
          style={[styles.clipPathGroup2, styles.clipGroupPosition]}
          contentFit="cover"
          source={require("../assets/clip-path-group2.png")}
        />
        <Text style={[styles.mayfieldAvenue, styles.avenueTypo]}>
          Mayfield Avenue
        </Text>
      </Pressable>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={[styles.homeBtn, styles.homeLayout1]}>
          <Text style={styles.home}>{`Home `}</Text>
          <Image
            style={[styles.homeIcon, styles.homeLayout1]}
            contentFit="cover"
            source={require("../assets/home.png")}
          />
        </View>
        <View style={styles.discoverBtn}>
          <Image
            style={styles.discoverBtnChild}
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
            source={require("../assets/group-23.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.v3HomeChild, styles.homeLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-30.png")}
      />
      <View style={[styles.v3HomeItem, styles.homeLayout]} />
      <View style={[styles.v3HomeInner, styles.v3HomeInnerLayout]} />
      <View style={[styles.rectangleView, styles.v3HomeInnerLayout]} />
      <Text style={[styles.all, styles.allPosition]}>All</Text>
      <Text style={[styles.recentGifts, styles.mixtapesTypo]}>
        Recent Gifts
      </Text>
      <Text style={styles.recentGifts1}>{`Recent Gifts `}</Text>
      <Text
        style={[styles.mixtapesByFriends, styles.mixtapesByFriendsTypo]}
      >{`Mixtapes by friends `}</Text>
      <Text
        style={[styles.myPinnedLocations, styles.mixtapesByFriendsTypo]}
      >{`My pinned locations `}</Text>
      <Text style={[styles.mixtapes, styles.mixtapesTypo]}>Mixtapes</Text>
      <Text style={[styles.hitsWhereI, styles.mixtapesTypo]}>
        Hits Where I Am
      </Text>
      <Text style={styles.houdini}>Houdini</Text>
      <Text style={[styles.duaLupa, styles.duaLupaTypo]}>Dua Lupa</Text>
      <Text style={[styles.aintNoRest, styles.aintNoRestTypo]}>
        Ain’t No Rest for the...
      </Text>
      <Text style={[styles.cageTheElephant, styles.duaLupaTypo]}>
        Cage the Elephant
      </Text>
      <Image
        style={styles.layer1Icon}
        contentFit="cover"
        source={require("../assets/layer-1.png")}
      />
      <Image
        style={styles.song92Icon}
        contentFit="cover"
        source={require("../assets/song-9-2.png")}
      />
      <Text style={[styles.dana, styles.danaTypo]}>Dana</Text>
      <Text style={[styles.sophia, styles.danaTypo]}>Sophia</Text>
      <Text style={[styles.jackson, styles.danaTypo]}>Jackson</Text>
      <Text style={[styles.cody, styles.danaTypo]}>Cody</Text>
      <Text style={[styles.taylorSwift, styles.duaLupaTypo]}>Taylor Swift</Text>
      <Image
        style={[styles.songImageIcon, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/song-image.png")}
      />
      <Text style={[styles.seeMore, styles.seeTypo]}>See more</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("PlaylistSample")}
      >
        <Image
          style={[styles.icon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/group-17.png")}
        />
      </Pressable>
      <Image
        style={styles.layer1Icon1}
        contentFit="cover"
        source={require("../assets/layer-11.png")}
      />
      <Image
        style={[styles.clipPathGroup3, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/clip-path-group3.png")}
      />
      <Pressable
        style={[styles.backArrow, styles.backLayout]}
        onPress={() => navigation.navigate("ShareMusicBox")}
      >
        <Image
          style={[styles.icon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/back-arrow.png")}
        />
      </Pressable>
      <Text style={[styles.seeMore1, styles.seeTypo]}>See more</Text>
      <Pressable
        style={[styles.backArrow1, styles.backLayout]}
        onPress={() => navigation.navigate("ShareMusicBox")}
      >
        <Image
          style={[styles.icon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/back-arrow.png")}
        />
      </Pressable>
      <Image
        style={[styles.clipPathGroup4, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/clip-path-group4.png")}
      />
      <Text style={[styles.cruelSummer, styles.aintNoRestTypo]}>
        Cruel Summer
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    height: 183,
    top: 670,
  },
  sigmaNuTypo: {
    height: 25,
    width: 109,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 136,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  avenueTypo: {
    height: 27,
    top: 156,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_2xs,
    textAlign: "center",
    color: Color.colorWhite,
    width: 135,
    position: "absolute",
  },
  clipGroupPosition: {
    bottom: "31.81%",
    height: "68.19%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  allPosition: {
    left: 33,
    position: "absolute",
  },
  groupChildLayout: {
    height: 97,
    width: 394,
    left: 0,
    position: "absolute",
  },
  homeLayout1: {
    width: 62,
    position: "absolute",
  },
  mixTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "center",
    color: Color.colorWhite,
  },
  mixtapeLayout: {
    width: 53,
    position: "absolute",
  },
  homeLayout: {
    borderRadius: Border.br_7xs,
    top: 62,
    height: 27,
    position: "absolute",
  },
  v3HomeInnerLayout: {
    width: 88,
    borderRadius: Border.br_7xs,
    top: 62,
    backgroundColor: Color.colorDarkslategray_500,
    height: 27,
    position: "absolute",
  },
  mixtapesTypo: {
    top: 68,
    height: 14,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  mixtapesByFriendsTypo: {
    width: 273,
    textAlign: "left",
    height: 29,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorWhite,
    position: "absolute",
  },
  duaLupaTypo: {
    top: 315,
    height: 27,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_2xs,
    textAlign: "center",
    color: Color.colorWhite,
    width: 135,
    position: "absolute",
  },
  aintNoRestTypo: {
    width: 189,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  danaTypo: {
    height: 24,
    width: 64,
    top: 545,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  seeTypo: {
    width: 68,
    color: Color.colorFuchsia,
    fontSize: FontSize.size_smi,
    height: 17,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  backLayout: {
    height: "1.05%",
    width: "1.22%",
    position: "absolute",
  },
  starbucks: {
    left: 13,
    width: 109,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 136,
  },
  clipPathGroup: {
    height: "67.65%",
    width: "92.19%",
    right: "4.09%",
    bottom: "32.35%",
    left: "3.72%",
    top: "0%",
    maxWidth: "100%",
    position: "absolute",
  },
  stanfordAvenue: {
    left: 0,
  },
  starbucksParent: {
    width: 135,
    height: 183,
    top: 670,
    position: "absolute",
    left: 309,
  },
  clipPathGroup1: {
    width: "92.94%",
    right: "5.58%",
    left: "1.49%",
  },
  greenLibraryParent: {
    left: 172,
    width: 135,
    height: 183,
    top: 670,
    position: "absolute",
  },
  sigmaNu: {
    left: 17,
    width: 109,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 136,
  },
  clipPathGroup2: {
    width: "90.18%",
    right: "9.82%",
    left: "0%",
  },
  mayfieldAvenue: {
    left: 4,
  },
  sigmaNuParent: {
    width: 139,
    height: 183,
    top: 670,
    left: 33,
  },
  groupChild: {
    backgroundColor: Color.colorDarkslategray_500,
    top: 0,
  },
  home: {
    top: 62,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_2xs,
    textAlign: "center",
    color: Color.colorWhite,
    left: 13,
    position: "absolute",
  },
  homeIcon: {
    height: 62,
    top: 0,
    left: 0,
  },
  homeBtn: {
    top: 11,
    left: 47,
    height: 75,
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
    fontWeight: "300",
    position: "absolute",
    left: 0,
  },
  discoverBtn: {
    top: 21,
    left: 289,
    width: 47,
    height: 65,
    position: "absolute",
  },
  mix: {
    top: 47,
    left: 14,
    fontSize: FontSize.size_2xs,
    fontWeight: "300",
    position: "absolute",
  },
  mixtapeBtnChild: {
    height: 38,
    top: 0,
    left: 0,
  },
  mixtapeBtn: {
    top: 26,
    left: 170,
    height: 60,
  },
  rectangleParent: {
    top: 758,
  },
  v3HomeChild: {
    width: 48,
    left: 27,
  },
  v3HomeItem: {
    left: 83,
    width: 113,
    backgroundColor: Color.colorDarkslategray_500,
  },
  v3HomeInner: {
    left: 204,
  },
  rectangleView: {
    left: 300,
  },
  all: {
    top: 67,
    width: 34,
    height: 19,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    left: 33,
  },
  recentGifts: {
    left: 91,
    width: 98,
    height: 14,
  },
  recentGifts1: {
    top: 119,
    width: 147,
    height: 29,
    fontSize: FontSize.size_5xl,
    left: 27,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  mixtapesByFriends: {
    top: 392,
    left: 34,
  },
  myPinnedLocations: {
    top: 622,
    left: 32,
  },
  mixtapes: {
    left: 213,
    width: 71,
    height: 14,
  },
  hitsWhereI: {
    left: 306,
    width: 126,
    height: 14,
  },
  houdini: {
    top: 294,
    left: 272,
    height: 17,
    width: 189,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  duaLupa: {
    left: 298,
  },
  aintNoRest: {
    top: 297,
    left: 136,
    height: 15,
  },
  cageTheElephant: {
    left: 162,
  },
  layer1Icon: {
    top: 167,
    left: 173,
    width: 117,
    height: 117,
    position: "absolute",
    overflow: "hidden",
  },
  song92Icon: {
    top: 168,
    width: 116,
    height: 116,
    left: 309,
    position: "absolute",
  },
  dana: {
    left: 34,
  },
  sophia: {
    left: 137,
  },
  jackson: {
    left: 241,
  },
  cody: {
    left: 344,
  },
  taylorSwift: {
    left: 27,
  },
  songImageIcon: {
    height: "13.78%",
    width: "30.53%",
    top: "19.42%",
    right: "61.09%",
    bottom: "66.81%",
    left: "8.38%",
    position: "absolute",
  },
  seeMore: {
    top: 355,
    left: 301,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: "6.85%",
    top: "52.36%",
    right: "70.81%",
    bottom: "37.35%",
    width: "22.34%",
    height: "10.29%",
    position: "absolute",
  },
  layer1Icon1: {
    top: 445,
    left: 126,
    width: 102,
    height: 100,
    position: "absolute",
    overflow: "hidden",
  },
  clipPathGroup3: {
    height: "10.06%",
    width: "22.59%",
    top: "52.63%",
    right: "18.78%",
    bottom: "37.31%",
    left: "58.63%",
    position: "absolute",
  },
  backArrow: {
    left: "92.64%",
    top: "42.11%",
    right: "6.14%",
    bottom: "56.84%",
  },
  seeMore1: {
    top: 583,
    left: 297,
  },
  backArrow1: {
    left: "91.62%",
    top: "68.77%",
    right: "7.16%",
    bottom: "30.18%",
  },
  clipPathGroup4: {
    height: "10.51%",
    width: "23.86%",
    top: "52.4%",
    right: "-7.87%",
    bottom: "37.09%",
    left: "84.01%",
    position: "absolute",
  },
  cruelSummer: {
    top: 296,
    height: 14,
    left: 0,
  },
  v3Home: {
    backgroundColor: Color.colorGray_500,
    flex: 1,
    height: 855,
    overflow: "hidden",
    width: "100%",
  },
});

export default V3Home;
