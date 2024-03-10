// components/SearchBarWithAutocomplete.js
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import { colors } from "../assets/Themes/colors";
import axios from "axios";
import { trackEvent } from "@aptabase/react-native";

const GOOGLE_PLACES_API_KEY = "AIzaSyCZbXYrdtC_JQqNtA-K3y0bMZ4pKKLglk0"; // Replace this with your Google Places API key

const SearchBarWithAutocomplete = ({ onPlaceSelected }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [predictions, setPredictions] = useState([]);

  // Debounce search query to reduce the number of API calls
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        fetchPredictions();
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const fetchPredictions = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${searchQuery}&key=${GOOGLE_PLACES_API_KEY}&language=en`
      );
      setPredictions(response.data.predictions);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionView}>
        {/* <Header1 text="Add a message" /> */}
        <TextInput
          placeholder="Search for a location"
          style={styles.input}
          value={searchQuery} // Use the message state as the value
          onChangeText={setSearchQuery} // Update the message state on text change
          onBlur={(e) =>
            trackEvent("Location Search", { message: e.nativeEvent.text })
          }
        />
      </View>
      {/* <TextInput
        style={styles.input}
        placeholder="Search for a location"
        value={searchQuery}
        onChangeText={setSearchQuery}
      /> */}
      <FlatList
        data={predictions}
        keyExtractor={(item) => item.place_id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onPlaceSelected(item)}>
            <Text style={styles.predictionItem}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
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
    width: "100%", // Make the input take the full width
  },
  predictionItem: {
    padding: 10,
    fontSize: 15,
    color: colors.white,
  },
});

export default SearchBarWithAutocomplete;
