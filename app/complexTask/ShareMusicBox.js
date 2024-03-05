import React, { useState, useEffect } from "react";
import MapScreen from "../MapScreen";
import Header1 from "../../components/Header1";
import PillSelectable from "../../components/PillSelectable";
import PillSelectableDouble from "../../components/PillSelectableDouble";
import PillPressable from "../../components/PillPressable";
import SpotifyButton from "../../components/SpotifyButton";
import ProfilePressable from "../../components/ProfilePressable";
import SelectSong from "../../components/SelectSong";
import { useNavigation } from "@react-navigation/native";
import { useSpotifyAuth, useSpotifyTracks, useSearch } from "../../utils";
import Track from "../../components/Track";
import Song from "../../components/Song";

import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { colors } from "../../assets/Themes/colors";
import ChrisHemsworthImg from "../../assets/chris-hemsworth.jpg";
import DwayneJohnsonImg from "../../assets/dwayne-johnson.jpg";
import JennaOrtegaImg from "../../assets/jenna-ortega.jpg";
import TimCookImg from "../../assets/tim-cook.jpg";
import { trackEvent } from "@aptabase/react-native";

const ShareMusicBox = ({ route, navigation }) => {
  const [selectedSong, setSelectedSong] = useState(null);
  const [selectedSongIndex, setSelectedSongIndex] = useState(null);
  // const navigation = useNavigation();
  const { token, getSpotifyAuth } = useSpotifyAuth();
  const { loading } = useSpotifyTracks(token);
  const [isLoading, setIsLoading] = useState(false);

  const [delivery, setDelivery] = useState(0);
  const [recipient, setRecipient] = useState(0);
  const [recipientName, setRecipientName] = useState("");
  const [recipientImage, setRecipientImage] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Extracting the selected song from navigation parameters
    if (route.params?.selectedSong) {
      setSelectedSong(route.params.selectedSong);
    }
  }, [route.params?.selectedSong]);

  console.log(selectedSong);

  const selectRecipient = (index) => {
    setRecipient(index);
    setRecipientName(recipientOptions[index].name);
    setRecipientImage(recipientOptions[index].image); // Set the recipient's image URL
  };

  // Function to handle button press
  const handleButtonPress = () => {
    if (isLoading) return;

    setIsLoading(true);
    if (!token) {
      getSpotifyAuth(); // Authenticate if user is not authenticated
    }
    setIsLoading(false);
  };

  const SpotifyAuthOrRefreshButton = () => (
    <SpotifyButton
      // style={[styles.button, isLoading && styles.disabledButton]}
      onPress={handleButtonPress}
      disabled={isLoading}
      token={token}
      isSpotify={true}
    />
  );

  const handleSendPress = () => {
    trackEvent("Send Pressed", {
      recipient: recipientName,
      // Include other tracking details as necessary
    });

    // Navigate to SentGift, passing along the required data
    navigation.navigate("Sent Gift", {
      recipientName,
      message,
      recipientImage,
      songTitle: selectedSong?.title,
      artists: selectedSong?.artists?.join(", "), // Join artists array into a string
      imageUrl: selectedSong?.imageUrl,
      duration: selectedSong?.duration,
      previewUrl: selectedSong?.previewUrl,
      externalUrl: selectedSong?.externalUrl,
      played_at: selectedSong?.played_at,
      // Include any other data necessary for SentGift.js
    });
  };

  // const songOptions = tracks && Array.isArray(tracks)
  // ? tracks.map((track) => ({
  //     artist: track.artists.map((artist) => artist.name).join(", "),
  //     song: track.name,
  //   }))
  // : [];

  // const handleSongSelect = (index) => {
  //   setSelectedSongIndex(index);
  //   const selectedSong = songOptions[index];
  //   console.log("Selected song:", selectedSong);
  //   // Assume trackEvent is correctly implemented elsewhere
  //   trackEvent("Song Selected", { song: selectedSong });
  // };

  const deliveryOptions = ["Send Now", "Surprise", "Notify"];
  const recipientOptions = [
    { name: "Chris", image: ChrisHemsworthImg },
    { name: "Dwayne", image: DwayneJohnsonImg },
    { name: "Jenna", image: JennaOrtegaImg },
    { name: "Tim", image: TimCookImg },
  ];
  // const songOptions = [
  //   {
  //     artist: "Taylor Swift",
  //     song: "Cruel Summer",
  //   },
  //   {
  //     artist: "Dua Lipa",
  //     song: "Houdini",
  //   },
  //   {
  //     artist: "Cage the Elephant",
  //     song: "Ain't No Rest for the Wicked",
  //   },
  //   {
  //     artist: "Jack Harlow",
  //     song: "Lovin' On Me",
  //   },
  // ];

  return (
    <ScrollView>
      <View style={styles.mapView}>
        <MapScreen />
      </View>
      <View style={styles.bodyView}>
        <View style={styles.sectionView}>
          <Header1 text="Choose a Song" />
          <SpotifyAuthOrRefreshButton />
          {!loading && selectedSong && (
            <Track
              title={selectedSong.title}
              artists={selectedSong.artists}
              albumName={selectedSong.albumName}
              imageUrl={selectedSong.imageUrl}
              duration={selectedSong.duration}
              previewUrl={selectedSong.previewUrl}
              externalUrl={selectedSong.externalUrl}
              played_at={selectedSong.played_at}
              // userName is omitted unless you need it for specific functionality
            />
          )}
          {/* {loading ? (
            <ActivityIndicator size="large" color={colors.primary} />
          ) : selectedSong ? (
            <View>
              <Text style={styles.selectedSongTitle}>{selectedSong.song}</Text>
              <Text style={styles.selectedSongArtist}>
                {selectedSong.artist}
              </Text>
              <PillPressable
                text="Change Song"
                onPress={() => navigation.navigate("Tracks")}
              />
            </View>
          ) : null} */}
        </View>
        <View style={styles.sectionView}>
          <Header1 text="Send To" />
          <ScrollView horizontal>
            {recipientOptions.map((option, index) => (
              <ProfilePressable
                key={option.name}
                image={option.image}
                name={option.name}
                isSelected={recipient === index}
                onPress={() => {
                  trackEvent("Recipient Option Selected", {
                    option: option.name, // Option.name could be the recipient's name
                  });
                  selectRecipient(index); // Call selectRecipient with the index
                }}
              />
            ))}
          </ScrollView>
        </View>
        <View style={styles.sectionView}>
          <Header1 text="Add a Message" />
          <TextInput
            placeholder="Add a message"
            style={styles.input}
            value={message} // Use the message state as the value
            onChangeText={setMessage} // Update the message state on text change
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
          <PillPressable text="Send" onPress={handleSendPress} />
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
