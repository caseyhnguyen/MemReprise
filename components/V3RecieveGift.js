import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const V3RecieveGift = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.v3RecieveGift}>
      <Text style={[styles.sophia, styles.sophiaLayout]}>Sophia</Text>
      <Text style={[styles.sentYouA, styles.sophiaLayout]}>
        sent you a music box
      </Text>
      <Image
        style={styles.layer1Icon}
        contentFit="cover"
        source={require("../assets/layer-12.png")}
      />
      <Pressable
        style={[styles.rectangleParent, styles.clipPathGroupPosition]}
        onPress={() => navigation.navigate("MusicBoxGiftSample3")}
      >
        <View style={[styles.groupChild, styles.iconLayout1]} />
        <Text style={styles.open}>Open</Text>
      </Pressable>
      <Image
        style={styles.batteryIcon}
        contentFit="cover"
        source={require("../assets/battery-icon.png")}
      />
      <Text style={[styles.batteryAmount, styles.textTypo]}>92</Text>
      <Text style={[styles.text, styles.textTypo]}>3:25</Text>
      <Pressable
        style={styles.backArrow}
        onPress={() => navigation.navigate("ShareMusicBox")}
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
        source={require("../assets/clip-path-group5.png")}
      />
      <Image
        style={styles.objectsIcon}
        contentFit="cover"
        source={require("../assets/objects.png")}
      />
      <Image
        style={styles.objectsIcon1}
        contentFit="cover"
        source={require("../assets/objects1.png")}
      />
      <Image
        style={styles.objectsIcon2}
        contentFit="cover"
        source={require("../assets/objects2.png")}
      />
      <Image
        style={styles.objectsIcon3}
        contentFit="cover"
        source={require("../assets/objects3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sophiaLayout: {
    height: 29,
    width: 182,
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  clipPathGroupPosition: {
    right: "31.55%",
    position: "absolute",
  },
  iconLayout1: {
    width: "100%",
    height: "100%",
  },
  textTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  sophia: {
    top: 328,
    left: 99,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  sentYouA: {
    top: 365,
    left: 102,
    fontSize: FontSize.size_mid,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  layer1Icon: {
    marginLeft: -67.5,
    top: 445,
    left: "50%",
    width: 144,
    height: 110,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorFuchsia,
    position: "absolute",
  },
  open: {
    height: "79.41%",
    width: "77.22%",
    top: "8.82%",
    left: "11.39%",
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  rectangleParent: {
    height: "3.99%",
    width: "40.2%",
    top: "78.99%",
    bottom: "17.02%",
    left: "28.24%",
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
    top: "2.62%",
    left: "87.28%",
    fontSize: FontSize.size_5xs,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
  },
  text: {
    height: "1.81%",
    width: "8.14%",
    top: "1.74%",
    left: "9.41%",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorWhite,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  backArrow: {
    left: "5.09%",
    top: "6.81%",
    right: "92.11%",
    bottom: "90.68%",
    width: "2.8%",
    height: "2.51%",
    position: "absolute",
  },
  clipPathGroup: {
    height: "17.84%",
    width: "38.68%",
    top: "19.01%",
    bottom: "63.15%",
    left: "29.77%",
    right: "31.55%",
    position: "absolute",
  },
  objectsIcon: {
    top: 533,
    left: 289,
    width: 39,
    height: 55,
    position: "absolute",
    overflow: "hidden",
  },
  objectsIcon1: {
    top: 431,
    left: 57,
    width: 42,
    height: 37,
    position: "absolute",
    overflow: "hidden",
  },
  objectsIcon2: {
    top: 555,
    left: 92,
    width: 37,
    height: 38,
    position: "absolute",
    overflow: "hidden",
  },
  objectsIcon3: {
    top: 419,
    left: 292,
    width: 17,
    height: 48,
    position: "absolute",
    overflow: "hidden",
  },
  v3RecieveGift: {
    backgroundColor: Color.colorGray_500,
    width: 393,
    height: 852,
    overflow: "hidden",
  },
});

export default V3RecieveGift;
