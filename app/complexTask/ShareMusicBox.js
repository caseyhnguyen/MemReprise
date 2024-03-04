import React, { useState, useEffect } from "react";
import MapScreen from "../MapScreen";
import Header1 from "../../components/Header1";
import PillSelectable from "../../components/PillSelectable";
import PillSelectableDouble from "../../components/PillSelectableDouble";
import PillPressable from "../../components/PillPressable";
import ProfilePressable from "../../components/ProfilePressable";
import SelectSong from "../../components/SelectSong";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import { colors } from "../../assets/Themes/colors";
import ChrisHemsworthImg from "../../assets/chris-hemsworth.jpg";
import DwayneJohnsonImg from "../../assets/dwayne-johnson.jpg";
import JennaOrtegaImg from "../../assets/jenna-ortega.jpg";
import TimCookImg from "../../assets/tim-cook.jpg";
import { trackEvent } from "@aptabase/react-native";

const ShareMusicBox = () => {
  const navigation = useNavigation();

  // Function to handle song selection, now expects an index instead of song object
  const handleSongSelect = (index) => {
    const song = songOptions[index];
    trackEvent("Song Selected", { song });
    console.log(song);
    setSong(index); // Update the song selection state
  };

  const deliveryOptions = ["Send Now", "Surprise", "Notify"];
  const recipientOptions = [
    {
      name: "Chris",
      image: ChrisHemsworthImg,
    },
    {
      name: "Dwayne",
      image: DwayneJohnsonImg,
    },
    {
      name: "Jenna",
      image: JennaOrtegaImg,
    },
    {
      name: "Tim",
      image: TimCookImg,
    },
  ];
  const songOptions = [
    {
      artist: "Taylor Swift",
      song: "Cruel Summer",
    },
    {
      artist: "Dua Lipa",
      song: "Houdini",
    },
    {
      artist: "Cage the Elephant",
      song: "Ain't No Rest for the Wicked",
    },
    {
      artist: "Jack Harlow",
      song: "Lovin' On Me",
    },
  ];

  const [delivery, setDelivery] = useState(0);
  const [recipient, setRecipient] = useState(0);
  const [song, setSong] = useState(0); // This maintains the index of the selected song

  return (
    <ScrollView>
      <View style={styles.mapView}>
        <MapScreen />
      </View>
      <View style={styles.bodyView}>
        <View style={styles.sectionView}>
          <Header1 text="Choose a Song"></Header1>
          <SelectSong
            songOptions={songOptions}
            selectedSongIndex={song}
            onSongSelect={handleSongSelect}
          />
        </View>
        <View style={styles.sectionView}>
          <Header1 text="Send To"></Header1>
          <ScrollView horizontal>
            {recipientOptions.map((option, index) => (
              <>
                {index === recipient ? (
                  <ProfilePressable
                    image={option.image}
                    name={option.name}
                    isSelected
                    onPress={() => {
                      trackEvent("Recipient Option Selected", {
                        option: option,
                      });
                      setRecipient(index);
                    }}
                  ></ProfilePressable>
                ) : (
                  <ProfilePressable
                    image={option.image}
                    name={option.name}
                    onPress={() => {
                      trackEvent("Recipient Option Selected", {
                        option: option,
                      });
                      setRecipient(index);
                    }}
                  ></ProfilePressable>
                )}
              </>
            ))}
          </ScrollView>
        </View>
        <View style={styles.sectionView}>
          <Header1 text="Add a Message"></Header1>
          <TextInput
            placeholder="Add a message"
            style={styles.input}
            onBlur={(e) =>
              trackEvent("Message Input", { message: e.nativeEvent.text })
            }
          />
        </View>
        <View style={styles.sectionView}>
          <Header1 text="Delivery"></Header1>
          <ScrollView horizontal>
            {deliveryOptions.map((option, index) => (
              <>
                {index === delivery ? (
                  <PillSelectable
                    text={option}
                    isSelected
                    onPress={() => {
                      trackEvent("Delivery Option Selected", {
                        option: option,
                      });
                      setDelivery(index);
                    }}
                  />
                ) : (
                  <PillSelectable
                    text={option}
                    onPress={() => {
                      trackEvent("Delivery Option Selected", {
                        option: option,
                      });
                      setDelivery(index);
                    }}
                  />
                )}
              </>
            ))}
            {/* <PillSelectable text="Send Now"></PillSelectable>
            <PillSelectable text="Surprise"></PillSelectable>
            <PillSelectable text="Notify"></PillSelectable> */}
          </ScrollView>
        </View>
        <View style={styles.buttonView}>
          <PillPressable
            onPress={() => {
              trackEvent("Send Pressed", {});
              navigation.navigate("FeedScreen");
            }}
            text="Send"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bodyView: {
    padding: 10,
  },
  buttonView: {
    display: "flex",
    width: "100%",
    alignItems: "center",
  },
  input: {
    fontSize: 15,
    marginTop: 5,
    marginBottom: 10,
    padding: 11,
    borderWidth: 1,
    borderColor: colors.offWhite75,
    borderRadius: 4,
    color: colors.black,
    backgroundColor: colors.offWhite75,
    fontWeight: "bold",
  },
  mapView: {
    width: "100%",
  },
  pg: {
    color: colors.white,
  },
  sectionView: {
    marginBottom: 20,
  },
});

export default ShareMusicBox;
