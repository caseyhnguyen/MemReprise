import React, { useCallback, useEffect } from "react";
import {
    Text,
    StyleSheet,
    View,
    Image,
} from "react-native";
import { colors } from "../assets/Themes/colors";
import { tracks } from '../app/_data.js';
import { supabase } from "../utils/supabaseClient";


const Hero = (props) => {
    console.log(props);
    let hero = tracks[Math.floor(Math.random() * tracks.length)];

    //LOOK HERE!!! this is my function that i'm trying to use to get a randomUrl
    const getCount = useCallback(async () => {
        try {
          let query = supabase
            .from("mixtapes_received")
            .select("*")
            .order("created_at", { ascending: false }); // Ensure default ordering is from most recent to oldest
          
          query = query.order("created_at", { ascending: false });
          // console.log(query);
          
          const { data, error } = await query;
          if (error) throw error;

        let randomUrl = data[Math.floor(Math.random() * data.length)].imageUrl;
    
        } catch (error) {
          console.error("Error filtering posts:", error);
        } finally {
        }
        return randomUrl;
      }, []);

      useEffect(() => {
        getCount();
      }, [getCount]);

    return (
        <View style={styles.heroContainer}>
            <View style={styles.row}>
                <View style={styles.col}>
                    <Text style={[styles.headerNum]}>
                        5
                    </Text>
                    <Text style={[styles.header3]}>
                        tapes received.
                    </Text>
                    {/* <Text style={[styles.headerNum]}>
                        3
                    </Text> */}
                    <Text style={[styles.header3]}>
                        Check them out!
                    </Text>
                </View>
                <View style={styles.col}>
                    {/* LOOK HERE!!! random url should go into source */}
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
        
    },
    row: {
        // flexDirection: "column",
    justifyContent: "center",
    // alignItems: "flex-start",
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
        marginTop: 15
    }
});

export default Hero;
