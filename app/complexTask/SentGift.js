import React, { useEffect } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import PillPressable from "../../components/PillPressable";
import { colors } from "../../assets/Themes/colors";
import { useNavigation } from "@react-navigation/native";
import { trackEvent } from "@aptabase/react-native";
import Gray from "../../assets/gray.png";
import MusicImg from "../../assets/musicbox.png";
import SeeMore from "../../components/SeeMore";
import Icon from 'react-native-vector-icons/FontAwesome5'
import Label from "../../components/Label";
import LottieView from 'lottie-react-native';

const SentGift = ({ route }) => {
  const navigation = useNavigation();
  //   const name = route.params?.name;
  //   const image = route.params?.image;

  console.log(route);
  // Extracting data passed from ShareMusicBox.js
  const { recipientName, recipientImage, message, songTitle, artists } = route.params;

  // Track the gift received event
  useEffect(() => {
    trackEvent("gift_sent", {
      recipientName,
    });
  }, [recipientName]);
  let youSent = "You sent a tape to " + recipientName + "!";
  return (
    <>
    <View style={styles.anim}>
        <LottieView style={{ flex: 1 }} source={require('../../assets/Celebrate2.json')} autoPlay loop />
      </View>
    <View style={styles.container}>
      {/* <Text style={styles.name}>Gray</Text> */}
      {/* Display recipient's image or a default placeholder if not available */}
      <Image style={styles.image} source={recipientImage} />
      <Label style={styles.text} text={youSent}></Label>

      <Text style={styles.message}>{songTitle}, by {artists}</Text>
      <Text style={styles.message}>"{message}"</Text>

      <Image style={styles.image2} source={MusicImg} />

      
      <PillPressable
        onPress={() =>
          navigation.navigate("Share a Music Box")
        }
        text="Send another Tape"
      />


      <Pressable
      style={styles.containerSM}
      onPress={() => {
        navigation.navigate("Home");

      }}
      >
        <Text style={styles.buttonTextSM}>
          Return to Home
        </Text>
        <Icon name='chevron-right' style={styles.arrowSM} />
      </Pressable>


    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -150,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: 125,
    height: 125,
    borderRadius: 1000,
    marginBottom: 20,
  },
  image2: {
    // width: 125,
    // aspectRatio: 1,
    // height: 125,
    // borderRadius: 1000,
    marginBottom: 30,
    marginTop: 30,
  },
  name: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 10,
    color: colors.white,
  },
  text: {
    marginTop: 10,
    marginBottom: 50,
    color: colors.white,
    width: "80%",
  },
  message: {
    marginTop: 10,
    // marginBottom: 50,
    color: colors.white,
    width: "75%",
    textAlign: "center",
  },
  containerSM: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonTextSM: {
    color: colors.pink,
    fontSize: 14,
    fontWeight: "bold"
  },
  arrowSM: {
    color: colors.pink,
    fontSize: 14,
    marginLeft: 5
  },
  anim: {
    height: 500,
    aspectRatio: 1,
    zIndex: -10,
    marginTop: -250,
    left: "-18%",
    // justifyContent: "center",
    // alignItems: "center",
  }
});

export default SentGift;
