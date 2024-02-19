import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const V3ShareMusicBox = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.v3ShareMusicBox}>
      <View style={styles.layer1}>
        <Image
          style={[styles.mapImageIcon, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/map-image.png")}
        />
        <View style={styles.textBackParent}>
          <View style={[styles.textBack, styles.textBg]} />
          <Text style={styles.adjustPin}>Adjust Pin</Text>
        </View>
        <Image
          style={[styles.isolationModeIcon, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/isolation-mode.png")}
        />
        <Image
          style={[styles.pinIcon, styles.textLayout]}
          contentFit="cover"
          source={require("../assets/pin.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>3:25</Text>
      </View>
      <Text style={[styles.shareAMusicbox, styles.addAMessageTypo]}>
        Share a Musicbox
      </Text>
      <Text style={[styles.brent, styles.grayTypo]}>Brent</Text>
      <Text style={[styles.casey, styles.grayTypo]}>Casey</Text>
      <Text style={[styles.gray, styles.grayTypo]}>Gray</Text>
      <Text style={[styles.tristan, styles.grayTypo]}>Tristan</Text>
      <Text style={[styles.emily, styles.grayTypo]}>Emily</Text>
      <Image
        style={[styles.song1Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/song-1.png")}
      />
      <Image
        style={[styles.song2Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/song-2.png")}
      />
      <Image
        style={[styles.song2Icon1, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/song-21.png")}
      />
      <Image
        style={[styles.song3Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/song-3.png")}
      />
      <View style={[styles.messageTextBox, styles.textBg]} />
      <Text style={[styles.ourFirstKiss, styles.sendLayout]}>
        Our first kiss, remember?
      </Text>
      <Image
        style={styles.microphoneIcon}
        contentFit="cover"
        source={require("../assets/microphone-icon.png")}
      />
      <View style={styles.v3ShareMusicBoxChild} />
      <View style={[styles.v3ShareMusicBoxItem, styles.shareLayout]} />
      <View style={[styles.v3ShareMusicBoxInner, styles.shareLayout]} />
      <Text style={[styles.surprise, styles.notifyTypo]}>Surprise</Text>
      <Text style={[styles.notify, styles.notifyTypo]}>Notify</Text>
      <Text style={[styles.sendNow, styles.notifyTypo]}>Send now</Text>
      <Image
        style={styles.batteryIcon}
        contentFit="cover"
        source={require("../assets/battery-icon1.png")}
      />
      <Text style={[styles.batteryAmount, styles.textTypo]}>92</Text>
      <View style={styles.rectangleView} />
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("ReceiveGift")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.send, styles.sendLayout]}>Send</Text>
      </Pressable>
      <View style={styles.layer11} />
      <Image
        style={styles.person5Icon}
        contentFit="cover"
        source={require("../assets/person-5.png")}
      />
      <Image
        style={[styles.person4Icon, styles.iconLayout3]}
        contentFit="cover"
        source={require("../assets/person-4.png")}
      />
      <Image
        style={[styles.person3Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/person-3.png")}
      />
      <Image
        style={[styles.person2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/person-2.png")}
      />
      <Image
        style={[styles.person1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/person-1.png")}
      />
      <Pressable
        style={styles.backArrow}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/back-arrow2.png")}
        />
      </Pressable>
      <Image
        style={[styles.photoIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/photo-icon.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <Image
        style={styles.image12Icon}
        contentFit="cover"
        source={require("../assets/image-12.png")}
      />
      <Text style={[styles.chooseSong, styles.sendToTypo]}>Choose Song</Text>
      <Text style={[styles.sendTo, styles.sendToTypo]}>{`Send to `}</Text>
      <Text style={[styles.addAMessage, styles.addAMessageTypo]}>
        Add a message
      </Text>
      <Text style={[styles.addAPhoto, styles.deliveryTypo]}>
        Add a photo or video
      </Text>
      <Text style={[styles.delivery, styles.deliveryTypo]}>Delivery</Text>
      <Text style={[styles.seeMore, styles.seeMoreTypo]}>See more</Text>
      <Pressable
        style={styles.backArrow1}
        onPress={() => navigation.navigate("ShareMusicBox")}
      >
        <Image
          style={[styles.icon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/back-arrow.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout3: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textBg: {
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  textLayout: {
    width: "8.14%",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  addAMessageTypo: {
    height: 29,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  grayTypo: {
    height: 21,
    width: 55,
    fontSize: FontSize.size_sm,
    top: 576,
    color: Color.colorWhite,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "center",
    position: "absolute",
  },
  iconPosition1: {
    height: 59,
    top: 379,
    position: "absolute",
  },
  iconLayout1: {
    width: 118,
    height: 59,
    top: 379,
    position: "absolute",
  },
  sendLayout: {
    height: 27,
    position: "absolute",
  },
  shareLayout: {
    width: 86,
    backgroundColor: Color.colorDarkslategray_200,
    height: 41,
    borderRadius: Border.br_7xs,
    top: 912,
    position: "absolute",
  },
  notifyTypo: {
    height: 20,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  groupChildLayout: {
    height: 34,
    width: 158,
    position: "absolute",
  },
  iconLayout: {
    bottom: "48.33%",
    width: "17.05%",
    height: "6.07%",
    top: "45.6%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  iconPosition: {
    top: "71.89%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  sendToTypo: {
    width: 170,
    height: 29,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  deliveryTypo: {
    width: 252,
    height: 29,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  seeMoreTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  mapImageIcon: {
    height: "53.92%",
    width: "99.95%",
    top: "32.27%",
    right: "0.05%",
    bottom: "13.81%",
    left: "0%",
    position: "absolute",
  },
  textBack: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_base,
    height: "100%",
    width: "100%",
    left: "0%",
  },
  adjustPin: {
    height: "56.41%",
    width: "77.69%",
    top: "20.51%",
    left: "10.77%",
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorDarkslategray_400,
    textAlign: "center",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  textBackParent: {
    height: "13.64%",
    width: "33.08%",
    top: "69.58%",
    right: "33.59%",
    bottom: "16.78%",
    left: "33.33%",
    position: "absolute",
  },
  isolationModeIcon: {
    height: "4.55%",
    width: "5.34%",
    right: "16.79%",
    bottom: "78.32%",
    left: "77.86%",
    top: "17.13%",
    position: "absolute",
  },
  pinIcon: {
    height: "14.93%",
    top: "49.06%",
    right: "46.82%",
    bottom: "36.01%",
    left: "45.04%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  text: {
    height: "6.99%",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorWhite,
    left: "9.41%",
    width: "8.14%",
    position: "absolute",
    top: "17.13%",
  },
  layer1: {
    top: -22,
    height: 286,
    width: 393,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  shareAMusicbox: {
    top: 264,
    left: 52,
    width: 249,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  brent: {
    left: 42,
  },
  casey: {
    left: 123,
  },
  gray: {
    left: 205,
  },
  tristan: {
    left: 287,
  },
  emily: {
    left: 364,
  },
  song1Icon: {
    left: 104,
    width: 136,
  },
  song2Icon: {
    left: 244,
  },
  song2Icon1: {
    width: 60,
    left: 30,
  },
  song3Icon: {
    left: 371,
  },
  messageTextBox: {
    top: 673,
    borderRadius: Border.br_5xs,
    width: 328,
    height: 42,
    left: 30,
  },
  ourFirstKiss: {
    top: 683,
    color: Color.colorBlack,
    width: 225,
    left: 42,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_lg,
  },
  microphoneIcon: {
    top: 681,
    left: 329,
    width: 15,
    height: 26,
    position: "absolute",
    overflow: "hidden",
  },
  v3ShareMusicBoxChild: {
    backgroundColor: Color.colorGray_400,
    borderStyle: "solid",
    borderColor: Color.colorFuchsia,
    borderWidth: 3,
    width: 106,
    height: 41,
    borderRadius: Border.br_7xs,
    top: 912,
    left: 30,
    position: "absolute",
  },
  v3ShareMusicBoxItem: {
    left: 149,
  },
  v3ShareMusicBoxInner: {
    left: 248,
  },
  surprise: {
    left: 159,
    width: 73,
    top: 922,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mid,
  },
  notify: {
    top: 923,
    left: 267,
    width: 62,
  },
  sendNow: {
    width: 82,
    top: 922,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mid,
    left: 42,
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
    top: "2.66%",
    left: "89.82%",
    fontSize: FontSize.size_5xs,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    position: "absolute",
  },
  rectangleView: {
    top: 224,
    height: 7,
    backgroundColor: Color.colorDarkslategray_200,
    width: 393,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorFuchsia,
    left: 0,
    width: 158,
  },
  send: {
    top: 3,
    left: 18,
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 122,
    color: Color.colorWhite,
    textAlign: "center",
  },
  rectangleParent: {
    top: 1014,
    left: 118,
  },
  layer11: {
    top: 785,
    left: 157,
    width: 53,
    height: 33,
    position: "absolute",
    overflow: "hidden",
  },
  person5Icon: {
    height: "6.16%",
    width: "17.3%",
    right: "-10.18%",
    bottom: "48.24%",
    left: "92.88%",
    top: "45.6%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  person4Icon: {
    height: "7.43%",
    width: "20.87%",
    top: "45.42%",
    right: "9.67%",
    bottom: "47.15%",
    left: "69.47%",
    position: "absolute",
  },
  person3Icon: {
    right: "31.81%",
    left: "51.15%",
  },
  person2Icon: {
    right: "52.67%",
    left: "30.28%",
  },
  person1Icon: {
    right: "73.54%",
    left: "9.41%",
  },
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  backArrow: {
    left: "5.6%",
    top: "24%",
    right: "91.6%",
    bottom: "73.64%",
    width: "2.8%",
    height: "2.36%",
    position: "absolute",
  },
  photoIcon: {
    height: "2.93%",
    width: "11.6%",
    right: "78.98%",
    bottom: "25.18%",
    left: "9.41%",
  },
  groupIcon: {
    height: "2.83%",
    width: "9.41%",
    right: "63.87%",
    bottom: "25.28%",
    left: "26.72%",
  },
  image12Icon: {
    top: 394,
    left: 45,
    width: 30,
    height: 30,
    position: "absolute",
  },
  chooseSong: {
    top: 327,
    left: 30,
  },
  sendTo: {
    top: 460,
    left: 33,
  },
  addAMessage: {
    top: 632,
    width: 210,
    left: 30,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  addAPhoto: {
    top: 750,
    left: 30,
  },
  delivery: {
    top: 869,
    left: 33,
  },
  seeMore: {
    top: 597,
    left: 308,
    fontSize: FontSize.size_smi,
    color: Color.colorFuchsia,
    width: 68,
    height: 17,
    textAlign: "left",
    position: "absolute",
  },
  backArrow1: {
    left: "94.66%",
    top: "54.58%",
    right: "4.12%",
    bottom: "44.61%",
    width: "1.22%",
    height: "0.82%",
    position: "absolute",
  },
  v3ShareMusicBox: {
    backgroundColor: Color.colorGray_500,
    flex: 1,
    height: 1103,
    overflow: "hidden",
    width: "100%",
  },
});

export default V3ShareMusicBox;
