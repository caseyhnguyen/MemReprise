import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
} from "react-native";
import { colors } from "../assets/Themes/colors";
import { tracks } from '../app/_data.js';


const Hero = (props) => {
    let hero = tracks[Math.floor(Math.random() * tracks.length)];
    return (
        <View style={styles.heroContainer}>
            <View style={styles.row}>
                <View style={styles.col}>
                    <Text style={[styles.headerNum]}>
                        5
                    </Text>
                    <Text style={[styles.header3]}>
                        tapes opened,
                    </Text>
                    <Text style={[styles.headerNum]}>
                        3
                    </Text>
                    <Text style={[styles.header3]}>
                        tapes sent.
                    </Text>
                </View>
                <View style={styles.col}>
                    <Image src={hero.imageUrl} style={styles.heroImg} />
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
        marginTop: 40
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start', // if you want to fill rows left to right
        backgroundColor: colors.darkBlue,
        padding: 20
        
    },
    item: {
        width: '50%' // is 50% of container width
    },
    headerNum: {
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
        fontSize: 20,
        alignItems: "center",
        justifyContent: "center",
        // alignSelf: "center",
        textTransform: "uppercase",
        letterSpacing: 1.2,
    },
    heroImg: {
        width: 150,
        height: 150,
        marginLeft: 20,
        marginTop: 15
    }
  });
  
  export default Hero;
  