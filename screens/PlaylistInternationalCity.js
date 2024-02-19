import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PlaylistInternationalCity = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.playlistInternationalCity}>
      <Text style={[styles.laisseMoi, styles.gLayout]}>Laisse Moi</Text>
      <Text style={[styles.keblack, styles.plkTypo]}>KeBlack</Text>
      <Image
        style={[styles.playlistInternationalCityChild, styles.playlistPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-191.png")}
      />
      <Text style={[styles.petitGnie, styles.jungeliLayout]}>Petit Génie</Text>
      <Text style={[styles.ceuxQuonTait, styles.parisTypo]}>
        Ceux Qu'on était
      </Text>
      <Text style={[styles.g, styles.gTypo]}>6G</Text>
      <Text style={[styles.fautPas, styles.gLayout]}>Faut Pas</Text>
      <Text style={styles.aMne}>ça Mène à Rien</Text>
      <Text style={[styles.jungeli, styles.jungeliLayout]}>Jungeli</Text>
      <Text style={[styles.pierreGarnier, styles.plkTypo]}>Pierre Garnier</Text>
      <Text style={[styles.booba, styles.plkTypo]}>Booba</Text>
      <Text style={[styles.plk, styles.plkTypo]}>Plk</Text>
      <Text style={[styles.plkAndGazo, styles.plkTypo]}>Plk and Gazo</Text>
      <Image
        style={styles.image18Icon}
        contentFit="cover"
        source={require("../assets/image-18.png")}
      />
      <View style={styles.layer1} />
      <Image
        style={[styles.image15Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-15.png")}
      />
      <Image
        style={[styles.image16Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-16.png")}
      />
      <Image
        style={[styles.image17Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-17.png")}
      />
      <Image
        style={[styles.image13Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-13.png")}
      />
      <Image
        style={[styles.image14Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-14.png")}
      />
      <View
        style={[styles.playlistInternationalCityItem, styles.playlistPosition]}
      />
      <View style={styles.playlistInternationalCityInner} />
      <View style={[styles.rectangleView, styles.playlistChildLayout]} />
      <View
        style={[
          styles.playlistInternationalCityChild1,
          styles.playlistChildLayout,
        ]}
      />
      <View
        style={[
          styles.playlistInternationalCityChild2,
          styles.playlistChildLayout,
        ]}
      />
      <Text style={[styles.top, styles.topFlexBox]}>Top</Text>
      <Text style={[styles.personalized, styles.rockLayout]}>Personalized</Text>
      <Image
        style={[styles.clipPathGroup, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/clip-path-group17.png")}
      />
      <Text style={[styles.rock, styles.rockLayout]}>Rock</Text>
      <Text style={[styles.hipHop, styles.rockLayout]}>Hip Hop</Text>
      <View
        style={[
          styles.playlistInternationalCityChild3,
          styles.playlistChildLayout,
        ]}
      />
      <Text style={[styles.classics, styles.rockLayout]}>Classics</Text>
      <Text style={[styles.paris, styles.parisLayout]}>Paris</Text>
      <Text style={[styles.mixtapeFor, styles.parisLayout]}>mixtape for</Text>
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
          style={[styles.layer1Icon, styles.parisLayout]}
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
  gLayout: {
    height: 28,
    width: 208,
    textAlign: "left",
    color: Color.colorWhite,
    left: 113,
    position: "absolute",
  },
  plkTypo: {
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
  jungeliLayout: {
    width: 155,
    height: 25,
    textAlign: "left",
    color: Color.colorWhite,
    left: 113,
    position: "absolute",
  },
  parisTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  gTypo: {
    fontSize: FontSize.size_lgi,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  iconPosition: {
    height: 64,
    left: 36,
    position: "absolute",
  },
  iconLayout1: {
    width: 62,
    left: 38,
    height: 62,
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
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  parisLayout: {
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
  laisseMoi: {
    top: 752,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
  },
  keblack: {
    top: 776,
    width: 203,
    height: 25,
    textAlign: "left",
    left: 113,
    position: "absolute",
  },
  playlistInternationalCityChild: {
    top: 755,
    height: 160,
  },
  petitGnie: {
    top: 332,
    fontSize: FontSize.size_lgi,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  ceuxQuonTait: {
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
  g: {
    top: 499,
    height: 28,
    width: 208,
    textAlign: "left",
    color: Color.colorWhite,
    left: 113,
    position: "absolute",
  },
  fautPas: {
    top: 577,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  aMne: {
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
  jungeli: {
    top: 357,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_mini,
  },
  pierreGarnier: {
    top: 440,
    width: 203,
    height: 25,
    textAlign: "left",
    left: 113,
    position: "absolute",
  },
  booba: {
    top: 523,
    width: 203,
    height: 25,
    textAlign: "left",
    left: 113,
    position: "absolute",
  },
  plk: {
    top: 602,
    width: 203,
    height: 25,
    textAlign: "left",
    left: 113,
    position: "absolute",
  },
  plkAndGazo: {
    top: 690,
    width: 203,
    height: 25,
    textAlign: "left",
    left: 113,
    position: "absolute",
  },
  image18Icon: {
    top: 741,
    left: 39,
    width: 61,
    height: 62,
    position: "absolute",
  },
  layer1: {
    top: 399,
    left: 35,
    height: 63,
    width: 63,
    position: "absolute",
    overflow: "hidden",
  },
  image15Icon: {
    top: 487,
    width: 64,
  },
  image16Icon: {
    top: 565,
  },
  image17Icon: {
    top: 651,
  },
  image13Icon: {
    top: 317,
    width: 63,
  },
  image14Icon: {
    top: 402,
    width: 63,
  },
  playlistInternationalCityItem: {
    top: 49,
    height: 237,
    backgroundColor: Color.colorGray_500,
  },
  playlistInternationalCityInner: {
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
  playlistInternationalCityChild1: {
    left: 202,
    width: 63,
  },
  playlistInternationalCityChild2: {
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
  clipPathGroup: {
    height: "12.6%",
    width: "31.27%",
    top: "8.11%",
    right: "46.84%",
    bottom: "79.29%",
    left: "21.88%",
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
  playlistInternationalCityChild3: {
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
  paris: {
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
  playlistInternationalCity: {
    flex: 1,
    height: 974,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray_500,
  },
});

export default PlaylistInternationalCity;
