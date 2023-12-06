import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const postStyles = (dimensions) =>
  StyleSheet.create({
    outerContainer: {
      // alignItems: "center",
      justifyContent: "flex-start",
      flexDirection: "column",
      backgroundColor: colors.offWhite50,
      borderRadius: 10,
      width: dimensions.windowWidth * 0.9,
      height: dimensions.rowWidth * 1.25,
    },

    expandedOuterContainer: {
      justifyContent: "flex-start",
      flexDirection: "column",
      backgroundColor: colors.offWhite50,
      borderRadius: 10,
      width: "97.5%",
      height: "95%",
    }, 
    captionContainer: {
      paddingLeft: 5
    }, 
    metaData: {
      margin: 10,
      paddingTop: 10,
      paddingLeft: 5,
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      width: "90%"
    },
    time: { marginLeft: "auto" },

    profilePic: {
      width: dimensions.windowWidth * 0.15,
      height: dimensions.windowWidth * 0.15,
      borderRadius: (dimensions.windowWidth * 0.15) / 2,
    },
    postContainer: {
      alignItems: "flex-start",
      justifyContent: "space-between",
      flexDirection: "row",
      borderRadius: 10,
      width: "90%",
      height: "90%",
      gap: 15,
    },
    albumCover: {
      width: dimensions.windowWidth * 0.5, // Adjust size as needed
      height: dimensions.windowWidth * 0.5, // Adjust size as needed
      marginBottom: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      color: "black", // Adjust color as needed
    },
    artist: {
      fontSize: 12,
      color: "black", // Adjust color as needed
    },

    caption: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      marginTop: 10,
      marginBottom: 10,
      width: "75%",
    },

    songInfo: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      paddingLeft: 30,
      paddingTop: 20,
      width: "75%",
    },
    selectionGrid: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: dimensions.totalGapSize,
    },
    postInProgress: {},
    boldText: {
      fontSize: 15,
      fontWeight: "bold",
      alignContent: "center",
    },
    smallImage: {
      margin: 5,
      width: dimensions.windowWidth * 0.175,
      height: dimensions.windowWidth * 0.175,
    },
    smallText: {
      fontSize: 12,
      color: colors.darkGray,
      paddingBottom: "2%",
    },
    smallSelectionCol: {
      alignItems: "center",
      flexDirection: "column",
    },
    // buttonRow: {
    //   alignItems: "center",
    //   flexDirection: "row",
    //   justifyContent: "space-between",
    //   width: "96%",
    //   paddingLeft: 20,
    // },
    subHeader: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors.offWhite,
      paddingBottom: 5,
    },
    input: {
      height: 40,
      marginTop: 12,
      marginBottom: 50,
      borderTopColor: colors.darkGray,
      paddingLeft: 20,
      width: "70%",
    },
    footer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "2.5%",
      paddingTop: "10.5%",
    },
    postButton: {
      // Adjust the post button styles
      backgroundColor: colors.offWhite75, // Replace with your button color
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
      width: "20%", // Adjust the width as needed
      paddingVertical: 12, // Adjust the padding as needed
    },
    postButtonText: {
      // Adjust the post button text styles
      color: colors.darkGray,
      fontSize: 16,
      fontWeight: "bold",
    },
  });