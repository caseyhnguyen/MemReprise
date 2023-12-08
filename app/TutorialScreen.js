import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { ViewPropTypes } from "deprecated-react-native-prop-types";

import Carousel, { Pagination } from "react-native-snap-carousel";

import images from "../assets/Images/images";
import albums from "../assets/Images/albums";
import tutorial from "../assets/Images/tutorial";

const windowWidth = Dimensions.get("window").width;

const TutorialScreen = ({ route, navigation }) => {
  const userName = route.params?.userName;
  const [activeSlide, setActiveSlide] = useState(0);

  const data = [
    { title: "Tutorial", text: "Post to Unlock", image: tutorial.tut0 },
    {
      title: "Tutorial",
      text: "Customize Your Post by Emoji",
      image: tutorial.tut1,
    },
    {
      title: "Tutorial",
      text: "Customize Your Post by Activity",
      image: tutorial.tut2,
    },
    { title: "Tutorial", text: "Discover Tab", image: tutorial.tut3 },
    { title: "Tutorial", text: "Reprise Button", image: tutorial.tut4 },
  ];

  const renderItem = ({ item, index }) => (
    <View style={styles.slide}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
      <Image source={item.image} style={styles.image} />
      {index === data.length - 1 && (
        <TouchableOpacity
          onPress={() => navigation.navigate("Home", { userName })}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Finish Tutorial</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.8}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
  image: {
    width: 300,
    height: 500,
    // marginBottom: 5,
  },
  paginationContainer: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#44AA99",
    marginHorizontal: 4,
  },
  inactiveDotStyle: {
    backgroundColor: "gray",
  },
  button: {
    backgroundColor: "#44AA99",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default TutorialScreen;
