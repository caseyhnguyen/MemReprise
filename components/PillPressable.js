import React from "react";
import {
    Text,
    Image,
    Pressable,
    StyleSheet,
} from "react-native";
import images from "../assets/Images/images";
import { colors } from "../assets/Themes/colors";

// const PillPressable = ({ text, isSpotify, }) => {
const PillPressable = (props) => {
    // let isSpotify = props.isSpotify;
    let text = "" + props.text;
    return (
        <Pressable
            style={[styles.button,
            props.isSpotify ? styles.buttonSpotifyColor : styles.buttonNormalColor,
            props.muted && styles.discourageddButton,
            ]}

            onPress={props.onPress}
            // disabled={props.isLoading}
            disabled={((props.isSpotify && props.isLoading) ? props.isLoading : false)}
            key={props.key}
        >
            {(props.isSpotify && !props.token) && (
                <Image
                    source={images.spotify}
                    style={[styles.spotifyIcon, props.isLoading && styles.disabledIcon]}
                />
            )}
            <Text style={styles.buttonText}>
                {!props.isSpotify ? props.text :
                    props.token ? "Refresh song history" : "Get recent songs from Spotify"}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 8,
        marginBottom: 8,
    },
    buttonSpotifyColor: {
        backgroundColor: colors.spotify,
        paddingHorizontal: 20,
        paddingVertical: 11,
    },
    buttonNormalColor: {
        backgroundColor: colors.pink,
        paddingHorizontal: 45,
        paddingVertical: 11,
    },
    discourageddButton: {
        backgroundColor: colors.darkGray,
        paddingHorizontal: 45,
        paddingVertical: 11,
    },
    buttonText: {
        // textTransform: "uppercase",
        color: colors.black,
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    spotifyIcon: {
        marginRight: 10,
        width: 24,
        height: 24,
    },
});

export default PillPressable;
