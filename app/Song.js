import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { Link } from "expo-router";

import millisToMinuteSeconds from "../utils/millisToMinutesAndSeconds.js";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../assets/Themes/colors";

const windowWidth = Dimensions.get("window").width;

const Song = ({
  title,
  artists,
  albumName,
  imageUrl,
  duration,
  previewUrl,
  externalUrl,
}) => (
  <View style={styles.container}>
    <View style={styles.buttonContainer}>
      <Link
        href={{
          pathname: "/PreviewScreen",
          params: {
            url: previewUrl,
          },
        }}
      >
        <Ionicons name="play-circle" size={32} style={styles.playButton} />
      </Link>
    </View>

    <Link
      href={{
        pathname: "/details",
        params: {
          url: externalUrl,
        },
      }}
    >
      <View style={styles.songInfo}>
        <Image source={{ uri: imageUrl }} style={styles.image} />

        <View style={styles.titleAndArtist}>
          <Text style={styles.titleText} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.artistText} numberOfLines={1}>
            {artists.join(", ")}
          </Text>
        </View>

        <Text style={styles.albumName} numberOfLines={1}>
          {albumName}
        </Text>
        <Text style={styles.durationText}>
          {millisToMinuteSeconds(duration)}
        </Text>
      </View>
    </Link>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    minWidth: windowWidth * 0.95,
    maxWidth: windowWidth * 0.95,
    paddingBottom: 10,
  },
  buttonContainer: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    marginRight: 5,
  },
  songInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "93%",
    alignItems: "center",
  },
  titleAndArtist: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginRight: 10,
    width: "36%",
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  playButton: {
    marginRight: 3,
    color: colors.spotify,
    alignItems: "center",
  },
  albumName: {
    color: "white",
    flex: 3,
    fontSize: 14,
    marginRight: 10,
    width: windowWidth * 0.15,
  },
  durationText: {
    color: colors.gray,
    fontSize: 14,
    paddingLeft: 5,
  },
  artistText: {
    color: colors.gray,
    fontSize: 14,
    marginTop: 2,
  },
  titleText: {
    color: colors.white,
    fontSize: 14,
    marginBottom: 2,
  },
});

export default Song;
=======
import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { Link } from "expo-router";

import millisToMinuteSeconds from "../utils/millisToMinutesAndSeconds.js";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../assets/Themes/colors";

const windowWidth = Dimensions.get("window").width;

const Song = ({
  title,
  artists,
  albumName,
  imageUrl,
  duration,
  previewUrl,
  externalUrl,
}) => (
  <View style={styles.container}>
    <View style={styles.buttonContainer}>
      <Link
        href={{
          pathname: "/PreviewScreen",
          params: {
            url: previewUrl,
          },
        }}
      >
        <Ionicons name="play-circle" size={32} style={styles.playButton} />
      </Link>
    </View>

    <Link
      href={{
        pathname: "/details",
        params: {
          url: externalUrl,
        },
      }}
    >
      <View style={styles.songInfo}>
        <Image source={{ uri: imageUrl }} style={styles.image} />

        <View style={styles.titleAndArtist}>
          <Text style={styles.titleText} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.artistText} numberOfLines={1}>
            {artists.join(", ")}
          </Text>
        </View>

        <Text style={styles.albumName} numberOfLines={1}>
          {albumName}
        </Text>
        <Text style={styles.durationText}>
          {millisToMinuteSeconds(duration)}
        </Text>
      </View>
    </Link>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    minWidth: windowWidth * 0.95,
    maxWidth: windowWidth * 0.95,
    paddingBottom: 10,
  },
  buttonContainer: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    marginRight: 5,
  },
  songInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "93%",
    alignItems: "center",
  },
  titleAndArtist: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginRight: 10,
    width: "36%",
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  playButton: {
    marginRight: 3,
    color: colors.spotify,
    alignItems: "center",
  },
  albumName: {
    color: "white",
    flex: 3,
    fontSize: 14,
    marginRight: 10,
    width: windowWidth * 0.15,
  },
  durationText: {
    color: colors.gray,
    fontSize: 14,
    paddingLeft: 5,
  },
  artistText: {
    color: colors.gray,
    fontSize: 14,
    marginTop: 2,
  },
  titleText: {
    color: colors.white,
    fontSize: 14,
    marginBottom: 2,
  },
});

export default Song;