import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import PillPressable from "../../components/PillPressable";
import { colors } from "../../assets/Themes/colors";
import { useNavigation } from "@react-navigation/native";
import { trackEvent } from "@aptabase/react-native";
import Gray from "../../assets/gray.png";
import MusicImg from "../../assets/musicbox.png";

const SentGift = ({ route }) => {
  const navigation = useNavigation();
  //   const name = route.params?.name;
  //   const image = route.params?.image;

  // Extracting data passed from ShareMusicBox.js
  const { recipientName, recipientImage, message } = route.params;

  // Track the gift received event
  useEffect(() => {
    trackEvent("gift_sent", {
      recipientName,
    });
  }, [recipientName]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You sent a music box to {recipientName}</Text>
      {/* <Text style={styles.name}>Gray</Text> */}
      {/* Display recipient's image or a default placeholder if not available */}
      <Image style={styles.image} source={recipientImage} />
      <Text style={styles.message}>Your message: "{message}"</Text>

      <Image style={styles.image2} source={MusicImg} />

      <PillPressable
        onPress={() => {
          // Track the send button pressed event before navigation
          trackEvent("send_button_pressed", {
            destination: "FeedScreen", // additional data we can log
            senderName: recipientName, // The name of the person who received the gift
          });
          navigation.navigate("Home");
        }}
        text="Return to Home"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
    marginBottom: 30,
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
  },
  message: {
    marginTop: 10,
    marginBottom: 50,
    color: colors.white,
  },
});

export default SentGift;
