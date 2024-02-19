import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Alert,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";

const MapScreen = () => {
  const [markers, setMarkers] = useState([]);
  const [isMapExpanded, setIsMapExpanded] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    })();
  }, []);

  const onUserLocationChange = (e) => {
    const newLocation = {
      ...userLocation,
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
    };
    setUserLocation(newLocation);
  };

  const toggleMapSize = () => {
    setIsMapExpanded(!isMapExpanded);
    if (isMapExpanded && userLocation && mapRef.current) {
      mapRef.current.animateToRegion(userLocation, 350);
    }
  };

  if (!userLocation) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.loadingContainer}>
          <Text>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View
          style={
            isMapExpanded ? styles.expandedMapContainer : styles.mapContainer
          }
        >
          <MapView
            ref={mapRef}
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={userLocation}
          >
            <Marker
              coordinate={{
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
              }}
              draggable
              onDragEnd={onUserLocationChange}
              title="Your Location"
            />
            {markers.map((marker, index) => (
              <Marker key={index} coordinate={marker} draggable />
            ))}
          </MapView>
          <TouchableOpacity style={styles.toggleButton} onPress={toggleMapSize}>
            <Text style={styles.buttonText}>
              {isMapExpanded ? "Minimize" : "Expand"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  mapContainer: {
    width: "100%",
    height: "25%",
  },
  expandedMapContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  toggleButton: {
    position: "absolute",
    right: 10,
    bottom: 10,
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
  },
});

export default MapScreen;
