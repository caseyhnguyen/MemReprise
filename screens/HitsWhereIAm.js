import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const HitsWhereIAm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.hitsWhereIAm}>
      <Text style={[styles.nobodyToLove, styles.weekendLayout]}>
        Nobody to Love
      </Text>
      <Text style={[styles.alexNewell, styles.kygoTypo]}>Alex Newell</Text>
      <Image
        style={styles.hitsWhereIAmChild}
        contentFit="cover"
        source={require("../assets/rectangle-191.png")}
      />
      <Text style={[styles.untilYouWere, styles.weekendTypo]}>
        Until You Were Gone
      </Text>
      <Text style={[styles.jordanBelfort, styles.paloAltoTypo]}>
        Jordan Belfort
      </Text>
      <Text style={[styles.weekend, styles.weekendTypo]}>Weekend</Text>
      <Text style={[styles.hereForYou, styles.weekendLayout]}>
        Here for You
      </Text>
      <Text style={styles.dosesAndMimosas}>Doses and Mimosas</Text>
      <Image
        style={styles.image24Icon}
        contentFit="cover"
        source={require("../assets/image-24.png")}
      />
      <Text style={[styles.chainsmokers, styles.topTypo]}>Chainsmokers</Text>
      <Image
        style={[styles.image19Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-19.png")}
      />
      <Text style={[styles.wesWalker, styles.kygoTypo]}>Wes Walker</Text>
      <Text style={[styles.macMiller, styles.kygoTypo]}>Mac Miller</Text>
      <Image
        style={[styles.image23Icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/image-23.png")}
      />
      <Text style={[styles.kygo, styles.kygoTypo]}>Kygo</Text>
      <Text style={[styles.cherub, styles.kygoTypo]}>Cherub</Text>
      <Image
        style={styles.hitsWhereIAmItem}
        contentFit="cover"
        source={require("../assets/rectangle-31.png")}
      />
      <Image
        style={[styles.image21Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-21.png")}
      />
      <Image
        style={[styles.image22Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-22.png")}
      />
      <View style={styles.hitsWhereIAmInner} />
      <View style={[styles.rectangleView, styles.hitsChildLayout]} />
      <Image
        style={[styles.image20Icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/image-20.png")}
      />
      <View style={[styles.hitsWhereIAmChild1, styles.hitsChildLayout]} />
      <View style={[styles.hitsWhereIAmChild2, styles.hitsChildLayout]} />
      <Text style={[styles.top, styles.topFlexBox]}>Top</Text>
      <Text style={[styles.personalized, styles.rockLayout]}>Personalized</Text>
      <Text style={[styles.rock, styles.rockLayout]}>Rock</Text>
      <Text style={[styles.hipHop, styles.rockLayout]}>Hip Hop</Text>
      <View style={[styles.hitsWhereIAmChild3, styles.hitsChildLayout]} />
      <Text style={[styles.classics, styles.rockLayout]}>Classics</Text>
      <Text style={[styles.paloAlto, styles.paloAltoLayout]}>Palo Alto</Text>
      <Text style={[styles.mixtapeFor, styles.paloAltoLayout]}>
        mixtape for
      </Text>
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
          style={[styles.layer1Icon, styles.paloAltoLayout]}
          contentFit="cover"
          source={require("../assets/layer-112.png")}
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
          source={require("../assets/group-41.png")}
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
          source={require("../assets/discover-icon1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weekendLayout: {
    height: 28,
    width: 208,
  },
  kygoTypo: {
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
  weekendTypo: {
    fontSize: FontSize.size_lgi,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 113,
    position: "absolute",
  },
  paloAltoTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  topTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  iconPosition: {
    left: 36,
    width: 63,
  },
  iconLayout2: {
    height: 63,
    position: "absolute",
  },
  iconLayout1: {
    height: 64,
    left: 37,
    width: 63,
    position: "absolute",
  },
  hitsChildLayout: {
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
  paloAltoLayout: {
    height: 29,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
  nobodyToLove: {
    top: 752,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    left: 113,
    position: "absolute",
  },
  alexNewell: {
    top: 776,
    height: 25,
  },
  hitsWhereIAmChild: {
    top: 755,
    width: 393,
    height: 160,
    left: 0,
    position: "absolute",
  },
  untilYouWere: {
    top: 332,
    width: 200,
    height: 25,
  },
  jordanBelfort: {
    top: 418,
    width: 217,
    height: 18,
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    left: 113,
    position: "absolute",
  },
  weekend: {
    top: 499,
    height: 28,
    width: 208,
  },
  hereForYou: {
    top: 577,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 113,
    position: "absolute",
  },
  dosesAndMimosas: {
    top: 664,
    fontSize: FontSize.size_lg,
    width: 208,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 113,
    position: "absolute",
  },
  image24Icon: {
    top: 739,
    width: 61,
    height: 61,
    left: 38,
    position: "absolute",
  },
  chainsmokers: {
    top: 357,
    width: 155,
    height: 25,
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    left: 113,
    position: "absolute",
  },
  image19Icon: {
    top: 320,
    height: 62,
    width: 63,
    position: "absolute",
  },
  wesWalker: {
    top: 440,
    height: 25,
  },
  macMiller: {
    top: 523,
    height: 25,
  },
  image23Icon: {
    top: 654,
    width: 62,
    left: 38,
  },
  kygo: {
    top: 602,
    height: 25,
  },
  cherub: {
    top: 690,
    height: 25,
  },
  hitsWhereIAmItem: {
    top: 99,
    left: 49,
    width: 176,
    height: 106,
    position: "absolute",
  },
  image21Icon: {
    top: 487,
  },
  image22Icon: {
    top: 570,
  },
  hitsWhereIAmInner: {
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
  image20Icon: {
    top: 404,
    width: 63,
    left: 36,
  },
  hitsWhereIAmChild1: {
    left: 202,
    width: 63,
  },
  hitsWhereIAmChild2: {
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
  hitsWhereIAmChild3: {
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
  paloAlto: {
    top: 94,
    fontSize: FontSize.size_10xl,
    width: 182,
    left: 204,
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
    left: 204,
    height: 29,
    textAlign: "center",
    color: Color.colorWhite,
  },
  gray: {
    top: 155,
    left: 224,
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
  hitsWhereIAm: {
    backgroundColor: Color.colorGray_500,
    flex: 1,
    height: 974,
    overflow: "hidden",
    width: "100%",
  },
});

export default HitsWhereIAm;
