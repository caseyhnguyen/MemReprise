import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View, ScrollView, ImageBackground } from "react-native";
import PillPressable from "../../components/PillPressable";
import { colors } from "../../assets/Themes/colors";
import { useNavigation } from "@react-navigation/native";
import { trackEvent } from "@aptabase/react-native";
import Gray from "../../assets/gray.png";
import MusicImg from "../../assets/musicbox.png";
import LottieView from 'lottie-react-native';
import Bg from "../../assets/tape.png";


const RecieveGift = ({ route }) => {
  const navigation = useNavigation();
  const artists = route.params?.artists;
  const externalUrl = route.params?.externalUrl;
  const imageUrl = route.params?.imageUrl;
  const location_name = route.params?.location_name;
  const message = route.params?.message;
  const sender_img = route.params?.sender_img;
  const sender_name = route.params?.sender_name;
  const title = route.params?.title;
  const formattedTimestamp = route.params?.formattedTimestamp

  // console.log(title);

  // Track the gift received event
  useEffect(() => {
    trackEvent("gift_received", {
      sender_name, // Name of the person who sent the gift
    });
  }, [sender_name]);

  return (
    <ScrollView>
      <ImageBackground
        source={Bg}
        resizeMode="cover"
        style={styles.bgImg}
        // blurRadius={8}
      >
      <View style={styles.container}>
        <Image style={styles.image} source={sender_img} />
        <Text style={styles.name}>{sender_name}</Text>
        <Text style={styles.text}>sent you a music box!</Text>
        <Image style={styles.image2} source={MusicImg} />
        <PillPressable
          onPress={() => {
            // Track the send button pressed event before navigation
            trackEvent("send_button_pressed", {
              destination: "FeedScreen", // additional data we can log
            });
            console.log(formattedTimestamp);
            navigation.navigate("Music Box", { artists: artists, title: title, imageUrl: imageUrl, externalUrl: externalUrl, sender_name: sender_name, sender_img: sender_img, location_name: location_name, message: message, formattedTimestamp: formattedTimestamp });
            // navigation.navigate("Recieve Gift", { artists: artists, city: name, imageUrl: imageUrl });
          }}
          text="Open"
        />
        <View style={styles.anim}>
          <LottieView style={{ flex: 1 }} source={require('../../assets/Celebrate2.json')} autoPlay loop />
        </View>
      </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor: colors.black,
    width: "100%",
    height: "100%",
  },
  image: {
    width: 125,
    height: 125,
    borderRadius: 1000,
  },
  image2: {
    // width: 125,
    // height: 125,
    // borderRadius: 1000,
    marginBottom: 30
  },
  name: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 10,
    color: colors.white,
  },
  text: {
    marginTop: 5,
    marginBottom: 30,
    color: colors.white,
  },
  anim: {
    height: 500,
    // width: 100,
    aspectRatio: 1,
    marginTop: -100,
    zIndex: -10
  },
  bgImg: {
    // padding: 20,
    height: "125%", 
    // width: 380, 
    justifyContent: 'center', 
    alignItems: 'center',
  }
});

export default RecieveGift;
