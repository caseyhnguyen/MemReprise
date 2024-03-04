// select_song.js
import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import PillSelectableDouble from "./PillSelectableDouble";
import { colors } from "../assets/Themes/colors";

/**
 * SelectSong Component
 *
 * Props:
 * - songOptions: Array of song objects with artist and song properties
 * - onSongSelect: Function to handle song selection
 * - selectedSongIndex: Index of the currently selected song for visual feedback
 */
const SelectSong = ({ songOptions, onSongSelect, selectedSongIndex }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {songOptions.map((option, index) => (
          <PillSelectableDouble
            key={index}
            topText={option.artist}
            bottomText={option.song}
            isSelected={index === selectedSongIndex}
            onPress={() => onSongSelect(index)}
            style={styles.pill}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  scrollView: {
    paddingHorizontal: 10,
  },
  pill: {
    marginRight: 10,
    // Additional styling for the PillSelectableDouble components to match ShareMusicBox.js
    // Assuming PillSelectableDouble accepts a style prop for customization
  },
  // You can add styles similar to those in ShareMusicBox.js here for consistency
});

export default SelectSong;
