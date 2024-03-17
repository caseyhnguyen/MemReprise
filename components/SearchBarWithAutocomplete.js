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

import getEnv from "../utils/env";
const ENV = getEnv();
const GOOGLE_PLACES_API_KEY = ENV.GOOGLE_API_KEY;

const SearchBarWithAutocomplete = ({ onPlaceSelected, onSelectionDismiss }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [predictions, setPredictions] = useState([]);

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

  const handlePlaceSelect = (item) => {
    setSearchQuery(item.description); // Update search query with selected item's description
    onPlaceSelected(item);
    onSelectionDismiss && onSelectionDismiss(); // Dismiss the dropdown
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search for a location"
        style={styles.input}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={predictions}
        keyExtractor={(item) => item.place_id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePlaceSelect(item)}>
            <Text style={styles.predictionItem}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 50,
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
