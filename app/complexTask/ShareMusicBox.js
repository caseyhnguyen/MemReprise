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
import { profiles } from "../_data.js";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBarWithAutocomplete from "../../components/SearchBarWithAutocomplete";
import axios from "axios";
import { supabase } from "../../utils/supabaseClient";

import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
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

  const [userLocation, setUserLocation] = useState(null);
  const [searchedLocation, setSearchedLocation] = useState(null);

  const GOOGLE_API_KEY = "AIzaSyCZbXYrdtC_JQqNtA-K3y0bMZ4pKKLglk0";

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Location permission not granted");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  const handlePlaceSelect = async (place) => {
    const placeId = place.place_id;
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${GOOGLE_API_KEY}`
      );
      const locationResult = response.data.result;
      const { lat, lng } = locationResult.geometry.location;
      const newSearchedLocation = {
        name: locationResult.name,
        latitude: lat,
        longitude: lng,
      };

      setSearchedLocation(newSearchedLocation);
    } catch (error) {
      console.error("Error fetching place details:", error);
      Alert.alert("Failed to fetch location details");
    }
  };

  useEffect(() => {
    // Extracting the selected song from navigation parameters
    if (route.params?.selectedSong) {
      setSelectedSong(route.params.selectedSong);
    }
  }, [route.params?.selectedSong]);

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

  const handleSendPress = async () => {
    trackEvent("Send Pressed", {
      recipient: recipientName,
      // Include other tracking details as necessary
    });

    // Ensure all required data is available
    if (!selectedSong || !recipientName || !message || !searchedLocation) {
      // Handle the error state here, such as showing an alert or a message to the user
      console.error("Missing information for the mixtape");
      return;
    }

    // Create the mixtape data object
    const mixtapeData = {
      created_at: new Date().toISOString(),
      location_name: searchedLocation?.name || "Unknown location", // Fallback to "Unknown location" if name is not available
      latitude: searchedLocation.latitude,
      longitude: searchedLocation.longitude,
      message: message,
      song_id: selectedSong.id,
      songTitle: selectedSong.title,
      artists: selectedSong.artists.join(", "),
      albumName: selectedSong.albumName,
      imageUrl: selectedSong.imageUrl,
      duration: selectedSong.duration,
      previewUrl: selectedSong.previewUrl,
      externalUrl: selectedSong.externalUrl,
      recipient_name: recipientName,
      recipient_img: recipientImage,
    };

    // Call the function to save the data to Supabase
    await saveMixtapeToSupabase(mixtapeData);

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

  const saveMixtapeToSupabase = async (mixtapeData) => {
    try {
      const { data, error } = await supabase
        .from("mixtapes")
        .insert([mixtapeData]);

      if (error) {
        console.error("Error saving mixtape to database:", error);
        // Log the mixtape error event
        trackEvent("Error", {
          action: "Mixtape Failed",
          errorMessage: error.message,
        });
        // Optionally show an alert or error message to the user
      } else {
        console.log("Mixtape saved successfully:", data);
        // Handle the success state, such as navigating to a new screen or showing a success message
      }
    } catch (err) {
      console.error("Error saving mixtape:", err);
      // Log the mixtape error event
      trackEvent("Error", {
        action: "Mixtape Failed",
        errorMessage: err.message,
      });
      // Optionally show an alert or error message to the user
    }
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
  const recipientOptions = profiles;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <Header1 text="Choose a location" />
          <View style={styles.searchBar}>
            <SearchBarWithAutocomplete onPlaceSelected={handlePlaceSelect} />
          </View>
          <View style={styles.mapView}>
            <MapScreen selectedLocation={searchedLocation} />
          </View>

          <View style={styles.bodyView}>
            <View style={styles.sectionView}>
              <Header1 text="Choose a song" />
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
                />
              )}
            </View>
            <View style={styles.sectionView}>
              <Header1 text="Send to" />
              <ScrollView horizontal>
                {recipientOptions.map((option, index) => (
                  <ProfilePressable
                    key={option.name}
                    image={option.image}
                    name={option.name}
                    isSelected={recipient === index}
                    onPress={() => {
                      trackEvent("Recipient Option Selected", {
                        option: option.name,
                      });
                      selectRecipient(index);
                    }}
                  />
                ))}
              </ScrollView>
            </View>
            <View style={styles.sectionView}>
              <Header1 text="Add a message" />
              <TextInput
                placeholder="Remember that time we..."
                style={styles.input}
                value={message}
                onChangeText={setMessage}
                onBlur={(e) =>
                  trackEvent("Message Input", { message: e.nativeEvent.text })
                }
              />
            </View>
          </View>
        </KeyboardAvoidingView>
        <View style={styles.buttonView}>
          <PillPressable text="Send" onPress={handleSendPress} />
        </View>
      </ScrollView>
    </SafeAreaView>
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
    marginBottom: 50,
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
    marginBottom: 10,
  },
  pg: {
    color: colors.white,
  },
  sectionView: {
    marginVertical: 10,
  },
  searchBar: {
    // marginTop: -50
  },
  safeArea: {
    height: "110%",
    padding: 10,
  },
});

export default ShareMusicBox;
