import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import PillPressable from "../../components/PillPressable";
import { colors } from "../../assets/Themes/colors";
import { useNavigation } from "@react-navigation/native";
import { trackEvent } from "@aptabase/react-native";
import Gray from "../../assets/gray.png"
import MusicImg from "../../assets/musicbox.png"

const RecieveGift = ({ route }) => {
  const navigation = useNavigation();
  const name = route.params?.name;
  const image = route.params?.image;

  // Track the gift received event
  useEffect(() => {
    trackEvent("gift_received", {
      name, // Name of the person who sent the gift
    });
  }, [name]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Gray} />
      <Text style={styles.name}>Gray</Text>
      <Text style={styles.text}>sent you a music box!</Text>
      <Image style={styles.image2} source={MusicImg} />

      <PillPressable
        onPress={() => {
          // Track the send button pressed event before navigation
          trackEvent("send_button_pressed", {
            destination: "FeedScreen", // additional data we can log
            senderName: name, // The name of the person who received the gift
          });
          navigation.navigate("Music Box");
        }}
        text="Open"
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
    marginBottom: 30
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
});

export default RecieveGift;
