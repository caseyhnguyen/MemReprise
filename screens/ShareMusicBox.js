import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ShareMusicBox = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.shareMusicBox}>
      <Image
        style={[styles.shareMusicBoxChild, styles.shareChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <View style={[styles.layer1, styles.layer1Layout]}>
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
          style={[styles.pinIcon, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/pin1.png")}
        />
        <Text style={[styles.text, styles.textFlexBox]}>3:25</Text>
      </View>
      <Text style={[styles.shareAMusicbox, styles.textFlexBox]}>
        Share a Musicbox
      </Text>
      <Text style={[styles.chooseSong, styles.mediaLayout]}>Choose song</Text>
      <Text style={[styles.sendTo, styles.sendToTypo]}>Send to</Text>
      <Text style={[styles.brent, styles.grayTypo]}>Brent</Text>
      <Text style={[styles.photo, styles.photoTypo]}>Photo</Text>
      <Text style={[styles.camera, styles.photoTypo]}>Camera</Text>
      <Text style={[styles.recSong, styles.photoTypo]}>Rec Song</Text>
      <Text style={[styles.casey, styles.grayTypo]}>Casey</Text>
      <Text style={[styles.gray, styles.grayTypo]}>Gray</Text>
      <Text style={[styles.tristan, styles.grayTypo]}>Tristan</Text>
      <Text style={[styles.emily, styles.grayTypo]}>Emily</Text>
      <Text style={[styles.message, styles.mediaLayout]}>Message</Text>
      <Text style={[styles.media, styles.mediaLayout]}>Media</Text>
      <Text style={[styles.options, styles.mediaLayout]}>Options</Text>
      <Image
        style={styles.searchIconBack}
        contentFit="cover"
        source={require("../assets/search-icon-back.png")}
      />
      <Image
        style={styles.searchIcon}
        contentFit="cover"
        source={require("../assets/search-icon.png")}
      />
      <Image
        style={styles.chooseSongLeftIcon}
        contentFit="cover"
        source={require("../assets/choose-song-left.png")}
      />
      <Image
        style={[styles.sendToLeftIcon, styles.sendIconPosition]}
        contentFit="cover"
        source={require("../assets/choose-song-left.png")}
      />
      <Image
        style={[styles.messageLeftIcon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/choose-song-left.png")}
      />
      <Image
        style={[styles.messageLeftIcon1, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/choose-song-left.png")}
      />
      <Image
        style={[styles.optionsLeftIcon, styles.optionsIconPosition]}
        contentFit="cover"
        source={require("../assets/choose-song-left.png")}
      />
      <Image
        style={[styles.sendToRightIcon, styles.sendIconPosition]}
        contentFit="cover"
        source={require("../assets/choose-song-left.png")}
      />
      <Image
        style={[styles.messagesRightIcon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/choose-song-left.png")}
      />
      <Image
        style={[styles.messagesRightIcon1, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/choose-song-left.png")}
      />
      <Image
        style={[styles.optionsRightIcon, styles.optionsIconPosition]}
        contentFit="cover"
        source={require("../assets/choose-song-left.png")}
      />
      <Image
        style={styles.song1Icon}
        contentFit="cover"
        source={require("../assets/song-12.png")}
      />
      <Image
        style={[styles.song2Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/song-22.png")}
      />
      <Image
        style={[styles.song3Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/song-31.png")}
      />
      <Image
        style={[styles.shareMusicBoxItem, styles.shareChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.shareMusicBoxInner, styles.shareChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.shareChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.shareMusicBoxChild1, styles.shareChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <View style={[styles.messageTextBox, styles.textBg]} />
      <Text style={[styles.ourFirstKiss, styles.sendToTypo]}>
        Our first kiss, remember?
      </Text>
      <Image
        style={styles.microphoneIcon}
        contentFit="cover"
        source={require("../assets/microphone-icon2.png")}
      />
      <Text style={[styles.surprise, styles.sendTypo]}>Surprise</Text>
      <Text style={styles.notify}>Notify</Text>
      <Text style={[styles.send, styles.sendTypo]}>Send</Text>
      <Image
        style={styles.batteryIcon}
        contentFit="cover"
        source={require("../assets/battery-icon.png")}
      />
      <Text style={[styles.batteryAmount, styles.textTypo]}>92</Text>
      <View style={[styles.rectangleView, styles.groupChildBg]} />
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("ReceiveGift")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.send1, styles.mediaLayout]}>Send</Text>
      </Pressable>
      <View style={styles.shareMusicBoxChild2} />
      <View style={[styles.shareMusicBoxChild3, styles.shareChildLayout]} />
      <View style={[styles.shareMusicBoxChild4, styles.shareChildLayout]} />
      <View style={styles.layer11} />
      <Image
        style={styles.person5Icon}
        contentFit="cover"
        source={require("../assets/person-51.png")}
      />
      <Image
        style={[styles.person4Icon, styles.iconLayout3]}
        contentFit="cover"
        source={require("../assets/person-41.png")}
      />
      <Image
        style={[styles.person3Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/person-31.png")}
      />
      <Image
        style={[styles.person2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/person-21.png")}
      />
      <Image
        style={[styles.person1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/person-11.png")}
      />
      <Pressable
        style={styles.backArrow}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/back-arrow3.png")}
        />
      </Pressable>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={[styles.photoIcon, styles.iconLayout3]}
        contentFit="cover"
        source={require("../assets/photo-icon1.png")}
      />
      <Image
        style={styles.vectorIcon1}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconLayout3]}
        contentFit="cover"
        source={require("../assets/group1.png")}
      />
      <Image
        style={[styles.cameraImageBasicUi, styles.iconLayout3]}
        contentFit="cover"
        source={require("../assets/139-camera-image-basic-ui.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.iconLayout3]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  shareChildLayout1: {
    height: 71,
    width: 71,
    top: 523,
    position: "absolute",
  },
  layer1Layout: {
    width: 393,
    position: "absolute",
  },
  iconLayout3: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textBg: {
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  mediaLayout: {
    height: 27,
    color: Color.colorWhite,
    position: "absolute",
  },
  sendToTypo: {
    left: 53,
    height: 27,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  grayTypo: {
    height: 21,
    fontSize: FontSize.size_sm,
    top: 603,
    width: 55,
    color: Color.colorWhite,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "center",
    position: "absolute",
  },
  photoTypo: {
    top: 865,
    height: 21,
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "center",
    position: "absolute",
  },
  sendIconPosition: {
    top: 491,
    width: 12,
    maxHeight: "100%",
    position: "absolute",
  },
  iconPosition1: {
    top: 666,
    width: 12,
    maxHeight: "100%",
    position: "absolute",
  },
  iconPosition: {
    top: 776,
    width: 12,
    maxHeight: "100%",
    position: "absolute",
  },
  optionsIconPosition: {
    top: 918,
    width: 12,
    maxHeight: "100%",
    position: "absolute",
  },
  iconLayout1: {
    width: 118,
    height: 59,
    top: 379,
    position: "absolute",
  },
  sendTypo: {
    height: 20,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mid,
    top: 952,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  groupChildBg: {
    backgroundColor: Color.colorDarkslategray_200,
    left: 0,
  },
  groupChildLayout: {
    height: 34,
    width: 158,
    position: "absolute",
  },
  shareChildLayout: {
    height: 19,
    width: 19,
    top: 953,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  iconLayout: {
    bottom: "46.43%",
    width: "17.05%",
    height: "6.07%",
    top: "47.51%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  vectorIconLayout: {
    bottom: "21.99%",
    top: "72.8%",
    width: "14.78%",
    height: "5.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  shareMusicBoxChild: {
    left: 358,
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
    width: "8.14%",
    position: "absolute",
  },
  text: {
    height: "6.99%",
    left: "9.41%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    width: "8.14%",
    top: "17.13%",
  },
  layer1: {
    top: -22,
    height: 286,
    left: 0,
    width: 393,
    overflow: "hidden",
  },
  shareAMusicbox: {
    top: 264,
    left: 52,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 249,
    height: 29,
  },
  chooseSong: {
    width: 121,
    left: 51,
    height: 27,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_lg,
    top: 327,
  },
  sendTo: {
    top: 479,
    width: 121,
    color: Color.colorWhite,
    left: 53,
  },
  brent: {
    left: 39,
  },
  photo: {
    left: 56,
    width: 55,
    top: 865,
  },
  camera: {
    left: 137,
    width: 55,
    top: 865,
  },
  recSong: {
    left: 220,
    width: 69,
  },
  casey: {
    left: 120,
  },
  gray: {
    left: 202,
  },
  tristan: {
    left: 284,
  },
  emily: {
    left: 361,
  },
  message: {
    top: 654,
    width: 121,
    left: 51,
    height: 27,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_lg,
  },
  media: {
    top: 764,
    width: 121,
    left: 51,
    height: 27,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_lg,
  },
  options: {
    top: 906,
    width: 121,
    left: 51,
    height: 27,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_lg,
  },
  searchIconBack: {
    top: 321,
    left: 172,
    width: 37,
    height: 37,
    position: "absolute",
  },
  searchIcon: {
    left: 179,
    width: 24,
    height: 24,
    top: 327,
    position: "absolute",
    overflow: "hidden",
  },
  chooseSongLeftIcon: {
    top: 339,
    width: 12,
    left: 33,
    maxHeight: "100%",
    position: "absolute",
  },
  sendToLeftIcon: {
    left: 35,
  },
  messageLeftIcon: {
    left: 33,
  },
  messageLeftIcon1: {
    left: 33,
  },
  optionsLeftIcon: {
    left: 33,
  },
  sendToRightIcon: {
    left: 125,
  },
  messagesRightIcon: {
    left: 130,
  },
  messagesRightIcon1: {
    left: 108,
  },
  optionsRightIcon: {
    left: 122,
  },
  song1Icon: {
    left: 37,
    width: 136,
    height: 59,
    top: 379,
    position: "absolute",
  },
  song2Icon: {
    left: 183,
  },
  song3Icon: {
    left: 316,
  },
  shareMusicBoxItem: {
    left: 30,
  },
  shareMusicBoxInner: {
    left: 112,
  },
  ellipseIcon: {
    left: 194,
  },
  shareMusicBoxChild1: {
    left: 276,
  },
  messageTextBox: {
    top: 688,
    left: 38,
    borderRadius: Border.br_5xs,
    width: 328,
    height: 42,
  },
  ourFirstKiss: {
    top: 697,
    color: Color.colorBlack,
    width: 225,
  },
  microphoneIcon: {
    top: 696,
    left: 338,
    width: 15,
    height: 26,
    position: "absolute",
    overflow: "hidden",
  },
  surprise: {
    left: 180,
    width: 80,
  },
  notify: {
    left: 302,
    width: 62,
    top: 953,
    height: 20,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  send: {
    left: 78,
    width: 45,
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
    width: 393,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_200,
    left: 0,
  },
  send1: {
    top: 3,
    left: 18,
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 122,
    textAlign: "center",
  },
  rectangleParent: {
    top: 1014,
    left: 118,
  },
  shareMusicBoxChild2: {
    left: 149,
    backgroundColor: Color.colorFuchsia,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 21,
    top: 952,
    height: 21,
    position: "absolute",
  },
  shareMusicBoxChild3: {
    left: 273,
  },
  shareMusicBoxChild4: {
    left: 50,
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
    right: "-8.91%",
    bottom: "46.34%",
    left: "91.6%",
    top: "47.51%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  person4Icon: {
    height: "7.43%",
    width: "20.87%",
    top: "47.33%",
    right: "10.94%",
    bottom: "45.25%",
    left: "68.19%",
    position: "absolute",
  },
  person3Icon: {
    right: "33.08%",
    left: "49.87%",
  },
  person2Icon: {
    right: "53.94%",
    left: "29.01%",
  },
  person1Icon: {
    right: "74.81%",
    left: "8.14%",
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
  vectorIcon: {
    top: 957,
    left: 153,
    width: 13,
    height: 11,
    position: "absolute",
  },
  photoIcon: {
    height: "2.27%",
    width: "8.98%",
    top: "74.08%",
    right: "74.4%",
    bottom: "23.65%",
    left: "16.62%",
    position: "absolute",
  },
  vectorIcon1: {
    top: "72.62%",
    right: "71.48%",
    bottom: "22.18%",
    left: "13.74%",
    width: "14.78%",
    height: "5.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon2: {
    right: "49.85%",
    left: "35.37%",
  },
  vectorIcon3: {
    right: "27.71%",
    left: "57.51%",
  },
  groupIcon: {
    height: "2.37%",
    width: "7.89%",
    top: "74.19%",
    right: "53.44%",
    bottom: "23.45%",
    left: "38.68%",
    position: "absolute",
  },
  cameraImageBasicUi: {
    height: "1.6%",
    width: "7.38%",
    top: "74.61%",
    right: "31.55%",
    bottom: "23.78%",
    left: "61.07%",
    position: "absolute",
  },
  vectorIcon4: {
    height: "0.91%",
    width: "1.53%",
    top: "74.98%",
    right: "35.11%",
    bottom: "24.12%",
    left: "63.36%",
    position: "absolute",
  },
  shareMusicBox: {
    backgroundColor: Color.colorGray_500,
    flex: 1,
    height: 1103,
    overflow: "hidden",
    width: "100%",
  },
});

export default ShareMusicBox;
