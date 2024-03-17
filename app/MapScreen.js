import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Alert,
  TouchableOpacity,
  Text,
  Modal,
  Dimensions,
  StatusBar,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import axios from "axios";
import * as Location from "expo-location";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { colors } from "../assets/Themes/colors";
import { trackEvent } from "@aptabase/react-native";
import SearchBarWithAutocomplete from "../components/SearchBarWithAutocomplete";

const GOOGLE_API_KEY = "AIzaSyCLpB4bUuYtTgh9ZrbHo9H0cac5PJz1VKo";

const MapScreen = ({ selectedLocation }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [markerLocation, setMarkerLocation] = useState(null);
  const mapRef = useRef(null);

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

  useEffect(() => {
    if (selectedLocation && mapRef.current) {
      setMarkerLocation(selectedLocation);
      mapRef.current.animateToRegion(
        {
          ...selectedLocation,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
        1000
      );
    }
  }, [selectedLocation]);

  // const handlePlaceSelect = async (place) => {
  //   const placeId = place.place_id;
  //   try {
  //     const response = await axios.get(
  //       `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${GOOGLE_API_KEY}`
  //     );
  //     const lat = response.data.result.geometry.location.lat;
  //     const lng = response.data.result.geometry.location.lng;
  //     const newLocation = {
  //       latitude: lat,
  //       longitude: lng,
  //       latitudeDelta: 0.005,
  //       longitudeDelta: 0.005,
  //     };

  //     setUserLocation(newLocation);
  //     setSearchQuery(place.description);

  //     mapRef.current.animateToRegion(newLocation, 1000); // Smoothly transition the map view
  //   } catch (error) {
  //     console.error("Error fetching place details:", error);
  //     Alert.alert("Failed to fetch location details");
  //   }
  // };

  if (!userLocation) {
    return (
      <SafeAreaView style={styles.centeredView}>
        <ActivityIndicator size="large" color={colors.white} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="dark" />
      <SafeAreaView style={styles.flexible}>
        <View style={styles.container}>
          <MapView
            ref={mapRef}
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            region={userLocation}
            showsUserLocation={true}
          >
            {selectedLocation && (
              <Marker coordinate={selectedLocation} pinColor={colors.pink} />
            )}
            {!selectedLocation && userLocation && (
              <Marker
                coordinate={userLocation}
                pinColor={colors.pink}
                draggable
                onDragEnd={(e) => {
                  const newLocation = e.nativeEvent.coordinate;
                  setUserLocation((prevLocation) => ({
                    ...prevLocation,
                    latitude: newLocation.latitude,
                    longitude: newLocation.longitude,
                  }));
                }}
              />
            )}
          </MapView>
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.buttonText}>Expand</Text>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <View style={styles.fullScreenModal}>
              <MapView
                ref={mapRef}
                style={styles.expandedMap} // Use the expandedMap style here
                provider={PROVIDER_GOOGLE}
                region={userLocation}
                showsUserLocation={true}
              >
                {selectedLocation && (
                  <Marker
                    coordinate={selectedLocation}
                    pinColor={colors.pink}
                  />
                )}
                {!selectedLocation && userLocation && (
                  <Marker
                    coordinate={userLocation}
                    pinColor={colors.pink}
                    draggable
                    onDragEnd={(e) => {
                      const newLocation = e.nativeEvent.coordinate;
                      setUserLocation((prevLocation) => ({
                        ...prevLocation,
                        latitude: newLocation.latitude,
                        longitude: newLocation.longitude,
                      }));
                    }}
                  />
                )}
              </MapView>
              <TouchableOpacity
                style={[styles.toggleButton, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.buttonText}>Minimize</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 5.5, // Minimized map height
  },
  expandedMap: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  fullScreenModal: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },

  toggleButton: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: colors.pink,
    padding: 10,
    borderRadius: 20,
    zIndex: 10, // Ensure it's above other components
  },
  buttonText: {
    color: colors.black,
    fontWeight: "bold",
  },
  buttonClose: {
    backgroundColor: colors.pink,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MapScreen;
