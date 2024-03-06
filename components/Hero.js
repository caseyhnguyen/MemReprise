import React from "react";
import {
  Text,
  StyleSheet,
  View,
} from "react-native";
import { colors } from "../assets/Themes/colors";

const Hero = (props) => {
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
        fontSize: 25,
        alignItems: "center",
        justifyContent: "center",
        // alignSelf: "center",
        textTransform: "uppercase",
        letterSpacing: 1.2,
    },
  });
  
  export default Hero;
  