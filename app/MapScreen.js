import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Alert,
  TouchableOpacity,
  Text,
  Modal,
  Dimensions,
  Platform,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { trackEvent } from "@aptabase/react-native";

const MapScreen = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Location permission not granted");
        trackEvent("Permission", {
          action: "Location Permission",
          granted: false,
        });
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      trackEvent("Permission", {
        action: "Location Permission",
        granted: true,
      });
    })();
  }, []);

  const onMarkerDragEnd = (e) => {
    if (!userLocation) return;

    const newLocation = e.nativeEvent.coordinate;
    setUserLocation({
      ...userLocation,
      latitude: newLocation.latitude,
      longitude: newLocation.longitude,
    });
  };

  if (!userLocation) {
    return (
      <View style={styles.centeredView}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={userLocation}
        showsUserLocation={true}
      >
        <Marker
          coordinate={userLocation}
          draggable
          onDragEnd={onMarkerDragEnd}
        />
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
        <View style={styles.fullScreenModal}>
          <MapView
            ref={mapRef}
            style={styles.expandedMap}
            provider={PROVIDER_GOOGLE}
            region={userLocation}
            showsUserLocation={true}
          >
            <Marker
              coordinate={userLocation}
              draggable
              onDragEnd={onMarkerDragEnd}
            />
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
    height: Dimensions.get("window").height / 4, // Minimized map height
  },
  expandedMap: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height, // Expanded map height for full screen
  },
  fullScreenModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  toggleButton: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MapScreen;
