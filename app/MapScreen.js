// MapScreen.js
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import images from "../assets/Images/images";
import { colors } from "../assets/Themes/colors";
import Header from "../components/Header";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  const [markers, setMarkers] = useState([]);
  const [selectedMarkerKey, setSelectedMarkerKey] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddMarker = (coordinate) => {
    const newMarker = {
      coordinate,
      title,
      description,
      // Ensure this generates a truly unique key
      key: Date.now().toString(),
    };

    setMarkers((currentMarkers) => [...currentMarkers, newMarker]);
    setTitle(""); // Reset title input
    setDescription(""); // Reset description input
  };

  const handleSelectMarker = (key) => {
    console.log(`Marker selected: ${key}`); // Debugging: Log selected marker
    setSelectedMarkerKey(key);
  };

  const handleDeleteSelectedMarker = () => {
    console.log(`Deleting marker: ${selectedMarkerKey}`); // Debugging: Log deletion attempt
    if (selectedMarkerKey) {
      setMarkers((markers) =>
        markers.filter((marker) => marker.key !== selectedMarkerKey)
      );
      setSelectedMarkerKey(null); // Reset selected marker key
    } else {
      Alert.alert("No marker selected", "Please select a marker to delete.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={(e) => handleAddMarker(e.nativeEvent.coordinate)}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index} // For debugging purposes, consider using index as key
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
            onPress={() => handleSelectMarker(marker.key)}
          />
        ))}
      </MapView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Title"
        />
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
          placeholder="Description"
        />
        <Button
          title="Add Marker"
          onPress={() => Alert.alert("Marker added")}
        />
        <Button
          title="Delete Selected Marker"
          color="red"
          onPress={handleDeleteSelectedMarker}
          disabled={!selectedMarkerKey}
        />
        {/** Debugging: Display selected marker key */}
        <Text>Selected Marker Key: {selectedMarkerKey || "None"}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  inputContainer: {
    padding: 10,
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default MapScreen;
