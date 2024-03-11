import React, { useState, useEffect, useCallback } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { colors } from "../assets/Themes/colors";
import { tracks } from "../app/_data.js";
import { supabase } from "../utils/supabaseClient";

const Hero = () => {
  // Define state for the random image URL
  const [randomImageUrl, setRandomImageUrl] = useState("");

  const getRandomTrackImageUrl = () => {
    const hero = tracks[Math.floor(Math.random() * tracks.length)];
    return hero.imageUrl;
  };

  // Fetch random image URL from Supabase on mount
  const fetchRandomImageUrl = useCallback(async () => {
    try {
      let query = supabase
        .from("mixtapes_received")
        .select("*")
        .order("created_at", { ascending: false });

      const { data, error } = await query;
      if (error) throw error;

      if (data.length) {
        const randomUrl =
          data[Math.floor(Math.random() * data.length)].imageUrl;
        setRandomImageUrl(randomUrl); // Update state with fetched URL
      } else {
        setRandomImageUrl(getRandomTrackImageUrl()); // Fallback to local track image URL
      }
    } catch (error) {
      console.error("Error fetching image URL:", error);
      setRandomImageUrl(getRandomTrackImageUrl()); // Fallback on error
    }
  }, []);

  useEffect(() => {
    fetchRandomImageUrl();
  }, [fetchRandomImageUrl]);

  return (
    <View style={styles.heroContainer}>
      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={[styles.headerNum]}>5</Text>
          <Text style={[styles.header3]}>tapes received.</Text>
          <Text style={[styles.header3]}>Check them out!</Text>
        </View>
        <View style={styles.col}>
          {randomImageUrl ? (
            <Image source={{ uri: randomImageUrl }} style={styles.heroImg} />
          ) : null}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heroContainer: {
    // height: "45%",
    width: "100%",
    marginBottom: 15,
    // paddingVertical: 10,
  },
  row: {
    // flexDirection: "column",
    justifyContent: "center",
    // alignItems: "flex-start",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start", // if you want to fill rows left to right
    backgroundColor: colors.darkBlue,
    padding: 20,
    paddingVertical: 30,
  },
  item: {
    width: "50%", // is 50% of container width
  },
  headerNum: {
    marginTop: 30,
    fontWeight: "bold",
    fontSize: 53,
    alignItems: "center",
    justifyContent: "center",
    // alignSelf: "center",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    color: colors.pink,
  },
  header3: {
    fontWeight: "bold",
    fontSize: 17,
    alignItems: "center",
    justifyContent: "center",
    // alignSelf: "center",
    textTransform: "uppercase",
    letterSpacing: 1.2,
    color: colors.white,
  },
  heroImg: {
    width: 150,
    height: 150,
    marginLeft: 20,
    // marginTop: 10,
  },
});

export default Hero;
